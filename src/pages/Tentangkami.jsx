import React from 'react'
import Lukas from "../assets/lukas.png";
import Pakjams from "../assets/gambar pakjams.jpg";
import Bambang from "../assets/gambar bambang.jpg";
import Poltak from "../assets/gambar pakpoltak.jpg";
import Doli from "../assets/doli.jpg";
import Septo from "../assets/septo.jpg";
import Rotua from "../assets/rotua.jpg";
import Humala from "../assets/humala.jpg";
import Ibrahim from "../assets/ibrahim.jpg";
import Pesta from "../assets/pesta.jpg";
import Nur from "../assets/nur.jpg";
import Nana from "../assets/nana.jpg";
import Herri from "../assets/herri.jpg";
import David from "../assets/david.jpg";
import Nella from "../assets/nella.jpg";
import Fransiscus from "../assets/fransiscus.jpg";
import Ahmad from "../assets/ahmad.jpg";
import Rohaida from "../assets/rohaida.jpg";
import Intan from "../assets/intan.png";

function Tentangkami() {
  // Placeholder image URL untuk demo
  const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0ibTEwMCAxNDAuMDA4IDIwIDIwIDIwLTIwVjE4MEg4MHYtMzkuOTkyWiIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K";

  const organizationStructure = {
    managingPartner: {
      name: "Jamaster Simanullang, SE., Ak., M.Ak., CPA., ASEAN CPA",
      position: "MANAGING PARTNER",
      image: Pakjams
    },
    nonSigningPartners: [
      {
        name: "Poltak, SE,. Ak., MM., CPA",
        position: "NON SIGNING PARTNER",
        image: Poltak
      },
      {
        name: "Doli Aritonang SE., BKP",
        position: "NON SIGNING PARTNER", 
        image: Doli
      },
      {
        name: "Septoni B Siahaan, SE., M.Si, Ak, CA, CPA",
        position: "NON SIGNING PARTNER",
        image: Septo
      }
    ],
    managers: [
      {
        name: "Bambang Suparjo, SE",
        position: "TAX MANAGER",
        image: Bambang
      },
      {
        name: "Rotua Manullang, SE., MM",
        position: "AUDIT MANAGER", 
        image: Rotua
      },
      {
        name: "Humala Situmorang, SE., AK., MM., CA., MAk",
        position: "ACCOUNTING MANAGER",
        image: Humala
      },
      {
        name: "Muhammad Ibrahim, SE",
        position: "TAX MANAGER",
        image: Ibrahim
      }
    ],
    supervisors: [
      {
        name: "Pesta Purba, SE",
        position: "AUDIT SUPERVISOR",
        image: Pesta
      },
      {
        name: "Nur Dwi Susanti, SE", 
        position: "ACCOUNTING SUPERVISOR",
        image: Nur
      },
      {
        name: "Nana Taryana, S.Ak",
        position: "ACCOUNTING SUPERVISOR",
        image: Nana
      }
    ],
    seniors: [
      {
        name: "Herriyanto, SE",
        position: "SENIOR TAX",
        image: Herri
      },
      {
        name: "David Hutabarat, SE",
        position: "SENIOR AUDITOR", 
        image: David
      }
    ],
    staff: [
      {
        name: "Nella Evasari, SE",
        position: "AUDITOR",
        image: Nella
      },
      {
        name: "Fransiscus, S.Ak",
        position: "AUDITOR",
        image: Fransiscus
      },
      {
        name: "Ahmad Andrean Pratama, S.Ak",
        position: "AUDITOR",
        image: Ahmad
      },
      {
        name: "Rohaida Saputri, S.Ak", 
        position: "AUDITOR",
        image: Rohaida
      },
      {
        name: "Intan Nurbaety, Amd",
        position: "AUDITOR/ADM",
        image: Intan
      }
    ]
  };

  const PersonCard = ({ person, size = "normal" }) => {
    const cardSizes = {
      large: "w-80 h-96",
      normal: "w-64 h-80", 
      small: "w-56 h-72"
    };

    const imageSizes = {
      large: "w-48 h-56",
      normal: "w-40 h-48",
      small: "w-32 h-40"
    };

    return (
      <div className={`${cardSizes[size]} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mx-2 mb-4`}>
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 pb-4 flex justify-center">
          <div className={`relative ${imageSizes[size]}`}>
            <img 
              src={person.image} 
              alt={person.name}
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
        
        <div className="p-4 text-center bg-white">
          <h3 className={`font-bold text-gray-800 mb-2 leading-tight ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
            {person.name}
          </h3>
          <p className={`text-gray-600 font-medium ${size === 'large' ? 'text-sm' : 'text-xs'}`}>
            {person.position}
          </p>
        </div>
      </div>
    );
  };

  // Staff list data
  const staffList = [
    "Ida Mulyani, SE",
    "Nuke Monica Kristi, SE", 
    "Nur Azmi Kolbi, SE",
    "Friska Alehanda, S.Ak",
    "Meli Kadarsih, Amd.S.I.Ak",
    "Widya Jana Rutika, S.Ak",
    "Ira Afri Setianti, S.Ak",
    "Wialdo, Amd",
    "Dwi Apriliyani, SE",
    "Atika Mumtaz W, SE",
    "Lius Yuliana, SE",
    "Adiel Grina, S.Ak",
    "Satya Budi Prianutama, S.Ak",
    "Tiara Chantika, S.Ak",
    "Ahmad Andrean Pratama, A.Md",
    "Rohaida Saputri, A.Md",
    "Nur Azizah, S.Ak",
    "Siti Aisyah, S.Ak",
    "Cut Riezka Sakinah, S.AK",
    "Hastuti Selmi Rahmah, S.Tr.Ak.",
    "Angel Kiki .T, S.Ak",
    "Winda Marwani, Amd",
    "Ibnu Kharis Fadilla, SE",
    "Rita Martianingsih, S.E",
  ];

  // Function to create columns with horizontal numbering (horizontal flow)
  const createStaffColumns = (staffArray, numColumns = 3) => {
    const itemsPerColumn = Math.ceil(staffArray.length / numColumns);
    const columns = [];
    
    for (let col = 0; col < numColumns; col++) {
      const columnItems = [];
      const startIndex = col * itemsPerColumn;
      const endIndex = Math.min(startIndex + itemsPerColumn, staffArray.length);
      
      for (let i = startIndex; i < endIndex; i++) {
        columnItems.push({
          number: i + 1,
          name: staffArray[i]
        });
      }
      columns.push(columnItems);
    }
    
    return columns;
  };

  const staffColumns = createStaffColumns(staffList, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="relative w-full h-80 md:h-96 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <img
          src={Lukas}
          alt="Office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              ORGANIZATIONAL STRUCTURE
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              KANTOR AKUNTAN PUBLIK (KAP)
            </h2>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-600">
              JAMASTER SIMANULLANG
            </h3>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Organizational Structure */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Managing Partner - Top Level */}
        <div className="flex justify-center mb-12">
          <PersonCard person={organizationStructure.managingPartner} size="large" />
        </div>

        {/* Connection Line */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Non Signing Partners - Second Level */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">NON SIGNING PARTNERS</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {organizationStructure.nonSigningPartners.map((partner, index) => (
              <PersonCard key={index} person={partner} size="normal" />
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Managers - Third Level */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">MANAGERS</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {organizationStructure.managers.map((manager, index) => (
              <PersonCard key={index} person={manager} size="normal" />
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Supervisors - Fourth Level */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">SUPERVISORS</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {organizationStructure.supervisors.map((supervisor, index) => (
              <PersonCard key={index} person={supervisor} size="small" />
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Senior Staff - Fifth Level */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">SENIOR STAFF</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {organizationStructure.seniors.map((senior, index) => (
              <PersonCard key={index} person={senior} size="small" />
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Staff - Bottom Level */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">STAFF</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {organizationStructure.staff.map((staff, index) => (
              <PersonCard key={index} person={staff} size="small" />
            ))}
          </div>
        </div>

        {/* Staff List Section - Updated with horizontal numbering */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Staff:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffColumns.map((column, colIndex) => (
              <div key={colIndex} className="space-y-2">
                {column.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-700">
                    {item.number}. {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tentangkami