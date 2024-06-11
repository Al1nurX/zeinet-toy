export default function Formik() {
  return (
    <>
      <div className="font-georgia flex flex-col text-center">
        <div className="text-xl uppercase my-5 text-[#98761A]">
          тойға келетініңізді <br /> растауыңызды <br /> сұраймыз!
        </div>
        <div className="mt-2 flex w-full flex-col items-center">
          <input
            type="text"
            placeholder="Есіміңіз"
            className="h-10 w-[80%] rounded-3xl bg-[#FAFAFA] px-5 text-lg outline-none"
          />
          <div className="mt-3 w-[80%] text-left text-lg">
            Тойға келесіз бе?
          </div>
          <div className="mt-3 flex w-[80%] items-center justify-start">
            <input type="radio" name="attendance" className="h-5 w-5" />
            <div className="ml-2">ӘРИНЕ, КЕЛЕМІН</div>
          </div>
          <div className="mt-3 flex w-[80%] items-center justify-start">
            <input type="radio" name="attendance" className="h-5 w-5" />
            <div className="ml-2">ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН</div>
          </div>
          <button className="mt-4 h-10 w-[80%] rounded-3xl bg-[#98761A] px-6 text-lg text-[#FFFFFF] drop-shadow-lg">
            Жіберу
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center my-10 text-2xl text-[#090909]">
        Келіңіздер, <br /> салтанатты тоймыздың қадірлі <br /> қонағы
        болыңыздар!
      </div>
    </>
  );
}
