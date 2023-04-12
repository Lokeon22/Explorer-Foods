import { useState } from "react";
import pix from "../../assets/icons/pix.svg";
import creditcard from "../../assets/icons/creditcard.svg";
import qrcode from "../../assets/icons/qrcode.svg";
import { Label } from "../Label";

export const PaymentPixCard = () => {
  const [pixcard, setPixcard] = useState(true);
  const [creditdetails, setCreditdetails] = useState({
    cartao: "",
    validate: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.replace(/\D/g, "");
    setCreditdetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h2 className="text-3xl mb-8">Pagamento</h2>
      <section className="font-Roboto font-normal flex justify-center items-center">
        <div
          className="w-full lg:w-64 flex justify-center items-center gap-2 px-4 py-6 cursor-pointer"
          style={{
            border: pixcard ? "1px solid #222d35" : "none",
            backgroundColor: pixcard ? "#0d161b" : "transparent",
          }}
          onClick={() => setPixcard(!pixcard)}
        >
          <img src={pix} className="w-6 h-6" />
          <h2>PIX</h2>
        </div>
        <div
          className="w-full lg:w-64 flex justify-center items-center gap-2 px-4 py-6 cursor-pointer"
          style={{
            border: pixcard ? "none" : "1px solid #222d35",
            backgroundColor: pixcard ? "transparent" : "#0d161b",
          }}
          onClick={() => setPixcard(!pixcard)}
        >
          <img src={creditcard} className="w-6 h-6" />
          <h2>Crédito</h2>
        </div>
      </section>
      <div className="flex items-center justify-center mt-12">
        <img
          src={qrcode}
          style={
            pixcard ? { width: "270px", height: "270px" } : { display: "none" }
          }
        />
        <form
          style={pixcard ? { display: "none" } : { display: "block" }}
          className="w-full lg:w-auto grid grid-cols-3 font-Roboto text-[#C4C4CC]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="col-span-1 flex flex-col mb-9">
            <Label id="numerocartao" text="Número do cartão" />
            <input
              id="numerocartao"
              type="text"
              name="cartao"
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              required
              value={creditdetails.cartao
                .replace(/\s?/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
              className="py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none appearance-none"
              onChange={handleChange}
            />
          </div>
          <section className="col-span-1 flex justify-center items-center gap-5 text-[#C4C4CC]">
            <div className="flex flex-col">
              <Label id="validade" text="Validade" />
              <input
                id="validade"
                type="text"
                name="validate"
                value={creditdetails.validate.replace(/^(\d{2})(\d)/, "$1/$2")}
                required
                placeholder="07/25"
                maxLength={5}
                className="w-full lg:w-auto py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <Label id="cvc" text="CVC" />
              <input
                id="cvc"
                type="text"
                name="cvc"
                value={creditdetails.cvc}
                required
                maxLength={3}
                placeholder="000"
                className="w-full lg:w-auto py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none"
                onChange={handleChange}
              />
            </div>
          </section>
          <button
            type="submit"
            className="bg-[#750310] text-white hover:text-[#C4C4CC] col-span-1 w-full py-3 px-4 mt-9 rounded-md hover:bg-[#66030f] hover:duration-300"
          >
            Finalizar pagamento
          </button>
        </form>
      </div>
    </>
  );
};
