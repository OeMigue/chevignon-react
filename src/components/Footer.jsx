import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white p-8 pt-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h2 className="text-3xl font-bebas tracking-wide">Sobre nosotros</h2>
        <ul className="flex flex-col gap-4 pl-0 list-none">
          <li className="text-lg hover:text-white">
            <a
              href="https://www.chevignon.com.co/localizar-tiendas"
              target="_blank"
              className="text-white no-underline hover:text-white"
            >
              Encuentra tu tienda
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/nuestra-marca"
              target="_blank"
            >
              Historia de la marca
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/sitemap" target="_blank">
              Mapa del sitio
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Próximos eventos
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/cyber-days" target="_blank">
              CyberDays
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/sale" target="_blank">
              SALE
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/CM2025-registro"
              target="_blank"
            >
              Charms Bar
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bebas tracking-wide">Información</h2>
        <ul className="flex flex-col gap-4 pl-0 list-none">
          <li className="text-lg hover:text-white">
            <a
              href="https://www.chevignon.com.co/terminos-condiciones"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline hover:text-white"
            >
              Términos y condiciones
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/info/promociones"
              target="_blank"
            >
              Términos y condiciones de promociones
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/info/politica-de-cookies"
              target="_blank"
            >
              Política de Cookies
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/info/cambios-devoluciones">
              Política de Cambios y Devoluciones
            </a>
          </li>
          <li>
            <a
              href="https://www.magneto365.com/co/empresas/chevignon"
              target="_blank"
            >
              Trabaja con nosotros
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/distribuidores"
              target="_blank"
            >
              ¿Quieres ser distribuidor Chevignon?
            </a>
          </li>
          <li>
            <a
              href="https://www.chevignon.com.co/sobre-sitio/tratamiento-datos"
              target="_blank"
            >
              Tratamiento de datos personales
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bebas tracking-wide">
          Cambios y devoluciones
        </h2>
        <ul className="flex flex-col gap-4 pl-0 list-none">
          <li className="text-lg hover:text-white">
            <a
              href="https://www.chevignon.com.co/login?returnUrl=%2Faccount%23%2Fcambios-devoluciones"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline hover:text-white"
            >
              Gestiona tu cambio o devolución
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/ayuda-pqr" target="_blank">
              PQR y Otras solicitudes
            </a>
          </li>
          <li>
            <a href="https://www.chevignon.com.co/estado-pqrs" target="_blank">
              Estado de mi PQR
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bebas tracking-wide">
          Servicio al cliente
        </h2>
        <ul className="flex flex-col gap-4 pl-0 list-none">
          <li className="text-lg hover:text-white">
            <a
              href="https://api.whatsapp.com/send?phone=573225196168&text=Hola%20Chevignon,%20tengo%20una%20consulta"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline hover:text-white flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#40c351"
                  d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                  clipRule="evenodd"
                />
              </svg>
              Whatsapp
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white no-underline hover:text-white flex items-center gap-2"
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/phone-disconnected.png"
                alt="phone-disconnected"
              />
              Línea nacional: 01 8000 189002
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
