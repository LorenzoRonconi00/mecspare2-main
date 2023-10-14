'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useRegisterModal from "../../../app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import {toast} from "react-hot-toast";
import {FcGoogle} from "react-icons/fc";
import Button from "../Button";
import {signIn} from "next-auth/react";
import LoginModal from "./LoginModal";
import useLoginModal from "../../hooks/useLoginModal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState('azienda');
    const loginModal = useLoginModal();

    const toggleProviderAzienda = () => {
        setVariant('azienda');
    }

    const toggleProviderPrivato = () => {
        setVariant('privato');
    }

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('Qualcosa é andato storto');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const subtitleSwitch = (
        <div className="flex flex-row justify-center">
            <p
            onClick={toggleProviderAzienda}
            className={variant === 'azienda' ? 'underline text-sky-400 cursor-pointer mr-8' : 'hover:underline cursor-pointer mr-8'}
            >
                Azienda
            </p>
            <p
            onClick={toggleProviderPrivato}
            className={variant === 'privato' ? 'underline text-sky-400 cursor-pointer' : 'hover:underline cursor-pointer'}
            >
                Privato
            </p>
        </div>
    )

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
            title="Benvenuto in Mec Spare"
            subtitle={subtitleSwitch}
            />
            <Input 
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input 
            id="name"
            label="Nome"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input 
            id="password"
            type="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
    )

    const footerNoProvider = (
        <div
        className="flex flex-col gap-4 mt-3"
        >
            <div
            className="text-neutral-500 text-center mt-4 font-light"
            >
                <div
                className="justify-center flex flex-row items-center gap-2"
                >
                    <div>
                        Possiedi giá un account?
                    </div>
                    <div
                    onClick={registerModal.onClose}
                    className=" cursor-pointer hover:underline"
                    >
                        Accedi
                    </div>
                </div>
            </div>
        </div>
    )

    const footerProvider = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
            outline
            label="Continua con Google"
            icon={FcGoogle}
            onClick={() => signIn('google')}
            />
            <div
            className="text-neutral-500 text-center mt-4 font-light"
            >
                <div
                className="justify-center flex flex-row items-center gap-2"
                >
                    <div>
                        Possiedi giá un account?
                    </div>
                    <div
                    onClick={registerModal.onClose}
                    className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Accedi
                    </div>
                </div>
            </div>
        </div>
    )

    return ( 
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Registrazione"
        actionLabel="Continua"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={variant === 'azienda' ? footerNoProvider : footerProvider}
        />
     );
}
 
export default RegisterModal;
