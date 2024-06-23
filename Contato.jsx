function Contato() {
    return ( 
        <div>
            <h1 className="text-xl font-medium flex justify-center m-4 ">Entre em contato conosco!</h1>
            <input type="text" placeholder="Nome" className="rounded-md text-lg ml-[420px] mb-8 pr-4 pl-1 pt-1 pb-1"/>
            <input type="email" placeholder="Email" className="rounded-md text-lg m-4 pr-4 pl-1 pt-1 pb-1" /><br />
            <input type="text" placeholder="O que podemos te ajudar" className="rounded-md text-sm ml-[420px] mb-6 pr-[299px] pl-1 pt-1 pb-20" /><br />
            <button className="bg-secondary-thompson p-2 pr-6 pl-6 ml-[605px] mt-4 rounded-md ">Enviar</button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
     );
}

export default Contato;