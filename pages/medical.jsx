
function medical(){


  return (
    <form class="bg-white shadow-md h-full rounded-md p-8 mt-[12vh]">
        <div>
          <label for="firstName" class="block text-gray-700 font-bold mb-2">First Name</label>
          <input type="text" id="firstName" name="firstName" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div>
          <label for="lastName" class="block text-gray-700 font-bold mb-2">Last Name</label>
          <input type="text" id="lastName" name="lastName" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div>
          <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div>
          <label for="gender" class="block text-gray-700 font-bold mb-2">Gender</label>
          <select id="gender" name="gender" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select> 
        </div>
        <div>
          <label for="age" class="block text-gray-700 font-bold mb-2">Age</label>
          <input type="number" id="age" name="age" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div>
          <label for="height" class="block text-gray-700 font-bold mb-2">Height</label>
          <input type="text" id="height" name="height" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <button className="border-2 bg-orange-200 px-[2rem] mt-2" type="submit">Submit</button>
  </form>
  )
  }
export default medical;