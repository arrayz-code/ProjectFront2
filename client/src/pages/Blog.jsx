import React, { useState } from 'react';

const Blog = () => {


  return (

<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Blog</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Cómo mejorar la productividad con tecnología móvil
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 20 de octubre de 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Nuevas tendencias en dispositivos inteligentes para el hogar
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 20 de octubre de 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Estrategias de marketing digital para empresas tecnológicas
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 25 de noviembre de 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Avances en inteligencia artificial y machine learning
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 30 de septiembre de 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Impacto de la realidad virtual en la industria del entretenimiento
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 13 de octubre de 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Tendencias emergentes en el desarrollo de aplicaciones móviles
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">Fecha: 20 de octubre de 2019</span>
                </div>
            </div>
        </div>
    </div>
</section>


  );
}

export default Blog;
