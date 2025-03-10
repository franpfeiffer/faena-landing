export default function EightContent() {
  return (
    <div className="w-full bg-[#F8F8F8] bg-center py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-black mb-6">CONTACT US</h1>

        {/* Phone Section */}
        <div className="flex items-center mb-6">
          <span className="text-[#FF7961] text-2xl mr-2">📞</span>
          <span className="text-lg font-semibold">(305) 987-3318</span>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">
                Name<span className="text-red-500">*</span>
              </label>
              <input type="text" required className="w-full mt-1 p-2 bg-[#F8F9FA] border border-gray-200 " />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Email<span className="text-red-500">*</span>
              </label>
              <input type="email" required className="w-full mt-1 p-2 bg-[#F8F9FA] border border-gray-200 " />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Phone<span className="text-red-500">*</span>
              </label>
              <input type="tel" required className="w-full mt-1 p-2 bg-[#F8F9FA] border border-gray-200 " />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Are you a broker?<span className="text-red-500">*</span>
            </label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="broker" value="yes" className="w-4 h-4" />
                <span className="ml-2 text-sm">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="broker" value="no" defaultChecked className="w-4 h-4" />
                <span className="ml-2 text-sm">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea className="w-full mt-1 p-2 bg-[#F8F9FA] border border-gray-200 min-h-[150px]" />
          </div>

          <button type="submit" className="px-6 py-2 bg-[#FF7961] hover:bg-[#ff6347] text-white text-sm">
            Submit
          </button>
        </form> 
      </div>
    </div>
  );
}

