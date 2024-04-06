export const MagicEdenWallets = ({
  setSelected
}: {
  setSelected: (selected: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="col-span-4 grid grid-cols-4 gap-4">
        <div
          onClick={() => setSelected('phantom')}
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/logo-phantom.svg" alt="Phantom icon" className='h-10 mr-3'/>
          <p>Phantom (recommended)</p>
        </div>
        <div
          onClick={() => setSelected('backpack')}
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/logo-backpack.png" alt="Phantom icon" className=' h-10 mr-3'/>
          <p>Backpack</p>
        </div>
        <div
          onClick={() => setSelected('solflare')}
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/logo-solflare.svg" alt="Solflare icon" className='h-10 mr-3'/>
          <p>Solflare</p>
        </div>
      </div>
    </div>
  );
}
