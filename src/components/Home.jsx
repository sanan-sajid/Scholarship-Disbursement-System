import React from 'react';
import { Phone, Mail } from 'lucide-react';

const SVMCMPortal = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Quote Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 sm:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="md:w-2/3">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic mb-4 leading-tight">
                                    "Life is the most difficult exam. Many people fail because they try to copy others. Not realizing that everyone has a different question paper."
                                </h2>
                                <p className="text-xl sm:text-2xl font-light">- Dr. A.P.J. Abdul Kalam</p>
                            </div>
                            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                                <img
                                    src="https://i.pinimg.com/564x/9a/e3/31/9ae331d904827e73725ff184d3942405.jpg"
                                    alt="Swami Vivekananda"
                                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 lg:p-12">
                        {/* Welcome Heading */}
                        <h1 className="text-center text-green-700 font-bold text-4xl sm:text-5xl mb-12">
                            Welcome To PMSSS Portal
                        </h1>
                        {/* Introduction Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Objective</h2>
                            <p className="text-gray-700 text-xl leading-relaxed">
                                Develop a fully digital system for the Prime Minister's Special Scholarship Scheme (PMSSS) to streamline document submission, verification, and disbursement.
                            </p>
                        </section>

                        {/* Key Components */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Components</h2>
                            <ul className="space-y-4 text-gray-700 text-lg">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span><strong>Automated Workflow:</strong> Automatic routing of documents to SAG Bureau and Finance Bureau for verification and payment.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span><strong>Real-Time Tracking & Notification:</strong> Monitor submission progress and receive instant updates on verification and payment status, along with automated alerts for document verification and scholarship eligibility.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span><strong>Secure Verification System & Data Privacy:</strong> Employs AI-driven mechanisms to authenticate student identities and verify document legitimacy while ensuring compliance with data privacy laws and safeguarding personal information through robust security protocols.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Innovation & Uniqueness */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Innovation & Uniqueness</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Reduces Processing Time</h3>
                                    <p className="text-gray-700">By automating the entire verification and disbursement workflow, the system drastically cuts processing delays, ensuring faster scholarship approvals and disbursements.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-green-800">Eliminates Paperwork</h3>
                                    <p className="text-gray-700">Transitioning to a paperless model not only helps in reducing the environmental footprint but also mitigates risks related to document loss, misplacement, or physical damage.</p>
                                </div>
                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-yellow-800">Improves Transparency</h3>
                                    <p className="text-gray-700">The system allows students to track their documents in real-time, providing visibility into each step of the approval process and reducing uncertainty and anxiety about scholarship status.</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-purple-800">Streamlines Communication</h3>
                                    <p className="text-gray-700">Automated notifications keep students informed about updates and changes, reducing the need for frequent follow-ups and inquiries, thus saving time for both students and administrators.</p>
                                </div>
                            </div>
                        </section>

                        {/* Feasibility Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <h3 className="text-2xl font-bold mb-4">Technical Feasibility</h3>
                                <p className="text-lg">
                                    The project is feasible using technologies like HTML, CSS, JavaScript, Django, along with SQLite for secure databases. Deployment on government servers ensures full control over data.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <h3 className="text-2xl font-bold mb-4">Operational Feasibility</h3>
                                <p className="text-lg">
                                    The increasing familiarity of students with digital platforms and the potential for collaboration with government agencies suggest a high likelihood of successful adoption and integration with existing scholarship management systems.
                                </p>
                            </div>
                        </div>

                        {/* Potential Challenges */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Potential Challenges</h2>
                            <div className="bg-red-50 p-6 rounded-lg">
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li className="flex items-center">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Resistance to change</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Data privacy concerns</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Infrastructure limitations</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Integration issues</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Strategies for Overcoming Challenges */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Strategies for Overcoming Challenges</h2>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2 text-green-800">User Training and Support</h3>
                                    <p className="text-gray-700">Extensive training, video tutorials, and 24/7 customer support will ensure a smooth transition and user assistance.</p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Enhanced Security Measures</h3>
                                    <p className="text-gray-700">Implement end-to-end encryption, regular audits, and multi-factor authentication to protect sensitive student data and ensure compliance.</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-800">Offline Capabilities and Inclusivity</h3>
                                    <p className="text-gray-700">Offline form completion with automatic syncing and a mobile-friendly app will address internet access and digital literacy issues.</p>
                                </div>
                            </div>
                        </section>

                        {/* Additional Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <h3 className="text-2xl font-bold mb-4">About PMSSS</h3>
                                <p className="text-lg">
                                    Do you know about PMSSS Scholarship? This section leads you to know about the scheme and process for applying to the scheme.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <h3 className="text-2xl font-bold mb-4">Grievance Registration</h3>
                                <p className="text-lg">
                                    Are you facing any trouble to get benefit from PMSSS? You can register any kind of grievance from this section.
                                </p>
                            </div>
                        </div>

                        {/* Footer with Contact Information */}
                        <footer className="border-t pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <p className="text-gray-600 text-lg">&copy; {new Date().getFullYear()} PMSSS Portal. All rights reserved.</p>
                                <div className="flex space-x-6 mt-4 md:mt-0">
                                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300">
                                        <Phone className="mr-2 w-6 h-6" />
                                        <span className="text-lg">+1 (234) 567-890</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300">
                                        <Mail className="mr-2 w-6 h-6" />
                                        <span className="text-lg">support@pmsss.gov</span>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SVMCMPortal;