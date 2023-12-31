



import tempImage from "../assets/tempImage.jpg";
import axios from "axios";
import Slider4 from "../assets/aboutuslogo.png";


const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const formDataObject = {};

  formData.forEach((value, key) => {
    if (value === "True" || value === "False") {
      formDataObject[key] = Boolean(value);
    } else formDataObject[key] = value;
  });
  console.log(formDataObject);

  try {
    const response = await axios.post(
      "http://localhost:8000/api/todos",
      formDataObject
    );
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
};

const AboutSection = () => {
  return (
    <section class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-16 ">
    <div class="container mx-auto flex flex-col items-center justify-center space-y-8">
      {/* <h2 class="text-3xl font-semibold text-gray-800">About Us</h2> */}
      {/* <p class="text-gray-600 max-w-3xl text- center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ante vitae libero fringilla tristique.</p> */}
      
      {/* <!-- Team Members --> */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>         
           {/* <img src="team-member-1.jpg" alt="Team Member 1" class="w-full h-40 object-cover"/> */}
           <img src={Slider4} alt="Image 1" className="object-cover" />

</div>
        {/* first grid */}
        <div>
          <h1 class="py-2 hover:underline text-lg 	font-medium">Courses </h1> 
          <p>Bal sanskar shibir</p>
          <p>Science Of silence yoga</p>
          <p>Advance meditation course</p>
          <p>Sharwan nity sadhna</p>
          <p>High  Consciousness Sadhna</p>



        </div>
{/* second */}
        <div>
          
           <h1 class="py-2 hover:underline text-lg font-medium">Wisdom</h1> 
           <p>Blog</p>
           
          <p>Qoutes</p>
          <p>satsang</p>
          <p> spiritual vidos</p>
        
           
          
          
          <p>Pranayam</p>

          <p>meditation</p>
          {/* <p>Blog</p>
        <  <p>High  Consciousness Sadhna</p> */}
        </div>

{/* 3 */}
        <div>
          
           <h1 class="py-2 hover:underline text-lg font-medium ">Projects</h1> 
          <p>Clean India</p>
          <p>Tree plantation</p>
          <p>Gurupornima Program</p>

          <p>aarogy savrdhan</p>
          <p>Padyatra</p>
          <p>Wari</p>
        </div>
{/* 4 */}
        <div>
          
          <h1 class="py-2 hover:underline text-lg font-medium">Contact Us</h1> 
          <p>Kausthubh Row house 11,  surve no.19/2/1 ,sainager satavwadi hadpsar pune 411028.maharashtra india</p>
    
    
    <p class="py-2">+91 9850 7791 86
</p>

          <p >Bhaktishatkiyogfoundation@gmail.com</p> 
        </div>
        
        {/* 5 */}
        {/* <div class="p-2">social media</div> */}
        {/* <!-- Team Member 1 --> */}
        {/* <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="team-member-1.jpg" alt="Team Member 1" class="w-full h-40 object-cover"/>
          <div class="p-4">
            <h1 class="text-xl font-semibold text-gray-800">John Doe</h1>
            <p class="text-gray-600">Co-Founder</p>
            <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod faucibus quam, ut blandit ante. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div> */}
        
        {/* <!-- Team Member 2 --> */}
        {/* <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="team-member-2.jpg" alt="Team Member 2" class="w-full h-40 object-cover"/>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p class="text-gray-600">Designer</p>
            <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod faucibus quam, ut blandit ante. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div> */}
        
        {/* <!-- Team Member 3 --> */}

        {/* <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="team-member-3.jpg" alt="Team Member 3" class="w-full h-40 object-cover"/>
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Alex Johnson</h3>
            <p class="text-gray-600">Developer</p>
            <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod faucibus quam, ut blandit ante. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div> */}

      </div>
    </div>
  </section>
  

  );
};

export default AboutSection;




// import tempImage from "../assets/tempImage.jpg";
// import axios from "axios";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   const formDataObject = {};

//   formData.forEach((value, key) => {
//     if (value === "True" || value === "False") {
//       formDataObject[key] = Boolean(value);
//     } else formDataObject[key] = value;
//   });
//   console.log(formDataObject);

//   try {
//     const response = await axios.post(
//       "http://localhost:8000/api/todos",
//       formDataObject
//     );
//     console.log(response);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// const AboutSection = () => {
//   return (
//     <section className="relative about-section w-full py-[100px]">
//       <div className="pr-10">
//         {/* <div className="flex flex-wrap md:flex-nowrap items-center w-full gap-10">
//           <div className="w-full md:w-1/3 h-80">
//             <img
//               src={Guruji}
//               alt="image"
//               className="w-full h-full object-cover"
//             />
//           </div>

//         {/* <div className="text-black text-lg font-medium ialic text-justify mt-6">
       
//         </div> */}

//         <div className="grid md:grid-cols-[3fr,2fr]">
//           <div className="w-full h-[20rem] md:h-[30rem] xl:h-[50rem] bg-red-200 bg-kj">
//             {/* <img
//               src={tempImage}
//               alt="image"
//               className="w-full h-full object-cover"
//             /> */}
//           </div>
//           <div className="w-full text-gray-600 text-base font-normal mt-6 md:pl-20 md:pr-6 text-left px-8 md:px-0">
//             <div className="text-xl md:text-4xl text-gray-800 font-bold md:-ml-[35%] md:my-[10%] max-w-[30rem]">
//               <span className="text-gray-900">About Kishorji Jedhe </span>
//               <br /> Jedhe Guruji Kishor  is a great spiritual &
//               inspirational master.
//             </div>
//             <div className="text-xl">
//               <strong>The Beginning</strong> <br />
//               Born in 1962, in Western part of Maharashtra, He had graduated in
//               Agriculture science, by the age of twenty in 1982; he joined the
//               service at Agriculture Department. After 38 years of Government
//               Service, he retired on March 2020 as a Taluka Agriculture Officer.
//             </div>
//           </div>
//         </div>
//         <div className="text-gray-600 py-10 max-w-[1000px] mx-auto text-center font-normal tracking-wide text-[18px] leading-6">
//           {/* <div>
//             <big className="font-semibold"> About RSVK </big> <br /> Siddha
//             Samadhi Yoga Guruji Shri Rishi Prabhakar was the founder of Rishi
//             Samskruti Vidya Kendra a Public Charitable Trust. Guruji Rishi
//             Prabhakar was born on 1948 in independent India and lived along with
//             his family in the developing city of Bangalore. Guruji pursued his
//             graduation in Aeronautical Engineering at Bangalore University and
//             further pursued his masters in management at Western Ontario
//             University, Ottawa, Canada on a full scholarship, where he acquired
//             Canadian Citizenship. He was also a Computer scientist. Guruji has
//             developed many programs such as Siddha Samadhi Yoga(SSY), Kaya Kalpa
//             Kriya(KKK), Advance Meditation Course(AMC), Bhava Samadhi
//             Training(BST), Hundred Percent Memory(HMP, also known as RCRT),
//             Infant Siddha Program(ISP) and Inspirational Leadership in Rural
//             Development(ILRD) for the well being of humanity and made many
//             spiritual teachers across the country.
//             <div className="my-4">
//               Guruji Rishi Prabhakar ji is the founder of Siddha Samadhi Yoga.
//               SSY Stands for Siddha Samadhi Yoga, Science of Silence Yoga.
//               Siddha means ‘Something that is proven, Samadhi means a state in
//               which the intellect is equanimous and Yoga means union with one’s
//               higher self. The art of living life effortlessly is SSY.
//             </div> 
//           </div>*/}
//           <big className="font-semibold">SSY Journey</big> <br />
//           Guruji came into this stream in October 2003. He started his journey
//           as a Sadhak, with this Sevabhava as Sadhak, he inspired himself for
//           teacher training, Within a very short period of time he completed all
//           the Teacher Training Phases and started being and teaching knowledge
//           given by Guruji Shri Rushi Prabhakaraji. Now he is conducting Advance
//           Meditation Course (AMC) and blessed with Brahmopdeshak from Jan 2020.{" "}
//           <br /> <br />
//           <big className="font-semibold"> About Us </big> <br />
//           About Hadapsar Centre Vision <br />
//           The Spiritual Rebirth of Every Person. Raising human consciousness
//           through individual transformation. <br /> <br />
//           <big className="font-semibold"> Mission</big> <br />
//           We are committed to develop ‘Love & Peace’ in the world based on the
//           eternal, moral & spiritual values. <br /> <br />
//           <big className="font-semibold"> Core Values</big> <br />
//           Honesty, ethics, clear strategy, transparency, love, peace, quality
//           and commitment to cause.
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
