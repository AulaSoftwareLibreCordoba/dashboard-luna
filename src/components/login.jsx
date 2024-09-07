import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const redirectButton = () => {
    window.location.href = '/inicio';
};

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        redirectButton();
    };

    // Lo estoy haciendo sin la lógica ni nada, es simplemente para que a la hora de que entremos ya tengamos un login, y podamos entrar al 
    // dashboard, ya faltaría conectarlo a la API de login y listo.

    return (
        <div>
            <header className="fixed hidden w-full md:fixed md:block">
                <ul className="flex items-center justify-between">
                    <li className="m-6 text-xs">
                        <p className="text-blue-900">
                            Diseñado y desplegado por el Aula de Software Libre.
                        </p>
                    </li>
                    <li className="flex">
                        <li className="m-6">
                            <a href="https://www.linkedin.com/company/aula-de-software-libre-lope-de-vega/">
                                <button className="transition-all duration-500 bg-[#086b9c] border-transparent hover:bg-white size-9">
                                    <FontAwesomeIcon icon={faLinkedin} className="items-center text-white transition-all duration-500 hover:text-[#086b9c] size-8"/>
                                </button>
                            </a>
                        </li>
                        <li className="m-6">
                            <a href="https://github.com/AulaSoftwareLibreCordoba">
                                <button className="transition-all duration-500 bg-black border-transparent rounded-full hover:bg-white size-9">
                                    <FontAwesomeIcon icon={faGithub} className="items-center text-white transition-all duration-500 hover:text-black size-8"/>
                                </button>
                            </a>
                        </li>
                    </li>
                </ul>
            </header>

            <div className="flex items-center justify-center h-screen bg-[url('https://wallpapercave.com/wp/wp8063327.jpg')] bg-cover">
                <div className="w-full max-w-md p-6 rounded-lg">
                    <div className="text-xl font-bold text-center mb-14 text-blue-950 md:text-2xl lg:text-3xl">
                        <FontAwesomeIcon icon={faChartPie} className="size-12"/>
                        <h1>LUNA GESTIÓN</h1>
                    </div>

                    <form className="mx-auto" 
                          onSubmit={handleSubmit}
                    >
                        <div className="m-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700 md:text-base">
                                Nombre de usuario:
                            </label>
                            <input className="w-full p-1 bg-transparent border border-blue-900 rounded-md md:p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
                        </div>

                        <div className="m-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700 md:text-base">
                                Contraseña:
                            </label>
                            <input className="w-full p-1 bg-transparent border border-blue-900 rounded-md md:p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
                        </div>

                        <button
                            type="submit"
                            className="mt-9 border-transparent relative flex items-center justify-center w-[13rem] h-12 p-1 mx-auto overflow-hidden font-extrabold rounded-md cursor-pointer md:w-64 md:h-16 md:p-2 group text-sky-50 bg-sky-800"
                        >
                            <div className="absolute z-10 duration-500 rounded-full w-30 h-30 md:w-40 md:h-40 top-1 right-16 group-hover:top-6 group-hover:-right-6 group-hover:scale-150 group-hover:opacity-50 bg-sky-900"></div>
                            <div className="absolute z-10 w-24 h-24 duration-500 rounded-full md:w-30 md:h-30 top-1 right-16 group-hover:top-6 group-hover:-right-6 group-hover:scale-150 group-hover:opacity-50 bg-sky-800"></div>
                            <div className="absolute z-10 w-20 h-20 duration-500 rounded-full md:w-28 md:h-28 top-1 right-16 group-hover:top-6 group-hover:-right-6 group-hover:scale-150 group-hover:opacity-50 bg-sky-700"></div>
                            <div className="absolute z-10 duration-500 rounded-full top-1 right-16 group-hover:top-6 group-hover:-right-6 w-14 h-14 group-hover:scale-150 group-hover:opacity-50 bg-sky-600"></div>
                            <p className="z-10 text-sm font-bold md:text-lg">
                                Iniciar sesión
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
