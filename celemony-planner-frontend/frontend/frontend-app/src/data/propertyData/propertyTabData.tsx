export const getDataForTab = (activeTab, language) => {
    const allData = [
      {
        id: 1,
        title: {
          en: 'Data 1',
          fr: 'Donnée 1',
          es: 'Dato 1',
        },
        description: {
          en: 'Description for Data 1',
          fr: 'Description pour la donnée 1',
          es: 'Descripción para el dato 1',
        },
      },
      {
        id: 2,
        title: {
          en: 'Data 2',
          fr: 'Donnée 2',
          es: 'Dato 2',
        },
        description: {
          en: 'Description for Data 2',
          fr: 'Description pour la donnée 2',
          es: 'Descripción para el dato 2',
        },
      },
      // Add more data objects as needed
    ];
  
    const aiMlData = [
      {
        id: 3,
        title: {
          en: 'AI/ML Data 1',
          fr: 'Donnée IA/ML 1',
          es: 'Dato IA/ML 1',
        },
        description: {
          en: 'Description for AI/ML Data 1',
          fr: 'Description pour la donnée IA/ML 1',
          es: 'Descripción para el dato IA/ML 1',
        },
      },
      {
        id: 4,
        title: {
          en: 'AI/ML Data 2',
          fr: 'Donnée IA/ML 2',
          es: 'Dato IA/ML 2',
        },
        description: {
          en: 'Description for AI/ML Data 2',
          fr: 'Description pour la donnée IA/ML 2',
          es: 'Descripción para el dato IA/ML 2',
        },
      },
      // Add more data objects as needed
    ];
  
    const cppData = [
      {
        id: 5,
        title: {
          en: 'C++ Data 1',
          fr: 'Donnée C++ 1',
          es: 'Dato C++ 1',
        },
        description: {
          en: 'Description for C++ Data 1',
          fr: 'Description pour la donnée C++ 1',
          es: 'Descripción para el dato C++ 1',
        },
      },
      {
        id: 6,
        title: {
          en: 'C++ Data 2',
          fr: 'Donnée C++ 2',
          es: 'Dato C++ 2',
        },
        description: {
          en: 'Description for C++ Data 2',
          fr: 'Description pour la donnée C++ 2',
          es: 'Descripción para el dato C++ 2',
        },
      },
      // Add more data objects as needed
    ];
  
    const rustData = [
      {
        id: 7,
        title: {
          en: 'Rust Data 1',
          fr: 'Donnée Rust 1',
          es: 'Dato Rust 1',
        },
        description: {
          en: 'Description for Rust Data 1',
          fr: 'Description pour la donnée Rust 1',
          es: 'Descripción para el dato Rust 1',
        },
      },
      {
        id: 8,
        title: {
          en: 'Rust Data 2',
          fr: 'Donnée Rust 2',
          es: 'Dato Rust 2',
        },
        description: {
          en: 'Description for Rust Data 2',
          fr: 'Description pour la donnée Rust 2',
          es: 'Descripción para el dato Rust 2',
        },
      },
      // Add more data objects as needed
    ];
  
    const typescriptData = [
      {
        id: 9,
        title: {
          en: 'TypeScript Data 1',
          fr: 'Donnée TypeScript 1',
          es: 'Dato TypeScript 1',
        },
        description: {
          en: 'Description for TypeScript Data 1',
          fr: 'Description pour la donnée 1',
          es: 'Descripción para el dato 1',
        },
      },
      {
        id: 10,
        title: {
          en: 'TypeScript Data 2',
          fr: 'Donnée TypeScript 2',
          es: 'Dato TypeScript 2',
        },
        description: {
          en: 'Description for TypeScript Data 2',
          fr: 'Description pour la donnée 2',
          es: 'Descripción para el dato 2',
        },
      },

      {
        id: 11,
        title: {
          en: 'TypeScript Test 3',
          fr: 'Donnée TypeScript 3',
          es: 'Dato TypeScript 3',
        },
        description: {
          en: 'Description for TypeScript Data 3',
          fr: 'Description pour la donnée TypeScript 3',
          es: 'Descripción para el dato TypeScript 3',
        },
      },
      // Add more data objects as needed
    ];
  
    // Return the data based on the active tab
    if (activeTab === 'AI/ML') {
      return aiMlData;
    } else if (activeTab === 'C++') {
      return cppData;
    } else if (activeTab === 'Rust') {
      return rustData;
    } else if (activeTab === 'TypeScript') {
      return typescriptData;
    } else {
      return [...aiMlData, ...cppData, ...rustData, ...typescriptData];
    }
  };
  