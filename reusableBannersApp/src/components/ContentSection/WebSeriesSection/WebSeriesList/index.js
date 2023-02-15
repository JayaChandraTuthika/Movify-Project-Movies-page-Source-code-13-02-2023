const webSeries = [
  {
    id: 1,
    movieName: 'RRR',
    movieDescription:
      'A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380865/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/RRR_idyqce.jpg',
    watched: true,
    rating: 7.9,
    director: 'S.S.Rajamouli',
    language: 'telugu',
    genre: 'action',
    releaseDate: '24 March 2022',
  },
  {
    id: 2,
    movieName: 'Godfather',
    movieDescription:
      'The Chief Minister passing wreaks havoc across the state and in his political party. However, a mysterious contender for the post rises to eradicate wrongdoers.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380868/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/god_father_ag1kjt.jpg',
    watched: true,
    rating: 5.3,
    director: 'Mohan Raja',
    language: 'telugu',
    genre: 'Action/Drama',

    releaseDate: '5 October 2022',
  },
  {
    id: 3,
    movieName: 'Pathaan',
    movieDescription:
      'An Indian spy battles against the leader of a gang of mercenaries who have a heinous plot for his homeland.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380862/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/pathaan_iuwgbg.jpg',
    watched: true,
    rating: 6.6,
    director: 'Siddharth Anand',
    language: 'telugu/hindi',
    genre: 'Action/Thriller',
    releaseDate: '25 January 2023',
  },
  {
    id: 4,
    movieName: 'Hit 2',
    movieDescription:
      'Laid back cop Krishna Dev investigates a gruesome murder case. As KD unravels the layers of the crime, the stakes rise unbelievably high and a threat comes unusually close.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380871/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Hit_2_q1j94f.jpg',
    watched: false,
    rating: 7.2,
    director: ' Sailesh Kolanu',
    language: 'telugu',
    genre: 'Thriller/Chrime',

    releaseDate: '2 December 2022',
  },
  {
    id: 5,
    movieName: 'Vikram',
    movieDescription:
      'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380871/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Vikram_lvs36m.jpg',
    watched: true,
    rating: 8.3,
    director: 'Lokesh Kanagaraj',
    language: 'telugu',
    genre: 'Action/Mystery',

    releaseDate: '3 June 2022',
  },
  {
    id: 6,
    movieName: 'Cobra',
    movieDescription:
      'A genius mathematician uses his skills to assassinate his targets and stay clear of law enforcement. However, a vigilante secretly tracks his movements, vying for revenge.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380867/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Cobra_szdejz.jpg',
    watched: false,
    rating: 6,
    director: 'R. Ajay Gnanamuthu',
    language: 'telugu',
    genre: 'Thriller/Action',

    releaseDate: '31 August 2022',
  },
  {
    id: 7,
    movieName: 'Beast',
    movieDescription:
      'Former RAW agent Veera must face his fears when a terrorist organisation holds him hostage in a mall along with other visitors and demands the release of their leader, who was captured by Veera.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380866/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Beast_d2hypy.jpg',
    watched: true,
    rating: 4.4,
    director: 'Nelson Dilipkumar',
    language: 'telugu',
    genre: 'Action/Crime',

    releaseDate: '13 April 2022',
  },
  {
    id: 8,
    movieName: 'Ponniyin Selvan: I',
    movieDescription:
      'Sensing an uprising in the capital, Crown Prince Aditha Karikalan sends his friend Vallavaraiyan Vandiyadevan on a mission that sets off a series of conspiracies against the reigning king.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380864/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/PS_1_bohxm3.jpg',
    watched: true,
    rating: 7.8,
    director: 'Mani Ratnam',
    language: 'telugu',
    genre: 'Action/Adventure/War',

    releaseDate: '30 September 2022',
  },
  {
    id: 9,
    movieName: 'K.G.F: Chapter 2',
    movieDescription:
      'Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mothers wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380860/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Kgf_2_ivtjeg.jpg',
    watched: true,
    rating: 8.3,
    director: 'Prashanth Neel',
    language: 'telugu',
    genre: 'Action/Adventure/War',

    releaseDate: '14 April 2022',
  },
  {
    id: 10,
    movieName: 'Bimbisara',
    movieDescription:
      'Betrayed by his brother, an ancient evil emperor is trapped in a mirror and transported into the modern world. He then desperately seeks the mirror to return to his kingdom.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380866/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Bhimbisara_bcwwlh.jpg',
    watched: false,
    rating: 6.8,
    director: 'Mallidi Vasishta',
    language: 'telugu',
    genre: 'Action/Adventure/War',

    releaseDate: '5 August 2022',
  },
  {
    id: 11,
    movieName: 'Sita Ramam',
    movieDescription:
      'Upon returning to Pakistan, Afreen sets off to fulfil her grandfather wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380866/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Sita_ramam_dtwd68.jpg',
    watched: true,
    rating: 7.8,
    director: 'Hanu Raghavapudi',
    language: 'telugu',
    genre: 'Romance/Drama',

    releaseDate: '5 August 2022',
  },

  {
    id: 12,
    movieName: 'Yashoda',
    movieDescription:
      'Surrogate mother Yashodha is advised to follow a few guidelines to keep herself and her baby healthy and safe, but something happens at the surrogate centre that puts both of them at risk.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380878/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Yashoda_hiyuvu.jpg',
    watched: true,
    rating: 6.7,
    director: 'Hareesh Narayan, K. Hari Shankar',
    language: 'telugu',
    genre: 'Action/Drama',

    releaseDate: '11 November 2022',
  },
  {
    id: 13,
    movieName: 'Major',
    movieDescription:
      'Major Sandeep Unnikrishnan faces his biggest battle when he joins the task force to save the occupants at the Taj Hotel attacked by a terrorist group.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380861/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Major_qbmdw5.jpg',
    watched: true,
    rating: 8.2,
    director: 'Sashi Kiran Tikka',
    language: 'telugu',
    genre: 'Action/Drama',

    releaseDate: '24 May 2022',
  },

  {
    id: 14,
    movieName: 'Ala Vaikunthapurramuloo',
    movieDescription:
      'Bantu grows up being constantly subjected to his fathers scorn. However, when he learns of his real parentage, he decides to carve a place for himself within the family he truly belongs to.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380863/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Ala_Vaikunthapurramuloo_krqsos.jpg',
    watched: true,
    rating: 7.3,
    director: 'Trivikram Srinivas',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '12 January 2020',
  },

  {
    id: 15,
    movieName: 'Dhamaka',
    movieDescription:
      'Dhamaka is a 2022 Indian Telugu-language action comedy film directed by Trinadha Rao Nakkina and written by Prasanna Kumar Bezawada. It stars Ravi Teja and Sreeleela. The film is produced by People Media Factory and Abhishek Agarwal Arts. Principal photography commenced in October 2021 and ended in September 2022.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380866/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/dhamaka_wdy4ac.jpg',
    watched: false,
    rating: 7,
    director: 'Trinadha Rao Nakkina',
    language: 'telugu',
    genre: 'comedy',
    releaseDate: '23 December 2022',
  },
  {
    id: 16,
    movieName: 'Bheemla Nayak',
    movieDescription:
      'A battle begins between SI Bheemla Nayak, a righteous policeman, and Daniel Shekhar, an-ex havildar, when Daniel tricks Bheemla into surrendering to corruption.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380865/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Bheemla_Nayak_hdfnhi.jpg',
    watched: false,
    rating: 6.3,
    director: 'Saagar K Chandra',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '25 February 2022',
  },
  {
    id: 17,
    movieName: 'Sarkaru Vaari Paata',
    movieDescription:
      'Upon loaning a huge sum to his fraudulent lover in Miami, Mahi is forced to retrieve the amount from her father, who is a politician in Vizag. However, Mahi visit unravels a giant banking scandal.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380868/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Sarkaru_Vaari_Paata_i8bsx6.jpg',
    watched: true,
    rating: 5.6,
    director: 'Parasuram',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '12 May 2022',
  },

  {
    id: 18,
    movieName: 'Akhanda',
    movieDescription:
      'To save the saviour Murali Krishna from an evil Varadarajulus trap, Lord Shiva ardent devotee, Akhanda, moves heaven and earth.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380860/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Akhanda_egw9eu.jpg',
    watched: false,
    rating: 7.1,
    director: 'Boyapati Srinu',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '2 December 2021',
  },

  {
    id: 19,
    movieName: 'Aadavallu Meeku Johaarlu',
    movieDescription:
      'Trouble brews after love blooms between Chiranjeevi, who is pampered by his mother and doting aunts, and Aadhya, who grew up under a strict mother.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380859/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Aadavallu_Meeku_Johaarlu_wtxrzg.jpg',
    watched: false,
    rating: 5.8,
    director: 'Kishore Tirumala',
    language: 'telugu',
    genre: 'Drama',
    releaseDate: '4 March 2022',
  },
  {
    id: 20,
    movieName: 'Uppena',
    movieDescription:
      'Aasirvadham, a fisherman, falls in love with Sangeetha, the daughter of the village head. However, complications arise when caste differences and ego issues take the lead.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380872/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Uppena_xxmsnh.jpg',
    watched: false,
    rating: 6.5,
    director: 'Buchi Babu Sana',
    language: 'telugu',
    genre: '',
    releaseDate: '12 February 2021',
  },
  {
    id: 21,
    movieName: 'Pushpa: The Rise',
    movieDescription:
      'A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380864/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Pushpa-The_Rise_g36ytd.jpg',
    watched: false,
    rating: 7.6,
    director: 'Sukumar',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '17 December 2021',
  },
  {
    id: 22,
    movieName: 'Radhe Shyam',
    movieDescription:
      'In 1970s Europe, a world-renowned palmist named Vikramaditya finds love when he meets Prerana, a doctor. However, their relationship is threatened by his view of destiny and a terminal illness.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380864/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Radhe_Shyam_hqjzcz.jpg',
    watched: false,
    rating: 5.3,
    director: 'Radha Krishna Kumar',
    language: 'telugu',
    genre: 'Romance/Drama',
    releaseDate: '11 March 2022',
  },
  {
    id: 23,
    movieName: 'Virata Parvam',
    movieDescription:
      'Captivated by the poems of a renegade warrior on a lethal mission, a naïve yet defiant young woman follows her heart into the depths of a revolution.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380873/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Virata_Parvam_kxd0po.jpg',
    watched: false,
    rating: 6.8,
    director: 'Udugula Venu',
    language: 'telugu',
    genre: 'Action/Romance',
    releaseDate: '17 June 2022',
  },
  {
    id: 24,
    movieName: 'Acharya',
    movieDescription:
      'While Padaghattam masters Ayurveda, its neighbouring village, Dharmasthali, is tormented by corrupt leaders until a mysterious stranger turns up to stop illegal practices and fulfil his friends wish.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380861/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Acharya_u5tx53.jpg',
    watched: false,
    rating: 3.8,
    director: 'Koratala Siva',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '29 April 2022 ',
  },
  {
    id: 25,
    movieName: 'Gurthunda Seethakalam',
    movieDescription:
      'Gurthunda Seethakalam is an Indian Telugu-language romantic drama film directed by Nagashekar. A remake of the 2020 Kannada film Love Mocktail, it stars Satyadev and Tamannaah. The plot follows a middle-aged software employee, who endures several heartbreaks in his quest to find his true love.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380870/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Gurthunda_Seethakalam_fa80rx.jpg',
    watched: false,
    rating: 6.8,
    director: 'Nagashekar',
    language: 'telugu',
    genre: 'Drama',
    releaseDate: '9 December 2022',
  },
  {
    id: 26,
    movieName: 'Rangasthalam',
    movieDescription:
      'A young man with impaired hearing and his elder brother decide to oppose the tyrannical rule of Phanindra, the corrupt leader of their villages local government.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380864/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Rangasthalam_rzybou.jpg',
    watched: false,
    rating: 8.2,
    director: 'Sukumar',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '30 March 2018',
  },
  {
    id: 27,
    movieName: 'Love Story',
    movieDescription:
      'A Christian Zumba instructor falls in love with a starry-eyed upper caste Hindu girl. In their quest for happiness, however, they must first overcome a massive caste divide.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380860/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Love_Story_aaeehw.jpg',
    watched: false,
    rating: 6.8,
    director: 'Sekhar Kammula',
    language: 'telugu',
    genre: 'Romance/Drama',
    releaseDate: '24 September 2021',
  },
  {
    id: 28,
    movieName: 'Vakeel Saab',
    movieDescription:
      'After being molested by Vamsi, a politicians son, Pallavi, along with her friends, is unable to lodge a complaint against him. However, an alcoholic lawyer, Satyadev, comes to their rescue.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380871/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Vakeel_Saab_gi5iuk.jpg',
    watched: false,
    rating: 7,
    director: 'Venu Sriram',
    language: 'telugu',
    genre: 'Drama/Action',
    releaseDate: '9 April 2021',
  },
  {
    id: 29,
    movieName: 'Hero',
    movieDescription:
      'Arjun, a struggling actor, orders a hair oil online and instead gets a gun delivered to his house. As he tries to rid himself of the weapon, he unravels a sinister assassination scheme.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380869/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Hero_pbvgj9.jpg',
    watched: false,
    rating: 5.6,
    director: 'Sriram Adittya T',
    language: 'telugu',
    genre: 'Comedy/Drama',
    releaseDate: '15 January 2022',
  },
  {
    id: 30,
    movieName: 'Evaru',
    movieDescription:
      'Vikram, a police inspector, is tasked with catching the killer of a senior officer who has allegedly raped Sameera. When he starts investigating, he encounters dark secrets tied to his past.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380869/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Evaru_y63hgb.jpg',
    watched: false,
    rating: 8.1,
    director: 'Venkat Ramji',
    language: 'telugu',
    genre: 'Thriller/Thriller',
    releaseDate: '15 August 2019',
  },
  {
    id: 31,
    movieName: 'Karthikeya',
    movieDescription:
      'A medical student, Karthikeya, visits Subramaniyapuram for a medical camp. However, when he learns about the mystery surrounding the temple of Kumara Swami, he decides to investigate it.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380860/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Karthikeya_sf6dul.jpg',
    watched: false,
    rating: 7.3,
    director: 'Chandoo Mondeti',
    language: 'telugu',
    genre: 'Thriller/Mystery',
    releaseDate: '24 October 2014',
  },
  {
    id: 32,
    movieName: 'Ninnu Kori',
    movieDescription:
      'Pallavi invites Uma, her ex-boyfriend, to stay at her home with her husband to convince him that she is happy in her marriage. Uma tries to create a rift between them, hoping to win Pallavi back.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380862/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Ninnu_Kori_ezg4ai.jpg',
    watched: false,
    rating: 7.5,
    director: 'Shiva Nirvana',
    language: 'telugu',
    genre: 'Romance/Comedy',
    releaseDate: '7 July 2017',
  },
  {
    id: 33,
    movieName: 'Bangarraju',
    movieDescription:
      'A deceased couple reunite in heaven following their deaths. However, when they notice that their grandson has lost his way in life, they request permission to return to Earth and help him.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380865/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Bangarraju_qydx7k.jpg',
    watched: false,
    rating: 5.7,
    director: 'Kalyan Krishna',
    language: 'telugu',
    genre: 'Drama',
    releaseDate: '14 January 2022',
  },
  {
    id: 34,
    movieName: 'Thank You',
    movieDescription:
      'A major tragedy forces a self-centred businessman to look back at the prominent moments in his life which built the foundation for his success and thank the people who helped him.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380869/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Thank_You_awacov.jpg',
    watched: false,
    rating: 6,
    director: 'Vikram Kumar',
    language: 'telugu',
    genre: 'Drama/Romance/Comedy',
    releaseDate: '22 July 2022',
  },
  {
    id: 35,
    movieName: 'Arjun Reddy',
    movieDescription:
      'A petty thief gains great wealth by pretending to be a baba. However, he has a change of heart after falling in love but finds himself getting pushed deep into the world of crime.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380863/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Arjun_Reddy_kpkd9e.jpg',
    watched: true,
    rating: 8,
    director: 'Sandeep Reddy Vanga',
    language: 'telugu',
    genre: 'Romance/Drama',
    releaseDate: '25 August 2017',
  },
  {
    id: 36,
    movieName: 'Maharshi',
    movieDescription:
      'A rich businessman returns to India to mend ways with his ex-classmate. However, when he learns about his friend plight, he tries to help him and becomes a saviour for the villagers in the process.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380862/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Maharshi_z43cwi.jpg',
    watched: false,
    rating: 7,
    director: 'Vamshi Paidipally',
    language: 'telugu',
    genre: 'Romance/Action',
    releaseDate: '9 May 2019',
  },
  {
    id: 37,
    movieName: 'Tuck Jagadish',
    movieDescription:
      'Bhudevipuram has a long history of families warring over ancestral property. However, when its headmans family falls into the same trap, his younger son decides to break the village age-old legacy.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380870/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Tuck_Jagadish_fpsfdo.jpg',
    watched: false,
    rating: 5.6,
    director: 'Shiva Nirvana',
    language: 'telugu',
    genre: 'Drama/Action',
    releaseDate: '10 September 2021',
  },
  {
    id: 38,
    movieName: 'K.G.F: Chapter 1',
    movieDescription:
      'Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380860/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/K.G.F_Chapter_1_mnjodx.jpg',
    watched: false,
    rating: 8.2,
    director: 'Prashanth Neel',
    language: 'telugu',
    genre: 'Action/Drama',
    releaseDate: '21 December 2018',
  },
  {
    id: 39,
    movieName: 'Bahubali: The Beginning',
    movieDescription:
      'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380865/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Bahubali_The_Beginning_mnwbdk.jpg',
    watched: false,
    rating: 8,
    director: 'S. S. Rajamouli',
    language: 'telugu',
    genre: 'Action/War',
    releaseDate: '10 July 2015',
  },
  {
    id: 40,
    movieName: 'Oopiri',
    movieDescription:
      'A millionaire entrepreneur who is paraplegic hires a convict, who is out on parole, as his caretaker. Together, they help each other with their struggles and develop an unlikely bond.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380862/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Oopiri_jrvw1l.jpg',
    watched: false,
    rating: 8,
    director: 'Vamshi Paidipally',
    language: 'telugu',
    genre: 'Comedy/Drama',
    releaseDate: '25 March 2016',
  },

  {
    id: 41,
    movieName: 'Ante Sundaraniki',
    movieDescription:
      'A man from an orthodox Hindu family trains his girlfriend to pretend to be a Brahmin so that his family will accept her.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380865/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/Ante_Sundaraniki_ktspwg.jpg',
    watched: false,
    rating: 7.6,
    director: 'Vivek Athreya',
    language: 'telugu',
    genre: 'Romance/Comedy',
    releaseDate: '10 June 2022',
  },
  {
    id: 42,
    movieName: 'Varasudu',
    movieDescription:
      'Vijay Rajendran is a happy-go-lucky man, but everything changes after the unexpected death of his foster father.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380870/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/varasudu_rwg03r.jpg',
    watched: false,
    rating: 6.6,
    director: 'Vamshi Paidipally',
    language: 'telugu',
    genre: 'Action',
    releaseDate: '11 January 2023',
  },
  {
    id: 43,
    movieName: 'Waltair Veerayya',
    movieDescription:
      'The story between a fisherman and his friend, egoistic ACP Vikram Sagar IPS, who stops Veerayya from smuggling goods.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380871/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/waltair-veerayya-tumbnail_btnt0z.jpg',
    watched: false,
    rating: 7,
    director: 'K.S.Ravindra',
    language: 'telugu',
    genre: 'Action/Comedy',
    releaseDate: '13 January 2023',
  },
  {
    id: 44,
    movieName: 'Thegimpu',
    movieDescription:
      'A cop strikes a deal with a group of goons who plan to rob Your Bank in Visakhapatnam and share the looted money. The gang commences their plan and enters the bank only to realize that there is another person, Darkdevil (Ajith Kumar) inside who also came to rob. He takes down a few goons and makes the customers, employees, and other goons his hostages.',
    thumbnailUrl:
      'https://res.cloudinary.com/dds8wfxdw/image/upload/v1676380867/Movify-project-resources/movie-posters/All%20Movies/Thumbnails/tegimpu_w738i6.png',

    watched: false,
    rating: 7,
    director: 'H Vinoth',
    language: 'telugu',
    genre: 'Action/Chrime',
    releaseDate: '11 January 2023',
  },
]

export default webSeries
