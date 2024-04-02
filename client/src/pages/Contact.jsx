


import React from "react"

const ContactUs = () => { 
 
      return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contacto</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Información de Contacto</h2>
                    <p><strong>Teléfono:</strong> +1-234-567-890</p>
                    <p><strong>Ubicación:</strong> Dirección de tu empresa</p>
                    <p><strong>Correo Electrónico:</strong> info@tudominio.com</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Redes Sociales</h2>
                    <ul>
                        <li><a href="#" className="text-blue-500 hover:underline">Facebook</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Twitter</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <form className="mt-8">
                <label className="block mb-2">Nombre:</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2 mb-4" />

                <label className="block mb-2">Correo Electrónico:</label>
                <input type="email" className="w-full border border-gray-300 rounded-md p-2 mb-4" />

                <label className="block mb-2">Mensaje:</label>
                <textarea className="w-full border border-gray-300 rounded-md p-2 mb-4"></textarea>

                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Enviar Mensaje</button>
            </form>
        </div>
  
  );}

export default ContactUs