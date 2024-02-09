const Pricing = () => {
  return (
    <div className="container gap">
      <h3 className="text-black">Cena regularna (od 29.02.2024)</h3>
      <p className="price redAccent">2540zł</p>
      <h3 className="text-black">Cena w przedsprzedaży</h3>
      <p className="priceGrand greenAccent">1850zł</p>
      <h3 className="text-black">
        Możesz oszczędzić <span className="greenAccent">690zł</span>!
      </h3>
      <div>
        <p className="accent">
          Dodatkowo, jeśli przyjedziecie we dwójkę otrzymacie
        </p>
        <p className="text-primary greenAccent">10% zniżki</p>
      </div>
      <h3 className="text-black">Dostępnych jest tylko 20 miejsc!</h3>
    </div>
  );
};

export default Pricing;
