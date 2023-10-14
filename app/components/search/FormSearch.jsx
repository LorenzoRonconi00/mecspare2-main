"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { BsCarFrontFill } from "react-icons/bs";
import { ImInsertTemplate } from "react-icons/im";
import * as Realm from "realm-web";
import SearchResults from "./SearchResults";
import EmptyState from "./EmptyState";
import RicambiCard from "./RicambiCard";

const FormSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [ricambi, setRicambi] = useState([]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    
    async function initRealm() {
      const REALM_APP_ID = process.env.NEXT_PUBLIC_APP_ID
      const app = new Realm.App({id: REALM_APP_ID})
      const credentials = Realm.Credentials.anonymous();
      try{
        const user = await app.logIn(credentials);
        const search = await user.functions.search(searchParams.get("q"));
        setRicambi(()=>search);
        console.log(search);
      } catch (error) {
        console.error(error);
      }
    }
    if (searchParams.get("q")) {
      initRealm();
    }
  }, [searchParams.get("q")]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`${pathname}?${createQueryString("q", searchTerm)}`);
  };
  const [veicolo, setVeicolo] = useState("autovettura");

  const handleVeicoloChange = (event) => {
    setVeicolo(event.target.value);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen"
    >
      <h1 className="text-center font-bold md:text-[44px] text-[34px] mt-7">
        Cerca il tuo pezzo
      </h1>
      <div>
        <form className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3 relative"
        onSubmit={handleSubmit}>
          <select
            name="categories"
            id="categories"
            onChange={handleVeicoloChange}
            className="h-[40px] w-[150px] text-center cursor-pointer rounded-md mb-8 shadow-xl shadow-xl-up shadow-xl-sides bg-white text-black"
          >
            <option value="autovettura">Autovettura</option>
            <option value="camion">Camion</option>
            <option value="motociclo">Motocicli</option>
          </select>
          <input
            type="text"
            placeholder="Inserisci il nome del pezzo..."
            className="md:w-[520px] w-[300px] h-[40px] rounded-md text-center font-semibold focus:border-transparent mb-8 shadow-xl shadow-xl-up shadow-xl-sides
            bg-white text-black"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button
            className="bg-[#0068D7] text-white h-[40px] w-[150px] rounded-md hover:bg-[#4282d6] transition duration-250 font-medium focus:outline-none mb-8"
            type="submit"
          >
            Cerca
          </button>
          {/* Bordo inferiore dello spazio occupato da button, input e select */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] border-b-2 border-gray-500" />
        </form>
      </div>
      {!searchParams.get("q") ? (
         <div className="mt-14 flex flex-row justify-center">
         {/* cerca per autovettura */}
         <div className="m-1 mr-5 rounded-2xl justify-start w-96 border-4 border-orange-400 bg-white h-3/4">
           <div className="flex items-center justify-center ml-5 mt-5">
             <div>
               <BsCarFrontFill size={30} className="text-sky-700 mr-2" />
             </div>
             <h1 className="text-neutral-500 ml-5 font-bold text-[20px]">
               Puoi selezionare anche un {veicolo}
             </h1>
           </div>
           <div className="flex flex-col relative w-250 h-50 mt-5">
             <select
               name="marca"
               id="marca"
               className="h-[40px] w-[250px] ml-4 mb-3 cursor-pointer text-white font-semibold rounded-md bg-sky-800"
             >
               <option value="fiat" className="bg-white text-black font-medium">
                 Fiat
               </option>
               <option
                 value="mercedes"
                 className="bg-white text-black font-medium"
               >
                 Mercedes
               </option>
               <option value="audi" className="bg-white text-black font-medium">
                 Audi
               </option>
             </select>
             <select
               name="modello"
               id="modello"
               className="h-[40px] w-[250px] ml-4 cursor-pointer text-white font-semibold rounded-md mb-3 bg-sky-800"
             >
               <option value="fiat" className="bg-white text-black font-medium">
                 Fiat
               </option>
               <option
                 value="mercedes"
                 className="bg-white text-black font-medium"
               >
                 Mercedes
               </option>
               <option value="audi" className="bg-white text-black font-medium">
                 Audi
               </option>
             </select>
             <select
               name="marca-2"
               id="marca-2"
               className="h-[40px] w-[250px] ml-4 cursor-pointer text-white font-semibold rounded-md mb-3 bg-sky-800"
             >
               <option value="fiat" className="bg-white text-black font-medium">
                 Fiat
               </option>
               <option
                 value="mercedes"
                 className="bg-white text-black font-medium"
               >
                 Mercedes
               </option>
               <option value="audi" className="bg-white text-black font-medium">
                 Audi
               </option>
             </select>
             <button
               className="w-[250px] h-[40px] items-center justify-center bg-sky-500 text-white font-extrabold text-[20px] ml-4 mr-2 mb-5 mt-2 rounded-lg hover:bg-sky-400
             transition duration-150"
             >
               Cerca
             </button>
           </div>
         </div>
         {/* cerca per targa */}
         <div className="m-1 rounded-2xl justify-start w-96 border-4 border-orange-400 bg-white h-3/4">
           <div className="flex items-center justify-center ml-5 mt-5">
             <div>
               <ImInsertTemplate size={30} className="text-sky-700 mr-2" />
             </div>
             <h1 className="text-neutral-500 ml-5 font-bold text-[20px]">
               Puoi selezionare anche una targa
             </h1>
           </div>
           <div className="flex flex-col relative w-250 h-50 mt-5">
             <input
               type="text"
               placeholder="Inserisci il nome del pezzo..."
               className="md:w-[250px] w-[250px] h-[40px] rounded-md text-center font-semibold focus:border-transparent mb-4 bg-neutral-200 ml-4 mt-3"
             />
             <button
               className="w-[250px] h-[40px] items-center justify-center bg-sky-500 text-white font-extrabold text-[20px] ml-4 mr-2 mb-5 rounded-lg hover:bg-sky-400
             transition duration-150"
             >
               Cerca
             </button>
           </div>
         </div>
       </div>
      ) : (
        <div>
          {ricambi.length !== 0 ? (
            <div>
              {ricambi.map((ricambio) => {
                return (
                  <RicambiCard 
                  key={ricambio.id}
                  data={ricambio}
                  />
                )
              })}
            </div>
          ) : (
            <EmptyState showReset/>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default FormSearch;
