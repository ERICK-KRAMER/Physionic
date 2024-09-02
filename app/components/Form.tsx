export function Form() {
    return (
        <form className="bg-white rounded-md p-4 space-y-5">
            <h1 className="text-3xl font-bold text-center px-4 py-4">Book Appointment</h1>
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-bold text-sm">Name *</label>
                <input type="text" name="name" id="name" className="border border-gray-300 w-full rounded-md px-2 py-3 outline-none" placeholder="Full name" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-bold text-sm">Email address *</label>
                <input type="text" name="email" id="email" className="border border-gray-300 w-full rounded-md px-2 py-3 outline-none" placeholder="example@gmail.com  " />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="departament" className="font-bold text-sm">Departement *</label>
                <select name="departament" id="departament" className="border border-gray-300 w-full rounded-md px-2 py-3 outline-none">
                    <option value="Cardiology">Please Select</option>
                </select>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="time" className="font-bold text-sm">Time *</label>
                <select name="time" id="time" className="border border-gray-300 w-full rounded-md px-2 py-3 outline-none">
                    <option value="default">4:00 Available</option>
                </select>
            </div>
            <button className="bg-sky-400 px-3 py-3 text-center gap-4 rounded-md text-white font-medium w-full">Book Appointment</button>
        </form>
    )
}