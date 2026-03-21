import { Phone } from "lucide-react";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function BirthCertificatePersonal(){
    const navigate = useNavigate();


    const [progress, setProgress] = useState([2,0,0,0])
    const [division, setDivisions] = useState("");
    const [subdivision, setSubdivisions] = useState("");
    const [region, setRegions] = useState("")

    const regionData = {
 Littoral: ["Wouri", "Nkam","Moungo","Sanaga-Maritime"],
 WEST:["Bamboutos","Koung-Nki","Mifi","Noun","Haut-plateaux","Haut-Nkam","NDE"],
ADAMAOUA:[ 
"Djérem",
"Faro-et-Déo",
"Mayo-Banyo",
"Mbéré",
"Vina"],
 FARNORTH:[
        "Diamaré",
"Logone-et-Chari",
"Mayo-Danay",
"Mayo-Kani",
"Mayo-Sava",
"Mayo-Tsanaga"],
NORTH:[
    "Bénoué",
"Faro",
"Mayo-Louti",
"Mayo-Rey"],
NORTHWEST:[
    "Boyo",
"Bui",
"Donga-Mantung",
"Menchum",
"Mezam",
"Momo",
"Ngoketunjia"
        ],
EAST:[
    "Boumba-et-Ngoko",
"Haut-Nyong",
"Kadey",
"Lom-et-Djérem"],
SOUTHWEST:[
   " Fako",
"Koupé-Manengouba",
"Lebialem",
"Manyu",
"Meme",
"Ndian"],
SOUTH:[
    "Dja-et-Lobo",
"Mvila",
"Océan",
"Vallée-du-Ntem"],
CENTRE: ["Mfoundi", "Nyong-et-Kelle","Mbam et kim","Mbam et Inobou","Lekié","Haute-Sanaga","Nyong-et-Soo","Mefou-et Afamba","Nyong-et-MFoumou"],
    }

const divisionData = {
Moungo : ["Nkongsamba 1", "Nkongsamba 2", "Nkongsamba 3", "Mbanga", "Loum", "Manjo", "Njombé-Penja", "Bare-Bakem", "Dibombari", "Ebone", "Melong", "Mombo"],
Nkam : ["Yabassi", "Nkondjock", "Bekoko", "Nord-Makombé"],
SanagaMaritime : ["Édéa 1", "Édéa 2", "Dizangué", "Mouanko", "Ngwei", "Massock-Songloulou", "Ndom", "Ngambe", "Pouma", "Nyanon"],
Wouri : ["Douala 1", "Douala 2", "Douala 3", "Douala 4", "Douala 5", "Douala 6"],

Diamaré : ["Maroua 1", "Maroua 2", "Maroua 3", "Bogo", "Dargala", "Gawel", "Meri", "Ndoulo", "Petté"],
LogoneetChari : ["Kousséri", "Logone-Birni", "Makary", "Goulfey", "Blangoua", "Darak", "Fotokol", "Hile-Alifa", "Waza", "Zina"],
MayoDanay : ["Yagoua", "Maga", "Guéré", "Gobouo", "Kalfou", "Kar-Hay", "Wina", "Datcheka", "Gobo", "Kai-Kai", "Tchatibali"],
MayoKani : ["Kaélé", "Guidiguis", "Moutourwa", "Mindif", "Moulvoudaye", "Touloum", "Porhi"],
MayoSava : ["Mora", "Kolofata", "Tokombéré"],
MayoTsanaga : ["Mokolo", "Bourrha", "Koza", "Mogodé", "Mayo-Moskota", "Souledé-Roua", "Hina"],


Boyo : ["Fundong", "Belo", "Bum", "Njinikom"],
Bui : ["Kumbo", "Jakiri", "Mbiame", "Nkum", "Noni", "Oku"],
DongaMantung : ["Nkambe", "Ndu", "Ako", "Misaje", "Nwa"],
Menchum : ["Wum", "Furu-Awa", "Menchum Valley", "Zhoa"],
Mezam : ["Bamenda 1", "Bamenda 2", "Bamenda 3", "Bafut", "Bali", "Santa", "Tubah"],
Momo : ["Mbengwi", "Andek", "Batibo", "Njikwa", "Widikum-Boffe"],
Ngoketunjia : ["Ndop", "Babessi", "Balikumbat"],


Bamboutos : ["Mbouda", "Galim", "Batcham", "Babadjou"],
HautNkam : ["Bafang", "Bana", "Bakou", "Bandja", "Kékem", "Petit-Nkam", "Yabassi"],
HautsPlateaux : ["Baham", "Bamendjou", "Bansoa", "Bangou"],
KoungKhi : ["Bandjoun", "Bayangam", "Demdeng"],
Menoua : ["Dschang", "Santchou", "Fongo-Tongo", "Foréké-Dschang", "Penka-Michel", "Nkong-Ni"],
Mifi : ["Bafoussam 1", "Bafoussam 2", "Bafoussam 3"],
Ndé : ["Bangangté", "Bassamba", "Bazou", "Tonga"],
Noun : ["Foumban", "Foumbot", "Bangourain", "Koutaba", "Kouoptamo", "Magba", "Malentouen", "Massangam", "Njimom"],


Fako : ["Limbe 1", "Limbe 2", "Limbe 3", "Buea", "Muyuka", "Tiko", "West Coast"],
KoupéManengouba : ["Bangem", "Tombel", "Nguti"],
Lebialem : ["Menji", "Alou", "Wabane"],
Manyu : ["Mamfe", "Akwaya", "Eyumodjock", "Upper Bayang"],
Meme : ["Kumba 1", "Kumba 2", "Kumba 3", "Konye", "Mbonge"],
Ndian : ["Mundemba", "Bamusso", "Isanguele", "Kombo-Abedimo", "Kombo-Itindi", "Dikome-Balue", "Ekondo-Titi", "Idabato", "Toko"],

BoumbaetNgoko : ["Yokadouma", "Moloundou", "Gari-Gombo", "Salapoumbé"],
HautNyong : ["Abong-Mbang", "Doumé", "Lomié", "Messaména", "Nguelemendouka", "Dimako", "Somalomo", "Angossas", "Atok", "Doumaintang", "Mboma", "Messok", "Mindourou", "Ngoyla"],
Kadey : ["Batouri", "Ndelele", "Kette", "Ouli", "Kentzou", "Ngoura", "Mbang"],
LometDjérem : ["Bertoua 1", "Bertoua 2", "Bélabo", "Bétaré-Oya", "Diang", "Garoua-Boulaï", "Mandjou", "Ngoura"],

HauteSanaga : ["Nanga-Eboko", "Minta", "Bibey", "Lembe-Yezoum", "Nkoteng", "Mbandjock", "Shanga"],
Lekié : ["Monatélé", "Obala", "Evodoula", "Ebebda", "Batchenga", "Sa'a", "Okola", "Lobo", "Elig-Mfomo"],
MbametInoubou : ["Bafia", "Ndikiniméki", "Makénéné", "Kon-Yambetta", "Nitoukou", "Ombessa", "Bokito", "Deuk", "Goufan"],
MbametKim : ["Ntui", "Ngoro", "Yoko", "Ngambè-Tikar", "Mbangassina"],
MéfouetAfamba : ["Mfou", "Awaé", "Soa", "Afamba", "Alen-Mbe", "Esse", "Olanguina"],
MéfouetAkono : ["Ngoumou", "Akono", "Bikok", "Mbankomo"],
Mfoundi : ["Yaoundé 1", "Yaoundé 2", "Yaoundé 3", "Yaoundé 4", "Yaoundé 5", "Yaoundé 6", "Yaoundé 7"],
NyongetKéllé : ["Éséka", "Makak", "Messondo", "Dibang", "Ngog-Mapubi", "Matomb", "Bondjock", "Biyouha", "Nguibassal", "Bot-Makak"],
NyongetMfoumou : ["Akonolinga", "Ayos", "Endom", "Kobdombo", "Mengang"],
NyongetSoo : ["Mbalmayo", "Ngomedzap", "Akono", "Dzeng", "Mengueme", "Nkolmetet"],


Djérem : ["Tibati", "Ngaoundal"],
FaroetDéo : ["Tignère", "Galim-Tignère", "Mayo-Baléo", "Kontcha"],
MayoBanyo : ["Banyo", "Bankim", "Mayo-Darlé"],
Mbéré : ["Meiganga", "Djohong", "Dir", "Ngaoui"],
Vina : ["Ngaoundéré 1", "Ngaoundéré 2", "Ngaoundéré 3", "Belel", "Mbe", "Ngan-Ha", "Nyambaka", "Martap"],

Bénoué : ["Garoua 1", "Garoua 2", "Garoua 3", "Bibemi", "Dembo", "Lagdo", "Pitoa", "Tourua", "Baschéo", "Gashiga"],
Faro : ["Poli", "Beka"],
MayoLouti : ["Guider", "Figuil", "Mayo-Oulo"],
MayoRey : ["Tcholliré", "Rey-Bouba", "Touboro", "Madingring"],
    

}

    const divisions = regionData[region] || []
    const subdivisions = divisionData[division] || []

    const [formData,setFormData] = useState({
        givenNames:'',
        surnames:'',
        gender:'Male',
        dob:'',
        unknownDob:'false',
        birthCountry:'CAMEROON',
        birthRegion:'',
        birthDepartment:'',
        birthPlace:'',
        phone:'+237',
        email:'',
        residenceCountry:'',
        residenceRegion:'',
        residenceDepartment:'',
        residenceLocation:'',
        street:'',
        occupation:'',
});

useEffect(() => {
    
});

const handleChange = (e) => {
  const{name,value,type,checked} = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]:type === 'checkbox' ? checked : value,
  }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Personal information saved');


    setProgress((prev) =>{
        const newProgress = [...prev];
        newProgress[0] = 2;
        newProgress[1] =1;
        return newProgress;
    });

    navigate('/certificate/birth/parent');
    //navigate('/certificate/birth')
};
return(
    <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="flex overflow-auto space-x-4 pb-2">
                    <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        General information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        personal information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        Parent information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        Document information
                    </div>
                </div>
            </div>
        </div>

           <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600 text-center">
                       APPLICATION NUMBER: BIR-20260987645-00890

        </div>

       
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
                <p className="text-sm text-gray-600 mb-8">
                    Enter your personal information
                </p>
                <div className="flex items-center justify-center">
                    {[1,2,3,4].map((step, index)=>(
                        <React.Fragment key={step}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-medium border-2 transition-colors duration-300 ${
                            progress[index] === 2
                            ? 'bg-green-600 border-green-600'
                            :progress[index] === 1
                            ?'bg-blue-600 border-blue-600'
                            :'bg-blue-600 border-blue-600'
                        }`}
                        >
                        {step}
                        </div>
                        {index < 3 &&(
                          <div className={`h-1 flex-1 mx-3 rounded-full ${
                            progress[index] === 2 ? 'bg-green-600' : 'bg-blue-300'
                          }`}  
                          />
                        )}
                        </React.Fragment>
                    ))}
                </div>
              
                 <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Given names</label>
                            <input type="text" name="givenNames" value={formData.givenNames} onChange={handleChange} placeholder="Given names" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Surnames</label>
                            <input type="text" name="surnames" value={formData.surnames} onChange={handleChange} placeholder="Surname(s)" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        </div>
                        < div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="dd mm yyyy"required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                            <label className="flex items-center mt-2 text-sm text-gray-600">
                                <input type="checkbox" name="unknownDob" checked={formData.unknownDob} onChange={handleChange} className="mr-2 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                                I don't know my date of birth
                            </label>
                        </div>
                        
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">BirthCountry</label>
                            <select name="birthCountry" value={formData.birthCountry} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>Cameroon</option>
                                
                            </select>
                        </div>
                         < div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Region</label>
                            {/* <select name="birthRegion" value={formData.birthRegion} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>FAR-NORTH</option>
                                <option>NORTH</option>
                                <option>ADAMAOUA</option>
                                <option>CENTRE</option>
                                <option>EAST</option>
                                <option>LITTORAL</option>
                                <option>NORTH-WEST</option>
                                <option>WEST</option>
                                <option>SOUTH-WEST</option>
                                <option>SOUTH</option>
                            
                            </select> */}

                            <select
                                value={region}
                                onChange={(e) => {
                                    setRegions(e.target.value);
                                    setDivisions("");
                                }}
                            >
                                <option value="">Select a region</option>
                                {
                                    Object.keys(regionData).map((r) =>(
                                        <option key={r} value={r}>
                                            {r}
                                        </option>
                                    ))
                                }

                            </select>
                        </div>
                        < div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-1">Birth Division</label>
                            <select name="birth Division" value={formData.birthDivision} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>Division</option>
                               
                            </select> */}

                            <select
                                value={division}
                                onChange={(e) => {setDivisions(e.target.value); }}
                            >
                                <option value="">Select a Division</option>
                                {
                                    divisions.map((d, index) =>(
                                        <option key={index} value={d}>
                                            {d}
                                        </option>
                                    ))
                                }

                            </select>


                        </div>

                              <div>
                            <select
                                value={subdivision}
                                onChange={(e) => {setSubdivisions(e.target.value); }}
                            >
                                <option value="">Select a subdivision</option>
                                {
                                    divisions.map((s, index) =>(
                                        <option key={index} value={s}>
                                            {s}
                                        </option>
                                    ))
                                }

                            </select>


                        </div>







                             
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Birth place</label>
                            <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} placeholder="Birth place" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        </div>
                        </div>
                    < div className="space-y-10 mb-1">
                    <h3 className="block text-sm font-bold text-black">CONTACT DETAILS</h3>

                    <div >
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded=l=lg">
                                CMR
                            </span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                    </div>
                      <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                    </div>
                     < div className="space-y-10 mb-1">
                    <h3 className="block text-sm font-bold text-black">PLACE OF RESIDENCE</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                             <select name="residence Country" value={formData.residenceCountry} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>Cameroon</option>
                                
                            </select>

                    </div>
                    < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Residence Region</label>
                            <select name="residenceRegion" value={formData.residenceRegion} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>FAR-NORTH</option>
                                <option>NORTH</option>
                                <option>ADAMAOUA</option>
                                <option>CENTRE</option>
                                <option>EAST</option>
                                <option>LITTORAL</option>
                                <option>NORTH-WEST</option>
                                <option>WEST</option>
                                <option>SOUTH-WEST</option>
                                <option>SOUTH</option>
                                

                            </select>
                        </div>
                       <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Residence Division</label>
                            <select name="birth Division" value={formData.birthDivision} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>Nyon et kele</option>
                                <option>mfoundi</option>
                                <option>wouri</option>
                               
                                </select>
                        </div>

                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" name="residenceLocation" value={formData.residenceLocation} onChange={handleChange} placeholder="Location" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        </div>

                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                            <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Additional residence" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                            <select name="occupation" value={formData.occupation} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option>select</option>
                                <option>Accountant</option>
                                <option>student</option>
                                <option>Engineer</option>
                                <option>Doctor</option>
                                <option>Nurse</option>
                                <option>computer technician</option>
                                <option>JUDGE</option>
                                <option>FARMER</option>
                                <option>COMMERCIAL AGENT</option>
                                <option>Teacher</option>
                                <option>others</option>

                            </select>
                        </div>
                </div>
                <div className="flex justify-between pt-8">
                    <button onClick={() => navigate('/certificate/birth')} className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                        Back
                    </button>
                    <button onClick={() => navigate('/certificate/birth/parent')} className="px-10 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                        Continue
                    </button>
                </div>
                
            </div>
           </form>
        </div>
    </div>
    </div>
)





}

export default BirthCertificatePersonal;
