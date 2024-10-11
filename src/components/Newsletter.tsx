import React, { useState } from 'react'
import { Send } from 'lucide-react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-gradient-to-r from-[#FF7F50] to-[#333333] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-xl mb-8">Suscríbete a nuestro newsletter para recibir las últimas novedades y ofertas exclusivas del mercado inmobiliario.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full sm:rounded-r-none mb-4 sm:mb-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
              required
            />
            <button
              type="submit"
              className="bg-[#FF7F50] text-white px-6 py-2 rounded-full sm:rounded-l-none hover:bg-[#FF6347] transition duration-300 flex items-center justify-center"
            >
              <span>Suscribirse</span>
              <Send className="ml-2 h-5 w-5 text-white" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
