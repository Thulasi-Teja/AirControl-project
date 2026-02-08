import React from 'react'

function FlightRoutes() {
  return (
    <div className='bg-slate-300 font-serif p-2'>
        <div className=' rounded-xl grid grid-cols-1 sm:grid-cols-1 
        justify-between items-center text-center sm:pl-4 mt-4 sm:w-[85%]'>
            <table className='mt-4 mb-6 lg:ml-10 ml-4 '>
                <thead className='font-bold border border-black'>
                    <tr className='border-b border-black'>
                        <td className='border border-black px-4 py- '>Flight no.</td>
                        <td className='border border-black px-4 py-2 '>Departure airport</td>
                        <td className='border border-black px-4 py-2 '>Arrival Airport</td>
                        <td className='border border-black px-4 py-2 '>Duration</td>
                    </tr>
                </thead>
                 <tr className='border-b border-black'>
                    <td className='border border-black px-4 py-2 '>836</td>
                    <td className='border border-black px-4 py-2 '>Ahmedabad(AMD)</td>
                    <td className='border border-black px-4 py-2 '>Navi Mumbai (NMI)</td>
                    <td className='border border-black px-4 py-2 '>1h 15m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>7247</td>
                        <td className='border border-black px-4 py-2 '>Ahmedabad(AMD)</td>
                        <td className='border border-black px-4 py-2 '>Nagpur (NAG)</td>
                        <td className='border border-black px-4 py-2 '>2h 5m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>1064</td>
                        <td className='border border-black px-4 py-2 '>Bangkok(BKK)</td>
                        <td className='border border-black px-4 py-2 '>New Delhi (DEL)</td>
                        <td className='border border-black px-4 py-2 '>4h 40m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>1815</td>
                        <td className='border border-black px-4 py-2 '>Mumbai(BOM)</td>
                        <td className='border border-black px-4 py-2 '>Almaty (ALA)</td>
                        <td className='border border-black px-4 py-2 '>6h 5m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>241</td>
                        <td className='border border-black px-4 py-2 '>Mumbai(BOM)</td>
                        <td className='border border-black px-4 py-2 '>Jaipur (JAI)</td>
                        <td className='border border-black px-4 py-2 '>1h 50m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>7924</td>
                        <td className='border border-black px-4 py-2 '>Kolkata(CCU)</td>
                        <td className='border border-black px-4 py-2 '>Chennai </td>
                        <td className='border border-black px-4 py-2 '>1h 15m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>861</td>
                        <td className='border border-black px-4 py-2 '>Coimbatore (CJB)</td>
                        <td className='border border-black px-4 py-2 '>Navi Mumbai (NMI)</td>
                        <td className='border border-black px-4 py-2 '>1h 50m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>907</td>
                        <td className='border border-black px-4 py-2 '>Kochi (COK)</td>
                        <td className='border border-black px-4 py-2 '>Navi Mumbai (NMI)</td>
                        <td className='border border-black px-4 py-2 '>1h 55m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>1063</td>
                        <td className='border border-black px-4 py-2 '>New Delhi(DEL)</td>
                        <td className='border border-black px-4 py-2 '> Bangkok (BKK)</td>
                        <td className='border border-black px-4 py-2 '>4h 15m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>884</td>
                        <td className='border border-black px-4 py-2 '>Hyderabad (HYD)</td>
                        <td className='border border-black px-4 py-2 '>Navi Mumbai (NMI)</td>
                        <td className='border border-black px-4 py-2 '>1h 30m</td>

                    </tr>
                    <tr>
                        <td className='border border-black px-4 py-2 '>5935</td>
                        <td className='border border-black px-4 py-2 '>Hyderabad (HYD)</td>
                        <td className='border border-black px-4 py-2 '>New Delhi </td>
                        <td className='border border-black px-4 py-2 '>2h 10m</td>

                    </tr>
            </table>
        </div>
    </div>
  )
}

export default FlightRoutes