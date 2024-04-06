import { ethers } from 'ethers';

export const EvmWallets = ({
                                   setSelected
                                 }: {
  setSelected: (selected: string) => void;
}) => {
  const onMetamask = () => {
    setSelected('metamask');
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="col-span-4 grid grid-cols-4 gap-4">
        <div
          onClick={ onMetamask }
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/logo-metamask.png" alt="Phantom icon" className='h-10 mr-3'/>
          <p>Metamask (Recommended)</p>
        </div>
        <div
          onClick={() => setSelected('coinbase')}
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/coinbase.png" alt="Phantom icon" className=' h-10 mr-3'/>
          <p>Coinbase</p>
        </div>
        <div
          onClick={() => setSelected('rabby')}
          className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
        >
          <img src="/images/logo-rabby.jpg" alt="Solflare icon" className='h-10 mr-3'/>
          <p>Rabby</p>
        </div>
      </div>
    </div>
  );
}
