import React from 'react';

export default function Document  () {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Side Menu */}
      <div className="w-1/4 h-full p-6 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="text-lg font-semibold mb-4">Document name</div>
          <a href="#" className="text-blue-600 mb-8 block">Go back</a>

          <div className="border-2 border-red-500 p-4 rounded-md mb-8">
            <div className="text-red-600 text-xl font-bold">Issues detected</div>
            <div className="text-red-600 text-4xl font-bold">35</div>
            <div className="text-gray-600 mt-2">
              The highlighted citations do not follow the appropriate guidelines for APA 7th edition citation format.
            </div>
            <div className="text-gray-600 mt-2">
              Red highlighted sources do not exist. Please make reference to valid sources.
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Citations found</div>
            <div className="text-4xl font-bold">65</div>
            <div className="text-gray-600 mt-2">
              All mentions of one or more sources. E.g. (Smith et al., 2020)
            </div>
          </div>
        </div>

        <button className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-md self-start">
          Start solving issues
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 h-full p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
          <div className="text-gray-800 text-sm">
            <p>
              strong as the integrity of the sources it draws upon. Citations are an important part of academic research, as they allow researchers to verify the sources of information and give credit to the original authors.
            </p>
            <p className="text-red-600 font-bold">(Adam & Adam, 1998)</p>
            <p>
              However, verifying citations can be a time-consuming and challenging task, especially for researchers who may not have specialized knowledge in this area. Though existing tools exist in relation to citation and referencing citations, there are no tools that automate the extraction and verification of cited sources. The exiting referencing managers do not have advanced features to handle the citation verification process.
            </p>
            <p className="text-red-600 font-bold">(Bridget & Al, 23)</p>
            <p>
              Moreover, most of these tools are not designed for use by researchers without specialized training. It is necessary to design an application that automates citation verification with little or no assistance. Such an application would make the verification process faster and easier, and help to improve the quality of academic research.
            </p>
          </div>

          <div className="mt-4 text-gray-800 text-sm">
            <h3 className="text-lg font-semibold">References</h3>
            <ul className="list-none">
              <li className="text-red-600 font-bold">
                Bosch, G. (2022, May 15). Improving research integrity: a framework for responsible science communication - BMC Research Notes. BMC Research Notes. Retrieved February 14, 2024, from https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-022-06065-5
              </li>
              <li>
                McKerr, N., & Boncan, J. (2021, August 25). The importance of research integrity. British Pharmacological Society. Retrieved February 14, 2024, from https://www.bps.ac.uk/publishing/pharmacology-matters/august-2021/the-importance-of-research-integrity
              </li>
              <li className="text-red-600 font-bold">
                Youvan, D. C. (2024, January 20). (PDF) Automating Integrity: Navigating the Future of AI in Academic Peer Review. ResearchGate. Retrieved February 14, 2024, from https://www.researchgate.net/publication/377526635_Automating_Integrity_Navigating_the_Future_of_AI_in_Academic_Peer_Review
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};