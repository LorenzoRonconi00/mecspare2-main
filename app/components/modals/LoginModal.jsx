'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useRegisterModal from "../../../app/hooks/useRegisterModal";
import useLoginModal from "../../../app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import {toast} from "react-hot-toast";
import {FcGoogle} from "react-icons/fc";
import Button from "../Button";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState('azienda');
    const router = useRouter();

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

        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);

            if(callback?.ok){
                toast.success('Accesso effettuato');
                router.refresh();
                loginModal.onClose();
            }

            if(callback?.error){
                toast.error(callback.error);
            }
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
            title="Bentornato in Mec Spare"
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
                        Non possiedi un account?
                    </div>
                    <div
                    onClick={registerModal.onOpen}
                    className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Registrati
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
                        Non possiedi un account?
                    </div>
                    <div
                    onClick={registerModal.onOpen}
                    className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Registrati
                    </div>
                </div>
            </div>
        </div>
    )

    return ( 
        <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Accedi"
        actionLabel="Continua"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={variant === 'azienda' ? footerNoProvider : footerProvider}
        />
     );
}
 
export default LoginModal;
