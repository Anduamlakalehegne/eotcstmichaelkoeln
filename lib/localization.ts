// Define the structure for our translations
export type Locale = "en" | "am" | "de"

// Define the structure for our translations
export interface Translations {
  common: {
    comingSoonTitle: string
  }
  calendar: {
    title: string
    subtitle: string
    calendarTypeLabel: string
    calendarTypeEthiopian: string
    calendarTypeGregorian: string
    tabs: {
      orthodoxCalendar: string
      churchAnnualCalendar: string
    }
    todayInEthiopian: string
    gregorianCalendar: string
    featuresContent: string
    featuresTitle: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    downloadPdf: string
    loadingCalendar: string
    noCalendarForYear: string
    holidayBadge: string
    holidaySignificanceTitle: string
    holidaySignificanceText: string
  }
  header: {
    menuItems: {
      [key: string]: string
    }
    subMenuItems: {
      [key: string]: string
    }
    donate: string
    findUs: string
  }
  serviceMikir: {
    title: string
    description: string
    saintAdviceTitle: string
    photoPlaceholder: string
    quotes: string[]
  }
  events: {
    title: string
    searchPlaceholder: string
    filters: string
    category: string
    year: string
    month: string
    sortBy: string
    upcomingFirst: string
    laterFirst: string
    resetFilters: string
    noEvents: string
    tryAdjusting: string
    clearSearch: string
    viewDetails: string
    featured: string
  }
  churchNews: {
    title: string
    searchPlaceholder: string
    filters: string
    category: string
    year: string
    month: string
    sortBy: string
    newestFirst: string
    oldestFirst: string
    resetFilters: string
    noNews: string
    tryAdjusting: string
    clearSearch: string
    readMore: string
    readFullArticle: string
    featured: string
    allNews: string
    by: string
  }
  gallery: {
    common: {
      back: string
      folders: string
      download: string
      tags: string
      description: string
      noThumbnail: string
    }
    photos: {
      title: string
      empty: string
    }
    videos: {
      title: string
      empty: string
    }
    archive: {
      title: string
      description: string
      search: string
      filters: string
      clearFilters: string
      year: string
      category: string
      type: string
      allYears: string
      allCategories: string
      allTypes: string
      grid: string
      timeline: string
      resultsPrefix: string
      resultsSuffixApplied: string
      noItems: string
    }
  }
  formsLinks: {
    bankDetails: {
      title: string
      labels: {
        bankName: string
        accountName: string
        iban: string
        bic: string
        beneficiaryAddress: string
        beneficiaryPhone: string
        beneficiaryEmail: string
      }
      copyAll: string
      copiedAll: string
      intlTitle: string
      intlSubtitle: string
      intlLabels: {
        bankName: string
        accountName: string
        bankAddress: string
        iban: string
        bic: string
        correspondentBank: string
      }
    }
    usefulLinks: {
      churchesGermany: {
        title: string
        placeholder: string
        search: string
        noResults: string
        labels: {
          address: string
          phone: string
          email: string
          website: string
        }
      }
      previousWebsite: {
        title: string
        description: string
        lastUpdated: string
        visitButton: string
        imageAlt: string
      }
    }
    forms: {
      kirstina: {
        title: string
        intro: string
        tabs: { form: string; requirements: string; schedule: string }
        successTitle: string
        successButton: string
        cardTitle: string
        labels: {
          familyName: string
          firstName: string
          baptismName: string
          fatherName: string
          motherName: string
          godparentName: string
          country: string
          birthPlace: string
          birthCountry: string
          birthDate: string
          baptismChurch: string
          baptismDate: string
          nationality: string
          baptizingPriest: string
          email: string
          phone: string
          agree: string
          agreeDescription: string
        }
        placeholders: {
          familyName: string
          firstName: string
          baptismName: string
          fatherName: string
          motherName: string
          godparentName: string
          country: string
          birthPlace: string
          birthCountry: string
          baptismChurch: string
          nationality: string
          baptizingPriest: string
          email: string
          phone: string
        }
        actions: { submit: string; submitting: string }
        validation: {
          familyNameMin: string
          firstNameMin: string
          baptismNameMin: string
          fatherNameMin: string
          motherNameMin: string
          godparentNameMin: string
          countryRequired: string
          birthPlaceRequired: string
          birthCountryRequired: string
          birthDateRequired: string
          baptismChurchRequired: string
          baptismDateRequired: string
          nationalityRequired: string
          baptizingPriestRequired: string
          emailInvalid: string
          phoneMin: string
          agreeRequired: string
        }
        toast: {
          activationTitle: string
          activationDescription: string
          submitSuccessTitle: string
          submitSuccessDesc: string
          submitErrorTitle: string
          submitErrorDesc: string
        }
        email: {
          subjectPrefix: string
          autoresponse: string
          heading: string
          submittedOn: string
        }
      }
      membership: {
        title: string
        intro: string
        tabs: { form: string }
        successTitle: string
        successDesc: string
        successButton: string
        sections: {
          personal: { title: string; description: string }
          address: { title: string; description: string }
          membership: { title: string; description: string }
          emergency: { title: string; description: string }
          service: { title: string; description: string }
          terms: { title: string }
        }
        labels: {
          firstName: string
          lastName: string
          baptismalName: string
          dateOfBirth: string
          email: string
          phone: string
          address: string
          city: string
          postalCode: string
          membershipType: string
          membershipIndividual: string
          membershipFamily: string
          familyMembers: string
          addFamilyMember: string
          remove: string
          memberN: string
          name: string
          relation: string
          age: string
          emergencyContact: string
          interestsTitle: string
          interestsHelp: string
          interestsOptions: {
            worship: string
            choir: string
            sundaySchool: string
            youth: string
            community: string
            prayer: string
            bibleStudy: string
            committees: string
            events: string
            maintenance: string
          }
          skills: string
          skillsHelp: string
          agree: string
          agreeHelp: string
          next: string
          prev: string
          submit: string
          submitting: string
        }
        placeholders: {
          firstName: string
          lastName: string
          baptismalName: string
          email: string
          phone: string
          address: string
          city: string
          postalCode: string
          relationExample: string
        }
        validation: {
          firstNameMin: string
          lastNameMin: string
          dateOfBirthReq: string
          emailInvalid: string
          phoneMin: string
          addressMin: string
          cityMin: string
          postalCodeMin: string
          membershipTypeReq: string
          familyMemberNameMin: string
          familyMemberRelationMin: string
          familyMembersAtLeastOne: string
          emergencyNameMin: string
          emergencyPhoneMin: string
          emergencyRelationMin: string
          agreeRequired: string
        }
        toast: {
          activationTitle: string
          activationDesc: string
          submitSuccessTitle: string
          submitSuccessDesc: string
          submitErrorTitle: string
          submitErrorDesc: string
        }
        email: {
          subjectPrefix: string
          heading: string
          submittedOn: string
          autoresponse: string
        }
      }
    }
  }
  contact: {
    location: {
      title: string
      address: string
      transportStops: string
      contactUsAt: string
      labels: {
        postalAddress: string
        phone: string
        email: string
      }
    }
    form: {
      title: string
      successTitle: string
      successMessage: string
      successButton: string
      labels: {
        name: string
        email: string
        phone: string
        subject: string
        selectSubject: string
        subjectGeneral: string
        subjectServices: string
        subjectEvents: string
        subjectOther: string
        message: string
      }
      submit: string
      submitting: string
      toastSuccess: string
      toastError: string
      sendError: string
    }
  }
  footer: {
    call: string
    email: string
    address: string
    resources: string
    usefulLink: string
    contactUs: string
    copyright: string
    footerLinks: {
      [key: string]: string
    }
  }
  home: {
    hero: {
      welcomeTitle: string
    }
    welcome: {
      title: string
      caption: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
      readMore: string
      showLess: string
    }
    construction: {
      title: string
      content: string
      readMore: string
      showLess: string
    }
    events: {
      title: string
      loading: string
      error: string
      noEvents: string
      noUpcomingEvents: string
      viewPastEvents: string
      upcoming: string
      past: string
      all: string
      allYears: string
      allMonths: string
      details: string
    }
    news: {
      title: string
      readAllNews: string
      loading: string
      error: string
      noNews: string
      noNewsForFilters: string
      allYears: string
      allMonths: string
      date: string
      readMore: string
      showLess: string
      previousPage: string
      nextPage: string
      goToPage: string
    }
    services: {
      title: string
      weekly: string
      monthly: string
      sundayService: string
      sundayServiceTime: string
      monthlyPrayer: string
      monthlyPrayerTime: string
      moreSchedules: string
    }
    community: {
      quote: string
      author: string
    }
  }
  history: {
    title: string
    caption: string
    introduction: string
    establishment: string
    development: string
    question: string
    timeline: {
      title: string
      periods: {
        first: {
          year: string
          title: string
          description: string
        }
        second: {
          year: string
          title: string
          description: string
        }
        third: {
          year: string
          title: string
          description: string
        }
        fourth: {
          year: string
          title: string
          description: string
        }
      }
    }
    administration: {
      title: string
      administrator: string
      administratorName: string
      currentCouncil: string
      councilPeriod: string
    }
  }
  clergy: {
    title: string
    headPriest: string
    priest: string
    deacon: string
  }
  constructionStatus: {
    title: string
    statusOverview: {
      constructionStatus: string
      constructionStatusValue: string
      permitStatus: string
      permitStatusValue: string
      landStatus: string
      landStatusValue: string
    }
    content: {
      paragraph1: string
      paragraph2: string
      highlightBox: string
    }
  }
  faith: {
    title: string
    subtitle: string
    heroDescription: string
    readMore: string
    showLess: string
    tabs: {
      history: string
      beliefs: string
      sacraments: string
      liturgy: string
      calendar: string
      holyBible: string
    }
    history: {
      title: string
      source: string
      content: {
        paragraph1: string
        paragraph2: string
        paragraph3: string
        paragraph4: string
        paragraph5: string
        paragraph6: string
        paragraph7: string
        paragraph8: string
        paragraph9: string
        paragraph10: string
        paragraph11: string
        paragraph12: string
        paragraph13: string
        paragraph14: string
        paragraph15: string
        paragraph16: string
        paragraph17: string
        paragraph18: string
        paragraph19: string
        paragraph20: string
        paragraph21: string
        paragraph22: string
        paragraph23: string
        paragraph24: string
        paragraph25: string
        paragraph26: string
        paragraph27: string
        paragraph28: string
        paragraph29: string
        paragraph30: string
        paragraph31: string
        paragraph32: string
        paragraph33: string
        paragraph34: string
        paragraph35: string
        paragraph36: string
        paragraph37: string
        paragraph38: string
        paragraph39: string
        paragraph40: string
        paragraph41: string
        paragraph42: string
        paragraph43: string
        paragraph44: string
        paragraph45: string
        paragraph46: string
        paragraph47: string
        paragraph48: string
        paragraph49: string
        paragraph50: string
      }
    },
    beliefs: {
      title: string
      subtitle: string
      introduction: string
      creed: string
    }
    sacraments: {
      introduction: string
      list: string
      trinity: {
        title: string
        content: string
      }
      incarnation: {
        title: string
        content1: string
        content2: string
      }
      baptism: {
        title: string
        content: string
      }
      eucharist: {
        title: string
        content1: string
        content2: string
      }
      resurrection: {
        title: string
        content: string
      }
    }
    liturgy: {
      introduction: string
      list: {
        baptism: string
        myron: string
        eucharist: string
        repentance: string
        priesthood: string
        marriage: string
        unction: string
      }
      baptism: {
        title: string
        content1: string
        content2: string
        content3: string
        examples: {
          title: string
          content: string
        }
        whyBaptized: {
          title: string
          content: string
        }
        trinityRevelation: {
          title: string
          content: string
        }
        jordanBaptism: {
          title: string
          content: string
        }
      }
      myron: {
        title: string
        content: string
        newTestament: {
          title: string
          content: string
        }
        service: {
          title: string
          content: string
          paragraph2: string
          paragraph3: string
        }
      }
      eucharist: {
        title: string
        content: string
        newTestament: {
          title: string
          content: string
        }
        benefits: {
          title: string
          content: string
        }
        prophecy: {
          title: string
          content: string
        }
        example: {
          title: string
          content: string
        }
        reason: {
          title: string
          content: string
        }
        practice: {
          title: string
          content: string
        }
      }
      repentance: {
        title: string
        content: string
        beforeRepentance: {
          title: string
          content: string
        }
        hatingSin: {
          title: string
          content: string
        }
        lifeDecision: {
          title: string
          content: string
        }
        duringRepentance: {
          title: string
          content: string
        }
        confessionProcess: {
          title: string
          content: string
        }
        rememberingSins: {
          title: string
          content: string
        }
        fullConfession: {
          title: string
          content: string
        }
        selfAccusation: {
          title: string
          content: string
        }
        afterRepentance: {
          title: string
          content: string
        }
        fulfillingCanon: {
          title: string
          content: string
        }
        believingForgiveness: {
          title: string
          content: string
        }
        receivingCommunion: {
          title: string
          content: string
        }
        alwaysPreparing: {
          title: string
          content: string
        }
      }
      marriage: {
        title: string
        content: string
        purposes: {
          title: string
          content: string
        }
        beforeMarriage: {
          title: string
          content: string
        }
        duringMarriage: {
          title: string
          content: string
        }
        afterMarriage: {
          title: string
          content: string
        }
      }
      divorce: {
        title: string
        content: string
        reasons: {
          title: string
          content: string
        }
        death: {
          title: string
          content: string
        }
        adultery: {
          title: string
          content: string
        }
      }
      priesthood: {
        title: string
        content: string
        oldTestament: {
          title: string
          content: string
        }
        newTestament: {
          title: string
          content: string
        }
        levels: {
          title: string
          content: string
        }
        patriarch: {
          title: string
          content: string
        }
        bishop: {
          title: string
          content: string
        }
        deacons: {
          title: string
          content: string
        }
        deacon: {
          title: string
          content: string
        }
        subDeacon: {
          title: string
          content: string
        }
        anagnostis: {
          title: string
          content: string
        }
        singers: {
          title: string
          content: string
        }
        doorKeeper: {
          title: string
          content: string
        }
        womenDeacons: {
          title: string
          content: string
        }
      }
      holyOil: {
        title: string
        content: string
        benefits: {
          title: string
          content: string
        }
      }
    }
    holyBible: {
      title: string
      table: {
        bookType: string
        content: string
        law: string
        history: string
        wisdom: string
        prophecy: string
        asra: string
        awalde: string
        lawBooks: {
          pentateuch: string
          samuel: string
          psalms: string
          isaiah: string
        }
        historyBooks: {
          kings: string
          mary: string
          maryPraise: string
          jesus: string
        }
      }
      content: {
        paragraph1: string
        paragraph2: string
        paragraph3: string
        paragraph4: string
        ancientHistory: string
        paragraph5: string
        paragraph6: string
        extendedContent?: {
          paragraph7: string
          paragraph8: string
          sectionTitle1: string
          paragraph9: string
          paragraph10: string
          paragraph11: string
        }
        churchBibleRelationship?: {
          title: string
          paragraph1: string
          paragraph2: string
          paragraph3: string
          paragraph4: string
          paragraph5: string
          paragraph6: string
          paragraph7: string
          paragraph8: string
          paragraph9: string
          paragraph10: string
          paragraph11: string
          paragraph12: string
          paragraph13: string
          paragraph14: string
          paragraph15: string
          paragraph16: string
          paragraph17: string
          paragraph18: string
          paragraph19: string
          paragraph20: string
          paragraph21: string
          paragraph22: string
          paragraph23: string
          paragraph24: string
          paragraph25: string
          paragraph26: string
          paragraph27: string
          paragraph28: string
          paragraph29: string
          paragraph30: string
          paragraph31: string
          paragraph32: string
          paragraph33: string
          paragraph34: string
          paragraph35: string
          paragraph36: string
          paragraph37: string
          paragraph38: string
          paragraph39: string
          paragraph40: string
          paragraph41: string
          paragraph42: string
          paragraph43: string
          paragraph44: string
          paragraph45: string
          paragraph46: string
          paragraph47: string
          paragraph48: string
          paragraph49: string
          paragraph50: string
          paragraph51: string
          paragraph52: string
          paragraph53: string
          paragraph54: string
          paragraph55: string
          paragraph56: string
          paragraph57: string
          paragraph58: string
          paragraph59: string
          paragraph60: string
          paragraph61: string
          paragraph62: string
          paragraph63: string
          paragraph64: string
          paragraph65: string
          paragraph66: string
          paragraph67: string
          paragraph68: string
          paragraph69: string
          paragraph70: string
        }
      }
    },
    spiritualLife: {
      title: string
      prayer: {
        title: string
        description: string
      }
      fasting: {
        title: string
        description: string
      }
      charity: {
        title: string
        description: string
      }
      offering: {
        title: string
        firstFruits: {
          title: string
          definition: string
          purpose: string
          commandment: string
          blessing: string
        }
        tithe: {
          title: string
          oldTestament: string
          newTestament: string
          ownership: string
          faithfulness: string
          blessing: string
        }
        reasons: {
          title: string
          reason1: string
          reason2: string
          reason3: string
          reason4: string
          reason5: string
        }
        howToGive: {
          title: string
          way1: string
          way2: string
          way3: string
          way4: string
          way5: string
        }
      }
    }
  },
  service: {
    timihirtTarikoch?: {
      title: string
      noPosts: string
      featured: string
      authorLabel: string
      readMore?: string
      hero: {
        authorName: string
        sourceLabel: string
        sourceLinkText: string
      }
      biblicalFigures?: {
        moses: { title: string; content: string }
        david: { title: string; content: string }
        joseph: { title: string; content: string }
      }
      lessons?: {
        list: {
          title: string
          source: string
          link: string
          content: string
        }[]
      }
      content?: {
        introduction: string[]
        question: string[]
        conclusion: string[]
      }
    }
    kirstina: {
      heroDescription: string
      about: {
        title: string
        content: string
      }
      howPerformed: {
        title: string
        content: string
      }
      howCeremony: {
        title: string
        part1: string
        part2: string
        part3: string
        part4: string
      }
      naming: {
        title: string
        content: string
      }
      baptismAge: {
        title: string
        part1: string
        part2: string
        part3: string
      }
      godparents: {
        title: string
        content: string
      }
      godparentsRestrictions: string
      maeteb: {
        title: string
        part1: string
        part2: string
      }
      visibleGrace: {
        title: string
        content: string
      }
      formLink: {
        label: string
        linkText: string
      }
      serviceDetails: {
        when: {
          title: string
          description: string
        }
        duration: {
          title: string
          description: string
        }
        participants: {
          title: string
          description: string
        }
      }
    }
    sirateKidase: {
      title: string
      heroDescription: string
      definition: { title: string; content: string }
      schedule: { title: string; days: { sunday: string; wednesday: string; saturday: string } }
      division: {
        title: string
        intro: string
        part1Title: string
        part1Content: string
        part2Title: string
        part2Content: string
        part3Title: string
        part3Content: string
      }
      list: { intro: string; items: string[] }
      history: { title: string; content: string; extra1?: string; extra2?: string }
      firstCelebrants: { title: string; content: string; extra1?: string; extra2?: string; extra3?: string }
      mainPurpose: { title: string; content: string; extra1?: string; extra2?: string }
      preparation: {
        title: string
        content: string
        sections?: Array<{
          title: string
          paragraphs: string[]
          list?: string[]
        }>
      }
      rules: { title: string; sections: { title: string; items: string[] }[] }
      participation: { title: string; items: string[] }
      additionalInfo: { title: string; items: string[] }
    },
    sundaySchool: {
      title: string
      subtitle: string
      comingSoon: string
      children: { title: string; subtitle: string; comingSoon: string }
      mezmur: { title: string; comingSoon: string }
      timihirt: { title: string; comingSoon: string }
      otherActivities: { title: string; comingSoon: string }
    },
    tseloteFithat: {
      title: string
      subtitle: string
      source: string
      definition: string
      purpose: string
      connection: string
      biblical: string[]
      angels: string
      time: string
      exceptions: string[]
      church: string
      faith: string
      conclusionTitle: string
      conclusion: string[]
      prayerTypes: { name: string; time: string; description: string }[]
    }
  }
}

// (end of Translations interface)

// Helper function to get the current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// English translations
export const enTranslations: Translations = {
  common: {
    comingSoonTitle: "Coming Soon",
  },
  gallery: {
    common: {
      back: "Back",
      folders: "Folders",
      download: "Download",
      tags: "Tags",
      description: "Description",
      noThumbnail: "No thumbnail available",
    },
    photos: {
      title: "Photo Gallery",
      empty: "No photos available at this time.",
    },
    videos: {
      title: "Video Gallery",
      empty: "No videos available at this time.",
    },
    archive: {
      title: "Church Archive",
      description: "Explore our historical photos and documents",
      search: "Search",
      filters: "Filters",
      clearFilters: "Clear Filters",
      year: "Year",
      category: "Category",
      type: "Type",
      allYears: "All Years",
      allCategories: "All Categories",
      allTypes: "All Types",
      grid: "Grid",
      timeline: "Timeline",
      resultsPrefix: "Showing",
      resultsSuffixApplied: "with applied filters",
      noItems: "No archive items found with the current filters.",
    },
  },
  calendar: {
    title: "Church Calendar",
    subtitle: "View our church events in both Gregorian and Ethiopian calendars",
    calendarTypeLabel: "Calendar type",
    calendarTypeEthiopian: "Switch to Ethiopian Calendar",
    calendarTypeGregorian: "Gregorian Calendar",
    tabs: {
      orthodoxCalendar: "Ethiopian Orthodox Tewahedo Calendar",
      churchAnnualCalendar: "Church Annual Calendar",
    },
    todayInEthiopian: "Today's date in Ethiopian Calendar",
    gregorianCalendar: "(Gregorian Calendar)",
    featuresContent: "The Ethiopian Orthodox Tewahedo Church has its own unique calendar, which differs from the Gregorian calendar by 7 or 8 years. This calendar is used within the Ethiopian Orthodox Tewahedo Church for religious holidays and other important dates.",
    featuresTitle: "Features of the Ethiopian Calendar",
    feature1: "13 months (12 months of 30 days and 1 month of 5 or 6 days)",
    feature2: "New Year on Meskerem 1 (September 11/12)",
    feature3: "Church holidays are calculated by the Ethiopian calendar",
    feature4: "The sanctified calendar of the Church",
    downloadPdf: "Download PDF",
    loadingCalendar: "Loading calendar...",
    noCalendarForYear: "No calendar available for the current year",
    holidayBadge: "Ethiopian Orthodox Holiday",
    holidaySignificanceTitle: "Significance in Ethiopian Orthodox Tradition",
    holidaySignificanceText:
      "This holiday holds special significance in the Ethiopian Orthodox Tewahedo Church, with unique traditions and ceremonies that have been preserved for centuries.",
  },
  formsLinks: {
    bankDetails: {
      title: "Bank Account",
      labels: {
        bankName: "Bank Name",
        accountName: "Account Name",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        beneficiaryAddress: "Beneficiary Address",
        beneficiaryPhone: "Beneficiary Phone",
        beneficiaryEmail: "Beneficiary Email",
      },
      copyAll: "Copy All Details",
      copiedAll: "Copied All Details!",
      intlTitle: "International Bank Details",
      intlSubtitle: "Use these details for transfers from outside Germany",
      intlLabels: {
        bankName: "Bank Name",
        accountName: "Account Name",
        bankAddress: "Bank Address",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        correspondentBank: "Correspondent Bank",
      },
    },
    usefulLinks: {
      churchesGermany: {
        title: "EOTC Churches in Germany (Netherlands, Switzerland, Austria)",
        placeholder: "Search by name, region, or address...",
        search: "Search",
        noResults: "No churches found.",
        labels: {
          address: "Address",
          phone: "Phone",
          email: "Email",
          website: "Website",
        },
      },
      previousWebsite: {
        title: "Link to Previous Website",
        description: "The previous website is still available for reference and accessing historical content.",
        lastUpdated: "Last updated: January 2023",
        visitButton: "Visit Previous Website",
        imageAlt: "Previous website screenshot",
      },
    },
    forms: {
      kirstina: {
        title: "Baptism Registration",
        intro: "Please fill out this form to register for baptism at St. Michael Ethiopian Orthodox Tewahedo Church, Cologne.",
        tabs: { form: "Registration Form", requirements: "Requirements", schedule: "Schedule" },
        successTitle: "Your baptism registration has been submitted successfully!",
        successButton: "Submit another registration",
        cardTitle: "Baptism Registration Form",
        labels: {
          familyName: "Family Name / Familienname",
          firstName: "First Name / Vorname",
          baptismName: "Baptism Name / Taufname",
          fatherName: "Father's Name / Name des Vaters",
          motherName: "Mother's Name / Name der Mutter",
          godparentName: "Godparent's Name",
          country: "Country / Land",
          birthPlace: "Birth Place / Geburtsadresse",
          birthCountry: "Birth Country / Geburtsort",
          birthDate: "Birth Date / Geburtsdatum",
          baptismChurch: "Baptism Church / Kirche",
          baptismDate: "Baptism Date / Taufdatum",
          nationality: "Nationality / Staatsangehörigkeit",
          baptizingPriest: "Baptizing Priest / Taufpriester",
          email: "Email",
          phone: "Phone",
          agree: "I confirm the accuracy of the information provided",
          agreeDescription: "Please confirm the information you provided is accurate.",
        },
        placeholders: {
          familyName: "Family name",
          firstName: "First name",
          baptismName: "Baptism name",
          fatherName: "Father's name",
          motherName: "Mother's name",
          godparentName: "Godparent's name",
          country: "Country",
          birthPlace: "Birth place",
          birthCountry: "Birth country",
          baptismChurch: "Church name",
          nationality: "Nationality",
          baptizingPriest: "Baptizing priest",
          email: "Email",
          phone: "Phone number",
        },
        actions: { submit: "Submit Registration", submitting: "Submitting..." },
        validation: {
          familyNameMin: "Family name must be at least 2 characters.",
          firstNameMin: "First name must be at least 2 characters.",
          baptismNameMin: "Baptism name must be at least 2 characters.",
          fatherNameMin: "Father's name must be at least 2 characters.",
          motherNameMin: "Mother's name must be at least 2 characters.",
          godparentNameMin: "Godparent's name must be at least 2 characters.",
          countryRequired: "Country is required.",
          birthPlaceRequired: "Birth place is required.",
          birthCountryRequired: "Birth country is required.",
          birthDateRequired: "Birth date is required.",
          baptismChurchRequired: "Baptism church is required.",
          baptismDateRequired: "Baptism date is required.",
          nationalityRequired: "Nationality is required.",
          baptizingPriestRequired: "Baptizing priest name is required.",
          emailInvalid: "Please enter a valid email address.",
          phoneMin: "Phone number must be at least 6 characters.",
          agreeRequired: "You must agree to the terms and conditions.",
        },
        toast: {
          activationTitle: "Form activation required",
          activationDescription: "Please check your email for the activation link from FormSubmit.co",
          submitSuccessTitle: "Registration submitted successfully!",
          submitSuccessDesc: "Your baptism registration has been sent via email.",
          submitErrorTitle: "Error submitting form",
          submitErrorDesc: "There was an error submitting your form. Please try again or contact us directly.",
        },
        email: {
          subjectPrefix: "New Baptism Registration",
          autoresponse: "Thank you for submitting your baptism registration. We will review your information and contact you soon.",
          heading: "New Baptism Registration",
          submittedOn: "Submitted on",
        },
      },
      membership: {
        title: "Church Membership Application Form",
        intro: "Please fill out this form to apply for membership at St. Michael Ethiopian Orthodox Tewahedo Church, Cologne.",
        tabs: { form: "Registration Form" },
        successTitle: "Your application has been submitted successfully",
        successDesc: "Thank you for your application",
        successButton: "Submit another application",
        sections: {
          personal: { title: "Personal Information", description: "Enter your personal information" },
          address: { title: "Address Information", description: "Enter your current address" },
          membership: { title: "Membership Type & Family", description: "Choose membership type and add family members if applicable" },
          emergency: { title: "Emergency Contact", description: "Enter a contact person in case of emergency" },
          service: { title: "Service in Church", description: "Select the services you are interested in" },
          terms: { title: "Rules & Submission" },
        },
        labels: {
          firstName: "First Name",
          lastName: "Last Name",
          baptismalName: "Baptismal Name (if any)",
          dateOfBirth: "Date of Birth",
          email: "Email",
          phone: "Phone Number",
          address: "Residential Address",
          city: "City",
          postalCode: "Postal Code",
          membershipType: "Membership Type",
          membershipIndividual: "Individual Membership",
          membershipFamily: "Family Membership",
          familyMembers: "Family Members",
          addFamilyMember: "Add Family Member",
          remove: "Remove",
          memberN: "Family Member",
          name: "Name",
          relation: "Relation",
          age: "Age",
          emergencyContact: "Emergency Contact",
          interestsTitle: "Desired Services (you can select multiple)",
          interestsHelp: "Select the services you would like to serve in the church",
          interestsOptions: {
            worship: "Worship Service",
            choir: "Church Choir",
            sundaySchool: "Sunday School",
            youth: "Youth Programs",
            community: "Community Service",
            prayer: "Prayer Groups",
            bibleStudy: "Bible Study",
            committees: "Church Committees",
            events: "Events",
            maintenance: "Church Building/Maintenance",
          },
          skills: "Skills & Experience",
          skillsHelp: "Describe the skills you wish to serve the church with",
          agree: "I agree to the church's rules and guidelines",
          agreeHelp: "Confirm the information provided is true and you will follow the church rules and guidelines.",
          next: "Continue",
          prev: "Back",
          submit: "Submit Application",
          submitting: "Submitting...",
        },
        placeholders: {
          firstName: "Full name",
          lastName: "Last name",
          baptismalName: "Baptismal name",
          email: "example@email.com",
          phone: "+49 123 456789",
          address: "123 Example St",
          city: "Cologne",
          postalCode: "50667",
          relationExample: "e.g., spouse, child",
        },
        validation: {
          firstNameMin: "First name must be at least 2 characters.",
          lastNameMin: "Last name must be at least 2 characters.",
          dateOfBirthReq: "Date of birth is required.",
          emailInvalid: "Please enter a valid email address.",
          phoneMin: "Phone number must be at least 6 digits.",
          addressMin: "Address must be at least 5 characters.",
          cityMin: "City must be at least 2 characters.",
          postalCodeMin: "Postal code must be at least 4 digits.",
          membershipTypeReq: "Please select a membership type.",
          familyMemberNameMin: "Name must be at least 2 characters.",
          familyMemberRelationMin: "Relation must be at least 2 characters.",
          familyMembersAtLeastOne: "At least 1 family member is required.",
          emergencyNameMin: "Name must be at least 2 characters.",
          emergencyPhoneMin: "Phone number must be at least 6 digits.",
          emergencyRelationMin: "Relation must be at least 2 characters.",
          agreeRequired: "You must agree to the church rules.",
        },
        toast: {
          activationTitle: "Form activation required",
          activationDesc: "Please check your email for the activation link from FormSubmit.co",
          submitSuccessTitle: "Application submitted successfully!",
          submitSuccessDesc: "Your membership application has been sent via email.",
          submitErrorTitle: "Error submitting form",
          submitErrorDesc: "There was an error submitting your form. Please try again or contact us directly.",
        },
        email: {
          subjectPrefix: "New Membership Application",
          heading: "New Membership Application",
          submittedOn: "Submitted on",
          autoresponse: "Thank you for submitting your membership application. We will review your information and contact you soon.",
        },
      },
    },
  },
  contact: {
    location: {
      title: "St. Michael Church Cologne - Location",
      address: "Address",
      transportStops: "Transport Stops",
      contactUsAt: "Write/Call us at the addresses below",
      labels: {
        postalAddress: "Postal Address",
        phone: "Phone",
        email: "Email",
      },
    },
    form: {
      title: "Contact Us",
      successTitle: "Your message has been sent successfully!",
      successMessage: "Thank you for contacting us. We will reply shortly.",
      successButton: "Send another message",
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        subject: "Subject",
        selectSubject: "Select a subject",
        subjectGeneral: "General Inquiry",
        subjectServices: "Church Services",
        subjectEvents: "Events",
        subjectOther: "Other",
        message: "Message",
      },
      submit: "Send Message",
      submitting: "Submitting...",
      toastSuccess: "Message sent successfully!",
      toastError: "Failed to send message. Please try again.",
      sendError: "Failed to send message",
    },
  },
  events: {
    title: "Upcoming Events",
    searchPlaceholder: "Search events...",
    filters: "Filters",
    category: "Category",
    year: "Year",
    month: "Month",
    sortBy: "Sort by",
    upcomingFirst: "Upcoming first",
    laterFirst: "Later events first",
    resetFilters: "Reset Filters",
    noEvents: "No events found",
    tryAdjusting: "Try adjusting your search or filters",
    clearSearch: "Clear Search",
    viewDetails: "View Details",
    featured: "Featured",
  },
  churchNews: {
    title: "Church News",
    searchPlaceholder: "Search news...",
    filters: "Filters",
    category: "Category",
    year: "Year",
    month: "Month",
    sortBy: "Sort by",
    newestFirst: "Newest first",
    oldestFirst: "Oldest first",
    resetFilters: "Reset Filters",
    noNews: "No news articles found",
    tryAdjusting: "Try adjusting your search or filters",
    clearSearch: "Clear Search",
    readMore: "Read more",
    readFullArticle: "Read Full Article",
    featured: "Featured",
    allNews: "All News",
    by: "By",
  },
  serviceMikir: {
    title: "Mikir Service",
    description: "The counseling service in our church is a very important and necessary service. This service is aimed at providing spiritual and physical guidance and support.\n\nThe counsels given in our church are based on the Holy Bible and the teachings of the holy fathers. These counsels help us to go in the right direction in our lives and to advance in our spiritual journey.",
    saintAdviceTitle: "Saints' Advice",
    photoPlaceholder: "Mikir Service Photo",
    quotes: [
      "1. Do not falsely accuse yourself; self-accusation is not humility. Great humility is enduring when others rebuke you. - Saint Serapion",
      "2. Do not do something you don't believe in just for others. If you do, know that you will perish by it. - Book of Counsel",
      "3. One who restrains his tongue from falsehood, slander, and revealing secrets he has seen will keep his heart from sinful thoughts. - Aregawi Menfesawi",
      "4. If grace is given to you, be thankful for the grace you have received. Do not lose what you have been given by saying 'I want what I have not been given.' - Mar Isaac",
      "5. One who humbles and belittles himself will receive knowledge from God. One who says 'I am knowledgeable' will be separated from the wisdom of the Creator. - Aregawi Menfesawi",
      "6. \"O Lord, save me from those who count me as righteous while I am dust and ashes.\" - Abba Antonios",
      "7. \"If we cannot examine and know creatures, how can we examine and know Him who created everything?\" - Saint Athanasius",
      "8. \"As gold is tested by fire, so the grace and glory of Christ cannot be obtained without being tested. The trial and fire of this world passes away quickly, but the fire of hell into which sinners enter remains burning forever.\" - Saint Minas",
      "9. \"Do not bind evil on anyone, do not judge. If you keep this, you will inherit the inheritance.\" - The Great Abba Macarius",
      "10. \"Many times I speak a lot and I regret my speaking, but I have never regretted my silence.\" - Saint Arsenius",
      "11. \"The Church is our refuge. The Church is Noah's ark. We are sheltered within it, but outside it waves and storms have opened.\" - Saint Endrias",
      "12. \"If we distance our hearts from the perishable and corruptible earthly desires and cleanse them from sin through repentance, we will be filled with the grace of the Holy Spirit.\" - Abba Abraham, Lover of the Poor",
      "13. \"Overcoming bodily desires is martyrdom that leads to the crown of life.\" - Blessed Abune Gorgorios II",
      "14. \"Because the life of the Church is on the cross, it is full of trials. Therefore, strengthen the position of your church rather than your personal life.\" - Blessed Abune Gorgorios II",
      "15. \"When your spirit urges you to sleep before you pray, do not accept it by saying yes. Rather, add the Psalms of David and spend the whole night praying.\" - Saint Isaac the Syrian",
      "16. \"If we remember and regret our sins, God will forget them. If we forget and are comforted by our sins, God will remember them.\" - Saint Antonios"
    ]
  },
  header: {
    menuItems: {
      Home: "Home",
      "About us": "About us",
      Service: "Service",
      "News & Events": "News & Events",
      Gallery: "Gallery",
      "Forms & Links": "Forms & Links",
      Contact: "Contact",
    },
    subMenuItems: {
      "Our History": "Our History",
      "Our Clergy": "Our Clergy",
      "Our Faith": "Our Faith",
      "Construction Status": "Construction Status",
      Kirstina: "Kirstina",
      "Sirate Kidase": "Sirate Kidase",
      "Sunday School": "Sunday School",
      Mezmur: "Mezmur",
      Timihirt: "Timihirt",
      "ሕፃናት እና ታዳጊዎች": "Children & Youth",
      "Other Activities": "Other Activities",
      "Tselote Fithat": "Tselote Fithat",
      Mikir: "Mikir",
      "Timihirt & Tarikoch": "Timihirt & Tarikoch",
      "Upcoming Events": "Upcoming Events",
      "Church News": "Church News",
      Calendar: "Calendar",
      Photos: "Photos",
      Videos: "Videos",
      Archive: "Archive",
      "Bank Details": "Bank Details",
      Forms: "Forms",
      "Membership Form": "Membership Form",
      "Kirstina Form": "Kirstina Form",
      "Useful Links": "Useful Links",
      "Churches in Germany": "Churches in Germany",
      "Previous Website": "Previous Website",
      Location: "Location",
      "Contact Form": "Contact Form",
    },
    donate: "Donate",
    findUs: "Find Us",
  },
  footer: {
    call: "Call",
    email: "Email",
    address: "Address",
    resources: "Resources",
    usefulLink: "Useful Links",
    contactUs: "Contact Us",
    copyright: `Copyright © ${getCurrentYear()} - All rights reserved. Powered by Marefiyatech`,
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "Sunday School",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "Churches in Germany",
      "የቀን መቁጠሪያ": "Calendar",
      "ሕፃናት እና ታዳጊዎች": "Children & Youth",
      "ለመለገስ": "Donate"
    }
  },
  home: {
    hero: {
      welcomeTitle: "WELCOME TO ST. MICHAEL ETHIOPIAN ORTHODOX CHURCH IN COLOGNE"
    },
    welcome: {
      title: "This is the official website of St. Michael Ethiopian Orthodox Tewahedo Church in Cologne, Germany, under the Diocese of Debre Selam.",
      caption: "2017 Ethiopian Calendar Hosanna Celebration",
      paragraph1: "Among the first established Ethiopian Orthodox churches in Europe, Africa, America, Canada, and Australia, the St. Michael Ethiopian Orthodox Tewahedo Church in Cologne, Germany, holds a special place as the pioneer and flagship church.",
      paragraph2: "Our church was established with the mission of spreading the Gospel worldwide, through the dedicated efforts of clergy who came to Europe for education, under the leadership of Archpriest Dr. Merawi Tege and Deacon Bedemariam Mersha, with the blessing of His Holiness Abune Tekle Haimanot, then Patriarch of the Ethiopian Orthodox Tewahedo Church, and the decision of the Holy Synod in 1975. It was opened under the leadership of His Holiness Abune Elias, who was then Archbishop of Djibouti and East Africa, and is now Archbishop of Nordic and Greek Diocese.",
      paragraph3: "The establishment process was as follows: In 1971, Archpriest Dr. Merawi Tege and Deacon Bedemariam Mersha were sent to Germany for higher education with the blessing of His Holiness Abune Tekle Haimanot. Within two years of arriving in Germany, the idea of establishing a church was discussed at the principle level. They began gathering with brothers living in Heidelberg under the name of Our Lady Mary's Association. The association served as a bridge for communication. Especially in 1973, the first liturgy was celebrated in Heidelberg, Germany. The faithful also received communion. Through this spiritual service, Father Aregawi Welde Gabriel, who was later to become Archbishop of all Europe, His Holiness Abune Yohannes, was found to provide spiritual service to Jamaicans in London. He also performed the liturgy. His Holiness Abune Yohannes had good relations due to his humanity, which was filled with love. When the church was established, they were present representing their church on the feast day. After the first liturgy was performed, the desire to establish the church grew stronger. Ethiopian participants from Heidelberg and other cities began celebrating seasonal, Christmas, and Easter feasts.",
      readMore: "Read More",
      showLess: "Show Less"
    },
    construction: {
      title: "Church Building Construction",
      content: "Our St. Michael Ethiopian Orthodox Church in Cologne, Germany, has been blessed by God to acquire additional worship, blessing, and ownership opportunities from the previous property owners. Through the power of St. Michael, we have moved from strength to strength, from blessing to blessing, from narrowness to expansion, and now own a large area (1840 square meters) in a foreign land. After the purchase of our church property was completed, according to the planned plan, the necessary study was made to expand the interior, and work began with the architect. Since our church was registered as a monument, it was difficult to design our church. However, the necessary construction process was submitted to the relevant government bodies (Stadt Köln Bauamt) as the first application (Bauantrag). However, after obtaining permission to build, we needed distance from our neighbors, and when construction began, we needed to obtain consent from our neighbors whose land might be affected (Baulast) on the boundary. However, our neighbors demanded a lot of money for this, and to avoid this, the Baulast plan was made with Bauphysik. In addition, when the first church was purchased, the property on the front side was owned by the Evangelical Church, and this area was also purchased and made part of our church, and this improvement application was submitted to Stadt Köln Bauamt again. After the building plan (Bauplan) was improved, the money to be paid to the architects and the time to obtain the building permit took a long time. Now we are waiting to get the building permit:",
      readMore: "Read More",
      showLess: "Show Less"
    },
    events: {
      title: "Upcoming Events",
      loading: "Loading upcoming events...",
      error: "Error:",
      noEvents: "No events found",
      noUpcomingEvents: "No upcoming events found",
      viewPastEvents: "View Past Events",
      upcoming: "Upcoming",
      past: "Past",
      all: "All",
      allYears: "All Years",
      allMonths: "All Months",
      details: "Details"
    },
    news: {
      title: "News",
      readAllNews: "Read All News",
      loading: "Loading news...",
      error: "Error:",
      noNews: "No news found",
      noNewsForFilters: "No news available for the selected filters",
      allYears: "All Years",
      allMonths: "All Months",
      date: "Date:",
      readMore: "Read more",
      showLess: "Show Less",
      previousPage: "Previous page",
      nextPage: "Next page",
      goToPage: "Go to page"
    },
    services: {
      title: "Service Schedule",
      weekly: "Weekly",
      monthly: "Monthly",
      sundayService: "Liturgy",
      sundayServiceTime: "Every Sunday",
      monthlyPrayer: "Monthly Prayer",
      monthlyPrayerTime: "Every St. Michael's Day",
      moreSchedules: "More Schedules"
    },
    community: {
      quote: "The establishment of this church was a foundation for the level reached by the Ethiopian Orthodox Tewahedo Church in Germany and throughout Europe. Archpriest Dr. Merawi Tege, after leaving Germany, made a successful apostolic journey to establish churches in countries like Italy, Sweden, and France, starting from this church. Therefore, when we celebrate the feast of the Archbishop of Cologne, Debre Selam St. Michael Church, we remember that this is the foundation from which the Ethiopian Orthodox Tewahedo Church spread in Germany and various European countries and began to move with its proper structure.",
      author: "- His Holiness Abune Dionysius, Archbishop of the Ethiopian Orthodox Tewahedo Church in Germany and surrounding areas and Archbishop of East Gojjam Diocese"
    }
  },
  history: {
    title: "History of St. Michael Church in Cologne",
    caption: "Photo memory from the meeting when the location was decided to be purchased",
    introduction: "Among the first established Ethiopian Orthodox churches in Europe, Africa, America, Canada, and Australia, the St. Michael Ethiopian Orthodox Tewahedo Church in Cologne, Germany, holds a special place as the pioneer and flagship church. Our church was established under the leadership of Archpriest Dr. Merawi Tege, with the paternal blessing of His Holiness Abune Tekle Haimanot, who was then Archbishop of Djibouti and East Africa, and is now Archbishop of Nordic and Greek Diocese.",
    establishment: "The establishment process was as follows: In 1971, Archpriest Dr. Merawi Tege and Deacon Bedemariam Mersha were sent to Germany for higher education with the blessing of His Holiness Abune Tekle Haimanot. Within two years of arriving in Germany, the idea of establishing a church was discussed at the principle level. They began gathering with brothers living in Heidelberg under the name of Our Lady Mary's Association. The association served as a bridge for communication. Especially in 1973, the first liturgy was celebrated in Heidelberg, Germany. The faithful also received communion. Through this spiritual service, Father Aregawi Welde Gabriel, who was later to become Archbishop of all Europe, His Holiness Abune Yohannes, was found to provide spiritual service to Jamaicans in London. He also performed the liturgy. His Holiness Abune Yohannes had good relations due to his humanity, which was filled with love. When the church was established, they were present representing their church on the feast day. After the first liturgy was performed, the desire to establish the church grew stronger. Ethiopian participants from Heidelberg and other cities began celebrating seasonal, Christmas, and Easter feasts.",
    development: "After this, all conditions began to take various forms. The number of believers also increased. During the seminary years of Europeans, it was a time when many Ethiopians and Eritreans came to Germany. Especially 'Landesarbeitsgemeinschaft Ausländische Flüchtlinge Nordrhein-Westfalen in Düsseldorf e.V.' was established with government budget and was following refugee affairs. A study conference on Ethiopian refugees was held in Düsseldorf from 8-11, 1973. The founders of our church were invited to pray and teach with their professor Dr. Hayer. Was the Sunday program only ours? They were able to provide sufficient understanding about our church by responding to questions presented in German by their teacher. After leaving the country, everyone who heard the word of God for even one day was reading. Especially Professor Hayer, who was determined to help us, can be said to have been moved by the feeling of that people.",
    question: "The question 'Why don't we establish a church?' began to be asked daily. For this, a suitable opportunity arose. When His Holiness Abune Tekle Haimanot, Patriarch of Ethiopia, visited Germany at the invitation of the German Evangelical Church in 1973, a question was raised in Frankfurt that their permission would be needed to establish a church. After His Holiness thought for a while, they told the students, 'Why don't you return to your country after finishing your studies?' They replied, 'Our holy father, since many people have left the country, our believers also need an Orthodox church like others.' The blessed archbishops who came to visit them, Abune Zena Markos, Abune Gorgorios, Abune Elias, and the chief secretary of the Holy Synod, Lique Ma'amran Ababaw, who had completed their studies abroad, supported the idea because they knew the situation of Greek and other Orthodox churches. Finally, they said 'Write a letter to anyone' and left after receiving communion.",
    timeline: {
      title: "Our Church in History",
      periods: {
        first: {
          year: "1971-1981",
          title: "The First 10 Years",
          description: "1. Two spiritual students who came from home country for education.\n2. The first liturgy in Heidelberg (Archpriest Merawi Tege and Priest Zelealem)\n3. When Patriarch His Holiness Abune Tekle Haimanot visited Germany, Archpriest Merawi Tege requested permission to open the first St. Michael Church.\n4. Formation and meeting of the first parish council.\n5. The first St. Michael spiritual service in Germany (1981-1983), serving while traveling from Heidelberg (1983-1985).\n6. Archpriest Merawi Tege, coordinating other priests, provided spiritual service in Germany and various European countries starting from Cologne.\n7. The St. Yared singers invited by German television station WDR performed church music in a concert hall."
        },
        second: {
          year: "1981-1991",
          title: "The Second 10 Years",
          description: "1. Presentations about the Ethiopian Orthodox Tewahedo Church in churches in Germany.\n2. German church religious fathers and servants visiting Ethiopia.\n3. Participation in the day when churches in Germany gather (Kirchen Tag).\n4. Annual reports at the annual clergy meeting of the Ethiopian Orthodox Tewahedo Church."
        },
        third: {
          year: "1991-2001",
          title: "The Third 10 Years",
          description: "1. Church purchase that was completed with the good will of the former Evangelical Church.\n2. Church renovation.\n3. Choir service.\n4. 25th anniversary celebration for the first time.\n5. 30th anniversary celebration."
        },
        fourth: {
          year: "2001-2011",
          title: "The Final 10 Years",
          description: "1. Various spiritual services.\n2. Uninterrupted service during Corona time.\n3. Additional house and land purchase."
        }
      }
    },
    administration: {
      title: "Church Administration",
      administrator: "Administrator",
      administratorName: "Archpriest Dr. Merawi Tege",
      currentCouncil: "Current Parish Council Administration",
      councilPeriod: "(2016-2019 Ethiopian Calendar)"
    }
  },
  clergy: {
    title: "Church Clergy",
    headPriest: "Head Priest",
    priest: "Priest",
    deacon: "Deacon"
  },
  constructionStatus: {
    title: "Construction Status",
    statusOverview: {
      constructionStatus: "Construction Status",
      constructionStatusValue: "In Progress",
      permitStatus: "Permit Status",
      permitStatusValue: "Under Review",
      landStatus: "Land Status",
      landStatusValue: "1840 Square Meters"
    },
    content: {
      paragraph1: "Our St. Michael Ethiopian Orthodox Church in Cologne, Germany, has been blessed by God to acquire additional worship, blessing, and ownership opportunities from the previous property owners. Through the power of St. Michael, we have moved from strength to strength, from blessing to blessing, from narrowness to expansion, and now own a large area (1840 square meters) in a foreign land.",
      paragraph2: "After the purchase of our church property was completed, according to the planned plan, the necessary study was made to expand the interior, and work began with the architect. Since our church was registered as a monument, it was difficult to design our church. However, the necessary construction process was submitted to the relevant government bodies (Stadt Köln Bauamt) as the first application (Bauantrag). However, after obtaining permission to build, we needed distance from our neighbors, and when construction began, we needed to obtain consent from our neighbors whose land might be affected (Baulast) on the boundary. However, our neighbors demanded a lot of money for this, and to avoid this, the Baulast plan was made with Bauphysik. In addition, when the first church was purchased, the property on the front side was owned by the Evangelical Church, and this area was also purchased and made part of our church, and this improvement application was submitted to Stadt Köln Bauamt again.",
      highlightBox: "After the building plan (Bauplan) was improved, the money to be paid to the architects and the time to obtain the building permit took a long time. Now we are waiting to get the building permit:"
    }
  },
  faith: {
    title: "Our Faith",
    subtitle: "Ethiopian Orthodox Tewahedo Church",
    heroDescription: "One of the oldest Christian traditions in the world",
    readMore: "Read More",
    showLess: "Show Less",
    tabs: {
      history: "History",
      beliefs: "Core Beliefs",
      sacraments: "Sacraments",
      liturgy: "Liturgy",
      calendar: "Calendar",
      holyBible: "Holy Bible"
    },
    history: {
      title: "History of the Ethiopian Orthodox Church",
      source: "Source: https://stmaryeotctoronto.com/am/our-history",
      content: {
        paragraph1: "Ancient Greek poets, writers, and historians wrote extensively about Ethiopia. Among them, Homer described the country and its people as \"flawless races,\" while Herodotus described Ethiopia's geographical location as \"a territory extending south of Egypt, around the Red Sea area, approaching the Indian Ocean.\" Speaking of its people, he said, \"They are long-lived, wealthy, and truthful people.\"",
        paragraph2: "In the Old Testament, the Queen of Sheba's visit to King Solomon in Jerusalem is recorded in 1 Kings 10:1-13. Among Ethiopians, this journey is believed to have spread the Old Testament in Ethiopia and brought the Ark of the Covenant to Ethiopia through Menelik I, the son of King Solomon and the Queen of Sheba.",
        paragraph3: "Since then, Jewish faith and worship have become the people's belief and daily life guide. The kingdom founded by Menelik I was known as the Axumite Dynasty. Additionally, many historical records indicate that a free state was established in Ethiopia around 4,522 BC. Today's Axum was the capital of ancient Ethiopia, the center of civilization, and the birthplace of Christianity, as evidenced by the people's way of life and religiosity, historical heritage, standing monuments, and various works of art. Axum remains a primary sacred place of religious manifestation.",
        paragraph4: "Christianity entered Ethiopia during the apostolic era, as evidenced by biblical and other historical records (Acts 8:26-36). Eusebius, the great church historian of the fourth century, called \"the baptism of the Ethiopian eunuch the first fruit of Christian faith in the world.\" This significant event was also recorded by Rufinus, followed by historians Theodoret, Socrates, and Sozomen.",
        paragraph5: "However, Christianity became the state religion and began to be led at the episcopal level in the fourth century during the Axumite period. This happened when the Patriarch of Alexandria, Saint Athanasius, appointed Abba Frumentius as the first bishop of Ethiopia during the reign of Abraha and Atsbeha. King Ezana replaced the moon images on his coins with the sign of the cross, gaining primacy among the kings of the world. In 356 AD, the Arian king Constantius wrote to the Axumite king, saying, \"Bishop Frumentius is a destroyer of the Christian faith and should be sent to Rome.\" However, this request was not accepted. Saint Frumentius later became known among Ethiopians as Abba Salama (Father of Peace) and Kasate Berhan (Revealer of Light). From this time on, he received the title Abun, which means \"our father.\"",
        paragraph6: "The arrival of the Nine Saints (Tse'atu Qiddusan) to Ethiopia strengthened the Ethiopian Orthodox Tewahedo Church. These Nine Saints are said to have come to Ethiopia from the Byzantine Empire in 479 AD. They learned the local language, Ge'ez, and the culture, and translated the Bible and many different spiritual books from Hebrew, Greek, and Syriac languages into Ge'ez. In addition to preaching the Gospel, they established Christian monasteries, founding monastic life.",
        paragraph7: "Origin of Christianity in Ethiopia",
        paragraph8: "Christianity entered Ethiopia during the apostolic era, as evidenced by biblical and other historical records (Acts 8:26-36). Eusebius, the great church historian of the fourth century, called \"the baptism of the Ethiopian eunuch the first fruit of Christian faith in the world.\" This significant event was also recorded by Rufinus, followed by historians Theodoret, Socrates, and Sozomen. However, Christianity became the state religion and began to be led at the episcopal level in the fourth century during the Axumite period. This happened when the Patriarch of Alexandria, Saint Athanasius, appointed Abba Frumentius as the first bishop of Ethiopia during the reign of Abraha and Atsbeha. King Ezana replaced the moon images on his coins with the sign of the cross, gaining primacy among the kings of the world. In 356 AD, the Arian king Constantius wrote to the Axumite king, saying, \"Bishop Frumentius is a destroyer of the Christian faith and should be sent to Rome.\" However, this request was not accepted. Saint Frumentius later became known among Ethiopians as Abba Salama (Father of Peace) and Kasate Berhan (Revealer of Light). From this time on, he received the title Abun, which means \"our father.\"",
        paragraph9: "The Ethiopian Orthodox Tewahedo Church accepts only the three ecumenical councils: the Council of Nicaea (325 AD), the Council of Ephesus (381 AD), and the Council of Constantinople (431 AD).",
        paragraph10: "Monasticism and Monasteries in Ethiopia",
        paragraph11: "Christian monastic life began to flourish in Ethiopia after Christianity became the national faith of the country and gained acceptance from the kings. Following the monastic system of the Egyptian Saint Anthony, the Nine Saints who came to the country in 479 AD established it.",
        paragraph12: "This is why the period from the 4th to the 7th century is known as the golden age. During these centuries, many evangelical preaching works spread, and it was a time when various spiritual works and writings were carried out. Just as the monasteries in Europe made Western culture spread and be preserved in the Middle Ages, the monasteries of the Ethiopian Orthodox Tewahedo Church also served as centers of knowledge and civilization, developing literature, architecture, poetry, music, hymns, and spiritual teachings. In the 5th century, the famous church scholar Saint Yared, based on the Holy Bible, created sacred music, hymns, and dances for the church, and today it has made it the only church in the world that has and uses a prayer and praise system that is pleasing to the ear.",
        paragraph13: "",
        paragraph14: "",
        paragraph15: "",
        paragraph16: "",
        paragraph17: "",
        paragraph18: "",
        paragraph19: "",
        paragraph20: "",
        paragraph21: "",
        paragraph22: "",
        paragraph23: "",
        paragraph24: "",
        paragraph25: "",
        paragraph26: "",
        paragraph27: "",
        paragraph28: "",
        paragraph29: "",
        paragraph30: "",
        paragraph31: "",
        paragraph32: "",
        paragraph33: "",
        paragraph34: "",
        paragraph35: "",
        paragraph36: "",
        paragraph37: "",
        paragraph38: "",
        paragraph39: "",
        paragraph40: "",
        paragraph41: "",
        paragraph42: "",
        paragraph43: "",
        paragraph44: "",
        paragraph45: "",
        paragraph46: "",
        paragraph47: "",
        paragraph48: "",
        paragraph49: "",
        paragraph50: ""
      }
    },
    beliefs: {
      title: "Core Beliefs",
      subtitle: "Prayer of Faith",
      introduction: "The foundation of faith that the Ethiopian Orthodox Tewahedo Church establishes, which is prayed daily in prayer and during the liturgy, individually or communally, is based on the foundations of faith established by our holy fathers at the Council of Nicaea and the Council of Constantinople (Niceno-Constantinopolitan Creed). This prayer is recited orally by new believers (catechumens) before baptism, and for infants, the Christian mother or father recites it on their behalf. The prayer is as follows:",
      creed: "We believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus Christ, the only-begotten Son of God, begotten of His Father before all worlds, God of God, Light of Light, very God of very God, begotten, not made, being of one substance with the Father, by whom all things were made. Who, for us men and for our salvation, came down from heaven, and was incarnate by the Holy Ghost of the Virgin Mary, and was made man. And was crucified also for us under Pontius Pilate. He suffered and was buried. And the third day He rose again according to the Scriptures. And ascended into heaven, and sitteth on the right hand of the Father. And He shall come again with glory to judge both the quick and the dead. Whose kingdom shall have no end. And we believe in the Holy Ghost, the Lord and Giver of Life, who proceedeth from the Father and the Son, who with the Father and the Son together is worshipped and glorified, who spake by the prophets. And we believe in one holy catholic and apostolic Church. We acknowledge one baptism for the remission of sins. And we look for the resurrection of the dead, and the life of the world to come. Amen."
    },
    sacraments: {
      introduction: "The Ethiopian Orthodox Tewahedo Church's doctrinal teaching is based on the doctrinal teachings that came from the Holy Bible and were established by the three ecumenical councils. The main points are summarized in five fundamental points, which are called the five pillars of mysteries.",
      list: "These are: Mystery of the Trinity, Mystery of the Incarnation, Mystery of Baptism, Mystery of the Eucharist, and Mystery of the Resurrection.",
      trinity: {
        title: "1. Mystery of the Trinity",
        content: "The teaching of the Mystery of the Trinity is the fundamental foundation of Christian faith that explains the Trinity and unity of God. This dogma is profound; this teaching cannot be reached by research alone unless it is revealed by God. \"No one knows the Son except the Father, and no one knows the Father except the Son and anyone to whom the Son chooses to reveal him.\" (Matt. 11:27) The one God we worship is one in essence and three in persons. This is the teaching that our Orthodox Church accepts. \"The Spirit is truth, and the Spirit is the one who testifies. The Spirit, the water, and the blood are three, and the three are one.\" (1 John 1:5-7)"
      },
      incarnation: {
        title: "2. Mystery of the Incarnation",
        content1: "The Mystery of the Incarnation explains to us God's work of salvation, that He became man to save people. The reason this was necessary is because our sickness/infirmity needed a healing Savior. (Luke 19:10) Our darkness needed light. (Matt. 4:12-17) We needed someone to free us from the yoke of slavery. (Gal. 5:1) Regarding this matter, the Prayer of Faith also says, \"For us and for our salvation, He came down from heaven. By the Holy Spirit and the Virgin Mary, He became man.\"",
        content2: "Under the Mystery of the Incarnation lies the Mystery of the Union, which our Church accepts as the doctrinal teaching of Saint Cyril of Alexandria. \"The nature of the Son's divinity\" - in other words, when the two natures \"divinity and humanity\" are united, Christ's nature is one only. The unity of the Word and flesh was united in the womb of the Holy Virgin Mary, therefore the nature of humanity is revealed to divinity, and the nature of divinity is revealed to humanity. In this pure union, \"God and flesh became one without confusion and without change, and our Lord Jesus Christ is perfect man and perfect God.\" That is, the God who became man, our Savior Jesus Christ, after the union, has one body and one nature - perfect man and perfect God. Therefore, it is not possible to speak of two natures. Therefore, in John's Gospel it is written: \"The Word became flesh and dwelt among us, and we have seen his glory, the glory as of the only Son from the Father.\" (John 1:14) Saint Athanasius also expressed it: \"God became man so that man might become God and become partakers of the divine nature.\" (2 Peter 1:4)"
      },
      baptism: {
        title: "3. Mystery of Baptism",
        content: "The Mystery of Baptism is the entrance door to membership in the Church and the grace of our God that we receive when we are born of the Holy Spirit and become children of God. (Mark 16:16, John 19:34-35, Acts 2:38). Baptism is the door of faith that leads us into Christian life, and baptism is performed only once and is not repeated in any way. (Eph. 4:4-7, John 3:3-8)"
      },
      eucharist: {
        title: "4. Mystery of the Eucharist",
        content1: "Our Lord and Savior Jesus Christ established it at the Last Supper with His disciples on Maundy Thursday. He also said, \"Do this in remembrance of my death and resurrection\" (Matt. 26:26-30)",
        content2: "Saint Paul also said, \"This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.\" Therefore, it was given for people, not for God, and through the Eucharist, it delivers us from the bondage of sin and brings us to God. (John 6:53-57) The Eucharist entered the hearts of the early Christians and became a connection between divine grace and human life."
      },
      resurrection: {
        title: "5. Mystery of the Resurrection",
        content: "The Mystery of the Resurrection is the mystery that explains our resurrection from our earthly flesh, our victory over death, and the eternal life we will receive afterward. This is what is revealed as the glorious coming of our Lord and Savior Jesus Christ. Just as any seed first dies and then bears fruit. (John 12:24, 1 Cor. 15:36) Therefore, we all die and then rise again to become heirs of the kingdom. The Prayer of Faith also says, \"We look for the resurrection of the dead and the life of the world to come. Amen.\""
      }
    },
    liturgy: {
      introduction: "The word 'mystery' originates from the Greek language and means hidden, secret, veiled, profound, and not revealed except to close relatives. It is divided into two categories: the mystery of creation and the mystery of the Creator. The mystery of creation has two contents: the mystery of man and angels. The mystery of God the Creator found in the Church is a precious, beloved, and blessed gift. The Apostle Peter, the light of the world, explained it in his precious words: 'Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy.' By explaining that it is the treasure that God gives us from His hidden and profound grace. Based on this, the seven mysteries performed in our Church are established by number 7. Their example is for the seven heavens. These seven mysteries of the Church are called mysteries because they are special gifts of the Holy Spirit that we cannot see with our eyes or touch with our hands, which are given through these mysteries. The fathers say that a mystery that is hidden in reading is called a mystery, speaking of its hiddenness and profundity. The seven Church mysteries are also seven, as it says in Proverbs 9:1: 'Wisdom has built her house; she has set up its seven pillars.' The one called Wisdom is our Lord and Savior Jesus Christ, and the seven pillars are the example of the seven Church mysteries.",
      list: {
        baptism: "Mystery of Baptism",
        myron: "Mystery of Myron",
        eucharist: "Mystery of the Eucharist",
        repentance: "Mystery of Repentance",
        priesthood: "Mystery of Priesthood",
        marriage: "Mystery of Marriage",
        unction: "Mystery of Unction"
      },
      baptism: {
        title: "Mystery of Baptism",
        content1: "As our Lord God and Savior Jesus Christ said to Nicodemus, 'Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.' Through water and the Spirit, we are born and receive the sonship of the Trinity, enter the kingdom of heaven, have our sins forgiven, and receive salvation. This is the great mystery (John 3:5). Baptism is the special way of life given to all who believe in the Mystery of the Trinity and the Mystery of the Incarnation to end sin, receive the grace of sonship from the Trinity, and inherit the kingdom of God. Baptism is called 'Epiphany' in Syriac language, 'Asterio' in Ge'ez, and 'Revelation' in Amharic. The word literally means entering into water, emerging, immersing, and submerging. Baptism is one of the seven Church mysteries (Mystery of Baptism, Mystery of Myron, Mystery of the Eucharist, Mystery of Repentance, Mystery of Priesthood, Mystery of Marriage, Mystery of Unction).",
        content2: "The founder of the Mystery of Baptism is our Lord and Savior Jesus Christ Himself. However, before our Lord's baptism, the Jews had baptism for purification and forgiveness of sins. This was a system and tradition of washing the body and clothes, washing all the utensils that serve in God's house, and purifying on all holy days and places where God reveals Himself in salvation. It was also a practice that had God's permission. Before approaching God's house and entering the holy service, they also had the obligation to wash their feet and hands. By washing their bodies from external dirt and making them clean, it was a tradition and mystery that indicated making the inner life clean before the pure and holy God.",
        content3: "",
        examples: {
          title: "Examples of Baptism",
          content: "Abraham crossing the Jordan and going to Melchizedek is an example of baptism. Abraham is the example of Melchizedek, who is the example of Jesus Christ. (Gen. 14:17) Job was baptized in the Jordan and was healed from his disease. This is an example of believers being baptized and healed from the disease of the flesh and the disease of the soul. Naaman the Syrian was baptized and was healed from leprosy. (2 Kings 5:14) This is an example of believers being baptized and saved from the corruption of the flesh and the corruption of the soul. Noah's ark is an example of baptism. Gen. 6:13 The Apostle Saint Peter also said: \"When God's patience waited in the days of Noah, during the building of the ark, in which a few, that is, eight persons, were saved through water. Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience, through the resurrection of Jesus Christ.\" (1 Pet. 3:20) The circumcision given to Abraham as a law is an example of baptism. Although Abraham was circumcised after he was old, God commanded that his children be circumcised on the eighth day after they were born. (Gen. 17:9) \"In him also you were circumcised with a circumcision made without hands, by putting off the body of the flesh, by the circumcision of Christ, having been buried with him in baptism, in which you were also raised with him through faith in the powerful working of God, who raised him from the dead.\" (Col. 2:11)"
        },
        whyBaptized: {
          title: "Why was our Lord baptized?",
          content: "To cancel our debt certificate. When Adam and Eve were overwhelmed by their punishment and their suffering increased, their deceiver Satan said to them, 'Write your names and give them to me.' Adam wrote 'Adam, servant of Satan (Adam, male servant of Satan)' and Eve wrote 'Eve, servant of Satan (Eve, female servant of Satan)' and gave it to him. Satan then placed this certificate, one in Sheol and one in the Jordan. When our Lord was baptized in the Jordan, He tore it up according to His humanity. This is why our Lord was baptized in the Jordan - to cancel this writing. This is why the Apostle Saint Paul said: 'And you, who were dead in trespasses and the uncircumcision of your flesh, God made alive together with him, having forgiven us all our trespasses, by canceling the record of debt that stood against us with its legal demands. This he set aside, nailing it to the cross.' (Col. 2:14)"
        },
        trinityRevelation: {
          title: "To reveal the Mystery of the Trinity",
          content: "When our Lord was baptized in the Jordan, the Mystery of the Trinity was revealed. The Father said from the cloud, 'This is my beloved Son, with whom I am well pleased,' making it known that the Father is the Father of the Son. The Holy Spirit also revealed that He is the life of nature by descending like a dove and resting on Him, and the Son was seen in His separate body being baptized in the Jordan. Therefore, when we say to reveal the mystery, it means that the mystery of unity and trinity was baptized to be known in a clear state. (Matt. 3:16) To fulfill the prophecy: 'The waters saw you, O God; the waters saw you and were afraid; indeed, the deep trembled. The clouds poured out water; the skies gave forth thunder.' (Ps. 77:16) When was our Lord baptized? Our Lord and Savior Jesus Christ was baptized in the year 5531 of the world, according to Luke's era, on Tuesday, the 11th day of Tir, at the 10th hour of the night. According to the Royal Law, Article 19, when He was baptized, He was 30 years old and 13 days. (Luke 3:23) In the Old Testament system and tradition, priests and spiritual servants did not appear in public before the age of 30 for the mission of the house of God and spiritual services. Even if it was very necessary, there was no tradition of appointing for service before the ages of 20 and 25. The servants of the house of God had to be mature in age and knowledge, tested in character and work experience, and attested by the people they served to carry out their mission competently. (Ex. 4:3; 1 Chron. 23:24; 1 Tim. 3:6-10) To fulfill that system, our Lord was baptized and revealed for the teaching of the Gospel at the age of 30. John the Baptist also appeared in the Jordan, Judea, in the wilderness to announce the coming of the Lord after he was 30 years old. The other great reason is to restore the sonship that was taken away from Adam, the first of all men, who was 30 years old when he was created and given on the 40th day, and then taken away because of sin. Christ was baptized not to gain glory but to testify to His sonship of the Father's nature (His divine nature) from the Father and the Holy Spirit, to sanctify the water, to cancel the debt certificate of Adam's children, and to restore the glory of sonship that was lost in error. After the Lord was baptized and came out of the water, the Holy Spirit descended like a dove and rested on Him, and the Father testified from the cloud, saying, 'This is my Son,' confirming the mystery of the Trinity, unity and trinity clearly. (Matt. 3:16)"
        },
        jordanBaptism: {
          title: "Our Lord's Baptism in the Jordan",
          content: "It is known that there are many rivers, streams, and lakes in the Jerusalem area. The Lord performed His baptism in the Jordan to fulfill the prophecy that was spoken beforehand. 'The sea looked and fled; Jordan turned back.' (Ps. 113:3) Along with this, the Jordan, which has one source from above, flows low and is divided by an island, then rejoins, has the meaning of showing that all people and nations, who were divided by circumcision and uncircumcision (by circumcision and non-circumcision), become one through our Lord's baptism. Israel crossed the Jordan and entered the promised land. Believers who believe and are baptized also inherit the kingdom of heaven through baptism. The other is to cancel the debt certificate that was placed in the Jordan for us. (Col. 2:14)"
        }
      },
      myron: {
        title: "Mystery of Myron",
        content: "Myron means oil, and it is a holy oil used only for spiritual service. It is prepared by mixing and boiling various fragrant herbs. <br /> In the Old Testament era, priests were anointed, kings were anointed, and holy anointing for priesthood and kingdom was performed. Ex. 28:41, Ex. 29:7, Lev. 4:3, Lev. 6:20, Lev. 8:2, 1 Sam. 9:16, 1 Sam. 16:1, 1 Kings 1:34. In this Old Testament era, both priests and kings were chosen from among the children of Israel to serve God's people, and the anointing of priesthood and kingdom was a way through which God's grace was transmitted to them to fulfill their service with wisdom and faithfulness. Those who held such leadership positions among priests and kings passed through by receiving God's commands, obeying God, and serving their people with righteousness.",
        newTestament: {
          title: "Myron Anointing in the New Testament",
          content: "The holy anointing that was used for great spiritual service in the Old Testament continued its spiritual purpose in the New Testament. 1 John 2:17. Myron anointing is blessed by the prayers and blessings of the patriarch and bishops after being mixed from various herbs."
        },
        service: {
          title: "The Service of Myron Anointing",
          content: "The apostles were baptized by the laying on of hands on Maundy Thursday evening. John 13:4. But they received the Holy Spirit on the fiftieth day when our Lord ascended. Acts 2:1. The believers who lived in the apostolic era also received the Holy Spirit when hands were laid on them after they believed and were baptized. Acts 8:14. When our Lord was baptized, the Holy Spirit rested on Him in the form of a dove, showing us that the gift of the Holy Spirit is given to us after baptism. Matt. 3:16. The Holy Spirit we received in baptism will not leave us unless we deny it, even if we commit any sin, until we repent. After the apostles, the apostolic fathers (patriarchs and bishops) decided that the believer who is baptized by the laying on of hands should receive the gift of the Holy Spirit through Myron anointing, so that it could reach everyone in relation to the number of baptized people and serve as a guide for the church for future generations. From that time on, the church has been giving the Holy Spirit to the baptized through Myron anointing after baptism.",
          paragraph2: "The Ark of the Covenant (tablet) must be consecrated with this holy Myron anointing before it enters the church and sits on the throne to serve. Even if it is stolen or in another place where its honor is not preserved and it is not appropriate, it must be blessed again after it is returned.",
          paragraph3: "After the church is built, it must be blessed with Myron anointing before giving the full church service inside it. If it is not blessed with Myron anointing, it cannot be called a church. It is distinguished from an ordinary hall only when it is honored with Myron anointing and the Ark of the Covenant is inside it."
        }
      },
      eucharist: {
        title: "Mystery of Eucharist",
        content: "Eucharist means everything that is offered to God - sacrifice, spiritual things. But in this teaching, we learn about the New Testament sacrifice (Christ's body and blood). <br /> Examples of Old Testament sacrifices for the New Testament Eucharist <br /> Melchizedek's sacrifice Gen. 14:18, Heb. 5:6, Heb. 6:1. The bread is his body, the wine is his blood - Melchizedek is Christ, Abraham is the believers. <br /> Israel's Passover. Ex. 12:1. Death is the devil, Israel is the believers, the lamb is Christ's example.<br /> Israel's manna. Ex. 16:13. Manna is our Lord's holy body and precious blood, Israel is the believers, the cloud is our Lady <br /> Fathers who offered Old Testament sacrifice and received blessing <br /> Our father Adam received the word that after five thousand five hundred years, man would be saved through the sacrifice Adam offered. Gen. 3:22, Gal. 4:4. <br /> Noah received the word through the sign of the rainbow that the earth would not be destroyed again by flood through the sacrifice Noah offered to Noah and his children. Gen. 9:1, Gen. 9:8. <br /> Abraham Gen. 18:3. Our father Abraham heard the promise that all nations would be blessed through his sacrifice, and that seed was Isaac for the time, but the end was for the Lord. <br /> Melchizedek Gen. 14:17, Ps. 109:4, Heb. 5:6. Through the sacrifice he offered before God, his priesthood was established forever and became Christ's example. Heb. 7:1. <br /> David Ps. 131:11. When he offered sacrifice, he was told that the son from your loins would sit on your throne, and this was spoken to Solomon for the time, but the end was for Christ. Ps. 71:1. Others also received blessing by offering pure sacrifices before God. <br />",
        newTestament: {
          title: "Mystery of Eucharist in the New Testament",
          content: "The sacrifice that was offered in the Old Testament era was from sheep, cattle, and various animals. But in the New Testament, animals are not offered as sacrifice (Eucharist) in the temple - all sacrifice has been fulfilled in Christ's body and blood. <br /> Our Lord Himself established this New Testament sacrifice, and on Maundy Thursday evening, as the twelve apostles were present, He first performed the Old Testament sacrifice and after passing it, He blessed the bread and wine and said, \"This is my body that will be broken on the cross tomorrow and my blood that will be shed, eat and drink this\" and gave it to them. Matt. 26:26. <br /> Today, when the priest makes the bread into bread and the wine into a cup and prays the liturgy and blesses it, as at that time, the bread becomes divine flesh and the wine becomes divine blood. When we receive this holy body and precious blood, we must live remembering the suffering and pain He received for us, making ourselves pure from sin through repentance, believing that our remaining sins will be erased, that we will be cleansed from evil, and that eternal life will be given to us.<br /> In 1 Cor. 11:23, the word \"Do this in remembrance of me\" means that when we receive His body and blood, we should live remembering the suffering He endured for human children in the courtyard of Caiaphas and the divine love that was poured into our hearts. The word remembrance refers to something that cannot be forgotten. Gal. 3:1 <br /> Before our Lord showed (established) this mystery, in John 6:25-8, He taught extensively about the mystery of Eucharist, saying, \"Unless you eat my flesh and drink my blood, you have no life in yourselves. He who eats my flesh and drinks my blood has eternal life. My flesh is true food and my blood is true drink (that gives life).\" <br />"
        },
        benefits: {
          title: "Benefits of Holy Communion",
          content: "Even if we are separated from this world by death, we will receive eternal life that will not pass away in the heavenly kingdom. John 6:54. <br /> We receive forgiveness (complete salvation) for our sins. Matt. 26:26. <br /> We confirm our unity with our Lord and with the saints. 1 Cor. 10:17. <br /> The reason He made His body from bread and His blood from wine is to fulfill the prophecy and the example <br />"
        },
        prophecy: {
          title: "Prophecy",
          content: "I have increased joy in my heart from the fruit of wheat and the fruit of wine. Ps. 4:7. This word indicates that the true and perfect eternal salvation, Holy Communion, is made from wheat and wine. <br />"
        },
        example: {
          title: "Example",
          content: "Christ's example; Melchizedek's sacrifice was offered with bread and wine to fulfill the example. Gen. 14:17. <br />"
        },
        reason: {
          title: "The reason He made His body and blood from food",
          content: "To explain that just as food unites with the body, when we receive His body and blood, we truly unite with Him. <br /> Just as food gives strength to our body, His body and blood also give spiritual strength to our souls. <br /> Just as Adam and Eve lost their sonship to God through food, through His holy body and precious blood, He can restore our sonship. Gen. 3:1. John 6:49. <br />"
        },
        practice: {
          title: "Practice of Holy Communion",
          content: "We must always receive Holy Communion after we have repented. Our sins are confirmed to be forgiven through Holy Communion. Matt. 27:27. Believers, as long as they are alive, whether male or female, young or old, should not be separated from Holy Communion, for this mystery is given to all without limitation by gender or age. John 6:54. We should not receive His body and blood in pride without repenting for the mistakes we have made; those who do this are guilty. 1 Cor. 11:27. The Holy Communion we receive is after our Lord was crucified in the courtyard of Caiaphas, and after nine hours, He separated His holy soul from His holy body by His own authority. John 10:18. John 19:30. He went to Sheol in body and soul, and after bringing back the souls that were there to paradise, He united with the flesh that was in the tomb for three days and three nights by His will and rose again. During this time (when His body and blood were separated), His divinity was not separated from His soul or body. 1 John. Therefore, the body and blood we receive are united with the divinity that was separated from the soul. 1 John 3:18. <br />"
        }
      },
      repentance: {
        title: "Mystery of Repentance",
        content: "Repentance: Repentance comes from being sorry, and repentance means being sorry for the sins committed, mourning, and deciding to return to God. Repentance is a mystery that saves from eternal judgment, makes the sinner like a virgin, makes the thief like a priest, purifies from previously committed sins, and unites with God. <br />",
        beforeRepentance: {
          title: "Before Repentance",
          content: "Being Sorry <br /> When a Christian, whether in pride or by mistake, realizes that what he has done is wrong by reading books, learning from teachers, listening to sermons, his conscience being troubled, or by some other reason, and then being sorry and making a journey to reconcile with God (to explain his wrongdoing), this is called repentance. A person who repents without being sorry for the wrongdoing he has done, but only because his conscience was troubled for a while, can return to his previous life after repentance. This is because the repentance he entered was not because he was sorry for the wrongdoing he did from his heart, but because he was moved by emotion. <br />"
        },
        hatingSin: {
          title: "Hating Sin",
          content: "After being sorry for our wrongdoing, it means convincing ourselves that we hate the wrongdoing we have done and that we will not do it in the future, and staying away from the path of sin. <br />"
        },
        lifeDecision: {
          title: "Deciding on Life After Repentance",
          content: "A believer should examine and decide on the life he will live in the future before entering repentance. When we hear the word of God, our hearts can be touched for a while, and we can say what should we do. Acts 2:37. But after a certain time, we must examine ourselves beforehand, thinking that we might return to the world. Many, after entering Christianity through emotion, were suddenly led astray by temporary things and left the path of religion. <br />"
        },
        duringRepentance: {
          title: "During Repentance",
          content: "When a believer has committed wrongdoing and decided to correct himself in a new life and live with God, he must have a father of repentance. Our Lord appointed priests to represent Himself and shepherd His flock, saying \"Whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven\" (Matt. 8, John 21:15, Matt. 16:19) to shepherd the flock. A Christian, while living, needs a father of repentance who guides him in God's way and when he goes astray, gives him a canon to reconcile with God. <br />"
        },
        confessionProcess: {
          title: "What a believer who enters repentance must fulfill when appearing before the priest",
          content: ""
        },
        rememberingSins: {
          title: "Remembering all the mistakes he made",
          content: "Since the canon is given according to the type of his wrongdoing, he must remember what he did; if he forgets by word, it helps to record it in writing. <br />"
        },
        fullConfession: {
          title: "Speaking completely without reducing (without hiding)",
          content: "He should not hide the difficult (shameful) things by saying \"What will people say if I say this?\" It is not right for him to be ashamed when he speaks about what he did not feel ashamed of when he did it. If he speaks once and does not remove it from his conscience, he will always be troubled. \"Come to me, all you who are weary and burdened, and I will give you rest\" (Matt. 11:28) is said, so he must confess correctly and relieve the burden of sin. But when we confess about our wrongdoing, we don't need to tell in detail the place, time, and another person's name, saying \"I did this with so-and-so, at this time, in this place, I did this\"; we can speak briefly about our wrongdoing by saying \"I worshiped idols, I stole, I lied.\" <br />"
        },
        selfAccusation: {
          title: "Self-accusation (accusing oneself)",
          content: "It is not about making another person responsible for our wrongdoing by saying \"so-and-so tempted me,\" but about making our mouth a witness to our conscience and accusing ourselves before God. Our God sees the repentance of our hearts and purifies us by making all the wrongdoing we have done as if it was not done. Forgiving wrongdoing through repentance is God's work of mercy. <br />"
        },
        afterRepentance: {
          title: "What should a believer do in order after entering repentance?",
          content: ""
        },
        fulfillingCanon: {
          title: "Fulfilling the received canon correctly",
          content: "Canon is a Greek word meaning: measure. After the priest gives the canon to the sinful believer according to the strength of his faith and the breadth of his understanding, he must fulfill it as commanded. The people of Nineveh (Jonah 3:1), King Hezekiah (Isa. 38:1), Saint Peter (Luke 22:54), and others who received forgiveness did so by being sorry for their wrongdoing, fasting, and entering repentance. During repentance, it is necessary to sleep on the ground, reduce food, and stay away from worldly things and friends who are not suitable for spiritual life. During repentance, we must control ourselves by not doing what we were commanded not to do; after God called us to salvation by His mercy, we should not return to our previous weakness. We must think about the end, not the time. 2 Tim. 4:10, Ps. 6:6. <br />"
        },
        believingForgiveness: {
          title: "Believing that our wrongdoing is forgiven through repentance",
          content: "Christ is a trustworthy God who can cleanse us from our wrongdoing because He shed His blood to atone for our wrongdoing. Even if the canon given to us seems small compared to the many sins we have committed, we should think not about our wrongdoing but about God's mercy. God's work of mercy far exceeds our wrongdoing, so we should say what remains after fulfilling what we were commanded. \"When you have done everything you were told to do, say, 'We are unworthy servants'\" (Luke 17:10). <br />"
        },
        receivingCommunion: {
          title: "Receiving communion (partaking) in His body and blood",
          content: "A hungry person does not get full just by washing his hands. He must eat food. Repentance means washing, staying away from filth (sin), and salvation is obtained by receiving the holy body and precious blood that gives eternal life. John 6:33. Many consider communion as a luxury and limit it to age (only for the elderly), so they are not seen preparing to receive it. But every Christian needs holy communion. Our wrongdoing for which we received the canon is forgiven when we eat His body and drink His blood."
        },
        alwaysPreparing: {
          title: "Always preparing for repentance",
          content: "After we enter repentance and fast, we can fall into sin again. Our God does not say \"Why did you sin instead of entering repentance?\" so we should not be ashamed of falling a second time and if we cannot escape from sin, we should not give up and say \"It is better for me to sit down than to trouble my father of repentance from time to time\" and abandon everything, for evil thoughts can tempt us in our minds. <br /> But after repentance, it is not that we live only in holiness like angels, but as it is said \"A righteous man falls seven times and rises seven times\" (Prov. 24:16), our God is a trustworthy God who can raise us when we fall, find us when we are lost, bring us near when we are far, and sanctify us (cleanse us like silver) when we are defiled by sin, so we must always prepare for repentance without losing hope and without hiding our sins. Isa. 1:18. <br />"
        }
      },
      marriage: {
        title: "Mystery of Marriage",
        content: "Marriage comes from the Ge'ez verb meaning to bind, to separate. Marriage means to bind, to decide, to separate, to distinguish. It is the sacrament performed for believers who marry in the Church. After God created male and female, He commanded them to multiply and fill the earth (Gen 1:27). From this time, male and female began to multiply by having children through marriage.",
        purposes: {
          title: "Purposes of Marriage",
          content: "For companionship: As God said, \"It is not good for man to be alone. I will make him a helper suitable for him\" (Gen 2:18). Man chooses a life partner who shares his thoughts, shares his burdens, and represents him, so that he may not be troubled in all his life. <br /> For desire: Man has natural desire (attraction to the opposite sex). Therefore, it is permitted for him to live in marriage and to be protected from temptation. 1 Cor 7:2-38. This type of marriage is also said to be honorable. Heb 13:4. <br /> For multiplication: The population we see in our world today began from the legal marriage established by one Adam and one Eve. Since God who said and permitted \"Be fruitful and multiply and fill the earth\" is the one who commanded this, children will be born in this way until the end of the world. Gen 1:27. <br />"
        },
        beforeMarriage: {
          title: "Before Marriage",
          content: "The consent of the couple: Before marriage, both parties must agree, understand, and decide. Such a great thing as marriage should not be decided by the pressure and command of others. When young people meet, they should not forget that their relationship should be different from worldly people, lest they fall into error and abandon their faith. There should not be a long period of courtship, for as time passes, thoughts change. <br /> Unity of faith: What seems simple at first regarding faith may become difficult to resolve later. But if they believe in one faith and marry while keeping its traditions, they think as one, agree in thought without discussion, and contemplate together... Indeed, it is permitted to marry someone who follows another faith after teaching and convincing them. But care must be taken lest they say they believe but do not truly believe. <br /> Mental and physical maturity: According to Church teaching, the age of marriage is from fifteen years for females and twenty years for males. Mental preparation means: learning and understanding about marriage from a religious perspective, gaining understanding about the life that will be lived after marriage, knowing that there is no one who will come between the marriage partner after marriage, deciding to give oneself to the marriage partner, and preparing to face future problems with patience. <br />"
        },
        duringMarriage: {
          title: "During Marriage",
          content: "In decision making: Thinking that the relatives and friends of both sides should have their own wishes, they may be confused by making programs for the wedding to be held outside the church, or by making it in both the church (to be prepared by singing the marriage ceremony) and again by worldly ceremonies (to go out in a car, to be prepared by a band). But since those who are getting married are not the decision makers, the decision must be made by the young people. The young people must also be careful in their decisions. It is not appropriate for them to have worldly desires that are not cut off from within them, and to honor the advice and commands of their families more than the word of God, making the ceremony confused and disorderly, and causing trouble for many people. <br /> The marriage must be with Holy Communion: The marriage ceremony is performed for those who have physical virginity, and other Christians can also perform their marriage with Holy Communion. Christian marriage is not performed without Holy Communion. Some people think of performing their marriage in the marriage ceremony only for photography and video, but this is not appropriate, so they should learn about marriage teaching in advance and correct their choice from the beginning. <br />"
        },
        afterMarriage: {
          title: "After Marriage",
          content: "The agreement is not maintained by nature, but by natural law. It is accepted as mother and father, not for discussion. Nature has forced us to accept all the things that happened before us by believing. But marriage is a permanent life that is entered into by agreement, love, and commitment, so the agreement is firm until the end of life. \"A man leaves his father and mother and is united to his wife, and they become one flesh.\" Gen 2:24. Matt 19:4. According to this divine word, no one is allowed to enter between them in their marriage. <br /> Even if they are parents, they should not interfere with their children's marriage just because they did not agree with them and their personal interests were involved, saying divorce, divorce. The marriage of many people is destroyed by family interference, so married couples should understand this issue in advance. Since husband and wife are one, there should be no duality between them; a person is connected with his family"
        }
      },
      divorce: {
        title: "Reasons for Divorce",
        content: "",
        reasons: {
          title: "Reasons for Divorce",
          content: ""
        },
        death: {
          title: "Death",
          content: "If one of the two dies, the one who remains alive is permitted to marry another. But the marriage must be with someone of the same faith and with Holy Communion. Rom 7:2. 1 Cor 7:39. <br />"
        },
        adultery: {
          title: "Adultery",
          content: "If one of the two falls into adultery and cannot repent from their sin, the innocent person can dissolve the marriage. But it must be based on hearing and investigation. Matt 5:32. Spreading family matters outside can bring in people who cause trouble, so care must be taken. Since the foundation of marriage is truth, agreement, and trust, there is no need to doubt and be suspicious about circumstances. <br /> If the marriage partner who fell into adultery repents and asks for forgiveness, they can continue their marriage as before. Husband and wife must decide through consultation and discussion about any kind of life they live in their marriage. Since marriage is the common life of both, there should be no leader and follower. Their income and expenses must be decided together. Marriage becomes true when these are fulfilled. <br /> What strengthens the unity of married couples more are the children they bear. Since children are equal assets of both, they bring them closer. They should be united in thinking about their beloved children so that they do not separate them and honor their marriage. Married couples who cannot bear children due to infertility should be grateful, thinking that God has determined something better for them, rather than interfering with God's work. Even if a child is born, if it is not blessed, it may die or become a bad child. They should not consider themselves cursed without knowing the divine wisdom that God has done and without thinking about what they have not achieved, but should accept that everything God has done is for good. They should think with understanding that their marriage partner, whom they love and who has received God's blessing, is more important than children they don't know or who haven't been born. (Gen 30:1) <br />"
        }
      },
      priesthood: {
        title: "Mystery of Priesthood",
        content: "Priest: comes from the Ge'ez word meaning to serve. Priest means servant of God, father of believers, keeper, shepherd. <br />",
        oldTestament: {
          title: "Mystery of Priesthood in the Old Testament",
          content: "One of the characteristics of priesthood is offering sacrifices, and the first person chosen for this service and called a priest was Melchizedek. Gen 14:18. Later, God commanded Moses to choose a priest who would serve God before the Ark of the Covenant in the temple, receive the people's sins, and intercede with God, so Aaron was appointed after Melchizedek. <br /> From Aaron to John the Baptist, throughout the long Old Testament period, only those born from Aaron's lineage were anointed with holy oil and served in the priesthood. <br /> But the priesthood based on lineage was not perfect and permanent because it was a type for the New Testament priesthood, so both the sacrifice and the process of appointment were replaced by another. <br /> The reason it was not permanent and was replaced by another is that the priesthood was limited only to lineage, so in the New Testament, it was permitted for any people who fulfilled the law and tradition. Christ came for the whole world. <br /> Their sacrifice was replaced by Christ's body and blood because it did not give complete salvation. John 6:32. <br /> The service was temporary and did not go beyond physical salvation, but in the New Testament, it was replaced by priests who have authority to bind on earth and in heaven, and authority over both soul and body. Matt 18:18. <br />"
        },
        newTestament: {
          title: "Mystery of Priesthood in the New Testament",
          content: "In the Old Testament, the last priest was John the Baptist, and after him, the Old Testament priesthood ended. Our Lord went to the Jordan and was baptized by John's hand, teaching us that we should go to the church and be baptized by the priest's hand. Matt 3:13. <br /> Our Lord spoke about priests in many places when teaching. Go and show yourself to the priest. Matt 8:4. You are blessed, and I will give you the keys of the kingdom of heaven... Matt 16:17. Truly I tell you, whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven. Matt 18:18. He said this during His ministry, and after rising from the dead, He confirmed it to the apostles. Go and baptize them in the name of the Father and of the Son and of the Holy Spirit. Matt 28:19... Receive the Holy Spirit. John 20:22. Finally, He appointed Saint Peter as the first patriarch, saying \"...Simon, feed my sheep (for the time being the twelve apostles: for the end the parents), feed my lambs (for the time being the seventy-two: for the end the youth), feed my kids (for the time being the thirty-six holy women: for the end the children)\" and appointed the apostles as bishops. John 21:15. From this time, the Church has been led by patriarchs and bishops through the spiritual council (Holy Synod) and continues its service. <br />"
        },
        levels: {
          title: "Levels of Priesthood",
          content: ""
        },
        patriarch: {
          title: "Patriarch",
          content: "Patriarchs are also called \"Patriarch.\" He is the father of all, being the highest in one church (one synod). Acts 20:28. After being chosen by the people and priests, he is appointed by bishops. Canon 5. Rule 2. The patriarch cannot release what he has bound. His spiritual authority is above all. (Synod 51) The patriarch's name is called in all churches during prayer time. <br />"
        },
        bishop: {
          title: "Bishop",
          content: "A bishop is appointed as the father of one diocese. He is appointed by the vote and voice of the believers in the area where he serves, with the consent of the chief patriarch and the synod. (Canon 5: Chapter 2) He is not appointed in only one diocese. (Canon 5: Rule 58: Did 34) The bishop's name is called in his diocese during prayer time. (Canon 5: Chapter 4) He blesses new tablets, new churches. He gives the authority of priesthood to priests and deacons. (1 Tim 5:2: Canon 5 Chapter 4) <br />"
        },
        deacons: {
          title: "Deacons",
          content: "Deacons are those who assist and serve the priests, and they have the following levels based on their service <br />"
        },
        deacon: {
          title: "Deacon",
          content: "One who has previously understood the faith, is known and witnessed by believers through his conduct, has thoroughly learned the teaching required for deacon service, and is found qualified, is ordained by laying on of hands. Unless he has special ability and talent, a deacon is not ordained under the age of twenty-five. If a deacon divorces his first wife and marries another, changes his faith, or is baptized by heretics, he is removed from the priesthood. Canon 7: Chapter 5. Deacons enter the sanctuary, but they do not touch the throne and altar, and after the transformation, they do not touch the body and blood with their hands. Deacons should be prepared for missions, serve with humility, and be an example to others in their lives. <br />"
        },
        subDeacon: {
          title: "Sub-Deacon",
          content: "He is the assistant of the deacon, and his spiritual life, conduct, and faith are witnessed by priests and believers in the area where he serves. Canon 8. Sub-deacons are ordained by word only; laying on of hands is not performed. Canon 8 Chapter 2. As much as he is the assistant of the deacon, he helps in all the work, but he does not touch the holy vessels. Canon 8: Doc 45, 46. If he commits a fault, he is removed from the priesthood. Canon 8: Chapter 4. <br />"
        },
        anagnostis: {
          title: "Anagnostis (Reader)",
          content: "His service is reading books in the church, and he is ordained after his teaching and conduct have been observed. Canon 8 Chapter 1. Anagnostis is not ordained by laying on of hands, but by word only. Canon 8: Chapter 2. During service, he does not wear the priestly vestments that deacons wear during the Divine Liturgy. Canon 8: Chapter 3. If an anagnostis commits a fault, he is suspended from work for a year and then returns. If he does not repent from his fault, he is removed from service. Canon 8 Chapter 4. If his wife dies, he can marry another and serve. Canon 4: Chapter 5. <br />"
        },
        singers: {
          title: "Singers",
          content: "They are ordained by prayer. Canon 8: Chapter 2. They sing from the Psalms of David and also the hymns of Saint Yared in our country. They do not wear priestly vestments when they sing. Canon 8: Chapter 3. Singers can marry another if their wife dies. Canon 8: Chapter 5. In our country, singers are those who have learned the teaching of music, and these can serve in both (both in music and in their priesthood) if they have the authority of priesthood (deacon, priest, and above). <br />"
        },
        doorKeeper: {
          title: "Door Keeper",
          content: "He is ordained by word only. His service is opening and closing doors, and he does not wear priestly vestments. Canon 8: Chapter 3. If his wife dies, he can marry another and serve. Canon 8: Chapter 3. <br />"
        },
        womenDeacons: {
          title: "Women Deacons",
          content: "Those who have been married, raised their children in order, are committed to Holy Communion, are prepared for service, and are eight years old, are ordained as deaconesses by word. 1 Tim 5:9. Canon 8:1. Did 17. Their service <br /> They assist the priests in ministering to women; when women become Christians, the priest takes their hand and anoints them with holy myron below the neck. <br /> They do not bless; they do not perform the priestly work that priests and deacons do, but they stand at the women's door and supervise. <br /> They do not say \"Rise, pray\" like the deacon, they do not ordain, they do not open the assembly with prayer. (Canon 8 Chapter 1) <br /> These, because they have been set apart from other believers and have come to the church by the will of God, should counsel and encourage believers when they are weak in the flesh, and if there is a wrong brother among their fellow servants, but they should not be a hindrance to those who are being saved by proclaiming their own righteousness and their brother's fault. (Luke 18:9) <br />"
        }
      },
      holyOil: {
        title: "Mystery of Holy Oil",
        content: "Holy Oil (Qeb'a Qidus) is called oil in the Holy Scriptures. It is prepared from pure olive oil and is a holy ointment that heals both physical and spiritual illnesses when anointed. <br /> In the Old Testament, people were anointed with this holy ointment when they were sick and were healed by it. Isa 1:6. Luke 10:34. <br /> In the New Testament, the apostles anointed both physical and spiritual illnesses with holy oil and healed them from their diseases. Mark 6:13. Later, when believers are sick, priests are commanded to pray for them and anoint them with holy oil to heal them. (James 5:14) <br />",
        benefits: {
          title: "Benefits of Holy Oil",
          content: "Holy oil is for believers who desire to be healed from any kind of disease, especially those who are wounded and whose souls are sick, as well as those whose souls are diseased and who want God's help to be their helper and to be cleansed from their sins. When the priest prays the prayer of holy oil and anoints them, they are healed from their physical and spiritual diseases (sins). But when they are anointed, they must believe with all their heart that God will save them from the disease He has placed upon them through this holy (oil) ointment. <br /> Those who are anointed with holy oil must be baptized Christians who believe, and before receiving it, they must enter repentance and sanctify themselves. The ceremony is performed by priests, and first the prayer is said in the church or around the place where the patient is lying, and if not, after the priest has prayed in his prayer house, it is anointed on the sick (wounded) place. <br /> <br /> <a href=\"https://kidanemihiret.org/sermon-topic/%E1%88%B0%E1%89%A3%E1%89%B1-%E1%88%9D%E1%88%B5%E1%8C%A2%E1%88%AB%E1%89%B0-%E1%89%A4%E1%89%B0%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/\">Source: https://kidanemihiret.org/sermon-topic</a>"
        }
      }
    },
    holyBible: {
      title: "Holy Bible in the Church's View",
      table: {
        bookType: "Type of Books",
        content: "Content of Books",
        law: "Law",
        history: "History",
        wisdom: "Wisdom",
        prophecy: "Prophecy",
        asra: "Asra",
        awalde: "Awalde",
        lawBooks: {
          pentateuch: "Pentateuch",
          samuel: "Samuel",
          psalms: "Psalms",
          isaiah: "Isaiah"
        },
        historyBooks: {
          kings: "Kings",
          mary: "Mary's Miracle",
          maryPraise: "Mary's Praise",
          jesus: "Jesus' Parables"
        }
      },
      content: {
        paragraph1: "The Holy Church was founded on the apostles and prophets, and above all, it is one and holy, the body of Christ (Eph. 2:20; Eph. 4:12). The phrase 'above all' describes its heavenly authority and dignity. This means that any holy book or treasure will be within it, but cannot be above it. The Holy Bible also contains the truth that God revealed to the Church, but it is not above the Church. Because the Church is the body of Christ, there is nothing above the body of Christ. Only Christ Himself is above the Church (Col. 1:18). The Holy Bible is the head of all books, and the Church is the owner of the Bible.",
        paragraph2: "The Holy Bible is the word of God written in human language. It was written by the inspiration of the Holy Spirit. The writers are also the fathers of the Church. Because of their holiness, they were close to God, so they wrote in the language that the churches needed to understand God's word. Their writing was not to express their own glory or to establish the law by which the Church is governed, but to testify to the faith that the Church believes and to guide believers in their spiritual life, to obey it, and to prepare their hearts. Therefore, the Holy Bible contains the truth that God revealed to the Church and the faith that the Church believes about God, but it should be understood that it does not mean that the Church's system is complete and comprehensive, including everything.",
        paragraph3: "The Church has many treasures that are passed down by seeing, doing, and word. Indeed, what is written is very little. However, some religious organizations have a wrong approach of completely subordinating the Church's affairs under the Bible. This is known among Lutherans as 'Sola Scriptura' or 'Only Bible' and is not the Church's teaching, but a personal opinion that neither unwritten holy tradition nor the Holy Bible supports.",
        paragraph4: "The purpose of this article is to clearly show the Church's religious view of accepting the holy books.",
        ancientHistory: "Ancient History of the Holy Books",
        paragraph5: "The Creator of all the world, God, created human beings with great honor among all His creations. When the Church fathers explain this honor, they call man 'The Crown of Creation - The Crown of Creation.' His crown of creation is that he was created in the image and likeness of God, and that he was given dominion over all creation under God. Just as God is 'holy above all creation; having dominion (authority) over all creation,' so man was made 'holy above all the earth; having dominion (authority) over all the earth' by grace. In his original nature, man was a knowledgeable creation that did not need books or teachers. As Abba Matthew said in his spiritual nature, like Abraham and Moses, he was enlightened by the knowledge of creation to know (Commentary on the Gospel of John). In his natural mind, he was a wise being who could read and study the knowledge of creation and understand the deep truth. The first book for man was the knowledge of creation. The first true teacher for man was the Teacher of all the world, God.",
        paragraph6: "God taught Adam His commandments. From the beginning, His main teaching was 'You may eat from every tree in the garden; but you must not eat from the tree of the knowledge of good and evil, for when you eat from it you will certainly die' (Gen. 2:16-17). But Adam left his true teacher and learned from the evil creature; 'You will not certainly die,' the serpent said to him, 'For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil' (Gen. 3:4-5). The student chose the second of the two teachings and fell into temptation. After that, he did not have a sound mind to understand the first teacher's teaching. It became necessary for other teachers to help him return to the great teacher.",
        extendedContent: {
          paragraph7: "After the evil teacher deceived them, Adam and Eve saw unwritten letters and read uninscribed words. 'When the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise' (Gen. 3:6). After this, they became blind who could not read creation, but creation became a stumbling block to them. Because they fell from the pure nature that God had given them and could not return to their former state, they needed to rely on reading books written in human letters. Man, who was created in divine light, needed books because he fell from the knowledge gained by seeing and the knowledge gained by hearing to limited knowledge. Therefore, books are not man's natural teachers. They are supporters given after his fall. The Church fathers explain this with the following analogy:",
          paragraph8: "Man walks on two feet. When his feet are sick or weak, he needs a crutch to walk on two feet. Just as man was able to stand and walk by himself in his original nature, but after he sinned and became weak, he needed books and teachers as crutches to be able to stand and walk. St. John Chrysostom, in his commentary on the Gospel of Matthew, explains this more clearly: 'It was not necessary for us to need written things, but to have a very pure life so that the grace of the Holy Spirit that dwells in our hearts might guide us, rather than the words of books written with ink.' But then he teaches us that we should hold books carefully: 'We have lost this grace. Therefore, let us hold fast to the second great gift (books).' This shows that the holy books were given because they became necessary after time, not because everything began from them.",
          sectionTitle1: "The Gospel is Above What is Written and Preceded the Church",
          paragraph9: "Often when we say 'Gospel,' we think only of the four Gospels. Some 'Bible only' religious organizations also make it seem as if only what is written is the Gospel. But both written and unwritten holy tradition teaches us that the Gospel is not limited to writing alone. St. Paul says, 'Now I would remind you, brothers, of the gospel I preached to you, which you received, in which you stand, and by which you are being saved' (1 Cor. 15:1), but the four Gospels had not yet been written. Our Lord and Savior Jesus Christ said, 'Truly, I say to you, wherever this gospel is proclaimed in the whole world, what she has done will also be told in memory of her' (Matt. 26:13) when He testified about Mary's anointing, but Matthew, Mark, Luke, and John had not yet written the Gospel. Even when this word was spoken, their faith was not yet complete. This was revealed when they all fled except John during the passion. Therefore, when the Lord says 'this gospel,' He warns us that it is wrong to think only of what is written.",
          paragraph10: "The Gospel is preached and has been preached by word, by book, and by life, but it is wrong to think that it is only contained and established in books. The apostles preached by word and by book. St. Paul was also preached through the revelation he received in his life (Acts 9). Indeed, the writers of the holy books have shown that few were preached in writing and many were preached by word. St. John, when concluding his Gospel, says, 'Now there are also many other things that Jesus did. Were every one of them to be written, I suppose that the world itself could not contain the books that would be written' (John 21:25), which shows that not everything was written. Therefore, it is appropriate to understand that the Church has preserved much for us in tradition beyond what was written.",
          paragraph11: "St. Luke, when he began to write his Gospel, said to Theophilus, 'Inasmuch as many have undertaken to compile a narrative of the things that have been accomplished among us, just as those who from the beginning were eyewitnesses and ministers of the word have delivered them to us, it seemed good to me also, having followed all things closely for some time past, to write an orderly account for you, most excellent Theophilus, that you may have certainty concerning the things you have been taught' (Luke 1:1-4). This shows that there were those who saw with their eyes, taught the Gospel without writing it, by word or by other books, and passed it on to St. Luke. It also shows that Theophilus, for whom the Gospel was written, had already been taught by word. St. Luke wrote to him to know or confirm the truth, not because he had not been taught before, but to teach and inform him."
        },
        churchBibleRelationship: {
          title: "Which comes first - the Holy Bible or the Holy Church?",
          paragraph1: "The Church existed before the Holy Bible and wrote the Holy Bible. She is the kingdom of God that preserved and transmitted the truth received from God and established in books.",
          paragraph2: "The Holy Bible was written by the Church for the Church. It is appropriate to understand that from among the written books, she selected and canonized those that are inspired and gave them to believers as food for life. Therefore, the Church precedes the Holy Bible; the Church is the witness that the Holy Bible is the word of God. The Holy Bible is what the Church wrote and interprets by the inspiration of the Holy Spirit, but it did not create the Church. The Holy Bible is the mother of the New Testament books. We can see this with many evidences and logic as follows:",
          paragraph3: "1. The Holy Bible itself testifies to the precedence of the Church",
          paragraph4: "The following verses clearly show that the Church existed before the holy books were written:",
          paragraph5: "\"To the church of God that is in Corinth, to those sanctified in Christ Jesus, called to be saints together with all those who in every place call upon the name of our Lord Jesus Christ, both their Lord and ours\" (1 Cor. 1:2).",
          paragraph6: "It is appropriate to understand that when a message (letter) is written, there are three components - the sender, the message, and the recipient. The message cannot be written without the sender and recipient. The sender of the message is St. Paul. The recipient is the church of God in Corinth. If the sender and recipient of the message precede the message, it means that to receive the message, St. Paul and the Church must be received first. When St. Paul explains this and begins to write the message and explains to whom he is writing, saying \"To the church of God that is in Corinth\" shows that the church of Corinth existed before he wrote the message. The church not only existed before, but was also sanctifying people. In other words, to sanctify people, the Holy Bible or the message that St. Paul wrote to the Corinthians was not necessary. To make this known, the owner of the message explained by saying \"sanctified in Christ Jesus.\" Many similar verses that testify to the same truth can be cited.",
          paragraph7: "\"Paul, an apostle of Christ Jesus by the will of God, and Timothy our brother, To the church of God that is at Corinth, with all the saints who are in the whole of Achaia\" (2 Cor. 1:1).",
          paragraph8: "\"Paul, an apostle—not from men nor through man, but through Jesus Christ and God the Father, who raised him from the dead— and all the brothers who are with me, To the churches of Galatia\" (Gal. 1:1).",
          paragraph9: "\"Paul, Silvanus, and Timothy, To the church of the Thessalonians in God the Father and the Lord Jesus Christ\" (1 Thess. 1:1).",
          paragraph10: "\"Write what you see in a book and send it to the seven churches, to Ephesus and to Smyrna and to Pergamum and to Thyatira and to Sardis and to Philadelphia and to Laodicea\" (Rev. 1:11). The seer St. John was also commanded to write to the seven churches after seeing the same vision. This shows that the churches existed before the book. John also did not need a book to be honored by seeing the vision.",
          paragraph11: "2. Logical Evidence",
          paragraph12: "The Book of Enoch was written before all other books. Before the Book of Enoch was written, man had lived for more than a thousand years. The Book of Job and the five books of the Torah were written after that. The books of the prophets were written thousands of years later, hundreds of years before Christ was to be born. In the New Testament, no books were written for the first forty years. After that, the Gospel of Matthew and the Epistle of James were written first, but most were written until 70 A.D. The books of the Hadith were also written at the end of the first century. This raises the question:",
          paragraph13: "A. If only the Holy Bible was needed for righteousness and salvation, should not the book have been given to all from Adam onwards at once, complete and comprehensive? If books were not given to them, would they not have the opportunity to present the reason that 'we fell into sin because we did not have the Holy Bible'? If we limit worship to the Holy Bible alone, would it not raise questions about God's justice to give all books to everyone?",
          paragraph14: "B. In ancient times, books were found in scroll form for the people for whom they were written, but unlike now, they could not be found all together in one person's hand. The Holy Bible was able to be collected and found together in its current form only after the printing machine was made and printing on paper began. The chapters and numbers that made it suitable for reading were also after the sixteenth century. In ancient times, each book was found only in small quantities in its place. The Epistle to the Romans was found among the Romans, the Epistle to the Corinthians among the Corinthians, etc., but unlike this era, they were not all found together at once for everyone. Was it not the Church that separated these holy books that were written for about four thousand years from the false ones and canonized them and said 'use these'?",
          paragraph15: "If the Church had not done this, we would have been completely disconnected from the Holy Bible. If she had not said 'the four Gospels are the only ones' when there were many that claimed to be 'the Gospel of Judas', 'the Gospel of Barnabas' and others like them, and many false ones were added to them, would we not have been in great trouble? Is it not a mistake to accept the book that she gave in canon but not accept the Church that gave it? Similarly, is it not ignorance to not accept when she gives the New Testament books by making the canon?",
          paragraph16: "C. Who told you that the eighty-one books known as the Old Testament writings are the only ones, showing the Church's supremacy and complete authority? If we say, we say 'the Church'. But those who say 'Bible only', if they say 'who gave you the Holy Bible as sixty-six', who would say? The 'sixty-six books' that they say we accept do not say 'sixty-six only' or 'Bible only' themselves.",
          paragraph17: "3. The Holy Bible itself testifies that it does not contain everything",
          paragraph18: "The Evangelist St. John said, 'Jesus did many other signs in the presence of his disciples, which are not written in this book' (John 20:30), showing that not everything Christ did was written. He also explained that it is impossible to write everything He did, saying, 'But there are also many other things that Jesus did; if every one of them were written down, I suppose that the world itself could not contain the books that would be written' (John 21:25). This shows that the Holy Bible does not contain all history, all systems, etc. When we say this, we mean it is not written at the text level, but we do not mean that there is something missing from the perspective of mystery and faith. God's word is always complete, and the book where God's word is found is also complete without error or deficiency. Not only this, but when we need additional spiritual knowledge on the subject that the Holy Bible raises, it points to the New Testament books, but it does not say 'I have collected everything and read only me.' The following thoughts also testify to this.",
          paragraph19: "\"Now the rest of the acts of Solomon, first and last, are they not written in the history of Nathan the prophet, and in the prophecy of Ahijah the Shilonite, and in the visions of Iddo the seer concerning Jeroboam the son of Nebat?\" (2 Chron. 9:29).",
          paragraph20: "\"Now the rest of the acts of Rehoboam, and all that he did, are they not written in the book of the chronicles of the kings of Judah?\" (1 Kings 14:29).",
          paragraph21: "\"Now the rest of the acts of Solomon, and all that he did, and his wisdom, are they not written in the book of the acts of Solomon?\" (1 Kings 11:41).",
          paragraph22: "Conclusion",
          paragraph23: "The Holy Bible is the source and foundation of all holy books. Any teaching, Church history, or system that conflicts with what is mentioned in the Holy Bible has no acceptance in our Church. The Holy Bible is the main source of our Church's religious teaching. The Holy Bible is also the main source of system and history. Our Orthodox Tewahedo Church is a holy Church that practices, teaches, and lives what the Holy Bible contains. She herself is the one who gave us the preparation to read and learn the Holy Bible. However, we must be careful to understand the deception of some heretics who present themselves as followers of the Holy Bible while claiming that the Church did not preach the Holy Bible. Many are those who deceive by presenting what the Holy Bible does not say as if it says it, and by twisting and translating it. That is why they oppose the Church that precedes all, while claiming to have accepted the holy book that she gave to the whole world.",
          paragraph24: "Source: https://eotcmk.org/a/17157-2/",
          paragraph25: "The relationship of the New Testament books with the Holy Bible:",
          paragraph26: "As mentioned earlier, the New Testament books are children of the Old Testament books (the inspired books). Just as a child is separated from his father Abraham and from his mother Sarah to come out like his parents, these also contain the root and foundation of the Old Testament books in mystery, faith, and system. Books that contradict the Old Testament books in mystery or system are not counted among the New Testament. Because it is said in the Apostle's word, 'But even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed' (Gal. 1:8).",
          paragraph27: "The relationship between the New Testament books and the Old Testament books can be understood through the following points:",
          paragraph28: "A. By their nature: The eighty-one books known as the Old Testament are classified as law, history, wisdom, and prophecy.",
          paragraph29: "Similarly, all New Testament books are organized in the same way. For example, let us look at this illustrative table:",
          paragraph30: "B. By their ownership: The owner of the holy books is the Holy Church. Because the holy books are God's treasures, written by His will and inspiration, and the Church is also the house of grace that God purchased with His blood, the steward of God on earth (Acts 20:28). Therefore, the apostles sent by God wrote the Gospel and epistles for the Church by the revelation of the Holy Spirit.",
          paragraph31: "The writers of the New Testament books are children of the Church, and they wrote the books for the children of the Church, for believers, according to how the Holy Spirit revealed to them. Therefore, the Church, as their owner, is the one who should be asked for their interpretation, history, and mysteries.",
          paragraph32: "C. By their holiness: The Holy Spirit wrote both the Old Testament and the New Testament books. Just as the Holy Spirit chose, inspired, and revealed mysteries to the writers of the Old Testament, so the Holy Spirit chose, inspired, and revealed mysteries to the writers of the New Testament books. Since they come from one source, the Holy Spirit, both the Old Testament and New Testament books have the purpose of explaining religious matters and also for teaching and admonition, for the correction of the heart and for the use of righteous counsel (2 Tim. 3:16).",
          paragraph33: "The Church is the one who received the Old Testament books, which were written in different times and by different people in distant countries, by examining and confirming them from the perspective of the foundation of faith. The Church also receives the New Testament books in the same way by examining and confirming them from the perspective of her teaching.",
          paragraph34: "D. By revealing God's work: The primary purpose of the holy books is to reveal God's work. The holy books explain the miracles, works, and grace that God did directly Himself or through His friends for the people. This fact is found extensively and openly in the Old Testament. Since their purpose is to reveal God's work, they do not pay much attention to the people and places where God's work miracles were performed. They only reveal the miracle and pass over the names of people and places as 'someone' (Matt. 26:18, 1 Kings 13:1, Matt. 8:2, Luke 11:15). This is not only confirmed in the Old Testament but is also the purpose of the New Testament books. In the Acts of Takla Haymanot, the Acts of St. George, and the Miracles of Mary, they call the people and places where God's work (miracle) was performed through the intercession of the saints as 'someone' without mentioning their names, not because these people and places have no names, but because their purpose is to reveal God's work.",
          paragraph35: "E. By revealing the greatness of faith: The holy books are written by faith, for faith, and about faith. What is revealed and commanded in the books is preserved and fulfilled. The three children made faith their treasure. By faith, they were commanded by law and refused to worship idols. Because of this, when they were thrown into fire, they destroyed the power of fire by faith. The prophet Daniel closed the mouth of lions by faith. Gideon without weapons defeated the armies of nations. This reveals the greatness of faith (Heb. 11:32-34). In the New Testament books also, Abune Eustathius divided the sea with his staff (with his cross), the righteous Abune Takla Haymanot came out of the skin in which they were wrapped after being thrown from the cliff, stood in the middle of fire and praised God; St. George drank poison that cuts and shows the greatness of faith by being alive.",
          paragraph36: "When we see the people mentioned in both the Old and New Testament books performing great miracles, the word of our Savior Jesus Christ in the Holy Gospel is fulfilled for them: 'Truly, truly, I say to you, he who believes in me will also do the works that I do; and greater works than these will he do' (John 14:12).",
          paragraph37: "F. By revealing the various struggles of people of faith: God performs His wonderful work for His creation through His creation. This is accomplished in various ways. Among the creatures through whom God's work is performed extensively and openly, the saints are the main ones. The saints, by serving God's law and fulfilling His will, made pure hearts their treasure. Through this, they performed many struggles in their bodies with the power they received from God. Both the Old and New Testament books reveal this life of struggle of the saints. Nehemiah building the wall of Jerusalem, Esther saving the people of Israel through fasting and prayer, Judith killing Holofernes with wisdom, St. Peter healing the sick with his shadow, our Lady, righteous martyrs performing various great miracles are found revealed in the holy books.",
          paragraph38: "How does the Church accept the New Testament books?",
          paragraph39: "The Holy Church has a system by which she accepts the New Testament books. As repeatedly mentioned before, the New Testament books are children in content, spirit, mystery, and foundation. The books of the Holy Bible are called 'Old Testament books.' Old means roots, and when we say Old Testament books, it means they are the sources and roots of other books. This means that the Holy Bible is the source and parent of the New Testament books in content, spirit, mystery, and foundation, and they grow and develop from its root.",
          paragraph40: "However, books that, although they may seem like the Holy Bible in some of their content, contradict the teaching of the Holy Bible, what was revealed by our Lord, and the faith and teaching of the Church that has been handed down from the apostles, the Church rejects and does not accept. Such books are called 'apocryphal' but not 'New Testament.'",
          paragraph41: "The Indian theologian Timothy explains that the New Testament books can be distinguished by the following points:",
          paragraph42: "Their purpose is the kingdom of God,",
          paragraph43: "They do not contradict the Old Testament books and the holy tradition of the Church in thought, spirit, mystery, and theology,",
          paragraph44: "They are consistent with Christian ethics, life, and conduct,",
          paragraph45: "They have the witness of the Church fathers, tradition, or journey,",
          paragraph46: "They have no internal contradictions.",
          paragraph47: "Therefore, may our Creator, the Most High God, help us to grow in faith and do good works by using the New Testament books that teach good doctrine, help us understand the religious struggles of the holy fathers and mothers, and explain and interpret the Old Testament books for us!",
          paragraph48: "Source: https://eotcmk.org/a/",
          paragraph49: "",
          paragraph50: "",
          paragraph51: "",
          paragraph52: "",
          paragraph53: "",
          paragraph54: "",
          paragraph55: "",
          paragraph56: "",
          paragraph57: "",
          paragraph58: "",
          paragraph59: "",
          paragraph60: "",
          paragraph61: "",
          paragraph62: "",
          paragraph63: "",
          paragraph64: "",
          paragraph65: "",
          paragraph66: "",
          paragraph67: "",
          paragraph68: "",
          paragraph69: "",
          paragraph70: ""
        }
      }
    },
    spiritualLife: {
      title: "Spiritual Life",
      prayer: {
        title: "Prayer",
        description: "Regular prayer is essential for Ethiopian Orthodox spiritual life, with specific prayers for different times of the day."
      },
      fasting: {
        title: "Fasting",
        description: "Fasting is widely practiced, with over 250 fasting days in a year as part of the spiritual system."
      },
      charity: {
        title: "Charity",
        description: "Charity and caring for the needy are considered essential expressions of Christian faith and love."
      },
      offering: {
        title: "Offering and Tithe",
        firstFruits: {
          title: "First Fruits",
          definition: "First fruits come from the word 'first'. First fruits belong to God - Ex 23:19, Lev 23:10-11",
          purpose: "Giving first fruits means putting God first in all our things - Num 3:13, Deut 15:19",
          commandment: "First fruits offering is a commandment - Ex 13:2, Deut 26:2",
          blessing: "When we give the first, what we have is blessed - 1 Sam 2:20-21"
        },
        tithe: {
          title: "Tithe - Gen 14:20, Heb 7:4-5",
          oldTestament: "Tithe in the Old Testament means one out of ten - Gen 28:22",
          newTestament: "But in the New Testament, tithe is beyond one out of ten, as you have sown - 2 Cor 9:6-7",
          ownership: "Tithe is God's property - Mal 3:8-10",
          faithfulness: "People who give (pay) tithe are faithfully returning God's property to Him - Deut 14:22-23",
          blessing: "There is blessing in paying (giving) tithe - Mal 3:8-10"
        },
        reasons: {
          title: "Why and for what purpose we give",
          reason1: "A. God has commanded us to give - Ex 25:1-5, Lev 25:31, Num 18:21",
          reason2: "B. Our gifts are used for expanding God's kingdom and serving God's house - 1 Cor 9:4-14, 2 Cor 8:4, Phil 4:15-18",
          reason3: "C. By giving, we honor and worship God - Prov 3:9-10",
          reason4: "D. By giving, we invite God's blessing - Mal 3:10-12, Luke 6:10",
          reason5: "E. By giving, we become faithful to God (we don't rob Him) - Mal 3:8-10"
        },
        howToGive: {
          title: "How should we give?",
          way1: "A. What we give is first giving ourselves to God - Rom 12:1, 2 Cor 8:1-5",
          way2: "B. What we give should be with joy, not with sorrow (compulsion) - 2 Cor 9:7",
          way3: "C. What we give should not only be from our abundance but also from our poverty - 2 Cor 8:1-5",
          way4: "D. What we give should not be to be seen by people - Matt 6:1",
          way5: "E. What we give should not be to boast in our gifts - Luke 18:9-14"
        }
      }
    }
  },
  service: {
    timihirtTarikoch: {
      title: "Teachings & Stories",
      noPosts: "No blog posts found.",
      featured: "Featured",
      authorLabel: "Author:",
      readMore: "Read full article",
      hero: {
        authorName: "Abba Misgana Sillasie Menaye",
        sourceLabel: "Source:",
        sourceLinkText: "eotcmk.org",
      },
      biblicalFigures: {
        moses: {
          title: "The Faithful Servant: Prophet Moses",
          content:
            `The Holy Scriptures testify that Moses was a faithful servant. "But this is not true of my servant Moses; he is faithful in all my house. With him I speak face to face, clearly and not in riddles; he sees the form of the LORD." (Numbers 12:7-8). This is not the testimony of a created being, but testimony given by the Creator Himself. In truth, even in our time, would there be a servant whom the Creator testifies to His creation about his faithfulness?
             Moses' faithful service was unwavering through forty years of wilderness, exile, suffering, and wrath—all because he was devoted to his brothers. For another forty years, he led his exiled brothers: he parted the sea, defeated enemies, brought down manna, led the cloud, brought water from a rock, and shared in the sufferings of his people. He endured the heat of the day and the cold of the night and served faithfully until his death.
             "So Moses went back to the LORD and said, 'Oh, what a great sin these people have committed! They have made themselves gods of gold. But now, please forgive their sin—but if not, then blot me out of the book you have written.'" (Exodus 32:31-32).
             A faithful servant says, "Let me die so that others may live." But what we see now is completely different. It is: "Let people die, so that I may live; let people fast, so that I may eat; let people be naked, so that I may dress; let people mourn, so that I may rejoice."
             A faithful servant prioritizes the benefit of the people they serve, not their own personal gain.`,
        },
        david: {
          title: "The Faithful Servant: Prophet David",
          content:
            `After the era of the Judges passed and was replaced by the era of Kings, God took David from tending the sheep and gave him authority to rule over Israel. He received the kingdom, the scepter that Saul had forfeited, through the hand of Samuel.
              He ruled the people of Israel faithfully with the authority given to him. And God testified for him, just as He had testified for Moses. "The LORD has sought out a man after his own heart"; as it was said, "I have provided for myself a king among his sons," and "Go to Jesse in Bethlehem, for I have chosen one of his sons to be king." (1 Samuel 13:14, 16:1-3).
              As it is said in the Book of Hours (by Abba Giorgis of Gasicha): "I have found David my servant; with my sacred oil I have anointed him" (Psalm 89:20). He interprets this as, "I have found David, my servant, a faithful man according to my heart." He was found because of his faithfulness, and he remained faithful after he became king.
              But we who live in this world now: we are faithful in poverty, but when wealth, position, and power come, we lose our faithfulness. Indeed, we even despise faithfulness. Deceit appears to us as bravery, and fraud seems like wisdom.
              Before he was anointed, David was faithful in keeping his sheep. If a lion or a bear came and carried off a lamb from the flock, he would go after it, strike it, and rescue the lamb from its mouth.`,
        },
        joseph: {
          title: "The Faithful Servant: Saint Joseph",
          content:
            `Joseph was a man of integrity from a young age; he carried food for his brothers, and even when his own food ran out, he would not eat his brothers' portion. When his brothers sold him into slavery, he remained faithful while serving in Potiphar's house. His faithfulness made him the master of Potiphar's household.
              "They sold Joseph as a slave; his feet were hurt with fetters, his neck was put in a collar of iron; until what he had predicted came to pass, the word of the LORD tested him. The king sent and released him; the ruler of the peoples set him free. He made him lord of his house and ruler of all his possessions, to instruct his officials at his pleasure and to teach his elders wisdom." (Psalm 105:17-22, paraphrased)
              While Joseph was in this situation, his master's wife cast her eyes upon him, watching him come and go with a lustful gaze.
              "And after a time, his master's wife cast her eyes on Joseph and said, 'Lie with me.' But he refused and said to his master's wife, 'Behold, because of me my master has no concern about anything in the house, and he has put everything that he has in my charge. He is not greater in this house than I am, nor has he kept back anything from me except you, because you are his wife. How then can I do this great wickedness and sin against God?'" (Genesis 39:7-9)`,
        },
      },
      lessons: {
        list: [
          {
            title: "Who is the Faithful Servant?",
            source: "Abba Misgana Sillasie Menaye",
            link: "https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/",
            content:
              `In the Ethiopian Orthodox Tewahedo Church, the sixth Sunday of the Great Fast (Lent) is called "Gebru Hir" (ገብር ኄር). This name was given by the Ethiopian scholar Saint Yared. From one of his five books, known as "Tsome Digua" (ጾመ ድጓ), he established the names for the weeks of the Great Fast along with their liturgical rites.
Therefore, starting from the Saturday evening prayer (Kawazema) of the sixth week of the Great Fast, the hymns sung in the church, the sermons preached, and the teachings given all commemorate the "Gebru Hir" or the "Faithful Servant."`,
          },
          {
            title: "Parable of the Faithful Servant",
            source: "Gospel of Matthew",
            link: "#",
            content:
              `For this to be an example for us, we recall the story written in the Gospel of Matthew:
A man of wealth called his servants and gave one of them five talents, gave another two talents, and gave another one talent. After this, he went to a far country.
The one who had received five talents went and traded with them and made another five, so he had ten.
The one who had received two talents also gained another two, making four.
But the one who had received one talent went and dug in the ground and hid his master's money by burying it.
After a long time, their master returned and settled accounts with them.
The one who had received five talents came forward and said, ‘Master, you gave me five talents; look, I have made five more talents.’
His master said to him, ‘Well done, good and faithful servant! You have been faithful over a little; I will set you over much. Enter into the joy of your master.’
The one with the two talents also came forward and said, ‘Master, you gave me two talents; look, I have made two more talents.’
His master said to him, ‘Well done, good and faithful servant! You have been faithful over a little; I will set you over much. Enter into the joy of your master.’
Then the one who had received the one talent also came forward and said, ‘Master, I knew you to be a hard and severe man, reaping where you did not sow, and gathering where you did not winnow; so I was afraid, and I went and hid your talent in the ground. Here, you have what is yours.’
But his master answered him, ‘You wicked and lazy servant! You ought to have invested my money with the bankers, and at my coming I should have received what was my own with interest. So take the talent from him and give it to the one who has the ten talents. For to everyone who has will more be given, and he will have an abundance. But from the one who has not, even what he has will be taken away. And cast this worthless servant into the outer darkness. In that place there will be weeping and gnashing of teeth.’ (Matthew 25:14-30)`,
          },
          {
            title: "What Makes a Servant Faithful?",
            source: "Abba Misgana Sillasie Menaye",
            link: "#",
            content:
              `The "man of wealth" refers to the Lord (God). The "talent" refers to the various gifts of grace (spiritual gifts and responsibilities) given for service. Those who traded and multiplied them are the saints who served faithfully and appropriately. The one who buried his talent is the one who did not use the grace given to him for service when he should have.
The statement that "their master came to settle accounts" shows us that on the Day of Judgment, He will come to give reward to everyone according to the service they have rendered. By saying to those who served, "Enter into the joy of your master," it means that the faithful servants will inherit the Kingdom of Heaven.
The fate of the lazy ones—being cast into "outer darkness, where there will be weeping and gnashing of teeth"—shows that they will enter Sheol (the place of the dead), a place of suffering and intense darkness.
The word from the Holy Gospel that I cited above asks, "Who is a faithful servant?" This is a question for every human being created in the image of God. Every person is expected to answer this divine question.`,
          },
        ],
      },
      content: {
        introduction: [
          "In the Ethiopian Orthodox Tewahedo Church, the sixth Sunday of the Great Fast (Lent) is called \"Gebru Hir\" (ገብር ኄር). This name was given by the Ethiopian scholar Saint Yared. From one of his five books, known as \"Tsome Digua\" (ጾመ ድጓ), he established the names for the weeks of the Great Fast along with their liturgical rites. Therefore, starting from the Saturday evening prayer (Kawazema) of the sixth week of the Great Fast, the hymns sung in the church, the sermons preached, and the teachings given all commemorate the \"Gebru Hir\" or the \"Faithful Servant.\"",
          "For this to be an example for us, we recall the story written in the Gospel of Matthew: A man of wealth called his servants and gave one of them five talents, gave another two talents, and gave another one talent. After this, he went to a far country. The one who had received five talents went and traded with them and made another five, so he had ten. The one who had received two talents also gained another two, making four. But the one who had received one talent went and dug in the ground and hid his master's money by burying it.",
          "After a long time, their master returned and settled accounts with them. The one who had received five talents came forward and said, 'Master, you gave me five talents; look, I have made five more talents.' His master said to him, 'Well done, good and faithful servant! You have been faithful over a little; I will set you over much. Enter into the joy of your master.' The one with the two talents also came forward and said, 'Master, you gave me two talents; look, I have made two more talents.' His master said to him, 'Well done, good and faithful servant! You have been faithful over a little; I will set you over much. Enter into the joy of your master.'",
          "Then the one who had received the one talent also came forward and said, 'Master, I knew you to be a hard and severe man, reaping where you did not sow, and gathering where you did not winnow; so I was afraid, and I went and hid your talent in the ground. Here, you have what is yours.' But his master answered him, 'You wicked and lazy servant! You ought to have invested my money with the bankers, and at my coming I should have received what was my own with interest. So take the talent from him and give it to the one who has the ten talents. For to everyone who has will more be given, and he will have an abundance. But from the one who has not, even what he has will be taken away. And cast this worthless servant into the outer darkness. In that place there will be weeping and gnashing of teeth.' (Matthew 25:14-30)",
          "The \"man of wealth\" refers to the Lord (God). The \"talent\" refers to the various gifts of grace (spiritual gifts and responsibilities) given for service. Those who traded and multiplied them are the saints who served faithfully and appropriately. The one who buried his talent is the one who did not use the grace given to him for service when he should have. The statement that \"their master came to settle accounts\" shows us that on the Day of Judgment, He will come to give reward to everyone according to the service they have rendered."
        ],
        question: [
          "The word from the Holy Gospel that I cited above asks, \"Who is a faithful servant?\" This is a question for every human being created in the image of God. Every person is expected to answer this divine question."
        ],
        conclusion: [
          "By saying to those who served, \"Enter into the joy of your master,\" it means that the faithful servants will inherit the Kingdom of Heaven. The fate of the lazy ones—being cast into \"outer darkness, where there will be weeping and gnashing of teeth\"—shows that they will enter Sheol (the place of the dead), a place of suffering and intense darkness."
        ]
      },
    },
    kirstina: {
      heroDescription: "The sacred sacrament that leads into the Christian faith",
      about: {
        title: "About Baptism",
        content: "Just as we are born in the flesh from our parents and inherit the nature of the flesh, so when we are baptized in water, we are born from the Holy Spirit. Our Lord taught: 'That which is born of the flesh is flesh; and that which is born of the Spirit is spirit' and, 'Except a man be born again, he cannot see the kingdom of God' (John 3:3,6). The apostle also says about the grace of sonship we receive through baptism: 'You received the Spirit of adoption, whereby we cry, Abba, Father. The Spirit bears witness with our spirit that we are God's children' (Rom 8:15-16). Also, to all who received Him and believed in His name He gave power to become children of God; who were born of God, not of blood, nor of the will of the flesh, nor of the will of man (John 1:11-13). Therefore, we Christians should understand we have two births: first from our parents in the flesh, and second from God. After we are born, we must grow in both aspects, since man is both physical and spiritual (Gal 3:26; Titus 3:5; 1 Pet 1:23)."
      },
      howPerformed: {
        title: "How is the baptism of sonship performed?",
        content: "There is one baptism that grants sonship (Eph 4:4-5), yet it may be manifested in three principal ways. Water baptism is performed by priests in blessed water in the name of the Trinity, and we are born of God by the work of the Holy Spirit (John 3:3-6). When water is blessed by prayer, the Holy Spirit dwells in it to grant sonship; thus whoever is baptized in faith is born of water and the Spirit. Baptism is an expression of God's grace; therefore even the poor, who at least have water, may be born of God through water. Those who could be baptized in water but neglect it, treating it lightly, reject God's grace. Conversely, those who fully believe and are martyred before baptism receive sonship through the baptism of the Holy Spirit or of blood: the Spirit's baptism (Luke 3:16; Acts 1:5; Acts 2:1-4; 1 Cor 12:13) and the baptism of blood borne by martyrs."
      },
      howCeremony: {
        title: "How is baptism performed?",
        part1: "If the one to be baptized is a new Christian, he or she must first learn the basic teachings of the faith, and that faith must be witnessed. In the case of infants, those who come to be the Christian parents (godparents) for the children testify to the children’s faith so that they may be baptized. At the time of baptism, one must descend into and rise out of the water three times, for it is a symbol of Christ’s death and resurrection. The baptized person is baptized in the name of the Father, the Son, and the Holy Spirit (Matt 28:19). If those to be baptized are married and have families, all must learn, believe, and be baptized in unity. After one is baptized, one must receive Communion (receive the holy body and precious blood). If this is not done, the baptism is not living.",
        part2: "Among the orders of the priesthood, those who have authority to baptize are bishops and priests only (Matt 28:19). Deacons are not permitted to baptize (Matt 28:19 and Fetha Negest, article 3). A baptism performed by one who is not ordained is regarded as invalid (like spittle) and not true baptism; in such a case, the person must be truly baptized in order to receive sonship. Baptism is done by immersion or dipping, not by sprinkling; sprinkling distorts the sign, the mystery, and the rite. Baptism means immersion; therefore it signifies entering into and coming out of the water. Thus, in the name of the Father, and of the Son, and of the Holy Spirit, one enters the water and comes out three times (Matt 28:19). Scripture reveals that the baptism accomplished is by immersion.",
        part3: "In the Acts of the Apostles, ‘he commanded the chariot to stop, and Philip and the eunuch both went down into the water, and he baptized him. And when they came up out of the water…’ (Acts 8:38–39). The phrase ‘when they came up out of the water’ indicates that the eunuch had gone into the water to be baptized. ‘So that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life; for if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his’ (Rom 6:4–5; see also Col 2:12). Burial signifies going into the tomb, and resurrection signifies coming out of the tomb; likewise, baptism requires going into the water (by immersion) and coming out.",
        part4: "The apostle also says, ‘He saved us, not because of works done by us in righteousness, but according to his mercy, by the washing of regeneration and renewal of the Holy Spirit’ (Titus 3:5). And again to Saul: ‘And now why do you wait? Rise and be baptized, and wash away your sins, calling on his name’ (Acts 22:16). In this word, ‘wash’ pertains to the whole body; so also baptism is accomplished by immersion. In all four Gospels the baptism of our Lord is recorded as going into and coming up from the water: ‘And when Jesus was baptized, immediately he went up from the water; and behold, the heavens were opened to him…’ (Matt 3:16). ‘Came up from the water’ shows that the Lord’s baptism was by immersion. Sprinkling or pouring does not require going into and coming out of the water. Likewise, just as natural birth entails abiding in the mother’s womb and coming forth, so ‘being born of water and the Spirit’ entails entering into and coming out of water (immersion). Therefore baptism is called ‘to be born again’ (John 3:3)."
      },
      naming: {
        title: "Christian Name (Name of Baptism)",
        content: "A name distinguishes one person from another. Just as a person is given a name at birth from father and mother, so also at baptism, being born of water and the Holy Spirit, one receives a name. Therefore a Christian may have two names: the civil name given by the parents (secular name) and the name given at baptism, called the Christian name. In baptism we receive sonship and a Christian name. One who believes in Christ is called a Christian, and the faith is called Christianity. ‘Christian’ means belonging to Christ. Thus, the name that reveals our faith in Christ and our baptism in the name of the Holy Trinity is the Christian name. The commemoration (saint’s feast) tied to the day of baptism may be taken as the person’s patronal name-day. In spiritual service we use our Christian name. The giving of a new name has biblical precedent: God changed Abram to Abraham, Jacob to Israel, Simon to Peter, and Saul to Paul."
      },
      baptismAge: {
        title: "Appointed Age for Baptism",
        part1: "In the apostolic preaching, all who believed—of any age group—were baptized (Acts 16:15; 1 Cor 1:15). Later, as parents entered into vows to teach their children, it became customary to baptize boys on the fortieth day and girls on the eightieth day. The basis is the Old Testament: when the children of Israel were born, parents would bring an offering to the Temple and register them in the record of Israelite citizenship—boys on the fortieth day and girls on the eightieth day—so that they might become heirs of the promised land, Canaan (Lev 12:1–10).",
        part2: "As Adam entered into his inheritance (Paradise) on his 40th day from creation, and Eve on her 80th day, so infants on their 40th and 80th days are baptized and enter the Church, the image of the heavenly Jerusalem.",
        part3: "In the Orthodox Church, the parents and the Christian mother/father (godparents) assume responsibility to teach the faith to infants baptized on the 40th and 80th days. Additionally, by vow, when they rise with Christ (are baptized), they inherit the Kingdom of Heaven, the inheritance of their parents. Those who come after the 40th and 80th days may be baptized at any age after they learn and believe the faith. As long as one lives, there is nothing that prevents baptism if one has not yet been baptized."
      },
      godparents: {
        title: "Godfather and Godmother",
        content: "For infants baptized on the 40th and 80th days, godfather and godmother were appointed to assume full responsibility regarding their faith. This was instituted by our Church’s first bishop in the 4th century, Abba Salama Kesate Birhan. The purpose is to strengthen the spiritual kinship (godparent-child relationship). Those joined by godparenthood may not marry. Those related by flesh may marry after the seventh degree of kinship, but those related by spiritual kinship (godparenthood) have no numeric limit—marriage is entirely forbidden. This shows the honor given to spiritual kinship over fleshly kinship."
      },
      godparentsRestrictions: "There are restrictions for godparenthood: those with blood relation or marital relation to the candidate; those not of sufficient age to teach or instruct; those lacking capacity in faith teaching; or those whose faith is not the same as the candidate may not serve. Regarding gender, men raise boys and women raise girls; a man does not raise a girl, nor a woman a boy. Godparents do not distinguish between the children they raise in baptism and the children they bear in the flesh; when the baptized children reach schooling age, godparents are obliged to teach the basics of the faith and to fulfill their vows in practice.",
      maeteb: {
        title: "Ma'eteb (Cord) Wearing",
        part1: "The word ‘Ma'eteb’ derives from the Ge'ez verb ‘Ataba’, meaning ‘to mark/indicate’. Thus ‘Ma'eteb’ means a sign. It is a sign (identity) or seal given to Christians who are baptized by faith. Various examples concerning ‘Ma'eteb’ are referenced in Holy Scripture. The patriarchs of the Old Covenant had signs as witnesses of their faith; for example, our father Abraham, the father of many, was given circumcision as a sign (Rom 4:13; Gen 17:9–14). ‘Ma'eteb’ is also a sign that reminds us of Christ being bound with cords and led (cf. John 18:12–24; 1 Pet 2:21).",
        part2: "That ‘Ma'eteb’ is of three colors signifies the Trinity; and the three cords braided into one signify unity. By wearing the Christian ‘Ma'eteb’, one bears witness to one’s Christianity without shame and overcomes demons. As it is blessed with prayer, one receives the Church’s blessing through it. The one who introduced the wearing of ‘Ma'eteb’ was Saint Jacob of El-Bereda’e, who, it is written, had Christians wear it to distinguish them from heretics."
      },
      visibleGrace: {
        title: "Visible Service; Invisible Grace",
        content: "In the mystery of baptism, the visible service is what we can see: the catechumen descending into and ascending from the water, the rite of prayer being performed, the white garment being worn, the ‘Ma'eteb’ being tied, and so on. The invisible grace granted in baptism, however, is that the water is transformed into the font of rebirth; the catechumen receives divine sonship; and the grace of the Holy Spirit, purity, and holiness are bestowed. Thus, in the mystery of baptism, invisible grace is given through visible service."
      },
      formLink: {
        label: "Baptism Form Portal:",
        linkText: "Go to the Baptism Form"
      },
      serviceDetails: {
        when: {
          title: "When",
          description: "Every Sunday before Divine Liturgy"
        },
        duration: {
          title: "Duration",
          description: "Approximately one hour"
        },
        participants: {
          title: "Participants",
          description: "Parents, Godparents, and the Child"
        }
      }
    },
    sirateKidase: {
      title: "Divine Liturgy (Sirate Kidase)",
      heroDescription: "The principal worship service of the Ethiopian Orthodox Tewahedo Church",
      definition: {
        title: "What is Sirate Kidase?",
        content: "Kidase means ‘to sanctify, bless, give thanks, honor.’ The meaning of the word is to sanctify, to bless, and to give thanks. If we read and translate ‘Sirate Kidase’ in one breath, it means the order/rite of thanksgiving, the liturgy of thanksgiving (the order of thanksgiving). Sirate Kidase is called the order of the Eucharistic sacrifice."
      },
      schedule: {
        title: "Service Schedule",
        days: { sunday: "Sunday", wednesday: "Wednesday", saturday: "Saturday" }
      },
      division: {
        title: "Division of the Divine Liturgy",
        intro: "In general, the order of the Divine Liturgy (the rite of the Eucharistic sacrifice) is divided into three parts:",
        part1Title: "The Preparation Section of the Liturgy",
        part1Content: "The first section is the Preparation of the Liturgy, also called 'Gebe’ate Mentola’et' (order of preparation). It runs from 'O my brother, strengthen your heart' to 'Why is this day dreadful?'.",
        part2Title: "Gospel Instruction Section",
        part2Content: "The second section is the Gospel instruction, admonition, and thanksgiving; commonly it is called Sirate Kidase. In this section of the Liturgy readings are taken from the Holy Gospel, from the prophecies of the holy Prophets, from the Epistles of the Apostles, and the glorious Holy Gospel of the Lord is read and interpreted.",
        part3Title: "Fruit of the Liturgy",
        part3Content: "The third section is when the bread is changed into the Divine Body and the wine into the Divine Blood; it is the time of prayer and thanksgiving. Especially in this time of prayer, when the special thanksgiving 'Grant us by Thy Holy Spirit' is offered, the Holy Spirit descends and the oblations are changed; the bread is changed into the Divine Body and the wine into the Divine Blood. In sum, this time of the Eucharistic Liturgy is called the Fruit of the Liturgy."
      },
      list: {
        intro: "According to the rite of our Church, there are fourteen Anaphoras in which the prayer section is celebrated; they are:",
        items: [
          "Anaphora of the Apostles",
          "Anaphora of the Lord",
          "Anaphora of St. Mary",
          "Anaphora of St. John, son of thunder",
          "Anaphora of the Three Hundred",
          "Anaphora of St. Athanasius",
          "Anaphora of St. Basil",
          "Anaphora of St. Gregory",
          "Anaphora of St. Epiphanius",
          "Anaphora of St. John Chrysostom",
          "Anaphora of St. Cyril",
          "Anaphora of St. Jacob of Sarug",
          "Anaphora of St. Dioscorus",
          "Anaphora of St. Gregory II"
        ]
      },
      history: {
        title: "Who established Sirate Kidase?",
        content: "The Divine Liturgy (the order of the Eucharistic sacrifice) was established by our High Priest, Jesus Christ. On Maundy Thursday evening, our Savior Jesus Christ, sitting with His disciples at the Passover table according to the Old Testament rite, after they had eaten the Passover, took the holy bread and said, ‘This is my body which is given for you and for many for the remission of sins,’ and likewise He took the cup, gave thanks, and honored it saying, ‘This is my blood of the new covenant which is shed for you and for the whole world,’ giving them His precious blood by His graciousness. Saying, ‘Do this,’ He established the order of the Divine Liturgy. He taught them the rite both by action and by instruction.",
        extra1: "This order of the Liturgy was first celebrated in the house of Lazarus, a man who was called poor, where the first Gospel-age Upper Room was located.",
        extra2: "The sequence of the Divine Liturgy we celebrate today was compiled by St. Basil of Caesarea."
      },
      firstCelebrants: {
        title: "The First Celebrants and Ministers",
        content: "The first celebrants and ministers of this Eucharistic prayer were the holy apostles. When the Lord's hour for the Eucharistic prayer came, He sat at the table with the twelve apostles to celebrate the Eucharistic prayer.",
        extra1: "After they had celebrated the Divine Liturgy and received the holy oblation, the disciples gave thanks saying, ‘Glory and thanksgiving be to Thee for Thou hast made us worthy of Thy holy Body and precious Blood.’ After they gave thanks and sang, they went out to the Mount of Olives (Matt 26:30).",
        extra2: "In our Holy Church today, when we gather for the Divine Liturgy, we do likewise and give thanks for being made worthy to eat the holy Body and drink the precious Blood by His goodness; we honor and glorify Him.",
        extra3: "Therefore, when those who love the Body and are prepared receive the holy oblation at the appointed time, we chant: ‘For Thou art mighty; take Him equally, and to Thee be praise forever and ever,’ for Thou hast in Thy kindness given us Thy holy Body and precious Blood to partake of eternal life."
      },
      mainPurpose: {
        title: "The Main Purpose of the Service",
        content: "The main purpose is to offer the eternal sacrifice of the New Testament, the Eucharistic sacrifice of the holy body and precious blood taken from our Lady, to eat and drink for those who believe in it and to receive eternal life, and to teach and perform this rite for the apostles and their successors.",
        extra1: "As He said, ‘Whoever eats of this bread will live forever; and whoever eats My flesh and drinks My blood has eternal life’ (John 6:51–59).",
        extra2: "Therefore, when we go to Church to participate in the order of the Eucharistic prayer in which eternal life is granted, we should know the order of the service, how to conduct ourselves in the House of God (1 Tim. 3:15), and be admonished not to wander without order (2 Thess. 5:14)."
      },
      preparation: {
        title: "Preparation Required",
        content: "As St. Paul the Apostle advised us, 'Let all things be done decently and in order' (1 Cor. 14:40), it is proper to learn and be guided by order. Therefore, when we come to the Holy Church, especially on Sundays, great feasts, and holy feast days, to celebrate the Divine Liturgy, receive Communion, and receive blessings from the Eucharistic prayer, we must do the following:",
        sections: [
          {
            title: "A. Prepare your conscience",
            paragraphs: [
              "When we approach the presence of God, we must have a good conscience (Acts 23:1; Rom 13:5). Our God says: 'My son, give me your heart' (Prov 23:26).",
              "Therefore, before coming to church, preparing the conscience on Saturday evening (preparation of the heart) helps to follow the Divine Liturgy. This means to gather and calm the mind scattered by the six days of work and to think ‘How should I enter the temple?’ We must enter the sanctuary carefully. As the wise Solomon counseled: 'Guard your steps when you go to the house of God' (Eccl 5:1).",
              "To gather our thoughts and prepare for good works, as the Apostle advised: 'All Scripture inspired by God is profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work' (2 Tim 3:12–16)."
            ],
            list: ["Read the Holy Scriptures (Rom 15:4–5)"]
          },
          {
            title: "B. Keep bodily cleanliness",
            paragraphs: [
              "So that our natural body may be well groomed, we prepare our body on the eve of Sunday by washing; beyond our personal cleanliness, because God is of pure nature, we gain merit by approaching Him with reverence.",
              "Moses commanded the chosen house of Israel to prepare to meet their Creator: 'Sanctify yourselves and wash your garments' (Ex 19:15)."
            ]
          },
          {
            title: "C. Observe spiritual dress and decorum",
            paragraphs: [
              "Along with bodily cleanliness, we must observe the dress code. When the command was given to St. Jacob to offer sacrifice at Bethel, the type of the Holy Church, he told his household: 'Be clean and change your garments' (Gen 35:2).",
              "As it is written, 'Ask your father, and he will show you' (Deut 32:7), Moses inquired and learned from the fathers the foundations of spiritual discipline, including the dress of the elders. Taking them as examples, it is preferable to have a distinct church garment; if not, we should wear what we have neatly and cleanly.",
              "Additionally, especially on Sundays, unless by necessity, going to church only in a jacket or shirt is not commendable. If invited to a worldly wedding, we dress properly; even in ordinary clothing one would not be turned away, but we do not dishonor those who invited us with respect (cf. Mt 22:12).",
              "Likewise, since the Holy Church is the bridal house of the royal King Christ, a place of spiritual joy and purity without blemish, let fathers and brothers dress decently and modestly, and mothers and sisters likewise wear their traditional dress; standing before their Creator like the heavenly angels to give praise brings glory to God and favor to the celebrants."
            ]
          },
          {
            title: "D. Monthly cycle (women)",
            paragraphs: [
              "When mothers and sisters are in their monthly cycle, entering the Holy Church to prepare oneself for offering and to perform the Divine Liturgy and worship is not appropriate (Fetha Negest ch. 14:5631), for the sake of preserving the purity of the church.",
              "Since the Church is a pure place of worship, we believe we receive full blessing as we tread upon the ground from the gate onward, expressing our love to our Creator. Because sometimes this cycle may be heavier than expected for some, this rule is to respect the spiritual feeling of others and to avoid scandal; it is not that, as in the Old Testament, the monthly period is considered a defilement.",
              "To think otherwise is sin and deception. Even if one thinks so, St. Ephrem says: 'The Devil set free Eve whom he had deceived'—if Eve was freed from bodily and spiritual condemnation, our Lady in holiness, by her virginity and sanctity, obtains grace and honor for us; thus, do not despise her—this closes the door to those who say that because Eve was the cause of sin, she was not redeemed."
            ]
          }
        ]
      },
      rules: {
        title: "Things to be Careful About During Divine Liturgy",
        sections: [
          {
            title: "A. Regarding entering and exiting",
            items: [
              "After the Divine Liturgy has begun, it is not permitted to enter the church or to go out from the church. However, if one truly cannot remain until the end of the Eucharistic prayer, one should withdraw in advance and discreetly, without disturbing the celebrant. (Fetha Negest ch. 12:478)",
              "After the Divine Liturgy has begun, it is not proper to leave unless the deacon dismisses by saying, ‘Depart in peace; may thorns not prick you; may stumbling blocks not strike you; go in peace to your homes.’ (Fetha Negest ch. 12: N. 92)"
            ]
          },
          {
            title: "B. On spitting and clearing the throat",
            items: [
              "While we are in the Divine Liturgy, spitting and clearing the throat is improper. (Fetha Negest ch. 12:476)"
            ]
          },
          {
            title: "C. About private prayer",
            items: [
              "After the Eucharistic prayer has begun in the church, it is improper to say personal prayers either by opening a book or by reciting aloud. This implies thinking, ‘My prayer is better than the prayer being offered and the sacrifice being made.’ Such a person is like one who goes out with a candle lit in the blazing sunlight. However, according to the tradition handed down from the Fathers, if there was a prayer that had been started earlier and not yet completed, after the dismissal, while the celebrants are offering, one may pray in a low voice without being heard. This is an economia (a lenient allowance), meaning a condescension due to weakness, an opinion of the teachers."
            ]
          },
          {
            title: "D. Idle talk is not permitted",
            items: [
              "Evil speech is the mark of evil men. Of what a wicked man thinks in his heart, he brings out and speaks; so said the Lord (Matt 12:35). To cure this bad habit, it is proper to beseech as the honorable David and the Psalmist: ‘O Lord, set a guard over my mouth’ (Ps 140:3).",
              "Especially during the order of the Divine Liturgy, idle talk and laughter are forbidden. If a priest laughs, he is punished with a full week (seven days) of penance—kneeling, fasting, prayer, and prostration. If it is a lay believer, he must immediately be separated from the Divine Liturgy for that day and shall not receive the Body and Blood. (Fetha Negest ch. 12: Dsq. 12; Nicaea 61; Basil 72)",
              "While we are in the Divine Liturgy, if we speak vain words as we stand before the Cross, it may seem that on Friday he had the opportunity to stand by the Cross of the Lord, but as he confessed his sins and begged mercy, the thief who was crucified on the left (who had been granted reprieve) mocked the Jews; we must be careful not to resemble the House of Judah who mocked (Matt 26:39–49).",
              "‘By your words you will be justified, and by your words you will be condemned’ (Matt 12:37)."
            ]
          },
          {
            title: "E. Holding grudges while offering is not acceptable",
            items: [
              "There is no prayer while holding a grudge and no prayer while theft is held, say the Fathers in proverbial speech. To seek mercy and forgiveness without first making mercy and forgiveness our treasure is folly. The Lord—glory and praise be to Him—admonished thus: ‘If you bring your gift to the altar and there remember that your brother has something against you, leave your gift before the altar and go; first be reconciled to your brother, and then come and offer your gift’ (Matt 5:24).",
              "The prayer of one who bears resentment is like fruit that has fallen among thorns: it bears neither fruit below nor above. If it were to bear fruit above without rooting below, the birds would snatch it away as it clings to the thorns. Likewise, if a resentful person prays without abandoning his resentment, the Devil, having fed on his rancor, will pluck away the fruit of praise. (Building of the Foundations)"
            ]
          }
        ]
      },
      participation: {
        title: "How to Participate",
        items: [
          "Arrive before the service begins",
          "Dress appropriately and properly",
          "Follow the service with prayer and reverence",
          "Keep the appropriate fast if receiving Communion"
        ]
      },
      additionalInfo: {
        title: "Important Notes",
        items: [
          "The church opens 30 minutes before the service",
          "Please maintain silence during the service",
          "Children are welcome but need supervision",
          "Photography is not allowed during the service"
        ]
      }
    },
    sundaySchool: {
      title: "Sunday School",
      subtitle: "Sunday School Department",
      comingSoon: "We are currently working on this section. Please check back later for updates.",
      children: { title: "Children & Youth", subtitle: "Children and Youth Section", comingSoon: "We are currently working on this section. Please check back later for updates." },
      mezmur: { title: "Mezmur", comingSoon: "We are currently working on this section. Please check back later for updates." },
      timihirt: { title: "Timihirt", comingSoon: "We are currently working on this section. Please check back later for updates." },
      otherActivities: { title: "Other Activities", comingSoon: "We are currently working on this section. Please check back later for updates." }
    },
    tseloteFithat: {
      title: "Tselote Fithat (Prayer of Absolution)",
      subtitle: "What is Tselote Fithat? What is its purpose?",
      source: "Source: https://eotcmk.org/a/23-2007/ June 23, 2007 E.C.",
      conclusionTitle: "Conclusion",
      definition: "Fithat means a prayer offered to God for those who depart from this world through death, so that they may be cleansed from the transgressions they committed while in the flesh and be released from the bondage of sin. The Church commands that prayers of absolution be performed for the dead.",
      purpose: "Tselote Fithat provides forgiveness of sins, pardon, and rest for the souls of those who have sinned. For the righteous, it brings honor, blessing, and rest.",
      connection: "The living and the dead are connected through prayer. The living pray for the dead, and the dead intercede for the living (Henok 12:34). Just as the prayers and sacrifices offered by the living for the dead are clearly seen, so too the dead, being in the realm of souls, pray to their Creator for those who remain in this world, asking for life and salvation, forgiveness of sins, hope of the kingdom of heaven, and steadfastness in faith, so that they may not die without repentance or renewal from the decay of sin. This practice will continue until the day of the Second Coming.",
      biblical: [
        "The holy apostles have commanded in the Apostolic Canons that prayers of absolution be performed for the dead, that sacrifices be offered for them, and that prayers be said in the church and at their burial places. 'Gather without hesitation in the church for your Christian brothers and martyrs who have died in Christ. Offer sacrifices for them in the church, and when you take them to the church and to the grave, recite the Psalms of David.' (Didascalia, Chapter 33, page 481)",
        "The prophet David also said, 'Precious in the sight of the Lord is the death of his saints. Return to your rest, O my soul, for the Lord has dealt bountifully with you. For you have delivered my soul from death.' Thus, he spoke in his psalm that the dead should be sent to God with prayer, thanksgiving, and sacrifice. (Psalm 115:114-7)",
        "The Church's law and order book, Fetha Negest, confirms what is mentioned in the spiritual justice of the Didascalia (Chapter 22). The Book of Funeral Rites also says that priests should pray for the dead and remember them in sacrifice and communion. When priests perform prayers of absolution and offer sacrifice and communion for them, angels descend to receive their souls. If they are sinners, they intercede for the forgiveness of their sins. If they are pure, they rejoice. 'Glory to God in the highest, who loves mankind, and peace on earth.' Thus they praise God. It is written that this praise and joy of the angels is for the salvation of mankind."
      ],
      angels: "It is written in the Holy Gospel that the souls of righteous people are received by holy angels. 'The beggar died, and was carried by the angels to Abraham's bosom.' (Luke 16:22)",
      time: "Tselote Fithat is a prayer of mourning. Saint James says, 'According to what is in you, we send off believers who have been separated from the flock in bodily death with prayer and song.' (James 5:13) Tselote Fithat is performed not for apostates and heretics, but for people of faith.",
      exceptions: [
        "'If anyone sees his brother committing a sin not leading to death, he shall ask, and God will give him life—to those who commit sins that do not lead to death. There is sin that leads to death; I do not say that one should pray for that. All wrongdoing is sin, but there is sin that does not lead to death.' (1 John 5:16) For example, Tselote Fithat is not performed for someone who has committed suicide in various ways. This is because they have destroyed the temple of their body with their own hands. 'Do you not know that you are God's temple and that God's Spirit dwells in you? If anyone destroys God's temple, God will destroy him. For God's temple is holy, and you are that temple.' (1 Corinthians 3:16)",
        "Likewise, Tselote Fithat is not performed for heretics and pagans. For 'what fellowship has light with darkness?' (2 Corinthians 6:14)"
      ],
      church: "There is no time when the Church does not pray for mankind. She prays that a person, the most precious creation, may be a blessed embryo before conception, sanctified in the womb like Jeremiah (Jeremiah 1:5), and filled with the Holy Spirit in the womb like John the Baptist. She prays that no difficulties may occur during birth, and she prays that the person may become a child of God through baptism, and she baptizes them. She nurtures them through education, feeding them with the grace of God, for she is the treasury of grace. When they fall into sin, she tells them to repent so that their sin may be forgiven. She prays for their forgiveness. And at the time of their death, she prays that God may not hold their sin against them or count their transgressions. In doing so, she fulfills her role as a mother. When a person dies, relatives bid farewell with tears. But the Church's tears are prayers, and with her prayers, she entrusts that person's soul to the faithful Creator, praying, 'Receive their soul.'",
      faith: "The Church performs Tselote Fithat with complete faith that it will be effective. This is because a Christian never loses hope until the end. 'And whatever you ask in prayer, you will receive, if you have faith.' (Matthew 21:22) 'Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.' (Mark 11:24) 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.' (Matthew 7:7) 'Whatever you ask in my name, this I will do. If you ask me anything in my name, I will do it.' (John 14:13)",
      conclusion: [
        "The evangelist John also said in his epistle, 'I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life. And this is the confidence that we have toward him, that if we ask anything according to his will he hears us. And if we know that he hears us in whatever we ask, we know that we have the requests that we have asked of him.' (1 John 5:3)",
        "Therefore, the teaching of the Church is that the God who raised Moses from the grave and showed him His face (Matthew 17:3) will show His merciful face to these also without despising them. For nothing is impossible for the merciful and forgiving God. (Genesis 18:13, Luke 1:37)",
        "As the apostle Saint John said, 'There is sin that leads to death; I do not say that one should pray for that,' the Church also follows this. This is because there are people who, though God has given them time for repentance, to turn away from sin, to repent, to receive the body and blood of Christ, spend their entire lives mocking the life and mercy of God. These have judged themselves. Moreover, to say 'When I die, my sin will be forgiven through Tselote Fithat' without abandoning sin is to mock God's mercy and to insult Him, and this is counted among the sins that lead to death.",
        "May the mercy of God and the intercession of the Virgin Mary not depart from us, that we may find honor in the Tselote Fithat that has been prepared for our good. Amen.",
        "Source: Faith that separates us will not make our graves one; page 20"
      ],
      prayerTypes: [
        { name: "Tselote Fithat for the Dead", time: "During funeral ceremonies", description: "Prayer performed for those who depart from this world through death" },
        { name: "Prayer of Mourning", time: "On the day of death", description: "Special prayer performed on the day of death" },
        { name: "Commemoration", time: "At various times", description: "Memorial prayer performed for the dead at various times" }
      ]
    }
  }
}

// Amharic translations
export const amTranslations: Translations = {
  common: {
    comingSoonTitle: "በቅርብ ይጠብቁ",
  },
  gallery: {
    common: {
      back: "ተመለስ",
      folders: "ፎልደሮች",
      download: "አውርድ",
      tags: "መለያዎች",
      description: "መግለጫ",
      noThumbnail: "ምንም ታምና አልተገኘም",
    },
    photos: {
      title: "የፎቶ ማህደር",
      empty: "በዚህ ጊዜ ፎቶዎች አልተገኙም።",
    },
    videos: {
      title: "የቪዲዮ ማህደር",
      empty: "በዚህ ጊዜ ቪዲዮዎች አልተገኙም።",
    },
    archive: {
      title: "የቤተክርስቲያን ማህደር",
      description: "የታሪክ ፎቶዎችንና ሰነዶችን ያስሱ",
      search: "ፈልግ",
      filters: "ፊልተሮች",
      clearFilters: "ፊልተሮችን አጥፋ",
      year: "ዓመት",
      category: "ምድብ",
      type: "አይነት",
      allYears: "ሁሉም ዓመታት",
      allCategories: "ሁሉም ምድቦች",
      allTypes: "ሁሉም አይነቶች",
      grid: "መረብ",
      timeline: "የጊዜ መስመር",
      resultsPrefix: "በመሳያ",
      resultsSuffixApplied: "ከተተገበሩ ማጣሪያዎች ጋር",
      noItems: "በአሁኑ ማጣሪያዎች ምንም ማህደር አልተገኘም።",
    },
  },
  formsLinks: {
    bankDetails: {
      title: "የባንክ አካውንት",
      labels: {
        bankName: "የባንክ ስም",
        accountName: "የአካውንት ስም",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        beneficiaryAddress: "የተቀባዩ አድራሻ",
        beneficiaryPhone: "የተቀባዩ ስልክ",
        beneficiaryEmail: "የተቀባዩ ኢሜይል",
      },
      copyAll: "ሁሉንም ዝርዝሮች ኮፒ አድርግ",
      copiedAll: "ሁሉንም ዝርዝሮች ተኮፍይቷል!",
      intlTitle: "ዓለም አቀፍ የባንክ መረጃ",
      intlSubtitle: "ከጀርመን ውጭ ለሚሰጡ ዝውውሮች ይህን መረጃ ይጠቀሙ",
      intlLabels: {
        bankName: "የባንክ ስም",
        accountName: "የአካውንት ስም",
        bankAddress: "የባንክ አድራሻ",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        correspondentBank: "የተጨማሪ ባንክ",
      },
    },
    usefulLinks: {
      churchesGermany: {
        title: "በጀርመን (፣ ሆላንድ፥ ሰዊዘርላንድ፣ ኦስትርያ) የሚገኙ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ አብያተ ክርስቲያናት",
        placeholder: "በስም፣ ክልል፣ ወይም አድራሻ ይፈልጉ...",
        search: "ፈልግ",
        noResults: "ምንም ቤተክርስቲያናት አልተገኙም።",
        labels: {
          address: "አድራሻ",
          phone: "ስልክ",
          email: "ኢሜይል",
          website: "ድህረ ገፅ",
        },
      },
      previousWebsite: {
        title: "የቀድሞ ድህረ ገፅ",
        description: "የቀደም ያለው ድህረ ገፅ ለማጣቀሻ እና የታሪክ ይዞታ ለማግኘት አሁንም ይገኛል",
        lastUpdated: "መጨረሻ የታደሰበት፡ ጃንዋሪ 2023",
        visitButton: "ወደ ቀደም ያለው ድህረ ገፅ ይጎብኙ",
        imageAlt: "የቀደም ያለው ድህረ ገፅ እይታ",
      },
    },
    forms: {
      kirstina: {
        title: "የክርስትና (ጥምቀት) መመዝገቢያ",
        intro: "በኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የጥምቀት መመዝገብ ለማድረግ ይህን ቅፅ ይሙሉ።",
        tabs: { form: "መመዝገቢያ ቅፅ", requirements: "መስፈርቶች", schedule: "መርሃግብር" },
        successTitle: "የጥምቀት መመዝገብዎ በተሳካ ሁኔታ ተልኳል!",
        successButton: "ሌላ መመዝገብ ላክ",
        cardTitle: "የጥምቀት ክርስትና ፎርም",
        labels: {
          familyName: "የቤተስብ ስም / Familienname",
          firstName: "የመጀመሪያ ስም / Vorname",
          baptismName: "የክርስትና ስም / Taufname",
          fatherName: "የአባት ስም / Name des Vaters",
          motherName: "የእናት ስም / Name der Mutter",
          godparentName: "የክርስትና አባት/እናት ስም",
          country: "ሀገር / Land",
          birthPlace: "የተወለደበት ቦታ / Geburtsadresse",
          birthCountry: "የትውልድ ሀገር / Geburtsort",
          birthDate: "የትውልድ ቀን / Geburtsdatum",
          baptismChurch: "የቤተ ክርስቲያን ስም / Kirche",
          baptismDate: "የጥምቀት ቀን / Taufdatum",
          nationality: "ዜግነት / Staatsangehörigkeit",
          baptizingPriest: "አጥማቂው ካህን / Taufpriester",
          email: "ኢሜይል",
          phone: "ስልክ ቁጥር",
          agree: "የሰጠኋትን መረጃ ትክክለኛነቱን አረጋግጫለሁ",
          agreeDescription: "የሰጡት መረጃ ትክክለኛና መሆኑን ያረጋግጡ።",
        },
        placeholders: {
          familyName: "የቤተሰብ ስም",
          firstName: "የመጀመሪያ ስም",
          baptismName: "የክርስትና ስም",
          fatherName: "የአባት ስም",
          motherName: "የእናት ስም",
          godparentName: "የክርስትና አባት/እናት ስም",
          country: "ሀገር",
          birthPlace: "የተወለደበት ቦታ",
          birthCountry: "የትውልድ ሀገር",
          baptismChurch: "የቤተ ክርስቲያን ስም",
          nationality: "ዜግነት",
          baptizingPriest: "አጥማቂው ካህን",
          email: "ኢሜይል",
          phone: "ስልክ ቁጥር",
        },
        actions: { submit: "መመዝገብ ላክ", submitting: "በማስገባት ላይ..." },
        validation: {
          familyNameMin: "የቤተሰብ ስም ቢያንስ 2 ፊደላት ይሁን.",
          firstNameMin: "የመጀመሪያ ስም ቢያንስ 2 ፊደላት ይሁን.",
          baptismNameMin: "የክርስትና ስም ቢያንስ 2 ፊደላት ይሁን.",
          fatherNameMin: "የአባት ስም ቢያንስ 2 ፊደላት ይሁን.",
          motherNameMin: "የእናት ስም ቢያንስ 2 ፊደላት ይሁን.",
          godparentNameMin: "የክርስትና አባት/እናት ስም ቢያንስ 2 ፊደላት ይሁን.",
          countryRequired: "ሀገር ያስፈልጋል.",
          birthPlaceRequired: "የተወለደበት ቦታ ያስፈልጋል.",
          birthCountryRequired: "የትውልድ ሀገር ያስፈልጋል.",
          birthDateRequired: "የትውልድ ቀን ያስፈልጋል.",
          baptismChurchRequired: "የቤተ ክርስቲያን ስም ያስፈልጋል.",
          baptismDateRequired: "የጥምቀት ቀን ያስፈልጋል.",
          nationalityRequired: "ዜግነት ያስፈልጋል.",
          baptizingPriestRequired: "የአጥማቂ ካህን ስም ያስፈልጋል.",
          emailInvalid: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ.",
          phoneMin: "የስልክ ቁጥር ቢያንስ 6 ቁልፎች ይሁን.",
          agreeRequired: "ህጎችን እና ውሎችን መቀበል አለብዎት.",
        },
        toast: {
          activationTitle: "የፎርም አክቲቨሽን ያስፈልጋል",
          activationDescription: "እባክዎ ከFormSubmit.co የመጣ የአክቲቨሽን መልዕክትን በኢሜይልዎ ውስጥ ይመልከቱ",
          submitSuccessTitle: "መመዝገብ ተልኳል!",
          submitSuccessDesc: "የጥምቀት መመዝገብዎ በኢሜይል ተልኳል.",
          submitErrorTitle: "ፎርም ማቅረብ ስህተት",
          submitErrorDesc: "ፎርሙን ማቅረብ ላይ ስህተት ነበር። እባክዎን ደግሞ ይሞክሩ ወይም በቀጥታ ያግኙን.",
        },
        email: {
          subjectPrefix: "አዲስ የጥምቀት መመዝገብ",
          autoresponse: "የጥምቀት መመዝገብ መረጃዎን ስንገመግም በቅርቡ እናግኝዎታለን.",
          heading: "አዲስ የጥምቀት መመዝገብ",
          submittedOn: "የቀረበበት ቀን",
        },
      },
      membership: {
        title: "የቤተክርስቲያን አባልነት ማመልከቻ ቅፅ",
        intro: "በኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን አባል ለመሆን ይህን ቅፅ ይሙሉ።",
        tabs: { form: "መመዝገቢያ ቅፅ" },
        successTitle: "ማመልከቻዎ በተሳካ ሁኔታ ተልኳል",
        successDesc: "ስለማመልከቻዎ እናመሰግናለን",
        successButton: "ሌላ ማመልከቻ ላክ",
        sections: {
          personal: { title: "የግል መረጃ", description: "የግል መረጃዎን ያስገቡ" },
          address: { title: "የአድራሻ መረጃ", description: "የአሁኑን አድራሻዎን ያስገቡ" },
          membership: { title: "የአባልነት አይነት እና የቤተሰብ መረጃ", description: "የአባልነት አይነት ይምረጡ እና የቤተሰብ አባላት ካሉ ያክሉ" },
          emergency: { title: "የአደጋ ጊዜ እውቂያ", description: "በአደጋ ጊዜ ሊደውሉት የሚችሉትን ሰው ያስገቡ" },
          service: { title: "በቤተክርስቲያኑ ውስጥ አገልግሎት", description: "በቤተክርስቲያኑ ውስጥ ለማገልገል የሚፈልጉትን ይምረጡ" },
          terms: { title: "ደንቦች & ማስገባት" },
        },
        labels: {
          firstName: "የመጀመሪያ ስም",
          lastName: "የአያት ስም",
          baptismalName: "የክርስትና ስም (ካለ)",
          dateOfBirth: "የትውልድ ቀን",
          email: "ኢሜል",
          phone: "ስልክ ቁጥር",
          address: "የመኖሪያ አድራሻ",
          city: "ከተማ",
          postalCode: "የፖስታ ኮድ",
          membershipType: "የአባልነት አይነት",
          membershipIndividual: "የግል አባልነት",
          membershipFamily: "የቤተሰብ አባልነት",
          familyMembers: "የቤተሰብ አባላት",
          addFamilyMember: "የቤተሰብ አባል አክል",
          remove: "አስወግድ",
          memberN: "የቤተሰብ አባል",
          name: "ስም",
          relation: "ግንኙነት",
          age: "እድሜ",
          emergencyContact: "የአደጋ ጊዜ እውቂያ",
          interestsTitle: "የሚፈልጉት አገልግሎቶች (ሁሉንም መምረጥ ይችላሉ)",
          interestsHelp: "በቤተክርስቲያኑ ውስጥ ለማገልገል የሚፈልጉትን ይምረጡ",
          interestsOptions: {
            worship: "የስጦታ አገልግሎት",
            choir: "የቤተክርስቲያን መዝሙር ቡድን",
            sundaySchool: "የእሁድ ት/ቤት",
            youth: "የወጣቶች ፕሮግራሞች",
            community: "የማህበረሰብ አገልግሎት",
            prayer: "የጸሎት ቡድኖች",
            bibleStudy: "የመጽሐፍ ቅዱስ ጥናት",
            committees: "የቤተክርስቲያን ኮሚቴዎች",
            events: "የተለያዩ ዝግጅቶች",
            maintenance: "የቤተክርስቲያን ግንባታ/ጥገና",
          },
          skills: "ችሎታዎች & ተሞክሮዎች",
          skillsHelp: "ለቤተክርስቲያኑ ማገልገል የሚፈልጉትን ችሎታዎች ይግለጹ",
          agree: "የቤተክርስቲያኑን ደንቦች እና መመሪያዎች እስማማለሁ",
          agreeHelp: "የሰጡት መረጃ እውነተኛ መሆኑን ያረጋግጡ እና የቤተክርስቲያኑን መመሪያዎች እና ደንቦች ይከተላሉ።",
          next: "ወደ ቀጣይ ይቀጥሉ",
          prev: "ወደ ቀዳሚ ተመለስ",
          submit: "ማመልከቻ ላክ",
          submitting: "በማስገባት ላይ...",
        },
        placeholders: {
          firstName: "ሙሉ ስም",
          lastName: "የአያት ስም",
          baptismalName: "የጥምቀት ስም",
          email: "example@email.com",
          phone: "+49 123 456789",
          address: "123 ምሳሌ መንገድ",
          city: "ኮሎኝ",
          postalCode: "50667",
          relationExample: "ለምሳሌ፡ ባል፣ ልጅ",
        },
        validation: {
          firstNameMin: "የመጀመሪያ ስም ቢያንስ 2 ፊደል መሆን አለበት።",
          lastNameMin: "የአያት ስም ቢያንስ 2 ፊደል መሆን አለበት።",
          dateOfBirthReq: "የትውልድ ቀን ያስፈልጋል።",
          emailInvalid: "እባክዎን ትክክለኛ ኢሜል ያስገቡ።",
          phoneMin: "የስልክ ቁጥር ቢያንስ 6 ቁጥሮች መሆን አለበት።",
          addressMin: "አድራሻ ቢያንስ 5 ፊደል መሆን አለበት።",
          cityMin: "ከተማ ቢያንስ 2 ፊደል መሆን አለበት።",
          postalCodeMin: "የፖስታ ኮድ ቢያንስ 4 ቁጥሮች መሆን አለበት።",
          membershipTypeReq: "እባክዎን የአባልነት አይነት ይምረጡ።",
          familyMemberNameMin: "ስም ቢያንስ 2 ፊደል መሆን አለበት።",
          familyMemberRelationMin: "ግንኙነት ቢያንስ 2 ፊደል መሆን አለበት።",
          familyMembersAtLeastOne: "የቤተሰብ አባላት ቢያንስ 1 መሞላት አለበት።",
          emergencyNameMin: "ስም ቢያንስ 2 ፊደል መሆን አለበት።",
          emergencyPhoneMin: "የስልክ ቁጥር ቢያንስ 6 ቁጥሮች መሆን አለበት።",
          emergencyRelationMin: "ግንኙነት ቢያንስ 2 ፊደል መሆን አለበት።",
          agreeRequired: "የቤተክርስቲያን ደንቦችን መቀበል አለበት።",
        },
        toast: {
          activationTitle: "የፎርም አክቲቨሽን ያስፈልጋል",
          activationDesc: "እባክዎ ከFormSubmit.co የመጣ የአክቲቨሽን መልዕክትን በኢሜይልዎ ውስጥ ይመልከቱ",
          submitSuccessTitle: "ማመልከቻ ተልኳል!",
          submitSuccessDesc: "የአባልነት ማመልከቻዎ በኢሜይል ተልኳል.",
          submitErrorTitle: "ፎርም ማቅረብ ስህተት",
          submitErrorDesc: "ፎርሙን ማቅረብ ላይ ስህተት ነበር። እባክዎን ደግሞ ይሞክሩ ወይም በቀጥታ ያግኙን.",
        },
        email: {
          subjectPrefix: "አዲስ የአባልነት ማመልከቻ",
          heading: "አዲስ የአባልነት ማመልከቻ",
          submittedOn: "የቀረበበት ቀን",
          autoresponse: "የአባልነት ማመልከቻዎን ስንገመግም በቅርቡ እናግኝዎታለን.",
        },
      },
    },
  },
  contact: {
    location: {
      title: "የኮሎኝ ቅዱስ ሚካኤል ቤተ ክርስቲያን አድራሻ",
      address: "አድራሻ",
      transportStops: "የትራንስፖርት ማቆሚያዎች",
      contactUsAt: "በሚቀጥሉት አድራሻዎች ይጻፉልን/ይደውሉልን",
      labels: {
        postalAddress: "የፖስታ አድራሻ",
        phone: "ስልክ",
        email: "ኢሜይል",
      },
    },
    form: {
      title: "ያግኙን",
      successTitle: "መልእክትዎ በተሳካ ሁኔታ ተልኳል!",
      successMessage: "ስለሚያግኙን እናመሰግናለን። በቅርቡ እንመልስልዎታለን።",
      successButton: "ሌላ መልእክት ላክ",
      labels: {
        name: "ስም",
        email: "ኢሜይል",
        phone: "ስልክ ቁጥር",
        subject: "ርዕስ",
        selectSubject: "ርዕስ ይምረጡ",
        subjectGeneral: "አጠቃላይ ጥያቄ",
        subjectServices: "የቤተክርስቲያን አገልግሎቶች",
        subjectEvents: "ዝግጅቶች",
        subjectOther: "ሌላ",
        message: "መልእክት",
      },
      submit: "መልእክት ላክ",
      submitting: "በማስገባት ላይ...",
      toastSuccess: "መልእክት ተልኳል!",
      toastError: "መልእክት መላክ አልተሳካም። እባክዎን ደግሞ ይሞክሩ.",
      sendError: "መልእክት መላክ አልተሳካም",
    },
  },
  calendar: {
    title: "የቤተክርስቲያን የቀን መቁጠሪያ",
    subtitle: "የቤተክርስቲያኑን ዝግጅቶች በግሪጎሪያንና በኢትዮጵያ የቀን መቁጠሪያ ይመልከቱ",
    calendarTypeLabel: "የመቁጠሪያ አይነት",
    calendarTypeEthiopian: "ወደ ኢትዮጵያ ቀን መቁጠሪያ መቀየሪያ",
    calendarTypeGregorian: "ግሪጎሪያን መቁጠሪያ",
    tabs: {
      orthodoxCalendar: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የቀን መቁጠሪያ",
      churchAnnualCalendar: "የቤተክርስቲያን የዓመቱ መቁጠሪያ",
    },
    todayInEthiopian: "የዛሬ ቀን በኢትዮጵያ ካሌንዳር",
    gregorianCalendar: "(ግሪጎሪያን መቁጠሪያ)",
    featuresContent: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የቀን መቁጠሪያ በራሱ የሚለየው የሆነ የቀን መቁጠሪያ ሲሆን፣ ከግሪጎሪያን ካሌንዳር ከ 7 ወይም 8 ዓመት ይቀየራል። ይህ የቀን መቁጠሪያ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን ውስጥ ለሃይማኖታዊ በዓላት እና ለሌሎች አስፈላጊ ቀናት ይጠቀማል።",
    featuresTitle: "የኢትዮጵያ የቀን መቁጠሪያ ባህሪያት",
    feature1: "13 ወራት አሉት (12 ወራት እያንዳንዳቸው 30 ቀን እና 1 ወር 5 ወይም 6 ቀን)",
    feature2: "የአዲስ ዓመት ቀን መስከረም 1 (መስከረም 1/2 ከመስከረም)",
    feature3: "የበዓላት ቀናት በኢትዮጵያ ካሌንዳር ይሰላሉ",
    feature4: "የጸደቀ የቤተክርስቲያን መቁጠሪያ",
    downloadPdf: "PDF ያውርዱ",
    loadingCalendar: "መቁጠሪያ በመጫን ላይ...",
    noCalendarForYear: "ለዚህ ዓመት የመቁጠሪያ ፋይል አልተገኘም",
    holidayBadge: "የኢትዮጵያ ኦርቶዶክስ በዓል",
    holidaySignificanceTitle: "በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ባህል ያለው አስፈላጊነት",
    holidaySignificanceText:
      "ይህ በዓል በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ልዩ አስፈላጊነት ያለው ሲሆን ለብዙ ዘመናት የተጠበቁ ልማዶችና ሥነ ሥርዓቶች ይኖራሉ።",
  },
  events: {
    title: "መጪ ዝግጅቶች",
    searchPlaceholder: "ዝግጅቶችን ይፈልጉ...",
    filters: "ፊልተሮች",
    category: "ምድብ",
    year: "ዓመት",
    month: "ወር",
    sortBy: "በየትኛው እንደሚደርጉ",
    upcomingFirst: "አዲሶቹን መጀመሪያ",
    laterFirst: "የቆዩትን መጀመሪያ",
    resetFilters: "ፊልተሮችን ዳግም ያዘጋጁ",
    noEvents: "ምንም ዝግጅቶች አልተገኙም",
    tryAdjusting: "ፍለጋዎን ወይም ፊልተሮችዎን ይስሩ",
    clearSearch: "ፍለጋን ያጽዱ",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    featured: "የተመረጡ",
  },
  churchNews: {
    title: "የቤተክርስቲያን ዜና",
    searchPlaceholder: "ዜናዎችን ይፈልጉ...",
    filters: "ማጣሪያዎች",
    category: "ምድብ",
    year: "ዓመት",
    month: "ወር",
    sortBy: "አስቀምጥ በ",
    newestFirst: "አዲሶቹ መጀመሪያ",
    oldestFirst: "ቆዮቹ መጀመሪያ",
    resetFilters: "ማጣሪያዎችን ዳግም አስጀምር",
    noNews: "ምንም ዜናዎች አልተገኙም",
    tryAdjusting: "ፍለጋዎን ወይም ማጣሪያዎችን ለማስተካከል ይሞክሩ",
    clearSearch: "ፍለጋን አጽዳ",
    readMore: "ተጨማሪ ያንብቡ",
    readFullArticle: "ሙሉ ጽሑፉን ያንብቡ",
    featured: "ተለይተው የቀረቡ",
    allNews: "ሁሉም ዜናዎች",
    by: "በ",
  },
  serviceMikir: {
    title: "የምክር አገልግሎት",
    description: "በቤተ ክርስቲያናችን ውስጥ የምክር አገልግሎት በጣም አስፈላጊ እና የሚያስፈልግ አገልግሎት ነው። ይህ አገልግሎት በመንፈሳዊ እና በሰውነታዊ አቅጣጫ ምክር እና ድጋፍ ለማቅረብ ያለመ ነው።\n\nበቤተ ክርስቲያናችን ውስጥ የሚሰጡ ምክሮች በመጽሐፍ ቅዱስ እና በቅዱሳን አባቶች ትምህርቶች ላይ የተመሰረቱ ናቸው። እነዚህ ምክሮች በሕይወታችን ውስጥ ትክክለኛ አቅጣጫ ለመሄድ እና በመንፈሳዊ ጉዞ ውስጥ ለመራቅ ይረዱናል።",
    saintAdviceTitle: "የቅዱሳን ምክሮች",
    photoPlaceholder: "የምክር አገልግሎት ፎቶ",
    quotes: [
      "1. ራስህን በሐሰት አትውቀስ ራስን መክሰስ ትህትና አይደለም ታላቁ ትህትና ሰዎች ሲወቅሱህ መታገስ   ነው፡  ቅዱስ ስራፕዮን",
      "2. የማታምንበትን ነገር ለሰው ስትል አትስራው ከሰራኸው እንደምትጠፋበት እወቅ ፡፡ መጽሐፈ ምክር",
      "3. አንደበቱን ከቧልት ከሐሜት ያየውንም ምስጢር ከመናገር የሚከለከል ሰው ልቦናውን ከኀልዮ ኃጥያት ያርቀዋል፡፡ አረጋዊ መንፈሳዊ",
      "4. ጸጋ ቢሰጥህ በተሰጠህ ጸጋ አመስግን ያልተሰጠህን እሻለሁ በማለት የተሰጠህን እንዳታጣ፡፡  ማር ይስሐቅ",
      "5. ራሱን የሚንቅ የሚያቃልል ሰው ከእግዚአብሔር ዘንድ እውቀትን ያገኛል አዋቂ ነኝ የሚል ሰው ከፈጣሪው ጥበብ ይለየዋል፡፡ አረጋዊ መንፈሳዊ",
      "6. ‹‹እግዚአብሔር ሆይ አፈርና ትቢያ ሆኜ ሳለ ጻድቅ አድርገው  ከሚቆጥሩኝ ሰዎች አድነኝ››    አባ እንጦንስ",
      "7. ‹‹ፍጡራንን መርምሮ ማወቅ ካልተቻልን ሁሉን የፈጠረ እርሱን መርምሮ ማወቅ እንደምን ይቻልናል››  ቅዱስ አትናቴዎስ",
      "8. ‹‹ወርቅ በእሳት እንደሚፈተን ሁሉ የክርስቶስንም ፀጋና ክብር ሳይፈተኑ ማግኘት አይቻልም የዚህ ዓለም ፈተናና እሳት ቶሎ ያልፋል ይጠፋል ኃጢያተኞች የሚገቡበት የገሀነም እሳት ግን ለዘላለም እንደ ነደደ ይኖራል››  ቅዱስ ሚናስ",
      "9. ‹‹በማንም ላይ ክፈትን አትስሩ አትፍርዱ ይህንን ከጠበቃችሁ ርስቱን ትወርሳላችሁና››  ታላቁ አባ መቃርስ",
      "10. ‹‹ብዙ ጊዜ ብዙ እናገራለሁ በመናገሬም አዝናልሁ በዝምታዬ ግን ያዘንኩበት ጊዜ የለም›› ቅዱስ አርሳንዮስ",
      "11. ‹‹ቤተክርስትያን መጠጊያችን ነች ቤተክርስትያን የኖኅ መርክብ ነች በውስጧ እንጠለላልን ከውጭዋ ግን ማዕበልና ቀላያት ተከፍተዋል››   ቅዱስ እንድርያስ",
      "12. ‹‹ልባችንን ጠፊና በስባሽ ከኾነው ከምድራዊው ምኞት አርቀን ከበደል በንስሐ ነጹሕ ካደረግነው በጸጋ መንፈስቅዱስ የተሞላን እንሆናለን›› አባ አብርሃም መፍቀሬ ነዳያን",
      "13. ‹‹ስጋዊ ፍላጎቶችን ማሸነፍ ለአክሊለ ህይወት የሚያበቃ ሰማዕትነት ነው›› ብፁዕ አቡነ ጎርጎርዮስ ካልዕ",
      "14. ‹‹የቤተክርስቲያን ህይወት በመስቀል ላይ ስለሆነ ፈተና ይበዛበታል ስለዚህ ከግል ህይወታችሁ ይልቅ የቤተክርስቲያናችሁን አቋም አጠንክሩ›› ብፁዕ አቡነ ጎርጎርዮስ ካልዕ",
      "15. ‹‹ከመኝታህ በፊት የምታደርገውን ፀሎት ትተህ እንድትተኛ መንፈስህ ሲገፋፋህ እሺ ብለህ አትቀበለው፡፡ እንዲያውም መዝሙረ ዳዊትን ጨምርና ሌሊቱን በሙሉ ስትፀልይ እደር›› ቅዱስ ይስሐቅ ሶርያዊ",
      "16. ‹‹ኃጥያታችንን እኛ እያሰብን የምንፀፀት ከሆነ እግዚአብሔር ይረሳልናል  ኃጥያታችንን እኛ እረስትን የምንፅናና ከሆነ እግዚአብሔር ያስብብናል››  ቅዱስ እንጦስ"
    ]
  },
  header: {
    menuItems: {
      Home: "ቀዳሚ ገጽ",
      "About us": "ስለ እኛ",
      Service: "አገልግሎት",
      "News & Events": "ዜናዎች እና ዝግጅቶች",
      Gallery: "ማዕከለ ሥዕሎች",
      "Forms & Links": "ቅጾች እና አገናኞች",
      Contact: "አድራሻ",
    },
    subMenuItems: {
      "Our History": "የቤተክርስቲያን ታሪክ",
      "Our Clergy": "የቤተክርስቲያን ካህናት",
      "Our Faith": "እምነታችን",
      "Construction Status": "የቤተ ክርስቲያን አሁናዊ ይዞታ",
      Kirstina: "ክርስትና",
      "Sirate Kidase": "ሥርዓተ ቅዳሴ",
      "Sunday School": "የሰንበት ትምህርት ቤት",
      Mezmur: "መዝሙር",
      Timihirt: "ትምህርት",
      "ሕፃናት እና ታዳጊዎች": "ሕፃናት እና ታዳጊዎች",
      "Other Activities": "ሌሎች እንቅስቃሴዎች",
      "Tselote Fithat": "ጸሎተ ፍትሐት",
      Mikir: "ምክር",
      "Timihirt & Tarikoch": "ትምህርት እና ታሪኮች",
      "Upcoming Events": "መጪ ዝግጅቶች",
      "Church News": "የቤተክርስቲያን ዜናዎች",
      Calendar: "የቀን መቁጠሪያ",
      Photos: "ፎቶዎች",
      Videos: "ቪዲዮዎች",
      Archive: "የድሮ ሰነዶች",
      "Bank Details": "የባንክ ዝርዝሮች",
      Forms: "ቅጾች",
      "Membership Form": "የአባልነት ቅጽ",
      "Kirstina Form": "የክርስትና ቅጽ",
      "Useful Links": "ጠቃሚ አገናኞች",
      "Churches in Germany": "በጀርመን ያሉ አብያተ ክርስቲያናት",
      "Previous Website": "የቀድሞ ድረ ገጽ",
      Location: "አድራሻ",
      "Contact Form": "የመገናኛ ቅጽ",
    },
    donate: "ለመለገስ",
    findUs: "አድራሻችን",

  },
  footer: {
    call: "ስልክ",
    email: "ኢሜይል",
    address: "አድራሻ",
    resources: "ጠቃሚ አገናኞች",
    usefulLink: "",
    contactUs: "ያግኙን",
    copyright: `© ቅዱስ ሚካኤል ኢኦተቤ ጀርመን ኮሎኝ ${getCurrentYear()} - መብቱ በህግ የተጠበቀ ነው። በማረፊያቴክ የተዘጋጀ`,
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "ሰንበት ትምህርት ቤት",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "በጀርመን ያሉ አብያተ ክርስቲያናት",
      "የቀን መቁጠሪያ": "የቀን መቁጠሪያ",
      "ሕፃናት እና ታዳጊዎች": "ሕፃናት እና ታዳጊዎች",
      "ለመለገስ": "ለመለገስ"
    }
  },
  home: {
    hero: {
      welcomeTitle: "እንኳን ወደ ኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በሰላም መጡ!!"
    },
    welcome: {
      title: "ይህ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን በጀርመንና አካባቢው ሀገረ ስብከት የኮሎኝ ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ይፋዊ ድረ ገጽ ነው።",
      caption: "የ2017 ዓ.ም የበዓለ ሆሣዕና አከባበር",
      paragraph1: "አሁን በመላው አውሮፓ፥ በአፍሪካ፥ በአሜሪካ፥ በካናዳና በአውስትራልያ ከተቋቋሙት ቀደምት አብያተ ክርስቲያናት መካከል የመጀመሪያው ቀዳማዊና ፋና ወጊው ቤተ ክርስቲያን የኮሎኝ ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ነው።",
      paragraph2: "ቤተክርስቲያናችን ወንጌልን በመላው ዓለም ማዳረስን ተልእኮ በማድረግ ለትምህርት ወደ አውሮፓ በመጡ አገልጋዮች ብርቱ ጥረት፣ በሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና በዲያቆን በዕደ ማርያም መርሻ ፊት አውራሪነት፥ በወቅቱ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ፓትርያርክ በነበሩት በአቡነ ተክለ ሃይማኖት መልካም ፈቃድ እና በቅዱስ ሲኖዶስ ውሳኔ በ 1975 ዓ.ም በዚያን ጊዜ በጅቡቲና በምሥራቅ አፍሪካ ሊቀ ጳጳስ በነበሩት፥ በአሁኑ ጊዜ ደግሞ የኖርዲክ እና ግሪክ ሀገረ ስብከት ሊቀ ጳጳስ በኾኑተ በብፁዕ አቡነ ኤልያስ ተባርኮ ተከፈተ።",
      paragraph3: "አመሠራረቱም እንደሚከተለው ነው። በ 1971 ዓም ለሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና ዲያቆን በዕደ ማርያም መርሻ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት ፈቃድ ወደ ጀርመን ለከፍተኛ ትምህርት ተላኩ። ወደ ጀርመን ሀገር በገቡ በሁለት ዓመት ውስጥ ቤተ ክርስቲያን ለማቋቋም ጽንሰ ሀሳቡ በመርህ ደረጃ ለውይይት ቀረበ። በሃይደልበርግ ኗሪ ከሆኑ ወንድሞች ጋር በእመቤታችን ቅድስት ማርያም የጽዋ ማኅበር ስም መሰባሰብ ጀመሩ። ማኅበሩ የመገናኛ ድልድይ ሆኖ ሊያገለግላቸው ችሏል። በተለይም በ 1973 ዓ.ም. በምድረ ጀርመን በሃይደልበርግ ከተማ የመጀመሪያው ቅዳሴ ተቀደሰ። ለምእመናንም ቡራኬ ተሰጠ። በዚህም መንፈሳዊ አገልግሎት በለንደን ለጃማይካውያን መንፈሳዊ አገልግሎት ለመስጠት ተመድበው የነበሩት አባ አረጋዊ ወልደ ገብርኤል በኋላ የመላው አውሮፓ ሊቀ ጳጳስ የነበሩት ብፁዕ አቡነ ዮሐንስ ተገኝተዋል። ሥርዓተ ቅዳሴውንም መርተዋል። ብፁዕ አቡነ ዮሐንስ ካላቸው ፍቅርን ከተላበሰ ሰብእነታቸው የተነሣ መልካም ግንኙነት ነበራቸው። ቤተ ክርስቲያኑ ሲቋቋምም በበዓሉ ላይ ቤተ ክርስቲያናቸውን ወክለው ተገኝተዋል። የመጀመሪያው ቅዳሴ ከተካሄደ በኋላ ቤተ ክርስቲያን የማቋቋሙ ፍላጎት እየተጠናከረ መጣ። በሃይደልበርግና በሌሎች ከተማዎች የሚገኙ ኢትዮጵያውያን ተካፋዮች የሆኑባቸው የዘመን መለወጫ፥ የልደትና የትንሣኤ በዓላት ይከበሩ ጀመር።",
      readMore: "ተጨማሪ ያንብቡ",
      showLess: "ያነሱ አሳይ"
    },
    construction: {
      title: "የቤተ ክርስቲያን ሕንፃ ግንባታ",
      content: "በጀርመን አገር በኮለን ከተማ የምትገኘው ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቅድስት ቤተ ክርስቲያናችን ከዛሬ ቀደም ከነበራት ርስት የቦታ ባለቤትነት በእግዚአብሔር ፈቃድ ተጨማሪ የአምልኮ ፣ የበረከት ፣ የባለቤትነት ዕድሉን አምላከ ሚካኤል አሳክቶላት ከኃይል ወደ ኃይል ፣ ከበረከት ወደ በረከት ፣ ከትጥበት ወደ ስፋት ለመሻገር በባዕድ አገር ሰፊ የቦታ (1840 ካሬ ሜትር) ባለቤት ሆናለች ። የቤተክርስትያናችን የቦታ ግዢ ከተፈፀመ በኃላ በተያዘው እቅድ መሰረት የውስጥ ማሰፋፋት ለማድረግ አስፈላጊው ጥናት ለማድረግ ከአርክቴክት ጋር የመግባቢያ ውል ተፈርሞ ሰራው ተጀምሯል ቤተክርሰትያናችን በቅርሰነት ሰለተመዘገበ አፍርሶ መስራት ሰለማይቻል የቤተክርሰትያኑን ንድፍ ለማውጣት አስቸጋሪ ነበር። ሆኖም አስፈላጊው የግንባታ ሂደት አልፎ ለሚመለከታቸው የመንግሰት አካላት (Stadt Köln Bauamt) የመጀመሪያውን ማመልከቻ ( Bauantrag ) ተደርጐ ነበር ። ሆኖም ፍቃድ አግኝተን ለመስራት ከጐረቤቶቻችን ያለው እርቀት አስፈላጊ ነበር ይህም ምንአልባተ‍ ግንባታው ሲጀመር በወሰን የሚጋሩን ጐረቤቶቻችን ቦታ ላይ ሊነካ ስለሚችል ( Baulast) የእነሱን ይሁንታ ማግኘት ነበረብን ነገር ግን ጐረቤቶቻችን ለዚህ ብዙ ገንዘብ ሰለጠየቁን ይህን ለማሰቀረት ከ Bauphysik ጋር በመመካከር Baulast ፕላኑ በውስጥ እንዴሆን ተደርጓል ከዚህ በተጨማሪ የመጀመሪያውን ቤተክርስትያን ግዢ ሲደረግ በፊት በኩል ባለው ጓሮ ቦታ ባለቤትነቱ የአኢቫንኬልሽ ቤ/ክረስትያን ይዞታ ሰለነበር ይህንም ቦታ ግዢ ተፈፅሞ የኖታሩ እማኝ አባሪ ተደርጐ ይህ ማሻሻያ የተደረገበት ማመልከቻ በድጋሚ ለStadt Köln Bauamt ተመልክቷል። የእንፃ መስሪያ እቅድ(Bauplan)ማሻሻያ በተደረገ ቁጥር ለአርክቴክቶሮቹ የሚከፈለው ገንዘብ እና ለቦታው መስሪያ ፍቃድ የማግኛው ጊዜ ብዙ ጊዜ ፈጅቷል ። አሁን የመስሪያ ፍቃድ ለማግኘት እየጠበቅን እንገኛለን::",
      readMore: "ተጨማሪ ያንብቡ",
      showLess: "ያነሱ አሳይ"
    },
    events: {
      title: "በቅርቡ የሚመጡ ዝግጅቶች",
      loading: "ተግባራዊ ዝግጅቶችን በመጫን ላይ...",
      error: "ስህተት፡",
      noEvents: "ምንም ክስተት አልተገኘም",
      noUpcomingEvents: "ምንም የሚመጡ ዝግጅቶች አልተገኙም",
      viewPastEvents: "የተያረፉትን ዝግጅቶች ይመልከቱ",
      upcoming: "የሚመጡ",
      past: "ያለፉ",
      all: "ሁሉም",
      allYears: "ሁሉም ዓመታት",
      allMonths: "ሁሉም ወራቶች",
      details: "ዝርዝር"
    },
    news: {
      title: "ዜናዎች",
      readAllNews: "ሙሉ ዜናዎች ያንብቡ",
      loading: "ዜናዎችን በመጫን ላይ...",
      error: "ስህተት፡",
      noNews: "ምንም ዜና አልተገኘም",
      noNewsForFilters: "ለተመረጡት ማጣሪያዎች የሚገኙ ዜናዎች የሉም",
      allYears: "ሁሉም ዓመታት",
      allMonths: "ሁሉም ወራቶች",
      date: "ቀን:",
      readMore: "ተጨማሪ ያንብቡ",
      showLess: "ያነሱ አሳይ",
      previousPage: "ወደ ቀደም ገፅ",
      nextPage: "ወደ ቀጣይ ገፅ",
      goToPage: "ወደ ገፅ"
    },
    services: {
      title: "የአገልግሎት መርሐ ግብር",
      weekly: "ሳምንታዊ",
      monthly: "ወርሃዊ",
      sundayService: "ሥርዓተ ቅዳሴ",
      sundayServiceTime: "ዘወትር እሁድ",
      monthlyPrayer: "ወርሃዊ ጸሎት",
      monthlyPrayerTime: "ዘወትር በዕለተ ቅዱስ ሚካኤል",
      moreSchedules: "ተጨማሪ መርሐ ግብሮች"
    },
    community: {
      quote: "የዚህ አጥቢያ መመሥረት ቤተ ክርስቲያን በሀገረ ጀርመንም ይሁን በመላው አውሮፓ ለደረሰችበት ደረጃ መሠረት የጣለ ነበር። ሊቀ ካህናት ዶ/ር መርዓዊ ተበጀ ከጀርመን አልፎ እንደ ጣልያን፣ ስዊድንና ፈረንሳይ የመሳሰሉት ሀገራት ቤተ ክርስቲያን ትመሠረት ዘንድ የተሳካ ሐዋርያዊ ጉዞ ያደረጉት ከዚህ አጥቢያ ቤተ ክርስቲያን በመነሣት ነበር። በመኾኑም ዛሬ የአንጋፋውን የርእሰ አድባራት ኮለኝ ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ክብረ በዓል ስናከብር የምናዘክረው በጀርመንና በተለያዩ የአውሮፓ ሀገራት የተስፋፋችው የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በሀገረ ጀርመን ኹነኛ መዋቅሯን ዘርግታ መንቀሳቀስ የጀመረችበትን መኾኑን መገንዘብ ያስፈልጋል።",
      author: "- ብፁእ አቡነ ዲዮናስዮስ፥ በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የጀርመንና አካባቢው እና የምሥራቅ ጎጃም አህጉረ ስብከት ሊቀ ጳጳስ"
    }
  },
  history: {
    title: "የኮሎኝ ቅዱስ ሚካኤል ቤተ ክርስቲያን ታሪክ",
    caption: "ቦታው እንዲገዛ ሲወሰን በነበረን ስብሰባ ላይ የተነሳነው የፎቶ ማስታዎሻ",
    introduction: "አሁን በመላው አውሮፓ፥ በአፍሪካ፥ በአሜሪካ፥ በካናዳና በአውስትራልያ ከተቋቋሙት ቀደምት አብያተ ክርስቲያናት መካከል የመጀመሪያው ቀዳማዊና ፋና ወጊው ቤተ ክርስቲያን የኮሎኝ ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ነው። ቤተ ክርስቲያናችን በሊቀ ካህናት ዶክተር መርዓዊ ተበጀ ፊት አውራሪነት፥ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት አባታዊ ፈቃድ በዚያን ጊዜ በጅቡቲና በምሥራቅ አፍሪካ ሊቀ ጳጳስ በነበሩት፥ በአሁኑ ጊዜ ደግሞ የኖርዲክ እና ግሪክ ሀገረ ስብከት ሊቀ ጳጳስ በኾኑተ በብፁዕ አቡነ ኤልያስ ተባርኮ ተከፈተ።",
    establishment: "አመሠራረቱም እንደሚከተለው ነው። በ 1971 ዓም ለሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና ዲያቆን በዕደ ማርያም መርሻ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት ፈቃድ ወደ ጀርመን ለከፍተኛ ትምህርት ተላኩ። ወደ ጀርመን ሀገር በገቡ በሁለት ዓመት ውስጥ ቤተ ክርስቲያን ለማቋቋም ጽንሰ ሀሳቡ በመርህ ደረጃ ለውይይት ቀረበ። በሃይደልበርግ ኗሪ ከሆኑ ወንድሞች ጋር በእመቤታችን ቅድስት ማርያም የጽዋ ማኅበር ስም መሰባሰብ ጀመሩ። ማኅበሩ የመገናኛ ድልድይ ሆኖ ሊያገለግላቸው ችሏል። በተለይም በ 1973 ዓ.ም. በምድረ ጀርመን በሃይደልበርግ ከተማ የመጀመሪያው ቅዳሴ ተቀደሰ። ለምእመናንም ቡራኬ ተሰጠ። በዚህም መንፈሳዊ አገልግሎት በለንደን ለጃማይካውያን መንፈሳዊ አገልግሎት ለመስጠት ተመድበው የነበሩት አባ አረጋዊ ወልደ ገብርኤል በኋላ የመላው አውሮፓ ሊቀ ጳጳስ የነበሩት ብፁዕ አቡነ ዮሐንስ ተገኝተዋል። ሥርዓተ ቅዳሴውንም መርተዋል። ብፁዕ አቡነ ዮሐንስ ካላቸው ፍቅርን ከተላበሰ ሰብእነታቸው የተነሣ መልካም ግንኙነት ነበራቸው። ቤተ ክርስቲያኑ ሲቋቋምም በበዓሉ ላይ ቤተ ክርስቲያናቸውን ወክለው ተገኝተዋል። የመጀመሪያው ቅዳሴ ከተካሄደ በኋላ ቤተ ክርስቲያን የማቋቋሙ ፍላጎት እየተጠናከረ መጣ። በሃይደልበርግና በሌሎች ከተማዎች የሚገኙ ኢትዮጵያውያን ተካፋዮች የሆኑባቸው የዘመን መለወጫ፥ የልደትና የትንሣኤ በዓላት ይከበሩ ጀመር።",
    development: "ከዚህ በኋላ ሁኔታዎች ሁሉ መልክ መልክ መያዝ ጀመሩ። የምእመናኑም ቁጥር እየጨመረ ሄደ። በአውሮፓውያኑ የሰማኒያዎቹ ዓመታት ላይ አያሌ ኢትዮጵያውያንና ኤርትራውያን ወደ ጀርመን በብዛት የገቡበት ጊዜ ነበር። በተለይም \" Landesarbeitsgemeinschaft Ausländische Flüchtlinge Nordrhein-Westfalen in Düsseldorf e.V.\" የሚባል በመንግሥት በጀት የሚደጎም ማኅበር ተቋቁሞ የስደተኞችን ጉዳይ ይከታተል ስለነበር የኢትዮጵያን ስደተኞች የሚመለከት ዐውደ ጥናት ከመሰረም 8-11፥1973 በዱስልዶርፍ ከተማ ተካሄደ። የቤተ ክርስቲያናችን መሥራቾችም ከፕሮፌሰራቸው ከዶ/ር ሃየር ጋር ጸሎት እንዲያደርጉና ትምህርት እንዲሰጡ ተጋበዙ። የእሁዱ መርሃ ግብር የእኛ ብቻ ነበር፧ በጀርመንኛ ለሚቀርበው ጥያቄ በመምህራቸው እየታገዙ፧ ስለ ቤተ ክርስቲያናችን በቂ ግንዛቤ ለማስጨበጥ ችለዋል። ከሀገሩ ከወጣ በኋላ እንድ ቀን እንኳ ቃለ እግዚአብሔር ሰምቶ ያማያውቀው ሁሉ ያነባ ነበር። በተለይ ፕሮፌሰር ሃየር እኛን ለመርዳት ቆርጠው የተነሡት የዚያን ሕዝብ ስሜት ከተመለከቱ በኋላ ነበር ማለት ይቻላል።",
    question: "ቤተ ክርስቲያን ለምን አናቋቁምም የሚለው ጥያቄ የዕለት ከዕለት ጥያቄ ሆኖ መቅረብ ጀመረ። ለዚህም አንድ አመች ዕድል ተፈጠረ። ከላይ በተጠቀሰው በ 1973 ዓ.ም. የኢትዮጵያ ፓትርያርክ ብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት የጀርመን ወንጌላዊት ቤተ ክርስቲያን ባደረገችላቸው ጥሪ መሠረት ጀርመንን ሲጎበኙ፥ ቤተ ክርስቲያን እድናቋቁም ፈቃዳቸው ይሆን ዘንድ ፍራንክፈርት ላይ ጥያቄ ቀረበ። ቅዱስነታቸውም ጥቂት ካሰቡ በኋላ ተማሪዎቹን ካህናት «ትምህርታችሁን ጨርሳችሁ ለምን ወደ ሀገራችሁ አትመለሱም» አሉዋቸው። እነርሱም «ቅዱስ አባታችን ከሀገሩ የወጣው ሕዝብ ብዙ ስለሆነ፧ እንደሌሎቹ ኦርቶዶክሳውያን የእኛም አማንያን ቤተ ክርስቲያን ያስፈልጋቸዋል» የሚል መልስ ሰጡ። አስከትለዋቸው የመጡት ብፁዓን ሊቃነ ጳጳሳት አቡነ ዜና ማርቆስ፣ አቡነ ጎርጎርዮስ፣ አቡነ ኤልያስ እና የጠቅላይ ቤተ ክህነት ዋና ሥራ አስኪያጅ ሊቀ ማእምራን አበባው ይግዛው በውጭ ሀገር ትምህርታቸውን ተከታትለው የጨረሱ፧ በዝርዎት ያሉትን የግሪካውያንንና የሌሎቹንም ኦርቶዶክሳውያን አብያተ ክርስቲያናት ሁኔታ ስለሚያውቁ ለሀሳቡ ላይ ድጋፍ ሰጥተዋል። በመጨረሻም «ለማናቸውም ደብዳቤ ጻፉ» ብለው ካረፉበት ክፍል ቡራኬ ተቀብለው ወጡ።",
    timeline: {
      title: "ቤተ ክርስቲያናችን በታሪክ ውስጥ",
      periods: {
        first: {
          year: "1971-1981",
          title: "የመጀመሪያው 10 አመታት",
          description: "1. ከአገር ቤት ለትምህርት የመጡ ሁለት መንፈሳዊ ተማሪዎች፡፡\n2. የመጀመሪያው ቅዳሴ በሃይድል በርግ (ሊ. ካ, መርዓዊ ተበጀ እና ቀሲስ ዘለአለም)\n3. ፓትረያሪክ ብፁህ አቡነ ተክለ ሐይማኖት ጀርመን ሀገር ለጉብኝት በመጡበት ወቅት፣ የመጀመሪያው የቅዱስ ሚካኡል ቤተ ክርስትያን እንዲከፈት ሊካ መርዓዊ ተበጀ ፍቃድ ሲጠየቁ፣\n4. የመጀመሪያው የሰበካ ጉባኤ ምስረታ እና ስብሰባ።\n5. በ 1981-1983 በጀርመን ሐገር ውስጥ የመጀመሪያው የቅዱስ ሚካኤል መንፈሳዊ አግልግሎት።\n ከ1983-1985 ከሃይድልበርግ እየተመላለሱ ሲያገለግሉ፡፡\n ሊ. ካ. መርዓዊ ተበጀ\n 6. ሊ.ካ.መርዓዊ ተበጀ ሌሎችን ካህናት በማስተባበር ከኮሎኝ በመነሳት በጀርመን እና በተለያዩ የአውሮፓ ሃገራት መንፈሳዊ አገልግሎት ሲሰጡ፡፡\n 7. በጀርመን የቴሌቪዥን ጣቢያ WDR ግብዣ የመጡ የቅዱስ ያሬድ ዘማሪያን በኮኒቨርት ቤተክርስትያን ዝማሪ ሲያቀርቡ፡፡"
        },
        second: {
          year: "1981-1991",
          title: "ሁለተኛው 10 አመታት",
          description: "1. በጀርመን አገር ባሉ አብያተ ክርስትያናት ስለ ኢትዬጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን ገለፃ ሲደረግ፡፡\n2. የጀርመን አብያተ ክርስትያናት የሐይማኖት አባቶችን እና አገልጋዬች በኢትዬጵያ ጉብኝት ሲያደርጉ፡\n3. በጀርመን አገር ያሉ ቤተክርስትያኖች የሚገናኙበት ቀን (Kirchen Tag) ላይ ተሳትፎ ሲደረግ::\n4. በኢትዬጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን በአመታዊ የካህናት ስብሰባ ላይ አመታዊ ሪፖርት ሲያቀርቡ፡፡"
        },
        third: {
          year: "1991-2001",
          title: "የሶስተኛው 10 አመታት",
          description: "1. ቀድሞ ከኢቫንጌሊሽ ቤተክርስትያን መልካም ፍቃድ በጊዚያውነት የተሰጠውን ቤተክርስትያን ግዢ የተፈፀመበት።\n2. የቤተክርስትያን እድሳት ሲደረግ\n3. የመዘምራን አገልግሎት \n4. የ 25 አመት ክብረ በአል ለመጀመሪያ ጊዜ ሲከበር \n5. የ 30 አመት ክብረ በአል"
        },
        fourth: {
          year: "2001-2011",
          title: "የመጨረሻው 10 አመታት",
          description: "1. የተለያዩ መንፈሳዊ አገልግሎቶች፡\n2. በኮሮና ጊዜ ያልተቋረጠ አገልግሎት \n3. ተጨማሪ ቤት እና ቦታ ግዢ "
        }
      }
    },
    administration: {
      title: "የቤተ ክርስቲያን አስተዳደር",
      administrator: "አስተዳዳሪ",
      administratorName: "ሊቀ ካህናት ዶክተር መርዓዊ ተበጀ",
      currentCouncil: "አሁን ያሉ የሰበካ ጉባኤ አስተዳደር",
      councilPeriod: "(2016-2019 ዓ.ም.)"
    }
  },
  clergy: {
    title: "የቤተክርስቲያን ካህናት",
    headPriest: "ሊቀ ካህን",
    priest: "ካህን",
    deacon: "ዲያቆን"
  },
  constructionStatus: {
    title: "የግንባታ ሁኔታ",
    statusOverview: {
      constructionStatus: "የግንባታ ሁኔታ",
      constructionStatusValue: "በሂደት ላይ",
      permitStatus: "የፍቃድ ሁኔታ",
      permitStatusValue: "በጥብቅ ላይ",
      landStatus: "የቦታ ሁኔታ",
      landStatusValue: "1840 ካሬ ሜትር"
    },
    content: {
      paragraph1: "በጀርመን አገር በኮለን ከተማ የምትገኘው ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቅድስት ቤተ ክርስቲያናችን ከዛሬ ቀደም ከነበራት ርስት የቦታ ባለቤትነት በእግዚአብሔር ፈቃድ ተጨማሪ የአምልኮ ፣ የበረከት ፣ የባለቤትነት ዕድሉን አምላከ ሚካኤል አሳክቶላት ከኃይል ወደ ኃይል ፣ ከበረከት ወደ በረከት ፣ ከትጥበት ወደ ስፋት ለመሻገር በባዕድ አገር ሰፊ የቦታ (1840 ካሬ ሜትር) ባለቤት ሆናለች ።",
      paragraph2: "የቤተክርስትያናችን የቦታ ግዢ ከተፈፀመ በኃላ በተያዘው እቅድ መሰረት የውስጥ ማሰፋፋት ለማድረግ አስፈላጊው ጥናት ለማድረግ ከአርክቴክት ጋር የመግባቢያ ውል ተፈርሞ ሰራው ተጀምሯል ቤተክርሰትያናችን በቅርሰነት ሰለተመዘገበ አፍርሶ መስራት ሰለማይቻል የቤተክርሰትያኑን ንድፍ ለማውጣት አስቸጋሪ ነበር። ሆኖም አስፈላጊው የግንባታ ሂደት አልፎ ለሚመለከታቸው የመንግሰት አካላት (Stadt Köln Bauamt) የመጀመሪያውን ማመልከቻ ( Bauantrag ) ተደርጐ ነበር ። ሆኖም ፍቃድ አግኝተን ለመስራት ከጐረቤቶቻችን ያለው እርቀት አስፈላጊ ነበር ይህም ምንአልባተ‍ ግንባታው ሲጀመር በወሰን የሚጋሩን ጐረቤቶቻችን ቦታ ላይ ሊነካ ስለሚችል ( Baulast) የእነሱን ይሁንታ ማግኘት ነበረብን ነገር ግን ጐረቤቶቻችን ለዚህ ብዙ ገንዘብ ሰለጠየቁን ይህን ለማሰቀረት ከ Bauphysik ጋር በመመካከር Baulast ፕላኑ በውስጥ እንዴሆን ተደርጓል ከዚህ በተጨማሪ የመጀመሪያውን ቤተክርስትያን ግዢ ሲደረግ በፊት በኩል ባለው ጓሮ ቦታ ባለቤትነቱ የአኢቫንኬልሽ ቤ/ክረስትያን ይዞታ ሰለነበር ይህንም ቦታ ግዢ ተፈፅሞ የኖታሩ እማኝ አባሪ ተደርጐ ይህ ማሻሻያ የተደረገበት ማመልከቻ በድጋሚ ለStadt Köln Bauamt ተመልክቷል።",
      highlightBox: "የእንፃ መስሪያ እቅድ(Bauplan)ማሻሻያ በተደረገ ቁጥር ለአርክቴክቶሮቹ የሚከፈለው ገንዘብ እና ለቦታው መስሪያ ፍቃድ የማግኛው ጊዜ ብዙ ጊዜ ፈጅቷል ። አሁን የመስሪያ ፍቃድ ለማግኘት እየጠበቅን እንገኛለን::"
    }
  },
  faith: {
    title: "እምነታችን",
    subtitle: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን",
    heroDescription: "ከዓለም ላይ ካሉት ጥንታዊ የክርስትና ወግና ባህሎች አንዱ",
    readMore: "ተጨማሪ ያንብቡ",
    showLess: "ያነሱ አሳይ",
    tabs: {
      history: "የኢኦተቤ ታሪክ",
      beliefs: "የእምነታችን መሠረት",
      sacraments: "አዕማደ ምሥጢራት",
      liturgy: "ምሥጢራተ ቤተ ክርስቲያን",
      calendar: "መጽሐፍ ቅዱስ",
      holyBible: "መጽሐፍ ቅዱስ"
    },
    history: {
      title: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ታሪክ በአጭሩ",
      source: "ምንጭ: https://stmaryeotctoronto.com/am/our-history",
      content: {
        paragraph1: "ኢትዮጵያ የጁዲዮ የክርስትና እምነትና ባሕል ያላት ጥንታዊት አገር ስትሆን የክርስትና እምነት ተከታዮች በብዛት የሚግኙባት ነች። አስገራሚ ታሪክ፣ ድንቅ ሥልጣኔዋ፣ባሕልና ሃይማኖታዊ የሆነው የሕዝቧችዋ አኗኗር ልዩ ያደርጋታል። በኦሪት ዘፍጥረት እንደተጻፈው \"የሁለተኛው ወንዝ ስም ግዮን ነው፣እርሱም የኢትዮጵያን ምድር ሁሉ ይከብባል።\" (ዘፍ. 2፥13) በዳዊት መዝሙር ደግሞ \"ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች\" (መዝ. 67(68)፥31)። ከመጽሐፍ ቅዱስ ሌላ በብዙ የታሪክ መዛግብትና መጽሐፍት ላይ ስለ ኢትዮጵያ ተዘግቧል። በተጨማሪ ታሪካዊና አርኬኦሎጂካል ግኝቶች የሚያስገርሙ ሃቆችን ስለ ኢትዮጵያ እየገለጹ ነው። ኢትዮጵያ የራስዋ የሆነ ፊደል ከነአጻጻፉና ሥርዓቱ ጋር ያላት ብቸኛ አፍሪካዊት አገር ነች።",
        paragraph2: "ጥንታዊ የግሪክ ባለ ቅኔዎች፣ ገጣሚዎችና የታሪክ ጸሐፊዎች ስለኢትዮጵያ ብዙ ጽፈዋል፤ ከነዚህ መካከል ሆሜር ስለአገሪቱና ስለሕዝቧ ሲገልጽ \"እንከን የሌለባቸው ዘሮች\" ሲል ሔሮዶቱስ ደግሞ የኢትዮጵያን የመልክዐ ምድር አቀማመጥን እንዲህ ሲል ገልጾታል፣ \"ከግብፅ በስተደቡብና የቀይ ባሕር አካባቢን ይዞ እስከ ሕንድ ወቂያኖስ የሚጠጋ ግዛት ነው\" ስለሕዝቧም ሲናገር \"የረጅም እድሜ ባለፀጎችና እውነተኛ የሆኑ ሕዝቦች ናቸው\"ብሏል።",
        paragraph3: "በብሉይ ኪዳን ንግሥተ ሳባ ንጉሥ ሰለሞንን ለመጎብኘት ወደ የኢየሩሳሌም ያደረገችውን ጉዞ በ1ኛ ነገ. 10፥1-13 ተጽፎ ሲገኝ በኢትዮጵያውያንም ዘንድ ይህ ጉዞ ብሉይ ኪዳን በኢትዮጵያ እንዲስፋፋ ያደረገና፤ የንጉሥ ሰለሞንና የንግሥት ሳባ ልጅ የሆነው ቀዳማዊ ምኒሊክ ጽላተ ሙሴን ወደ ኢትዮጵያ እንዲመጣ ያደረገ ነው ተብሎ ይታመናል።",
        paragraph4: "በኢትዮጵያ የክርስትና እምነት የገባው በሐዋርያት ዘመን እንደሆነ መጽሐፍ ቅዱሳዊ የሆኑና ሌሎች ታሪካዊ ማስረጃዎች ይመሰክራሉ። (ሐዋ. 8፥26-36) ላይና በአራተኛው ክፍለ ዘመን የነበረው ታላቁ የቤተ ክርስቲያን ታሪክ ጸሐፊ አውሳቢዮስ \"የኢትዮጵያው ጃንደረባ ጥምቀት በዓለም የመጀመሪያው የክርስትና እምነት ፍሬ\" ብሎታል በተጨማሪም ሩፊኖስ ቀጥሎም በቴዎድሬት፣ሶቅራጦስና ሶዝሜን ታሪክ ዘጋቢዎች ይህንን ታላቅ ሁኔታ ዘግበውታል።",
        paragraph5: "ከዚያን ጊዜ በኋላ የአይሁድ እምነትና ሥርዓተ አምልኮ የሕዝቧ እምነትና የቀን ተቀን ኑሮ መመሪያ ሆኗል። በቀዳማዊ ምኒሊክ የተመሰረተው የአክሱም ሥርወ መንግሥት ተብላ ትታወቅ ነበር። በተጨማሪ ብዙ የታሪክ መረጃዎች እንደሚያስረዱት በኢትዮጵያ ነፃ መንግሥት የተመሰረተው ከ 4,522 ከክርስቶስ ልደት በፊት ነው። የዛሬይቱ አክሱም የጥንታዊት ኢትዮጵያ ዋና መዲና፣የሥልጣኔ መገኛና የክርስትና እምነት መወለጃ እንደሆነች ዛሬ የሚታዩት የሕዝቧ ኣኗኗርና ሃይማኖታዊነት፣ ታሪካዊ ቅርሶችዋ፣የቆሙት ሐውልቶችዋና ልዩ ልዩ የሥነ ጥበብ ሥራዎቿ ሲመሰክሩ አክሱም አሁንም ዋነኛ የሃይማኖት መንጸባረቂያ ቅድስት ቦታ ነች።",
        paragraph6: "የኢትዮጵያ ኦርቶዶክስት ተዋህዶ ቤተ ክርስቲያን ብዙ ሊቃውንቶችና የተማሩ ቀሳውስቶች ያላት ሲሆን በአሁኑ ጊዜ ቁጥራቸው ከሰላሳ ሺህ በላይ የሆኑ አብያተ ክርስቲያናት ከሦስት መቶ ሺህ በላይ የሚሆኑ ቀሳውስቶችና ወደ አርባ አምስት ሚሊዮን የሚጠጉ ምዕመናን ያላት አገር ስትሆን በዚህም ከምሥራቃውያን የኦርቶዶክስ ሃይማኖት ተከታይ አገሮች በምዕመናን ብዛት የቀዳሚነትን ሥፍራ ይዛለች።",
        paragraph7: "በኢትዮጵያ የክርስትና እምነት አመጣጥ",
        paragraph8: "የክርስትና እምነት ወደ ኢትዮጵያ የገባው በሐዋርያት ዘመን እንደሆነ መጽሐፍ ቅዱሳዊ የሆኑና ሌሎች ታሪካዊ ማስረጃዎች ይመሰክራሉ። (ሐዋ. 8፥26-36) ላይና በአራተኛው ክፍለ ዘመን የነበረው ታላቁ የቤተ ክርስቲያን ታሪክ ጸሐፊ አውሳቢዮስ \"የኢትዮጵያው ጃንደረባ ጥምቀት በዓለም የመጀመሪያው የክርስትና እምነት ፍሬ\" ብሎታል በተጨማሪም ሩፊኖስ ቀጥሎም በቴዎድሬት፣ሶቅራጦስና ሶዝሜን ታሪክ ዘጋቢዎች ይህንን ታላቅ ሁኔታ ዘግበውታል። ይሁን እንጂ ክርስትና የመንግሥት እምነት ሆኖ በኤጲስ ቆጶስ ደረጃ መመራት የጀመረው በአራተኛው ክፍለ ዘመን በአክሱም ዘመነ መንግሥት እንደሆነ ይተረካል። ይኸውም የእስክንድርያው ፓትርያርክ ቅዱስ አትናቴዎስ አባ ፍሬሚናጦስ የመጀመሪያው የኢትዮጵያ ጳጳስ አድርጎ የሾመው በዘመነ አብርሃና አፅብሃ ጊዜ ነው። ንጉሥ ኤዛና በገንዘቦቹ ላይ የነበሩትን የጨረቃ ሥዕልን ቀይሮ የመስቀል ምልክት በማድረግ በዓለም ከነበሩት ነገሥታቶች መካከል ቀድምትነትን ቦታ አግኝቷል። በ356 ዓ.ም. አርያናው ንጉሥ ኮንስታንትዩስ ለአክሱም ንጉሥ ሲጽፍ \"ጳጳሱ ፍሬሚናጦስ የክርስትናን እምነት አጥፊ ስለሆነ ወደ ሮም ተይዞ ይላክ\" ብሎ ነበር። ነገር ግን ይህ ጥያቄው ተቀባይነት ሳያገኝለት ቀርቷል። ቅዱስ ፍሬሚናጦስ በኋላ በኢትዮጵያውያን ኣባ ሰላማ (የሰላም አባት) ከሳቴ ብርሃን (የብርሃን ገላጭ) እየተባለ ሲታወቅ ከዚህ ጊዜ ጀምሮ የጳጳሳት መጠሪያ የሆነውን አቡን የሚባለው አጠራር ማለትም (አባታችን) ተቀብሎ ነበር።",
        paragraph9: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ሦስቱን ዓለም አቀፍ ጉባኤዎችን ብቻ ትቀበላለች እነርሱም የኒቅያው ጉባኤ (325 ዓ.ም.) የኤፌሶን ጉባኤ (381 ዓ.ም.) የቁስጥንጥንያ ጉባኤ (431 ዓ.ም.) ናቸው።",
        paragraph10: "ምንኩስናና ገዳማት በኢትዮጵያ",
        paragraph11: "ክርስቲያናዊ የሆነ ገዳማዊ ኑሮ በኢትዮጵያ ማበብ የጀመረው የክርስትና ሃይማኖት የአገሪቱ ብሔራዊ እምነት ሆኖ በነገሥታቱ ተቀባይነት ካገኘ በኋላ ነው። የግብፃዊው የቅዱስ አንጦኒዮስን ገዳማዊ ሥርዓት የተከተለ በ 479 ዓ.ም. ወደ ሀገሪቱ የመጡት ዘጠኙ ቅዱሳን አስፋፍተውታል።",
        paragraph12: "ስለዚህ ነው ከ4ኛው መቶ ክፍለ ዘመን እስከ 7ኛው ክፍለ ዘመን ያለው ጊዜ ወርቃማው ተብሎ የሚታወቀው። በነዚህ ዘመናት ውስጥ ብዙ የስብከት ወንጌል ሥራዎች ተስፋፍተዋል፣ ልዩ ልዩ መንፈሣዊ ሥራዎችና ጽሑፎች የተከናወኑበት ጊዜ ነው። በአውሮፓ ያሉ ገዳማት የምዕራባውያንን ባሕል በመካከላለኛው ክፍለ ዘመን እንዲስፋፋና እንዲጠበቅ እንዳደረጉት ሁሉ በኢትዮጵያም የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ገዳማትም የእውቀትና የሥልጣኔ ማዕከል በመሆን ሥነ ጽሑፎችን፣ ሥነ ሕንፃን፣ ቅኔዎችን፣ ዜማዎችን፣ ዝማሬዎችንና መንፈሣዊ ትምህርቶች እንዲዳብሩ አድርገዋል። በ5ኛው ክፍለ ዘመን የታወቀው የቤተ ክርስቲያን ሊቅ ቅዱስ ያሬድ በመጽሐፍ ቅዱስ ላይ የተመሠረተ የቅድሴ ዜማዎችን፣ ዝማሬዎችንና ውዝዋዜዎችን በመፍጠር ለቤተ ክርስቲያን ያበረከተ ሲሆን በአሁኑ ጊዜ ይህ ለጆሮ ክፍተኛ ጣዕም ያለውን የምስጋናና የጸሎት ሥርዓት ያላትና የምትጠቀም በዓለም ያለች ብቸኛ ቤተ ክርስቲያን አድርጓታል።",
        paragraph13: "",
        paragraph14: "",
        paragraph15: "",
        paragraph16: "",
        paragraph17: "",
        paragraph18: "",
        paragraph19: "",
        paragraph20: "",
        paragraph21: "",
        paragraph22: "",
        paragraph23: "",
        paragraph24: "",
        paragraph25: "",
        paragraph26: "",
        paragraph27: "",
        paragraph28: "",
        paragraph29: "",
        paragraph30: "",
        paragraph31: "",
        paragraph32: "",
        paragraph33: "",
        paragraph34: "",
        paragraph35: "",
        paragraph36: "",
        paragraph37: "",
        paragraph38: "",
        paragraph39: "",
        paragraph40: "",
        paragraph41: "",
        paragraph42: "",
        paragraph43: "",
        paragraph44: "",
        paragraph45: "",
        paragraph46: "",
        paragraph47: "",
        paragraph48: "",
        paragraph49: "",
        paragraph50: ""
      }
    },
    beliefs: {
      title: "የእምነታችን መሠረት",
      subtitle: "ጸሎተ ሃይማኖት",
      introduction: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን የሃይማኖት መሠረት አድርጋ የምታስቀምጠው፥ በዘወትር ጸሎትም ኾነ በሥርዓተ ቅዳሴ፤ በግልም ኾነ በጋራ ግዜ የምትጸልየው ጸሎት በጉባኤ ኒቅያ እና እና በጉባኤ ቁስጠንጥንያ (Niceno-Constantinopolitan Creed) በቅዱሳን አባቶቻችን የተደነገጉትን የሃይማኖት መሠረቶች ነው። ይህን ጸሎት፥ አዲስ አማኞች (ንኡሰ ክርስቲያናት) ከመጠመቃቸው በፊት በቃል የሚያሰሙ ሲኾን፥ ሕፃናት ከኾኑ ደግሞ የክርስትና እናት ወይም አባት ሕፃናቱን ወክለው ይሉላቸዋል። ጸሎቱ ከዚህ ቀጥሎ ያለው ነው፡፡",
      creed: "ሁሉን በያዘ ሰማይንና ምድርን የሚታይና የማይታየውን በፈጠረ በአንድ አምላክ በእግዚአብሔር እናምናለን። ዓለም ሳይፈጠር ከርሱ ጋር በነበረ የአብ አንድ ልጁ በሚሆን በአንድ ጌታ በኢየሱስ ክርስቶስም እናምናለን። እርሱ ከእግዚአብሔር አብ የተወለደ ከመጀመሪያ የነበረ አምላክ ከአምላክ እውነተኛ አምላክ ከእውነተኛ አምላክ የተወለደ የማይፈጠር ከአብ የሚሆን አንድ ዓለም የሚሆን በርሱ ዓለም ሁሉ የተፈጠረ ነው። እርሱ ስለ እኛ ሰዎች ስለ መዳናችንም ከሰማይ ወርዶ ሥጋ ወስዶ ከመንፈስ ቅዱስ ከእመቤት ማርያም ሰው ሆኖ ተወለደ። በጲላጦስ ዘመን ስለ እኛ ተሰቅሎ ተሰቀለ ተቀበረ። በሦስተኛው ቀን ከሙታን ተነሣ። ወደ ሰማይ ዐረገ በአብ ቀኝ ተቀመጠ። ሕያዋንንም ሙታንንም ሊፈርድ ደግሞ ይመጣል። በመንፈስ ቅዱስም እናምናለን። አምላክ ከአብ የሚወጣ ከልጅም የሚሆን ከአብና ከልጅ ጋር የሚሆን አንድ አምላክ ነው። በአብ በልጅም በመንፈስ ቅዱስም እናምናለን። አንድ ቅድስት ካቶሊክ ዓመት ቤተ ክርስቲያንም እናምናለን። አንድ ጥምቀት ለኃጢአት ምሕረት እናምናለን። የሙታን ትንሣኤንም እናምናለን። የሚመጣውንም ዓለም ሕይወትን እናምናለን። አሜን።"
    },
    sacraments: {
      introduction: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን የዶግማ ትምህርት የተመሠረተው ከመጽሐፍ ቅዱስ ከወጡትና በሦስቱ ዓለም አቀፍ ጉባኤዎች የተደነገጉትን የዶግማ ትምህርቶች ላይ ነው። ዋናዎቹ ነጥቦች በአምስት መጀረታዊ ነጥቦች የሚጠቀለሉ ሲኾን፥ አምስቱ አእማደ ምሥጢራት ይባላሉ።",
      list: "እነዚህም፤ ምሥጢረ ሥላሴ፣ ምሥጢረ ሥጋዊ፣ ምሥጢረ ጥምቀት፣ ምሥጢረ ቁርባንና ምሥጢረ ትንሣኤ ተብለው ይጠራሉ።",
      trinity: {
        title: "1. ምሥጢረ ሥላሴ",
        content: "የምሥጢረ ሥላሴ ትምህርት የአምላክን ሦስትነትና አንድነት የሚያስረዳ ዋና የክርስትና እምነት መሠረት ነው። ይህ ዶግማ ረቂቅ ነው ይህ ትምህርት በእግዚአብሔር ካልተገለጸ በስተቀር በምርምር ብቻ የሚደረስበት አይደለም። \"ከአብ በቀር ወልድን የሚያቅ የለም፣ ከወልድም በቀር ወልድም ሊገለጥለት ከሚፈቅድ በቀር አብን የሚያውቅ የለም።\" (ማቴ. 11፥27) የምናመልከው አንድ አምላክ በባሕሪይ አንድ አካል ሲሆን በግብር ሦስት አካላት ናቸው። ኦርቶዶክሳዊት ቤተ ክርስቲያናችን የምትቀበለው ይህን ትምህርት ነው። \"መንፈስም እውነት ነውና የሚመሰክረው መንፈስ ነው። የሚመሰክሩት መንፈሱና ውኃው ደሙም ሦስት ናቸውና ሦስቱም አንድ ናቸው።\" (1ኛ ዮሐ. 1፥5-7)"
      },
      incarnation: {
        title: "2. ምሥጢረ ሥጋዊ",
        content1: "ምሥጢረ ሥጋዌ የሚገልጽልን የአምላካችንን የድኅነት ሥራ፥ ሰዎችን ለማዳን ሰው መኾኑን ነው። ይህም ያስፈለገበት ምክንያት ሕመማችን/ቁስላችን ኣዳኝ ሐኪም ስላስፈለገው ነው። (ሉቃ. 19፥10) ጨለማችን ብርሃን ስላስፈለገው ነው። (ማቴ. 4፥12-17) ከባርነት ቀንበር ነጻ የሚያወጣ ስላስፈለገ ነው። (ገላ. 5፥1) በዚህ ጉዳይ ላይ ጸሎተ ሃይማኖትም አንዲህ ይላል፣ «ስለ እኛ ስለሰው ስለመዳናችን ከሰማይ ወረደ። ከመንፈስ ቅዱስ የተነሣ ከቅድስት ማርያም ፈጽሞ ሰው ሆነ።»",
        content2: "በምሥጢረ ሥጋዌ ስር ምሥጢረ ተዋህዶ ያለ ሲሆን፥ ቤተ ክርስቲያናችን የምትቀበለው የእስክንድርያውን የቅዱስ ቄርሎስን የዶግማ ትምህርት ነው። \"የወልድ አምላክነትን ባሕሪይ\" በሌላ አነጋገር ሁለቱ ባሕርያቶች \"አምላክነትና ሰውነት\" ሲዋሀዱ የክርስቶስ ባሕርይ አንድ ብቻ ነው የሆነው። የቃሉና የሥጋ አንድነት በቅድስት ድንግል ማርያም ማኅፀን ተዋሀደ ስለዚህ የሰውነት ባሕርይም ለአምላክነት የአምላክነት ባሕሪይም ለሰውነት ይገልጻል። በዚህ ንጹህ በሆነ ተዋህዶ «መለኮትና ሥጋ ያለመቀላቀል ያለመጠፋፋት አንድ ሆነዋልና ጌታችን ኢየሱስ ክርስቶስ ፍጹም ሰው ፍጹም አምላክ ነው» ይኸውም ሰው የኾነው አምላክ መድኃኒታችን ኢየሱስ ክርስቶስ ከተዋህዶ በኋላ አንድ አካል አንድ ባሕርይ ያለው ፍጹም ሰው ፍጹም አምላክ ነው» ስለዚህ ስለ ሁለት ባሕሪያት መናገር አይቻልም። ስለዚህም በዮሐንስ ወንጌል እንዲህ ተጽፏል «ቃል ሥጋ ሆነ፣ ጸጋንና አውነትንም ተመልቶ በኛ አደረ፣ አንድ ልጅም ከአባቱ ዘንድ እንዳለው ክብር የሆነው ክብሩን አየን።» (ዮሐ. 1፥14) የቅዱስ አትናቲዮስ አገላለጽም \"አምላክ ሰው ሆነ ይህም የሆነው የሰው ልጅ የሆነውን ወደ አምላክነት እንድንለወጥና የመለኮትን ባሕሪይ ተካፋዮች አንድንሆን ነው።\" (2ኛ ጴጥ. 1፥4)"
      },
      baptism: {
        title: "3. ምሥጢረ ጥምቀት",
        content: "ምሥጢረ ጥምቀት ወደ ቤተ ክርስቲያን አባልነት መግቢያ በርና ከአብራከ መንፈስ ቅዱስ ተወልደን የእግዚአብሔር ልጆች የምንኾንበት የአምላካችንን የፀጋ ስጦታ የምንካፈልበት ነው። (ማር. 16፥16፣ ዮሐ. 19፥34-35፣ ሐዋ. 2፥38)። ጥምቀት ወደ ክርስቲያናዊ ሕይወት የሚያስገባን የዕምነት በር ሲሆን ጥምቀት አንድ ጊዜ ብቻ የሚፈጸም እንጂ በምንም ዓይነት የሚደገም አይደለም። (ኤፌ. 4፥4-7፣ ዮሐ. 3፥3-8)"
      },
      eucharist: {
        title: "4. ምሥጢረ ቁርባን",
        content1: "ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ በጸሎተ ሐሙስ ዕለት ከደቀ መዛሙርቱ ጋር ባደረገው በመጨረሻው እራት ላይ መሥርቶታል። እንዲህም ብሏል \"በዚህ መታሰቢያ ስለ ሞቴና ስለ ትንሣኤዬ አስቡ\" (ማቴ. 26፥26-30)",
        content2: "ቅዱስ ጳውሎስም እንዲህ ብሏል \"ይህ ጽዋ በደሜ የሚሆን አዲስ ኪዳን ነው፣ በጠጣችሁት ጊዜ ሁሉ ይህን መታሰቢያዬን አድርጉት አለ።…\" ስለዚህ ለእግዚአብሔር ሳይሰጥ ነገር ግን ስለ ሰዎች ተሰጠ በቁርባኑም ከኃጢያት ተገዢነት የሚያወጣንና ወደ አምላክ የሚያቀርበን ነው። (ዮሐ. 6፥53-57) ቁርባን በመጀመሪያዎቹ ክርስቲያኖች ልቦና ውስጥ የገባና የመለኮትን ፀጋ ከሰው ልጅ ሕይወት ጋር የሚያገናኝ ሆነ።"
      },
      resurrection: {
        title: "5. ምሥጢረ ትንሣኤ",
        content: "ምሥጢረ ትንሣኤ ዓለማዊ ከሆነው ሥጋችን ተለይተን ሞትን ድል አድርገን የምንነሣበትን በኋላም የምናገኘውን ዘለአለማዊ ሕይወት የሚገልጽ ምሥጢር ነው። ይኸውም የሚሆነው የጌታችንና የመድኃኒታች የኢየሱስ ክርስቶስ በክብር መምጣት ሲገለጽ ነው። ልክ እንደማንኛውም ፍሬ መጀመሪያ በስብሶ በኋላ እንደሚያፈራ ሁሉ። (ዮሐ. 12፥24 ፣ 1ኛ ቆሮ. 15፥36) ስለዚህ ሁላችን እንሞታለን ከዛም እንደገና እንነሣለን የመንግሥቱም ወራሾች ለመሆን። በጸሎተ ሃይማኖትም እንዲህ ይላል \"የሙታንንም መነሣት ተስፋ እናደርጋለን፣ የሚመጣውንም ሕይወት ለዘላለሙ አሜን።\""
      }
    },
    liturgy: {
      introduction: "ምሥጢር ማለት የቃሉ መነሻ የግሪክ ቋንቋ ኾኖ ትርጉሙም ድብቅ፣ ስውር፣ ሸሸግ፣ ረቂቅ፣ ለቅርብ ዘመድ ካልሆነ በቀር የማይገለጥ ማለት ነው። ለሁለት የሚከፈል ሲሆን ይኸውም የፍጡር ሚሥጢርና የፈጣሪ ሚስጥር በመባል ይታወቃል። የፍጡር ምስጢር ሁለት ይዘት አለው። የሰውና የመላዕክት ምስጢር ይባላል። በቤተክርስቲያን ውስጥ የሚገኘው የፈጣሪ የእግዚአብሔር ሚስጥር ይህ የከበረ የተወደደ የሚናፈቅ የበረከት ስጦታ ነው። ብርሃነ አለም ሀዋርያው ቅዱስ ጴጥሮስ እንዲህ ሲል በከበረ ቃሉ ገልፆታል። «እርሱንም ሳታዩት ትወዱታላችሁ አሁንም ምንም ባታዩት በእርሱ /በክርስቶስ/ አምናችሁ የእምነታችሁን ፍጻሜ እርሱን የነብሳችሁን መዳን እየተቀበላችሁ በማይናገርና ክብር በሞላበት ሀሴት ደስ ይበላችሁ።» በማለት ስውር ረቂቅ ከሆነው ጸጋ እግዚአብሔር የምንሰጠው ሀብት መሆኑን በማብራራት ገልፆታል። በዚህ መሠረት በቤተ ክርስቲያናችን ውስጥ ከሚፈጸሙት ምሥጥራት በቁጥር 7 ተወስነው ተቀምጠዋል። ምሳሌነታቸው ለሰባቱ ሰማያት ነው። እነዚህ ሰባት ሚስጥራት ቤተክርስቲያን የምሥጢርነታቸው ምክንያት በዓይናችን ልናያቸው በእጃችን ልንዳስሳቸው የማንችል ልዩ ልዩ የመንፈስ ቅዱስ ስጦታዎች በእነዚህ ምሥጥራት አማካኝነት የሚሰጡን ስለሆነ ነው። አበው ሲናገሩ በንባብ የተሰወረ ብሂል ምስጢር ይባላል ብለው ስውርነቱን ረቂቅነቱን ይናገራሉ። 7ቱን ምሥጢራተ ቤተክርስቲያንም 7 መሆቸው በመጽሐፈ ምሳሌ 9፡1 ላይ ‹‹ጥበብ ቤቷን ሠራች ሰባቱንም ምሰሶዎችዋን አቆመች›› ይላል። ጥበብ የተባለ ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ሲሆን ሰባት ምሰሶዎች የተባሉት ደግሞ የ7ቱ ምሥጢራተ ቤተ ክርስቲያን ምሳሌ ኾነው ነው።",
      list: {
        baptism: "ምሥጢረ ጥምቀት",
        myron: "ምሥጢረ ሜሮን",
        eucharist: "ምሥጢረ ቁርባን",
        repentance: "ምሥጢረ ንስሐ",
        priesthood: "ምሥጢረ ክህነት",
        marriage: "ምሥጢረ ተክሊል",
        unction: "ምሥጢረ ቀንዲል"
      },
      baptism: {
        title: "ምሥጢረ ጥምቀት",
        content1: "ጌታችን አምላካችን መድኃኒታችን ኢየሱስ ክርስቶስ ለኒቆዲሞስን \"እውነት እውነት እልሃለሁ፤ ዳግመኛ ከውኃና ከመንፈስ ቅዱስ ያልተወለደ ሰው ወደ እግዚአብሔር መንግሥት ሊገባ አይችልም\" ብሎ እንደተናገረው ከውኃና ከመንፈስ ተወልደን የሥላሴን ልጅነት የምናገኝበት መንግሥተ ሰማያት የምንገባበት ኃጢአታችን የሚደመሰስበት ድኅነትን የምናገኝበት ዐቢይ ምሥጢር ነው /ዮሐ. 3፥5/፡፡ ጥምቀት በምሥጢረ ሥላሴና በምሥጢረ ሥጋዌ አምኖ ለሚፈጽመው ሰው ሁሉ ለኃጢአት መደምሰሻ ከሥላሴ የጸጋ ልጅነት ለመቀበልና የእግዚአብሔርን መንግሥት ለመውረስ የተሰጠ ልዩ የሕይወት መንገድ ነው፡፡ ጥምቀት በጽርዕ ቋንቋ ኤጲፋኒያ በግእዝ አስተርዮ በአማርኛ መገለጥ ይባላል፡፡ ቃሉ በቀጥታ ሲተረጎም በውኃ ውስጥ ገብቶ መውጣት፣ መነከር፣ መዘፈቅ፣ መጥለቅ ማለት ነው፡፡ ጥምቀት ከሰባቱ ምሥጢራተ ቤተክርስቲያን (ምሥጢረ ጥምቀት፣ ምሥጢረ ሜሮን፣ ምሥጢረ ቁርባን፣ ምሥጢረ ንስሐ፣ ምሥጢረ ክህነት፣ ምሥጢረ ተክሊል፣ ምሥጢረ ቀንዲል) አንዱ ነው፡፡",
        content2: "የምሥጢረ ጥምቀት መሥራች ራሱ ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ ነው፡፡ ነገር ግን ከጌታችን ጥምቀት በፊት አይሁድ ለመንጻትና ለኃጢአት ሥርየት (ይቅርታ) የሚጠመቁት ጥምቀት ነበራቸው፡፡ ይኸውም እግዚአብሔር በረድኤት የሚገለጥባቸው የተቀደሱ ዕለታትና ቦታዎች ሁሉ ሰውነትንና ልብስን ማጠብ የእግዚአብሔር ቤት ማገልገያ የሆኑ ዕቃዎችን ሁሉ ማጠብ ማንጻት ሥርዓትና ልማድ ነበር፡፡ የእግዚአብሔርም ፈቃድ ያለበት አሠራር ነበር፡፡ ወደ እግዚአብሔር ቤት ከመቅረባቸውና ለተቀደሰው አገልግሎት ከመግባታቸው አስቀድመው እግሮቻቸውንና እጆቻቸውን የመታጠብ ግዴታም ነበራቸው፡፡ ሰውነታቸውን ከአፍአዊ (ከውጫዊ) እድፍ በማጠብና ንጹሕ በማድረግ በባሕርይ ንጹሕና ቅዱስ በሆነው አምላክ ፊት ውስጣዊ ሕይወትን ንጹሕ አድርጎ የመቅረብን ሥርዓትና ምሥጢር የሚያመለክት ልማድ ነበር፡፡",
        content3: "",
        examples: {
          title: "የጥምቀት ምሳሌዎች",
          content: "አብርሃም ዮርዳኖስን ተሻግሮ ወደ መልከጼዴቅ መሔዱ የጥምቀት ምሳሌ ነው፡፡ አብርሃም የምእመናን መልከጼዴቅ የኢየሱስ ክርስቶስ ምሳሌ ናቸው፡፡ /ዘፍ. 14፥17/ <br /> ኢዮብ በዮርዳኖስ ተጠምቆ ከደዌው ተፈውሷል፡፡ ይህም ምእመናን ተጠምቀው ከደዌ ሥጋ ከደዌ ነፍስ የመፈወሳቸው ምሳሌ ነው፡፡ <br /> ንዕማን ሶርያዊ ተጠምቆ ከለምጽ ድኗል፡፡ /2ነገ. 5፥14/ ይኸውም ምእመናን ተጠምቀው ከመርገመ ሥጋ ከመርገመ ነፍስ የመዳናቸው ምሳሌ ነው፡፡ <br /> የኖኅ መርከብ የጥምቀት ምሳሌ ነው፡፡ ዘፍ. 6፥13 ይኽንንም ሐዋርያው ቅዱስ ጴጥሮስ \"ጥቂቶች ማለት ስምንት ነፍሳት በውኃ የዳኑባትን መርከብ ሲሠራ በኖኅ ዘመን የእግዚአብሔር ትዕግሥት በዘገየ ጊዜ ቀድሞ ክደውት ለነበሩት ሰበከላቸው፡፡ አሁንም እኛን በዚያው አምሳል በጥምቀት ያድነናል ሥጋን ከዕድፍ በመታጠብ አይደለም ጌታችን ኢየሱስ ክርስቶስ በመነሣቱ በእግዚአብሔር እንድናምን መልካም ግብርን ያስተምረን ዘንድ ነው እንጂ\" /1ጴጥ. 3፥20/ <br /> ለአብርሃም ሕግ ሆኖ የተሰጠው ግዝረት የጥምቀት ምሳሌ ነው፡፡ አብርሃም ከአረጀ በኋላ ቢገረዝም ልጆቹ ግን በተወለዱ በስምንተኛው ቀን እንዲገረዙ እግዚአብሔር አዞ ነበር /ዘፍ. 17፥9/ \"በሰው እጅ የአልተደረገ መገረዝን በእርሱ ሆናችሁ ተገረዛችሁ፡፡ በጥምቀትም ከእርሱ ጋር ተቀብራችኋል በእርስዋም ከሙታን ለይቶ ባስነሣው በእግዚአብሔር ረዳትነትና በሃይማኖት ከእርሱ ጋር ተነሥታችኋል\" /ቈላ. 2፥11/"
        },
        whyBaptized: {
          title: "ጌታችን ለምን ተጠመቀ?",
          content: "የዕዳ ደብዳቤያችንን ለመደምሰስ <br /> አዳምና ሔዋን ፍዳው በፀናባቸው መከራው በበዛባቸው ጊዜ የሚያቃልልላቸው መስሏቸው ዲያብሎሰ ስመ ግብርናችሁን ጽፋችሁ ስጡኝ ባላቸው ጊዜ አዳም ገብሩ ለዲያቢሎስ (አዳም የዲያብሎስ የወንድ አገልጋይ) ሔዋን ዓመቱ ለዲያብሎስ (ሔዋን የዲያብሎስ ሴት አገልጋይ) ብለው ጽፈው ሰጡት፡፡ ዲያብሎስም ይህንን ደብዳቤ አንዱን በሲኦል አንዱን በዮርዳኖስ አስቀመጠው፡፡ በዮርዳኖስ ያስቀመጠውን ጌታችን ሲጠመቅ እንደሰውነቱ ረግጦ ደምስሶታል፡፡ ይህንን ጽሕፈት ለመደምሰስ ነው ጌታችን በዮርዳኖስ የተጠመቀው፡፡ ለዚህም ነው ሐዋርያው ቅዱስ ጳውሎስ \"በእኛ ላይ የነበረውን የሚቃወመንንም በትእዛዛት የተጻፈውን የዕዳ ጽሕፈት ደመሰሰው\" ያለው /ቆላ 2፥14/፡፡"
        },
        trinityRevelation: {
          title: "ምስጢረ ሥላሴን ለመግለጥ",
          content: "ጌታችን በፈለገ ዮርዳኖስ ሲጠመቅ ምስጢረ ሥላሴ ግልጽ ሆኗል፡፡ አብ በደመና \"የምወደው የምወልደው ልጄ ይህ ነው\" በማለቱ አብ የወልድ አባት መሆኑ ታወቀ፡፡ መንፈስ ቅዱስም የባሕርይ ሕይወቱ መሆኑን ሲያስረዳ በአምሳለ ርግብ በራሱ ላይ ተቀመጠ ወልድም በተለየ አካሉ በዮርዳኖስ ሲጠመቅ ታየ፡፡ ስለዚህ ምሥጢርን ለመግለጥ ስንል የአንድነት የሦስትነት ምስጢር በጐላ ሁኔታ እንዲታወቅ ተጠመቀ ማለት ነው፡፡ /ማቴ. 3፥16/<br /> ትንቢቱን ለመፈጸም\"አቤቱ ውሆች አዩህ፣ ውሆችም አይተውህ ፈሩ ጥልቆች ተነዋወጡ ውሆችም ጮኹ፡፡\" ተብሎ በቅዱስ ዳዊት የተነገረውን ትንቢት ለመፈጸም ተጠመቀ /መዝ 77፥16/፡፡ ጌታችን መቼ ተጠመቀ? ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ የተጠመቀው በ5531 ዓመተ ዓለም ዘመነ ሉቃስ ማክሰኞ ጥር 11 ቀን ከሌሊቱ በ10ኛው ሰዓት ነበር፡፡ ፍትሐ ነገሥት አንቀጽ 19 በተጠመቀም ጊዜ ዕድሜው 30 ዓመት ከ13 ቀን ነበር፡፡ /ሉቃ. 3፥23/ በብሉይ ኪዳን ሥርዓትና ልማድ ካህናት ለቤተ እግዚአብሔር ተልእኮ እና መንፈሳውያን አገልግሎቶች ከ30 ዓመት ዕድሜ በፊት አደባባይ አይወጡም ነበር፡፡ እጅግ አስፈላጊ እንኳ ቢሆን ከ20 እና 25 ዓመት አስቀድሞ ለአገልግሎት መሰየም ልማድ አልነበረም፡፡ የቤተ እግዚአብሔር አገልጋዮች በዕድሜና በዕውቀት የበሰሉ፣ በጠባይና በሥራ ልምድ የተፈተኑ ተልዕኳቸውን በብቃት ለመወጣት በተገልጋዩ ሕዝብ ዘንድ የተመሰከረላቸው መሆን ነበረባቸው፡፡ /ዘጸ. 4፥3፤1ዜና መዋ. 23፥24፤ 1ጢሞ. 3፥6-10/ ያንን ሥርዓት ለመፈጸም ጌታችን የተጠመቀውና ለትምህርተ ወንጌል የተገለጠው በ30 ዓመቱ ነበር፡፡ ዮሐንስ መጥምቅም የጌታን መምጣት ለማወጅ በዮርዳኖስ ይሁዳ ምድረ በዳዎች ወጥቶ የታየው ከ30 ዓመት ዕድሜው በኋላ ነው፡፡ ሌላው ዐቢይ ምክንያት የሰው ሁሉ መጀመሪያ አዳም የ30 ዓመት ጎልማሳ ሆኖ ተፈጥሮ በ40ኛ ቀን ተሰጥቶት ኋላም በኃጢአት ምክንያት ያስወሰደውን ልጅነት ለማስመለስ ነው፡፡ ክርስቶስ የተጠመቀው ክብር ሽቶ ሳይሆን የአብ የባሕርይ ልጅነቱን (የባሕርይ አምላክነቱን) ከአብ ከመንፈስ ቅዱስ ለማስመስከር፣ ውኃውን ለመቀደስ፣ የአዳምን ልጆች የእዳ ደብዳቤ ለመደምሰስና በስህተት የጠፋውን የልጅነት ክብር ለመመለስ ነው፡፡ ጌታ ተጠምቆ ከውኃው ከወጣ በኋላ መንፈስ ቅዱስ በርግብ አምሳል ወርዶ በራሱ ላይ በማረፍ አብ በደመና \"ይህ ልጄ ነው\" ብሎ ሲመሰክርለት ምሥጢረ ሥላሴ አንድነትና ሦስትነት በጉልህ ተረጋግጧል፡፡ /ማቴ. 3፥16/"
        },
        jordanBaptism: {
          title: "የጌታችን ጥምቀት በዮርዳኖስ",
          content: "በኢየሩሳሌም አካባቢ ብዙ ወንዞች ኩሬዎችና ሐይቆች መኖራቸው የታወቀ ነው፡፡ ጌታ ጥምቀቱን በዮርዳኖስ ያደረገው ስለዚሁ አስቀድሞ የተነገረውን ትንቢት መፈጸሙን ለማረጋገጥ ነው፡፡ \"ባሕር አይታ ሸሸች ዮርዳኖስም ወደ ኋላው ተመለሰ\" /መዝ. 113፥3/ ከዚህም ጋር ከላይ ምንጩ አንድ የሆነው ዮርዳኖስ ዝቅ ብሎ በደሴት ተከፍሎ እንደገና እንደሚገናኝ በግዝረት በቁልፈት (በመገዘርና ባለመገዘር) ተለያይተው የነበሩ ሕዝብና አሕዛብ መላው የአዳም ልጆች በጌታችን ጥምቀት አንድ መሆናቸውን የሚገልጽ ትርጉም አለው፡፡ እስራኤል ዮርዳኖስን ተሻግረው ምደረ ርስት ገብተዋል፡፡ ያመኑ የተጠመቁ ምዕመናንም በጥምቀት ገነት መንግሥተ ሰማያትን ይወርሳሉ፡፡ ሌላው በዮርዳኖስ ተጥሎ የነበረውን የዕዳ ደብዳቤ ይደመስስልን ዘንድ /ቈላ. 2፥14/"
        }
      },
      myron: {
        title: "ምሥጢረ ሜሮን",
        content: "ሜሮን ቅባት ማለት ሲሆን ለመንፈሳዊ አገልግሎት ብቻ የሚውል የተቀደሰ ቅባት ነው ። የተለያየ መዓዛ ከሚሰጡ ዕፀዋት ተቀምሞና ተነጥሮ ይዘጋጃል። <br /> በብሉይ ኪዳን ዘመን የነበሩ ካህናት የሚሾሙት ፤ ነገሥታት የሚግሡት ፤ የተቀደሰ ቅብዓ ክህነትናቅብዓ መንግሥት እየተቀቡ ነበር ። ዘፀ 28፥41 ። ዘፀ 29፥7 ፤ ዘሌ 4፥3 ። ዘሌ 6፥20 ። ዘሌ 8፥2 ። 1ሳሙ 9፥16 ። 1ሳሙ 16፥1 ። 1ነገ 1፥34። በዚህ የብሉይ ኪዳን ዘመን ካህናቱም ሆኑ ነገሥታቱ የሚቀቡት ከእስራኤል ዘሥጋ መካከል ተመርጠው የእግዚአብሔርን ህዝብ ለማገልገል ሲሆን ፤ ቅብዓ ክህነቱም ሆነ ቅብዓ መንግስቱ አገልግሎታቸውን በማስተዋልና በታማኝነት እንዲፈጽሙ የሚያተጋቸው የእግዚአብሔር ፀጋ የሚተላለፍበት መንገድ ነው ። በዚህ ዓይነት የመሪነት ቦታ የያዙ ካህናትና ነገሥታት ከእግዚአብሔር የሚሰጣቸውን ትእዛዝ በመቀበል ለእግዚአብሔር እየታዘዙና ህዝባቸውን በቅንነት እያገለገሉ አልፈዋል ።",
        newTestament: {
          title: "ቅብዓ ሜሮን በሐዲስ ኪዳን",
          content: "በብሉይ ኪዳን ለታላቅ መንፈሳዊ አገልግሎት ይውል የነበረው የተቀደሰ ቅብዓት በሐዲስ ኪዳንም መንፈሳዊ ዓላማውን ሳይለቅ አገልግሎቱ ቀጥሏል ። 1 ዮሐ 2፥17። ቅብዓ ሜሮን ከተለያዩ ዕፀዋት ከተቀመመ በኋላ በሊቀ ዻዻስና በዻዻሳት ጸሎትና ቡራኬ ይባረካል።"
        },
        service: {
          title: "የቅብዓ ሜሮን አገልግሎት",
          content: "ሐዋርያት በጸሎተ ሐሙስ ማታ በህጽበተ ዕግር አማካኝነት ተጠምቀዋል ። ዮሐ 13 ፥ 4 ። መንፈስ ቅዱስን የተቀበሉት ግን ጌታችን ባረገ በሀምሳኛው ቀን ነበር ። የሐ ሥ 2፥1 ። በሐዋርያት ዘመን የነበሩ ምዕመናንም አምነው ከተጠመቁ በኋላ እጃቸውን ሲጭኑባቸው መንፈስ ቅዱስ ይወርድላቸው ነበር ። የሐ ሥ 8፥14 ። ጌታችን ሲጠመቅ መንፈስ ቅዱስ በርግብ አምሳል በራሱ ማረፉ ከተጠመቅን በኋላ ሀብተ መንፈስ ቅዱስ እንደሚሰጠን ሲያስረዳን ነው ። ማቴ 3፥16 ። በጥምቀት የተቀበልነው መንፈስ ቅዱስም ካልካድነው በቀር ምንም ኃጢአት ብንሠራ ንስሓ እስክንገባ ይጠብቀናል እንጅ አይለየንም ። ከሐዋርያት በኋላ የተነሱ ሐዋርያውያን አበው (ሊቃነ ዻዻሳት) ከተጠማቂው ህዝብ ብዛት አንጻር ለሁሉ ለማዳረስ እንዲቻልና ለሚቀጥለው ትውልድም የቤተ ክርስቲያን መመሪያ ሆኖ እንዲያገለግል በአንብሮተ ዕድ (እጅ በመጫን) ፋንታ የሚጠመቀው ምዕመን በቅብዓ ሜሮን አማካኝነት ሀብተ መንፈስ ቅዱስ እንዲሰጥ ስለወሰኑ ከዚያ ጊዜ ጀምሮ ቤተ ክርስቲያ ከጥምቀት በኋላ ለተጠማቂው ቅብዓተ ሜሮን በመቀባት መንፈስ ቅዱስን ታድላለች ።",
          paragraph2: "የቃል ኪዳኑ ታቦት (ፅላት) ወደ ቤተ ክርስቲያን ገብቶ በመንበረ ክብሩ ላይ በመቀመጥ አገልግሎት እንዲሰጥ አስቀድሞ በዚህ በተቀደሰ ቅብዓ ሜሮን ተባርኮ መሰየም አለበት ። ተሰርቆ ወይም በሌላ ፤ ክብሩ በማይጠበቅበትና ተገቢ ባልሆነ ቦታ ቢቆይም ከተመለሰ በኋላ እንደገና መባረክ አለበት ።",
          paragraph3: "ቤተ ክርስቲያን ከታነጸ በኋላ ፤ በውስጡ ሙሉ የቤተ ክርስቲያን አገልግሎት ከመስጠቱ በፊት በቅብዓተ ሜሮን መባረክ አለበት ። በቅብዓተ ሜሮን ካልተባረከ ቤተ ክርስቲያን ሊባል አይችልም ። ከተራ አዳራሽ የሚለየው በቅብዓተ ሜሮን ሲከብርና በውስጡም የቃል ኪዳኑ ታቦት ሲኖርበት ብቻ ነውና ።"
        }
      },
      eucharist: {
        title: "ምሥጢረ ቁርባን",
        content: "ቁርባን ፤ ማለት ፣ ለእግዚአብሔር የሚቀርብ አምኃ ፣ መስዋዕት ፣ መንፈሳዊ ነገር ሁሉ ማለት ሲሆን ፤ በዚህ ትምሕርታችን ግን ፤ ስለ ሐዲስ ኪዳን መስዋዕት (የክርስቶስ ሥጋና ደም) እንማራለን ። <br /> በብሉይ ኪዳን ለሐዲስ ኪዳን ቁርባን (መስዋዕት) ምሳሌዎች <br /> የመልከ ጼዴቅ መስዋዕት ዘፍ 14 ፥ 18 ። ዕብ 5 ፥ 6 ። ዕብ 6 ፥ 1 ። ህብስቱ የሥጋው ፤ ወይኑ የደሙ ምሳሌ ፤ መልከ ጼዴቅ የክርስቶስ ፤ አብርሐም የምዕመናን ። <br /> የእስራኤል ፋሲካ ። ዘፀ 12 ፥ 1 ። ሞት የዲያብሎስ ፤ እስራኤል የምዕመናን ፤ በጉ የክርስቶስ ምሳሌ ።<br /> የእስራኤል መና ። ዘፀ 16 ፥ 13 ። መና የጌታችን ቅዱስ ሥጋና ክቡር ደም ፤ እስራኤል የምዕመናን ፤ ደመና የእመቤታችን <br /> በብሉይ ኪዳን መስዋዕት ቁርባን ያቀረቡና በረከት ያገኙ አባቶች <br /> አዳም አባታችን አዳም ባቀረበው መስዋዕት ከአምስት ሺህ አምስት መቶ ዘመን በኋላ ሰው ሆኖ እንደሚያድነው ቃል ገባለት ። ዘፍ 3 ፥ 22 ። ገላ 4 ፥ 4 ። <br /> ኖኅ ባቀረበው መስዋዕት ለኖኅና ለልጆቹ ምድርን ዳግም በመቅሰፍት እንደማያጠፋት በቀስተ ደመና ምልክት ቃል ገባላቸው ። ዘፍ 9 ፥ 1 ። ዘፍ 9 ፥ 8 ። <br /> አብርሐም ዘፍ 18 ፥ 3 ። አባታችን አብርሐም ባቀረበው መስዋዕት በዘርህ አሕዛብ ሁሉ ይባረካሉ የሚለውን የተስፋ ቃል ሰማ ፤ ያም ዘር የተባለው ለጊዜው ይስሐቅ ሲሆን፤ ፍጻሜው ግን ለጌታ ነበር ። <br /> መልከ ጼዴቅ ዘፍ 14 ፥ 17 ። መዝ 109 ፥ 4 ። ዕብ 5 ፥ 6 ። በእግዚአብሔር ፊት ባቀረበው መስዋዕት ክህነቱ ለዘለዓለም ተብሎለት የክርስቶስ ምሳሌ ሆነ ። ዕብ 7 ፥ 1 ። <br /> ዳዊት መዝ 131 ፥ 11 ። መስዋዕት ባቀረበበት ሠዓት ከአብራክህ የተገኘው ልጅህ በዙፋንህ ይነግሣል ተባለለት ፤ ይህም ለጊዜው የተነገረው ለሰሎሞን ሲሆን ፍጻሜው ለክርስቶስ ነበር ። መዝ 71 ፡1 ። ሌሎችም በእግዚአብሔር ፊት ንጹህ መስዋዕታ ቸውን እያቀረቡ በረከት ተቀብለዋል። <br />",
        newTestament: {
          title: "ምሥጢረ ቁርባን በሐዲስ ኪዳን",
          content: "በብሉይ ኪዳን ዘመን ይቀርብ የነበረው የመስዋዕት ቁርባን ፤ ከበግ ፤ ከላምና ፤ ከተለያዩ እንስሳት ነበር ። በሐዲስ ኪዳን ግን እንስሳት በቤተ መቅደስ ውስጥ መስዋዕት (ቁርባን) ሆነው አይቀርቦም መስዋዕት ሁሉ በክስቶስ ሥጋና ደም ተጠቃሏል ። <br /> ይህንም የአዲስ ኪዳን መስዋዕት የመሠረተው ራሱ ጌታችን ሲሆን ፤ በጸሎተ ሐሙስ ማታ አስራ ሁለቱ ሐዋርያት እንዳሉ በመጀመሪያ መስዋዕተ ኦሪትን ሰርቶ ካሳለፈ በኋላ ኅብስቱና ወይኑን ባርኮ \"ነገ በመስቀል ላይ የሚቆረሰው ሥጋዬና የሚፈሰው ደሜ ይህ ነው ብሉ ጠጡ ብሎ ሰጣቸው\" ። ማቴ 26 ፥ 26 ። <br /> ዛሬ ካህኑ ኅብስቱን በጻህል ወይኑን በጽዋ አድርጎ ጸሎተ ቅዳሴውን እየጸለየ.. ሲባርከው እንደዚያ ጊዜው ኅብስቱ ተለውጦ ሥጋ መለኮት ወይኑም ተለውጦ ደመ መለኮት ይሆናል ። ይህንም ቅዱስ ሥጋና ክቡር ደም በምንቀበልበት ጊዜ ለእኛ ሲል የተቀበለውን መከራና ስቃይ እያሰብን ራሳችንን በንስሓ ከኃጢአት ንጹህ አድርገን ከንስሓ የቀረውን በደላችንን እንደሚደመስ ስልን ፤ ከበደል እንደሚያነጻንና የዘለዓለም ሕይወት እንደሚሰጠን አምነን መሆን አለበት ።<br /> በ1ቆሮ 11 ፥ 23 \"ይህንም ለመታሰቢያዬ አድርጉት \" የሚለው ቃል ሥጋውንና ደሙን በምንቀበልበት ጊዜ ስለሰው ልጆች ሲል በቀራንዮ አደባባይ የተበውን መከራና በልባችን ውስጥ የተሳለውን አምላካዊ ፍቅሩን እያስታወስን እንድንኖር ነው መታሰቢያ የሚለው ቃል የሚያመለክተው የማይረሳ ነገርን ነውና ። ገላ 3፥1 <br /> ጌታችን ይህን ምሥጢር ከማሳየቱ (ከመመስረቱ) በፊት በዮሐ 6 ፥ 25-8 ። \"ሥጋዬን ካልበላችሁ ደሜንም ካልጠጣችሁ በራሳችሁ ሕይወት የላችሁም ሥጋዬን የበላ ደሜንም የጠጣ የዘለዓለም ሕይወት አለው ። ሥጋዬ እውነተኛ መብል ደሜም እውነተኛ መጠጥ (ሕይወትን የሚሰጥ) ነው \" በማለት ስለምሥጢረ ቁርባን በስፋት አስተምሯል ። <br />"
        },
        benefits: {
          title: "የቅዱስ ቁርባን ጥቅም",
          content: "ከዚህ ዓለም በሞት ብንለይም እንኳን በሰማያዊ መንግስት የማያልፈውን የዘለዓለም ሕይወት እናገኛለን ። ዮሐ 6 ፥ 54 ። <br /> ለኃጢአታችን ስርየት (ፍጹም ድኅነት) እናገኛለን ። ማቴ 26 ፥ 26 ። <br /> ከጌታችን ጋር ከቅዱሳንም ጋር ያለንን አንድነት እናረጋግጠጣለን ። 1 ቆሮ 10 ፥ 17 ። <br /> ሥጋውን በስንዴ ደሙን በወይን ያደረገበት ምክንያት ትንቢቱንና ምሳሌውን ለመፈጸም ነው <br />"
        },
        prophecy: {
          title: "ትንቢት",
          content: "በልቤ ደስታ ጨመርሁ ከስንዴ ፍሬና ከወይን ፍሬ በዛ ። መዝ 4 ፥ 7 ። ይህም ቃል እውነተኛና ፍጹም የሆነው ዘለዓለማዊ መድኃኒት ቅዱስ ቁርባን በስንዴና በወይን እንደሚደረግ ያመለክታል ። <br />"
        },
        example: {
          title: "ምሳሌ",
          content: "የክርስቶስ ምሳሌ፤ መልከ ጼዴቅ መስዋዕት የሚያቀርበው በስንዴና በወይን ስለነበረ ምሳሌውን ለመፈጸም ። ዘፍ 14 ፥ 17 ። <br />"
        },
        reason: {
          title: "ሥጋውንና ደሙን በምግብ ያደረገበት ምክንያት",
          content: "ምግብ ከሰውነት ጋር እንደሚዋሃድ ሥጋውንና ደሙን ስንቀበል በእውነት እንደሚዋሃደን ለማስረዳት። <br /> ምግብ ለሥጋችን ኃይል እንደሚሆነን ሥጋውና ደሙም ለነፍሳችን መንፈሳዊ ኃይል ይሰጠናል። <br /> አዳምና ሄዋን በምግብ የእግዚአብሔር ልጅነታቸውን እንዳስወሰዱ ፤ በቅዱስ ሥጋውና በክቡር ደሙ ልጅነታችንን ሊመልስልን ። ዘፍ 3 ፥ 1 ። ዮሐ 6 ፥ 49። <br />"
        },
        practice: {
          title: "የቅዱስ ቁርባን ልምምድ",
          content: "ቅዱስ ቁርባንን ፤ በበላችን ንስሓ ከገባን በኋላ ሁልጊዜ መቀበል ይገባናል ። የኃጢአታችን ስርየት የሚረጋገጠው በቅዱስ ቁርባን ነውና ። ማቴ 27 ፥ 27። ምዕመናን በሕይወት እስካሉ ደረስ ወንድም ይሁን ሴት ፣ ታናሽም ይሁን ታላቅ ከቅዱስ ቁርባን መለየት የለባቸውም ይህ ምሥጢር በፆታ በዕድሜ የማይገደብ ለሁሉ የተሰጠ ነውና ። ዮሐ 6 ፥ 54 ። በሰራነው ስህተት ተጸጽተን ንስሓ ሳንገባ በድፍረት ሥጋውንና ደሙን መቀበል የለብንም ፤ ይህን የሚያደርጉ ሰዎች ዕዳ አለባቸው ። 1ቆሮ 11 ፥ 27 ። የምንቀበለው ቅዱስ ቁርባን ጌታችን በቀራንዮ አደባባይ ተሰቅሎ ከዋለ በኋላ ፤ ዘጠኝ ሰዓት ሲሆን በራሱ ሥልጣን ቅድስት ነፍሱን ከቅዱስ ሥጋው ለይቷል ። ዮሐ 10 ፥ 18 ። ዮሐ 19 ፥ 30 ። በአካለ ነፍስ ወደ ሲኦል ሄዶ በዚያ የነበሩ ነፍሳትን ወደ ገነት ከመለሰ በኋላ ሶስት መዓልትና ሶስት ሌሊት በከርሠ መቃብር ከነበረው ሥጋ ጋር በፈቃዱ አዋህዶ ተነሳ ፤ በዚህ ጊዜ ውስጥ ግን(ሥጋውና ደሙ በተለያዩበት ወቅት) መለኮት ፣ ከነፍ ስም ከሥጋም ጋር አልተለየም ። 1ዼጥ ። ስለዚህ እኛ የምንቀበለው ሥጋና ደም ፤ ነፍስ የተለየችው መለኮት የተዋሃደው ነው ። 1ዼጥ 3 ፥ 18 ። <br />"
        }
      },
      repentance: {
        title: "ምሥጢረ ንስሐ",
        content: "ንስሐ ፦ ነስሐ ተፀፀተ ካለው የተገኘ ሲሆን ፤ ንስሐ ማለት በሠሩት ኃጢአት መፀፀት ፣ ማዘን ፣ ወደ እግዚአብሔር ለመመለስ መወሰን ማለት ነው። ንስሐ ከዘለዓለማዊ ፍርድ የሚያድን ፤ ዘማዊውን እንደ ድንግል ፤ ሌባውን መጽዋች የሚያደርግ በፊት ከተሠራው ኃጢአት ንጹህ አድርጎ ፤ ከእግዚአብሔር ጋር አንድ የሚያደርግ ምሥጢር ነው ። <br />",
        beforeRepentance: {
          title: "ከንስሐ በፊት",
          content: "መፀፀት <br /> አንድ ክርስቲያን በድፍረትም ይሁን በስህተት \"የሠራው በደል\" መጻሕፍት በማንበብ ፣ ከመምህራን ተምሮ ፣ የስብከት ካሴት አዳምጦ ፤ ህሊናው ወቅሶት ፣ ወይም በሌላ በአንድ ምክንያት ስህተት መሆኑን ከተረዳ በኋላ ተፀፅቶ ከእግዚ አብሔር ለመታረቅ (በደሉን ለማስተስረይ) የሚያደርገው ጉዞ ንስሐ ይባላል ። በሠራው በደል ሳይፀፀት ፤ ለጊዜው ህሊናውን ስለረበሸው ብቻ ንስሐ የሚገባ ሰው ፤ ከስሐውን በኋላ ወደ ቀደመ ሕይወቱ ሊመለስ ይችላል ። ምክንያቱም ፡ ንስሐ የገባው ፡ በሠራው በደል ከልቡ ተፀፅቶ ሳይሆን ፤ በስሜት ተነሳስቶ ነውና ፤ <br />"
        },
        hatingSin: {
          title: "ኃጢአትን መጥላት",
          content: "በበደላችን ከተፀፀትን በኋላ የሰራነውን በደል መጥላትና ወደፊትም መሥራት እንደሌለብን ራሳችንን ማሳመንና ከኃጢዓት መንገድ መራቅ ማለት ነው ። <br />"
        },
        lifeDecision: {
          title: "ከንስሐ በኋላ ስላለው ሕይወት መወሰን",
          content: "አንድ ምዕመን ንስሐ ከመግባቱ በፊት ለወደፊቱ የሚኖረውን ሕይወት አስቀ ድሞ መመርመርና መወሰን ይገባዋል የእግዚአብሔን ቃል ስንሰማ ለጊዜው ልባችን ሊነካ ፣ ምን እናድርግ ልንል እንችላለን ። የሐ ሥ 2 ፥ 37 ። ነገር ግን ከተወሰነ ጊዜ በኋላ ዓለሙን ወደመምሰል እንደማንመለስ አስቀድመን ራሳችንን መመርመር አለብን ። ብዙዎቹ በስሜት ወደ ክርስትና ከገቡ በኋላ ፤ በጊዜያዊ ነገር ተታለው በድንገት ከሃይማኖት መንገድ ወጥተዋልና ። <br />"
        },
        duringRepentance: {
          title: "በንስሐ ጊዜ",
          content: "አንድ ምዕመን ካለፈ በደሉ በንስሐ ታጥቦ በአዲስ ሕይወት ራሱን ለማስተካከልና ከእግዚአብሔር ጋር ለመኖር ከወሰነ በኋላ የንስሐ አባት ሊኖረው ይገባል ። ጌታችን \"ካህናትን\" ራሱን ወክለው መንጋውን እንዲጠብቁ \"በምድር ያሰራችሁት በሰማይ የታሰረ በምድር የፈታችሁት በሰማይ የተፈታ ይሁን\" (ማቴ 8 ፥ ዮሐ 21 ፥ 15 ። ማቴ 16 ፥ 19) በማለት መንጋውን እንዲጠብቁ ሾሟቸዋልና። አንድ ክርስቲያን በሕይወት ሲኖር ፤ የእግዚአብሔርን መንገድ የሚመራው ፤ ሲሳሳት ንስሐውን ተቀ ብሎ ቀኖና በመስጠት ከእግዚአብሔር የሚያስታርቀው የንስሐ አባት የግድ ሊኖረው ይገባል። <br />"
        },
        confessionProcess: {
          title: "ንስሐ የሚገባው ምዕመን በካህኑ ፊት በሚቀርብበት ጊዜ የሚከተሉትን ማሟላት አለበት",
          content: ""
        },
        rememberingSins: {
          title: "የሠራውን ስህተት በሙሉ ማስታወስ",
          content: "ቀኖናው የሚሰጠው እንደ በደሉ ዓይነት ስለሆነ የሠራውን ማስታወስ አለበት ፤ በቃሉ የሚረሳው ከሆነም በጽሁፍ መመዝገብ ያስልጋል ። <br />"
        },
        fullConfession: {
          title: "ሳይቀንሱ (ሳይከፍሉ) በሙሉ መናገር",
          content: "\"ይህን ብናገር ሰው ምን ይለኛል ?\" ብሎ ከባዱን (የሚያሳፍረውን) ነገር መደበቅ የለበትም። ሲሰራው ያላሳፈረውን ሲናገረው ሊያፍርበት አይገባም። አንድ ጊዜ ተናግሮ ከህሊናው ካላስወጣው ሁሌም ሲረብ ሸው ይኖራልና።\"እናንተ ሸክማችሁ የከበደ ወደ እኔ ኑ ሸክማችሁን አራግፋለሁ\" ማቴ 11 ፥ 28ተብሏልና በትክክል አስታውሶ መናዘዝና የኃጢአትን ሸክም ማራገፍ ይገባል። ስለ በደላችን በምንናዘዝበት ጊዜ ግን ፤ ከዕገሌ ጋር ፤ በዚህ ጊዜ ፤ በዚህ ቦታ ፤ ይህን አድርጌያለሁ እያልን ፤ ቦታውን ፤ ጊዜውን የሌላ ሰው ስም በዝርዝር እንድንናገር አንገደድም ፣ የሠራነውን በደል ብቻ \"ጣዖት አምልኬያለሁ ፤ ሠርቄያለሁ ፤ አመንዝሬያለሁ\" በማለት በጥቅሉ መናገር እንችላለን ። <br />"
        },
        selfAccusation: {
          title: "ኑዛዜ (ራስን መክሰስ)",
          content: "በራሳችን ድካም የሠራነውን በደል \"ዕገሌ አሳስቶኝ\" እያሉ ሌላውን ሰው ስለ እኛ ስህተት ተጠያቂ ማድረግ ሳይሆን ፣ አንደበታችንን ከሳሽ ህሊናችን ምስክር አድርገን በመጨከን ራሳችንን በእግዚአብሔር ፊት መክሰስ ነው ። አምላካችን የልባችንን መመለስ ፣ አይቶ የሰራነውን በደል ሁሉ እንዳልተሠራ አድርጎ ያነጻናል ። በደልን በንስሐ ይቅር ማለት የእግዚአብሔር የቸርነት ሥራ ነውና። <br />"
        },
        afterRepentance: {
          title: "አንድ ምዕመን ንስሐ ከገባ በኋላ የሚከተሉትን በቅደም ተከተል ማድረግ አለበት?",
          content: ""
        },
        fulfillingCanon: {
          title: "የተቀበለውን ቀኖና በትክክል መፈጸም",
          content: "ቀኖና የግሪክ ቃል ሲሆን : መለኪያ ማለት ነው ። ካህኑ ለበደለው ምዕመን እንደ ሃይማኖቱ ጽናት ፣ እንደ አእምሮው ስፋት ፤ የሠራውን በደል መጥኖ ቀኖና ከሰጠው በኋላ እንደታዘዘው መፈጸም አለበት ። የነነዌ ሰዎች ፣ ት. ዮና 3 ፥1 ። ንጉሡ ህዝቅያስ ፣ ኢሳ 38 ፥ 1 ። ቅዱስ ጴጥሮስ ሉቃ 22 ፥ 54 ። እና ሌሎችም ይቅርታን ያገኙት ፤ በበደላቸው ተጸጽተው በማልቀሳቸውና ንስሃ በመግባታቸው ነው ። በንስሐ ወቅት ፡መሬት ላይ መተኛት ምግብ መቀነስ ፣ ከዓለማዊ ነገሮችና ለመንፈሳዊ ሕይወት ከማይመቹ ጓደኞች መራቅ ያስፈልጋል ። በንስሐ ጊዜ እንዳናደርግ ከታዘዝነው ነገር ራሳችንን በመግዛት መቆጠብ አለብን ፤ እግዚአብሔር በቸርነቱ ወደ ድኅነት ከጠራን በኋላ እንደገና ተመልሰን ወደተውነው ድካማችን መመለስ የለብንም። የጊዜውን ሳይሆን የመጨረሻውን ማሰብ አለብን ። 2 ጢሞ 4 ፥10 ። መዝ 6 ፥6 ። <br />"
        },
        believingForgiveness: {
          title: "በደላችን በንስሐ እንደሚሰረይልን ማመን",
          content: "ክርስቶስ ደሙን ያፈሰሰው በደላችንን ለመደምሰስ ስለሆነ ከበደላችን ሊያነጻን የታመነ አምላክ ነው ። ከሠራነው ብዙ ኃጢአት አንጻር የሚሰጠን ቀኖና ትንሽ መስሎ ቢታየንም ። ማሰብ ያለብን የራሳችንን በደል ሳይሆን የእግዚአብሔርን ቸርነት ነው ። ከእኛ በደል የእግዚአብሔር የቸርነት ሥራው እጅግ ይበልጣልና የታዘዝነውን ፈጽመን የቀረውን እንደቸርነትህ ማለት ይገባል ። \"የታዘዛችሁትን ባደረጋችሁ ጊዜ የማንጠቅም ባሪያዎች ነን በሉ\" ተብለናልና ። ሉቃ 17 ፥ 10 ። <br />"
        },
        receivingCommunion: {
          title: "በሥጋውና በደሙ መታተም (መቁረብ)",
          content: "አንድ የተራበ ሰው እጁን ስለታጠበ ብቻ አይጠግብም ። የግድ ምግብ መብላት አለበት ። ንስሐ ማለት መታጠብ ፣ ከእድፍ (ከኃጢአት) መንጻት ማለት ሲሆን ፤ ድኅነት የሚገኘው የዘለዓለም ሕይወት የሚሰጠውን ቅዱስ ሥጋውንና ክቡር ደሙን በመቀበል ነው ። ዮሐ 6፥33 ። ብዙዎቹ መቁረብን እንደ ትርፍ ነገርና በዕድሜ የተገደበ (ለሽማግሌ ብቻ) አድርገው ስለሚቆጥሩት ለመቀበል ሲዘጋጁ አይታዩም ። ነገር ግን ክርስቲያን የሆነ ሁሉ ቅዱስ ቁርባን የግድ ያስፈልገዋል ። ቀኖና የተቀበልንበት በደላችን የሚሰረየው ሥጋውን ስንበላ ፣ ደሙንም ስንጠጣ ነውና ።"
        },
        alwaysPreparing: {
          title: "ሁሌም ለንስሐ መዘጋጀት",
          content: "ንስሐ ከገባንና ከቆርብን በኋላ እንደገና በኃጢአት ልንወድቅ እንችላለን። አምለካችን \"ለምን ንስሐ አልገባህም እንጅ ለምን ኃጢአት ሠራህ? አይልምና\" ሁለተኛ ስንበድል ሀፍረት ሳይሰማንና ከኃጢአት መላቀቅ ካልቻልሁ በየጊዜው የንስሐ አባቴን ከማስቸግር አርፌ ብቀመጥ ይሻለኛል በማለት ፡ ሁሉንም እርግፍ አድርገን እንድተወው ፡ ክፉ ሀሳብ በአምሯችን ሊፈታተነን ይችላል ። <br /> ነገር ግን ከንስሐ በኋላ እንደ መላእክት በቅድስና ብቻ እንኖራለን ማለት ሳይሆን \"ጻድቅ ሰባት ጊዜ ይወድቃል ፤ ሰባት ጊዜ ይነሳል\" ምሳ 24፥ 16 ። እንደተባለ ፡ አምላካችን ብንወድቅ ሊያነሳን ፤ ብንጠፋ ሊፈልገን ፤ ብንርቅ ሊያቀርበን ፤ በኃጢአት ብንረክስ ሊቀድሰን (እንደ ባዘቶ ሊያጠራን) የታመነ አምላክ ስለሆነ ተስፋ ሳንቆርጥ ፤ በኃጢአታችን ሳንደበቅ ፤ ዘወትር ለንስሓ መዘጋጀት አለብን። ኢሳ 1 ፥ 18 ። <br />"
        }
      },
      marriage: {
        title: "ምሥጢረ ተክሊል",
        content: "ተክሊል ከለለ ፤ ጋረደ ። ካለው የግዕዝ ግሥ የተገኘ ነው። ተክሊል ማለት ፤ መከለል ፣ መወሰን ፣ መጋረድ ፣ መለየት ፣ ማለት ሲሆን በሥርዓተ ቤተ ክርስቲያን ለሚጋቡ ምዕማናን የሚፈጸምላቸው ሥርዓት ነው። እግዚአብሔር ወንድና ሴት አድርጎ ከፈጠራቸው በኋላ ምድርን ሙሏት ብሎ አዘዛቸው።(ዘፍ 1 ፥ 27) ከዚህ ጊዜ ጀምሮ ሴትና ወንድ በጋብቻ እየተሳሰሩ ልጆችን በመውለድ መባዛት ጀመሩ ።",
        purposes: {
          title: "የጋብቻ ዓላማዎች",
          content: "ለመረዳዳት ፤ \"ሰው ብቻውን ይሆን ዘንድ አግባብ አይደለም የሚመቸውን ረዳት እንፍጠርለት ። ዘፍ 2 ፥18 ።\" ብሎ እግዚአብሔር እንደተናገረ ፤ ሰው በኑሮው ሁሉ እንዳይቸገር የውስጡን ሀሳብ የሚያካፍለው ፣ ችግሩን የሚጋራውና ራሱን የሚወክልለት የህይወት አጋሩን እየመረጠ ጋብቻ ይመሠርታል ። <br /> ለፈቃድ ፤ ሰው በባህርዩ ፍትወት (የተቃራኒ ጾታ ፍላጎት) አለበት ። ሰለሆነም በጋብቻ ተወስኖ እንዲኖርና ከፈተና እንዲጠበቅ ተፈቅዶለታል ። 1ቆሮ 7 ፥ 2-38 ። እንዲህ ዓይነቱ ጋብቻም መኝታው ንጹህ ነው ተብሏል ። ዕብ 13 ፥ 4 ። <br /> ለመባዛት ፤ ዛሬ በዓለማችን የምናየው የሕዝብ ቁጥር የተጀመረው በአንድ አዳምና በአንዲት ሄዋን ከተመሠረተ ህጋዊ ጋብቻ ነው ። ብዙ ተባዙ ምድርንም ሙሏት ብሎ የተናገረውና የፈቀደው እግዚአብሔር ስለሆነ እሰከ ዓለም ፍጻሜ ድረስ በዚሁ መንገድ ልጆች ይወለዳሉ ። ዘፍ 1 ፥ 27 ። <br />"
        },
        beforeMarriage: {
          title: "ከጋብቻ በፊት",
          content: "የተጋቢዎቹ ስምምነትአስቀድመው በጋብቻው ሁለቱም ተጋቢዎች መተወዋቅ መስማማትና መወሰን አለባ- ቸው ። ትዳርን ያህል ታላቅ ነገር በሌሎች ግፊትና ትእዛዝ መወሰን የለበትም ። እጮኛሞች ሲተዋወቁም በስህተት ውስጥ ወድቀው ሃይማኖታቸውን እንዳያስነቅፉ ግንኙነታቸው ከዓለማውያን ሰዎች ልዩ መሆኑን መዘንጋት የለባቸውም ። በመጠናናትም ጊዜ ማለፍ የለበትም ጊዜ በረዘመ ቁጥር ሃሳብ ይለዋወጣልና ። <br /> የሃይማኖት አንድነት ፤ለጊዜው ቀላል መስሎ የሚታየው የሃይማኖት ጉዳይ ፣ በኋላ ለመፍታት አስቸጋሪ ሊሆን ይችላል ። በአንድ ሃይማኖት የሚያምኑና ሥርዓቱን ጠብቀው የተጋቡ ከሆኑ ግን እንደ አንድ ያስባሉ ሳይነጋገሩም በሀሳብ ይስማማሉ ፣ ይተሳሰባሉ….. ። በእርግጥ የሌላ እምነት ተከታይ የሆነውን አስተምሮ አሳምኖ ማግባት ይፈቀዳል ። ነገር ግን እሰብካለሁ ሲሉ መሰበክ እንዳይመጣ ጥንቃቄ ያስፈልጋል ። <br /> የአእምሮና የአካል ብስለት ፤ እንደ ቤተ ክርስቲያ ትምሕርት የጋብቻ ዕድሜ ፣ ሴት ከአሥራ አምስት ፤ ወንድ ከሃያ ዓመት ጀምሮ ባለው የዕድሜ ክልል ውስጥ ሲሆን ፤ የአእምሮ ዝግጅት ማለትም ፤ ከሃይማኖት አንጻር ፡ ስለ ትዳር መማርና መረዳት ፣ ከትዳር በኋላ ስለሚኖረው ህይወት ግንዛቤ ማግኘት ፣ ከጋብቻ በኋላ ከትዳር ጓደኛው የሚቀርበው ሰው እንደሌለ ማወቅ ፣ ራስን ለትዳር ጓደኛ አሳልፎ ለመስጠት መወሰንና ወደፊት ሊከሰቱ የሚችሉ ችግሮችን በትዕግሥት ለማሳለፍ መዘጋጀት ናቸው ። <br />"
        },
        duringMarriage: {
          title: "በጋብቻ ጊዜ",
          content: "በውሳኔ መጽናት ፤ የሁለቱም ወገን ዘመዶችና ጓደኞች የራሳቸው ፍላጎት እንዲሆንላቸው በማሰብ ፤ ስለ ሠርጉ ፕሮግራም በማውጣት ከቤተ ክርስቲያን ውጭ እንዲደረግ ፣ ወይም ደግሞ በሁለቱም በቤተ ክርስቲያንም (በሥርዓተ ተክሊል እንዲፈጸም በመዘምራን እንዲታጀቡ) እንደገናም ፤ በዓለማዊ ሠርግ (በቬሎ እንዲወጡ ፣ በባንድ እንዲታጀቡ) በማዋከብ ግራ ሊያጋቡ ይችላሉ ። ነገር ግን የሚጋቡት አጃቢዎቹ ስላልሆኑ ፣ መወሰን ያለበት በሙሽሮቹ ነው ። ሙሽሮቹም በውሳኔያቸው መጽናት አለባቸው ። በውስጣቸው ያልተቆረጠ ዓለማዊ ፍላጎት ስላላቸውና ከእግዚአብሔር ቃል ይልቅ ለቤተሰቦቻቸው ምክርና ትእዛዝ ክብር በመስጠት ሠርጉ የተደበላለቀና ቅጥ ያጣ ፤ ብዙ ሰዎችንም የሚያሰናክል ሊሆን አይገባም ። <br /> ጋብቻው በቅዱስ ቁርባን መሆን አለበት ፤ሥርዓተ ተክሊል የሚፈጸምላቸው የሥጋ ድንግልና ላላቸው ሲሆን ሌሎችም ክርስቲያኖች ጋብቻቸውን በቅዱስ ቁርባን ማድረግ ይችላሉ ። ክርስቲያናዊ ጋብቻ ያለ ቅዱስ ቁርባን አይደረግም ። አንዳንድ ሰዎች ፤ ለፎቶ ግራፍና ለቪዲዮ ሲሉ ብቻ ፣ ጋብቻቸውን በሥርዓተ ተክሊል ለማድረግ ያስባሉ ፣ ይህ ተገቢ ስላልሆነ አስቀድመው ስለ ጋብቻ ትምህርት በሚገባ መማርና ምርጫቸውን ከወዲሁ ማስተካከል ይገባቸዋል ። <br />"
        },
        afterMarriage: {
          title: "ከጋብቻ በኋላ",
          content: "ስምምነቱ ተጠብቆለት ሳይሆን በተፈጥሮ ህግ ነው ። እናትና አባቱን ይቀበላል እንጅ ለመቀበል ድርድር ውስጥ አይገባም ። ከእኛ በፊት የተደረጉ ነገሮችን በሙሉ አምነን እንድንቀበል ተፈጥሮ ያስገድደናል ። ትዳር ግን ተስማምቶ ወዶና ፈርሞ የሚገባበት ዘላቂ ሕይወት ስለሆነ ስምምነቱ እስከ ሕይወት ፍጻሜ የጸና ነው ። \"ሰው እናትና አባቱን ይተዋል ወደ ሚስቱም ይጣበቃል ሁለቱም አንድ ይሆናሉ\" ። ዘፍ 2 ፥ 24 ። ማቴ 19፥4 ። ባለው አምላካዊ ቃል መሠረት በትዳራቸው ውስጥ ማንም ሊገባ አይፈቀድለትም ። <br /> ወላጆችም ቢሆኑ ልጆቻቸው ባይስማሙ ያስታርቃሉ ይመክራሉ እንጅ ለእነሱ ስላልተስማማቸውና ግላዊ ጥቅማቸው ስለቀረባቸው ብቻ ፍታት ፍቺው እያሉ የልጆቻቸውን ትዳር መበጥበጥ የለባቸውም የብዙዎች ትዳር የሚበተነው በቤተሰብ ጣልቃ ገብነት በመሆኑ ባለትዳሮች ይህን ጉዳይ አስቀድመው ሊረዱት ይገባል:: ባልና ሚስት አንድ ስለሆኑ በመካከላቸው ሁለትነት መታየት የለበትም ፤ ሰው ከቤተ ሰቡ ጋር የተዛመደው"
        }
      },
      divorce: {
        title: "ፍቺ የሚፈቅድባቸው ምክንያቶች",
        content: "",
        reasons: {
          title: "ፍቺ የሚፈቅድባቸው ምክንያቶች",
          content: ""
        },
        death: {
          title: "ሞት",
          content: "ከሁለቱ አንዳቸው በሞት ቢለዩ በሕይወት የቀረው ሌላ እንዲያገባ ተፈቅዶለታል ። ነገር ግን ጋብቻው በአንድ ሃይማኖት ከሚኖሩና በቅዱስ ቁርባን መሆን አለበት ። ሮሜ 7፥ 2 ። 1 ቆሮ 7 ፥ 39 ። <br />"
        },
        adultery: {
          title: "ዝሙት",
          content: "ከሁለቱ አንዳቸው በዝሙት ከወደቁ እና ከጥፋታቸውም መታረም ካልቻሉ ፤ ንጹሁ ሰው ትዳሩን መፍታት ይችላል ። ነገር ግን ወሬ በመስማትና በጥርጣሬ መሆን አለበት ። ማቴ 5 ፥ 32 ። የቤትን ገመና ለውጭ ማውራት ነገረ ሰሪ የሆኑ ሰዎችን ሊያስገባ ይችላልና መጠንቀቅ ያስፈልጋል ። የትዳር መሠረቱ በእውነት መግባባትና መተማመን ስለሆነ በሁኔታዎች መጠራጠርና መጨቃጨቅ አያስፈልግም ። <br /> በዝሙት ኃጢአት የወደቀ የትዳር ጓደኛውም ከስህተቱ ተመልሶ ንስሐ ከገባና ይቅርታ ከጠየቀ ፤ እንደ በፊቱ በትዳራቸው መቀጠል ይችላሉ ። ባልና ሚስት በትዳራቸው በሚኖረው ማንኛውም ዓይነት ኑሮ በመመካከርና በመወያየት መወሰን አለባቸው ። ትዳር ፡ የሁለቱም የጋራ ሕይወት ስለሆነ ፤ መመሪያ አውጪና ተቀባይ መሆን የለባቸውም ። ገቢያቸውም ሆነ ወጪያቸው በጋራ መወሰን አለበት ። ትዳሩ እውነት የሚሆነው እነዚህ ሲሟሉ ነውና ። <br /> የባለትዳሮችን አንድነት የበለጠ የሚያረጋግጡት የሚወልዷቸው ልጆች ናቸው ልጆች የሁለቱም እኩል ሀብቶች ስለሆኑ ያቀራርቧቸዋል ። ትዳራቸውንም ማክበር ያለባቸው የሚወዷቸው ልጆቻቸው እንዳይበታተ-ኑባቸው በማሰብ ጭምር መሆን አለበት ። በመካንነት ምክንያት መውለድ ያልቻሉት ባለትዳሮችም እግዚአብሔር ለእነሱ የወሰነላቸው የተሻለ መሆ ኑን በማሰብ ማመስገን ይገባቸዋል እንጅ በአምላክ ሥራ ገብተው ማማረር አይገባቸውም ። የተወለደውም ቢሆን ካልተባረከ ሊሞት ወይም መጥፎ ልጅ ሊሆን ይችላል ። እግዚአብሔር አውቆ ያደረገውን አምላካዊ ጥበብ ባለማወቅና ያሰቡት ስላልተሳ ካላቸው ብቻ ራሳቸውን የተረገመ አድርገው መቁጠር የለባቸውም እግዚአብሔር ያደረገው ሁሉ ለበጎ ነው ብሎ መቀበል ይገ ባል ። ገና ከማያውቋቸውና ካልተወለዱ ልጆች ይልቅ የሚወዱትና ከእግዚአብሔር አደራ የተቀበሉት የትዳር አጋራቸው እን ደሚበልጥባቸውም በማስተዋል ማሰብ ይገባቸዋል። (ዘፍ 30 ፥ 1) <br />"
        }
      },
      priesthood: {
        title: "ምሥጢረ ክህነት",
        content: "ካህን ፦ ተክህነ አገለገለ ። ካለው የግዕዝ ቃል የተገኘ ሲሆን ፤ ካህን ማለት የእግዚአብሔር አገልጋይ ፤ የምዕመናን አባት ፤ ጠባቂ ፤ መጋቢ ማለት ነው ። <br />",
        oldTestament: {
          title: "ምሥጢረ ክህነት በብሉይ ኪዳን",
          content: "የክህነት አንዱ መገለጫው መስዋዕት ማቅረብ ሲሆን ፤ ለመጀመሪያ ጊዜ ለዚህ አገልግሎት የተመረጠውና ካህን ተብሎ የተጠራው መልከ ጼዴቅ ነው ። ዘፍ 14፥18 ። በኋላም እግዚአብሔር በቃል ኪዳኑ ታቦት ፊት በቤተ መቅደስ እግዚአብሔርን የሚያገለግል የሕዝቡን ኃጢአት እየተቀበለ ከእግዚአብሔር የሚያስታርቅ ካህን እንዲመርጥ ሙሴን ስላዘዘው ከመልከ ጼዴቅ በኋላ አሮን ተሾመ ። <br /> ከአሮን እስከ ዮሐንስ መጥምቅ ደረስ ረጅሙን የብሉይ ኪዳን ዘመን ከአሮን ዘር ብቻ የሚወለዱት ቅብዓ ክህነት እየተቀቡ በካህንነት እያገለገሉ አልፈዋል ። <br /> ነገር ግን በዘር ሐረግ ላይ የተመሠረተው ክህነት ለሐዲስ ኪዳኑ ክህነት ምሳሌ ስለነበረ ፍፁምና ዘላቂ አልነበረምና መስዋዕቱም ሆነ የአመራረጡ ሂደት በሌላ ተተካ ። <br /> ዘላቂ ያልሆነበትና በሌላ የተተካበት ምክንያት ክህነቱ በዘር ብቻ የተገደበ ስለነበረ በሐዲስ ኪዳን ህጉንና ሥርዓቱን አሟልቶ ለተገኘ ለማንኛውም ሕዝብ የተፈቀደ ሆነ ። ክርስቶስ የመጣው ለዓለም ሁሉ ነውና ። <br /> መስዋዕታቸው ፍጹም ድኅነት የማያሰጥ በመሆኑ በክርስቶስ ሥጋና ደም ተተካ ። ዮሐ 6 ፥ 32 ። <br /> አገልግሎቱ ለጊዜው ከሥጋ መቅሰፍት ከማዳን ያላለፈ ነበረ ፤ በሐዲስ ኪዳን ግን በምድርም በሰማይም ማሰር በሚችሉ ፣ በነፍስም በስጋም ላይ ሥልጣን ባላቸው ካህናት ተተካ ። ማቴ 18 ፥ 18 ። <br />"
        },
        newTestament: {
          title: "ምሥጢረ ክህነት በሐዲስ ኪዳን",
          content: "በብሉይ ኪዳን የመጨረሻው ካህን መጥምቀ መለኮት ቅዱስ ዮሐንስ ሲሆን ፤ ከእሱ በኋላ የብሉይ ኪዳን ክህነት አልፏል ። ጌታችን ወደ ዮርዳኖስ ሄዶ በዮሐንስ እጅ በመጠመቅ ፡ ካህኑ በሚገኝበት ቦታ ቤተ ክርስቲያን ድረስ ሄደን በካህኑ እጅ መጠመቅ እንዳለብን አስተምሮናል ። ማቴ 3 ፥13 ። <br /> ጌታችን ሲያስተምር ስለ ካህናት በብዙ ቦታ ተናግሯል ። ሂድና ራስህን ለካህን አሳይ ። ማቴ 8 ፥ 4 ። አንተ ብፁዕ ነህ ፡ የመንግስተ ሰማያትንም መክፈቻ እሰጥሃለሁ… ። ማቴ 16 ፥ 17 ። እውነት እላችኋለሁ በምድር ያሰራችሁት በሰማይ የታሰረ ፣ በምድር የፈታችሁት በሰማይ የተፈታ ይሆናል ። ማቴ 18 ፥ 18 ። ይህን የተናገረው በመዋዕለ ስብከቱ ሲሆን ከሙታን ከተነሳ በኋላም ለሐዋርያት አረጋግጦላቸዋል ። ሂዱና በአብ በወልድና በመንፈስ ቅዱስ ስም አጥምቋቸው ። ማቴ 28 ፥ 19 ።..እፍ አለባቸውና መንፈስ ቅዱስን ተቀበሉ ። ዮሐ 20 ፥ 22 ። በመጨረሻም ቅዱስ ዼጥሮስን \"….ስምዖን ሆይ በጎቼን ጠብቅ ፤ (ለጊዜው አስራ ሁለቱን ሐዋርያት ፡ ለፍጻሜው ወላጆችን) ፣ ጠቦቶቼን ጠብቅ ፤ (ለጊዜው ሰብዓ አርድዕትን ፡ ለፍጻሜው ወጣቶችን) ፣ ግልገሎቼን ጠብቅ (ለጊዜው ሰላሳ ስድስቱ ቅዱሳት አንስትን ፡ ለፍጻሜው ህጻናትን)\" በማለት ሐዋርያትን ዸዸሳት ፣ ቅዱስ ዼጥሮስን የመጀመሪያ ሊቀ ዻዻሳት አድርጎ ሾመው ። ዮሐ 21 ፥ 15 ። ከዚህ ጊዜ ጀምሮ ቤተ ክርስቲያን በሊቀ ዸዸስና በዸዸሳት በሚመራ መንፈሳዊ ጉባኤ (ቅዱስ ሲኖዶስ) አማካኝነት እየተመራች አገልግሎቷን ታካሂዳለች ። <br />"
        },
        levels: {
          title: "የክህነት ደረጃዎች",
          content: ""
        },
        patriarch: {
          title: "ሊቀ ዻሳሳት",
          content: "ሊቃነ ዸሳሳት \"ፓትርያርክ\" እየተባለም ይጠራል ። በአንዲት ቤተ ክርስቲያን (በአንድ ሲኖዶስ) ላይ የበላይ ሆኖ የሁሉም አባት ነው ። የሐዋ ሥራ 20 ፥ 28 ። በሕዝብና በካህናት ከተመረጠ በኋላ በዻሳሳት ይሾማል ። ፍት ነገ 5 ። ረስጣ 2 ። ፓትርያርክ ያወገዘውን ዻዻስ አይፈታውም ። መንፈሳዊ ሥልጣኑ ከሁሉም በላይ ነውና። (ሲኖ 51) ፓትርያርክ በመላዋ ቤተ ክርስቲያን በጸሎት ጊዜ ስሙ ይጠራል ። <br />"
        },
        bishop: {
          title: "ኤዺስ ቆዾስ",
          content: "ዻዻስ በአንድ ሀገረ ስብከት አባት ሆኖ የሚሾም ነው ። ሲያገለግል በነበረበት አካባቢ ባሉ ምዕመናን ጥቆማና ድምጽ በርዕሰ ሊቃነ ዻሳሳቱና በሲኖዶስ ፈቃድ ይሾማል። (ፍት ነገ 5 : አብጥ 2) በአንድ ዻ ዻስ ብቻ አይሾምም። (ፍት ነገ 5 : ረስ 58 : ዲድ 34) ዻዻስ በሀገረ ስብከቱ በጸሎት ጊዜ ስሙ ይጠራል። (ፍት 5 : ክፍ 4) አዲስ ጽላት ፣ አዲስ ቤተ ክርስቲያን ፣ ይባርካል ። ለቄስ ለዲያቆን ሥልጣነ ክህነት ይሰጣል ። (1 ጢሞ 5 ፥ 2 : ፍት ነገ አን 5 ክፍ 4 ) <br />"
        },
        deacons: {
          title: "ዲያቆናት",
          content: "ዲያቆናት ካህናትን የሚራዱና የሚላላኩ ሲሆኑ ፤ በአገልግሎታቸው መሠረት የሚከተሉት ደረጃዎች አሏቸው <br />"
        },
        deacon: {
          title: "ዲያቆን",
          content: "አስቀድሞ ሃይማኖቱን የተረዳ ፣ በምዕመናን ዘንድ በግብረ ገብነቱ የታወቀና የተመሰከረለት ፣ ለዲቁና አገልግሎት የሚያበቃውን ትምህርት ጠንቅቆ የተማረ ፤ ሆኖ ሲገኝ በአንብሮተ ዕድ (እጅ በመጫን) ይሾማል ። የተለየ ብቃትና ችሎታ ከሌለው በቀር ዕድሜው ከሃያ አምስት ዓመት በታች የሆነ ዲቁና አይሾምም ። ዲያቆን ከመጀመሪያ (ከህግ) ሚስቱ ከተፋታና ሌላ ካገባ ፣ ሃይማኖቱን ለውጦ በመናፍቃን ከተጠመቀ ፣ ከክህነቱ ይሻራል ። ፍት ነገ ፡ 7 ። ክፍል ፡ 5 ። ዲያቆናት መቅደስ ይገባሉ ፤ ነገር ግን መንበርና ታቦት ፣ (ከተለወጠ በኋላ) ሥጋውንና ደሙን በእጃቸው አይነኩም ። ዲያቆናት ለተልእኮ የሚፋጠኑ ፣ በትህትና የሚላላኩ ፣ በኑሯቸው ለሌላው አርአያ መሆን ይገባቸዋል ። <br />"
        },
        subDeacon: {
          title: "ንፍቀ ዲያቆን",
          content: "የዲያቆን ረዳት ሲሆን ፤ መንፈሳዊ ሕይወቱ ፣ ግብረ ገብነቱና የሃይማኖቱ ጽናት በሚያገለግልበት አጥቢያ ካህናትና ምዕመናን የተመሠከረለት ። ፍት ነገ 8 ። ንፍቀ ዲያቆን በቃል ብቻ ይሾማል ፤ አንብሮተ ዕድ \"እጅ በማጫን\" አይደረግለትም ። ፍ ነ 8 ክፍ 2 ። የዲያቆን ረዳት እንደመሆኑ መጠን በሥራው ሁሉ ያግዘዋል እንጅ ንዋየ ቅድሳት አይነካም ። ፍት ነገ 8 ። ዶክ 45 ፣ 46 ። ጥፋት ሠርቶ ከተገኘ ከክህነቱ ይሻራል ። ፍት ነገ ፡ 8 ፡ ክፍል ፡ 4 ። <br />"
        },
        anagnostis: {
          title: "አናጉንስጢስ",
          content: "አገልግሎቱ በቤተ ክርስቲያን ውስጥ መጻሕፍት ማንበብ ሲሆን ፤ ትምህርቱና በግብረ ገብነቱ ከታየ በኋላ ተመ ርጦ ይሾማል ። ፍት ነገ 8 ክፍል1 ። አናጉንስጢስ አንብሮተ ዕድ አይደረግለትም በቃል ብቻ ይሾማል ። ፍት ነገ 8 ፡ ክፍ ፡ 2 ። በአገልግሎት ጊዜ ዲያቆናት በቅዳሴ ሠዓት የሚለብሱትን ልብሰ ተክህኖ አይለብስም ። ፍት ነገ 8 ፡ ክፍ 3 ። አናጉንስጢስ ጥፋት ከተገኘበት ከሥራ ታግዶ ከዓመት በኋላ ይመለሳል ። ከጥፋቱ ካልታረመ ከአገልግሎቱ ይሻራል ። ፍት 8 ክፍል 4 ። ሚስቱ ከሞተችበት ሌላ አግብቶ ማገልገል ይችላል ። ፍት ፡ 4 ፡ ክ ፡ 5 ። <br />"
        },
        singers: {
          title: "መዘምራን",
          content: "በቡራኬ ይሾማሉ ። ፍ ነገ ፡ 8 ክፍ ፡ 2 ። ከመዝሙረ ዳዊት ፣ በሀገራችን የቅዱስ ያሬድን ዝማሬም ይዘምራሉ ። በሚዘምሩበት ጊዜ ልብሰ ተክህኖ አይለብሱም ። ፍት ገነ ፡ 8 ክፍ ፡ 3 ። መዘምራን ሚስታቸው ከሞተችባቸው ሌላ ማግባት ይችላሉ ። ፍት ነገ ፡ 8 ክ ፡ 5 ። በሀገራችን መዘምራን ማለት የማኅሌት ትምህርት የተማሩትን ሲሆን ፤ እነዚህም ሥልጣነ ክህነት (ዲቁና ቅስና ፣ ከዚያም በላይ) ካላቸው በሁለቱም (በማኅሌትም በክህነታቸውም) ማገልገል ይችላሉ ። <br />"
        },
        doorKeeper: {
          title: "አጻዌ ኆኅት",
          content: "በቃል ብቻ ይሾማል አገልግሎቱ በር መክፈትና መዝጋት ሲሆን ልብሰ ተክህኖ አይለብስም ። ፍት ነገ 8 ፡ ክፍ ፡ 3 ። ሚስቱ ከሞተችበት ሌላ አግብቶ ማገልገል ይችላል ። ፍት ነገ ፡ 8 ፡ ክፍ ፡ 3 ። <br />"
        },
        womenDeacons: {
          title: "ሴቶች ዲያቆናውያት",
          content: "በትዳር ተወስነው የኖሩ ፣ ልጆቻቸውን በሥርዓት ያሳደጉ ፣ በቅዱስ ቁርባን የተወሰኑ ፣ ለአገልግሎት የ ሚፋጠኑ ፣ 8 ዓመት የሆናቸው ፤ ዲያቆዊት ሆነው በቃል ይሾማሉ ። 1 ጢሞ 5 ፥ 9 ። ፍት ፡ ነ 8 ፡1 ። ዲድ 17 ።አገልግሎታቸው <br /> ከካህናቱ ወደ ሴቶች ይላላካሉ ፤ ሴቶች ክርስትና ሲነሱ ፤ ካህኑ እጃቸውን ይዞ ከአንገተችው በታች ቅብዓ ሜሮን ይቀባሉ ። <br /> አይባርኩም ፤ ቄስና ዲያቆን የሚሠራውን የክህነት ሥራ አይሠሩም በሴቶች በር ቆመው ይቆጣጠራሉ ። <br /> እንደ ዲያቆኑ ተንሥኡ ጸልዩ አይሉም ቅስና አይሾሙም ጉባዔ በጸሎት አይከፍቱም ። (ፍነ 8 ክፍ 1) <br /> እነዚህም ፤ ፈቃደ እግዚአብሔር ሆኖ ከሌላው ምዕመን ተለይተው እነሱ ወደ ቤተክርስቲያን ስለቀረቡ ፤ ምዕመናን በሥጋ ድካም ቢሳሳቱ ፤ ከሚያገለግሉት ጓደኞቻቸው መካከልም የተሳሳተ ወንድማቸው ቢኖር ሊመክሩት ፤ ሊያጽናኑት ይገባል እንጅ ፤ የራሳቸውን ጽድቅ የወንድማቸውን ስህተት እያወሩ ፤ ለሚድኑት መሰናክል መሆን የለባቸውም። (ሉቃ 18 ፥ 9) <br />"
        }
      },
      holyOil: {
        title: "ምሥጢረ ቀንዲል",
        content: "ቀንዲል (ቅብዓ ቅዱስ) በመጽሐፍ ቅዱስ ዘይት እተተባለ ይጠራል። የሚጋጀውም ከንጹህ ወይራ ዘይት ሲሆን ፤ ህሙማነ ሥጋና ህሙማነ ነፍስ እየተቀቡ የሚፈወሱበት የተቀደሰ ቅባት ነው ። <br /> በዚህም የተቀደሰ ቅባት በብሉይ ኪዳን ዘመን የነበሩ ሰዎች በሚታመሙ ጊዜ ፡ እየተቀቡ ይፈወሱበት ነበር ። ኢሳ 1 ፥ 6 ። ሉቃ 10 ፥ 34 ። <br /> በሐዲስ ኪዳንም ሐዋርያት ህሙማነ ሥጋንና ህሙማነ ነፍስን ቅብዓ ቅዱስ እየቀቡ ከነበረባቸው ደዌ ፈውሰዋቸዋል ። ማር 6 ፥ 13 ። በቀጣይም ፡ ምዕመናን በሚታመሙበት ጊዜ ፤ ካህናት እንዲጸልዩላቸውና ቅብዓ ቅዱስ ቀብተው እንዲፈውሷቸው ታዝዘዋል። (ያዕ 5 ፥ 14) <br />",
        benefits: {
          title: "የቅብዓ ቅዱስ ጥቅም",
          content: "ቅብዓ ቅዱስ በማንኛውም ዓይነት በሽታ በተለይ በቁስል ለተመቱና ጆሯቸው ለታመመባቸው ሰዎች ፤ እንዲሁም ደዌ ነፍስ ላደረባቸውና ረድኤተ እግዚአብሔር አጋዥ እንዲሆናቸው ፣ ከኃጢአታቸውም እንዲነጹ የፈለጉ ምዕመናን ፤ ካህኑ ጸሎተ ቀንዲል ጸልዮ በሚቀባቸው ጊዜ ከነበረባቸው የሥጋና በሽታና የነፍስ ደዌ (ኃጢአት) ይፈወሳሉ ። ነገር ግን በሚቀቡበት ጊዜ እግዚአብሔር በዚህ የተቀደሰ (ዘይት) ቅብዓ ቅዱስ ላይ አድሮ ካደረባቸው ደዌ ፡እንደሚያድናቸው በፍጹም ልባቸው ማመን አለባቸው ። <br /> ቅብዓ ቅዱስ የሚቀቡ ፤ አምነው የተጠመቁ ክርስቲያኖች ሲሆኑ ፤ ከመቀበቀታቸው በፊት ንስሐ መግባትና ራሳቸውን መቀደስ አለባቸው ። ሥርዓቱ የሚፈጸመው በካህናት ሲሆን ፤ በመጀመሪያ ጸሎቱ ቤተ ክርስቲያን ወይም ታማሚው በተኛበት ቦታ ዙሪያ ፡ ያም ባይሆን በካህኑ ጸሎት ቤት ከተጸለየበት በኋላ የታመመው (የቆሰለው) ቦታ ላይ ይቀባል ። <br /> <br /> <a href=\"https://kidanemihiret.org/sermon-topic/%E1%88%B0%E1%89%A3%E1%89%B1-%E1%88%9D%E1%88%B5%E1%8C%A2%E1%88%AB%E1%89%B0-%E1%89%A4%E1%89%B0%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/\">ምንጭ፥ https://kidanemihiret.org/sermon-topic</a>"
        }
      }
    },
    holyBible: {
      title: "መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን",
      table: {
        bookType: "የመጻህፍቱ አይነት",
        content: "የመጻህፍቱ ይዘት",
        law: "የህግ",
        history: "የታሪክ",
        wisdom: "የጥበብ",
        prophecy: "የትንቢት",
        asra: "አስራዉ",
        awalde: "አዋልድ",
        lawBooks: {
          pentateuch: "ብሐሄረ ኦሪት",
          samuel: "መጽሃፈ ሳሙኤል",
          psalms: "መዝሙረ ዳዊት",
          isaiah: "ትንቢተ ኢሳያስ"
        },
        historyBooks: {
          kings: "ፍትሃ ነገስት",
          mary: "ተአምረ ማርያም",
          maryPraise: "ዉዳሴ ማርያም",
          jesus: "ፍካሬ ኢየሱስ"
        }
      },
      content: {
        paragraph1: "ቅድስት ቤተ ክርስቲያን በሐዋርያትና በነቢያት መሠረት ላይ የታነፀች፣ ከሁሉ በላይ የሆነች አንዲትና ቅድስት አካለ ክርስቶስ ናት (ኤፌ. ፩፥፳፪፤ ኤፌ. ፪፥፳)፡፡ ‹‹ከሁሉ በላይ የሆነች›› የሚለው ሐረግ ሰማያዊ ሥልጣኗን እና ልዕልናዋን የሚገልጽ ነው፡፡ ይህም ማለት የትኛውም ቅዱስ መጽሐፍ ወይም ንዋይ በእርሷ ውስጥ ይሆናል እንጂ ከበላይዋ ሊሆን አይችልም ማለት ነው፡፡ መጽሐፍ ቅዱስም እግዚአብሔር ለቤተ ክርስቲያን የገለጸውን እውነት የያዘ እንጂ ከቤተ ክርስቲያን በላይ አይደለም፡፡ ምክንያቱም ቤተ ክርስቲያን የክርስቶስ አካል ስለሆነች ከክርስቶስ አካልነት በላይ የሆነ ስለሌለ ነው፡፡ ከቤተ ክርስቲያን በላይ ያለ የቤተ ክርስቲያን ራስ ክርስቶስ ብቻ ነው (ቆላ. ፩፥፲፰)፡፡ መጽሐፍ ቅዱስ የመጻሕፍት ሁሉ ራስ ሲሆን ቤተ ክርስቲያን ደግሞ የመጽሐፍ ባለቤት ናት፡፡",
        paragraph2: "መጽሐፍ ቅዱስ በሰዎች ቋንቋ የተጻፈ የእግዚአብሔር ቃል ነው፡፡ የተጻፈውም በመንፈስ ቅዱስ ምሪት ነው፡፡ ጸሓፊዎቹ ደግሞ የቤተ ክርስቲያን አባቶች ናቸው፡፡ በቅድስናቸው ለእግዚአብሔር ቅሩባን ስለሆኑ የእግዚአብሔር ቃል ለሚላክላቸው አብያተ ክርስቲያናት በሚገባቸው ቋንቋ ጽፈዋል፡፡ መጻፋቸውም የእነርሱን ክብር ለመግለጽና ቤተ ክርስቲያን የምትመራበትን ሕግ ለመደንገግ ሳይሆን ቤተ ክረስቲያን የምታምነውን እምነት ለመመስከርና በመንፈሳዊ ሕይወት ውጣ ውረድ ውስጥ ያሉ ምእመናን እንዲመከሩበት፣ እንዲገሠጹበት፣ ልባቸውን እንዲያቀኑበት ነው፡፡ ስለዚህ መጽሐፍ ቅዱስ እግዚአብሔር ለቤተ ክርስቲያን የገለጠውን እውነትና ቤተ ክርስቲያን ስለ እግዚአብሔር የምታምነውን እምነት የያዘ እንጂ የቤተ ክርስቲያን ሥርዓት ተሰፍሮና ተቈጠይሮ ሁሉ ነገር የተካተተበት ማለት አለመሆኑን መረዳት ይገባል፡፡",
        paragraph3: "ቤተ ክርስቲያን በማየት፣ በማድረግ፣ በቃል የሚተላለፍ ብዙ ሀብት አላት፡፡ እንዲያውም የተጻፈው በጣም ጥቂቱ ነው፡፡ ሆኖም በአንዳንድ የእምነት ድርጅቶች ዘንድ ነገረ ቤተ ክርስቲያንን በሙሉ ጠቅልሎ በመጽሐፍ ሥር የማድረግ የተሳሳተ አካሔድ አለ፡፡ ይህም በሉተራውያን ዘንድ \"Sola Scriptura\" ወይም \"Only Bible\" (መጽሐፍ ቅዱስ ብቻ) ተብሎ የሚታወቀው ሲሆን ያልተጻፈው ቅዱስ ትውፊትም ሆነ መጽሐፍ ቅዱስ የማይደግፈው ግለሰባዊ አሳብ እንጂ የቤተ ክርስቲያን ትምህርት አይደለም፡፡ የዚህ ጽሑፍ ዓላማ ቤተ ክርስቲያን ቅዱሳት መጻሕፍትን የምትቀበልበትን ሃይማኖታዊ እይታ በግልጽ ማሳየት ነው፡፡",
        paragraph4: "የቅዱሳት መጻሕፍት ጥንተ ታሪክ",
        ancientHistory: "የቅዱሳት መጻሕፍት ጥንተ ታሪክ",
        paragraph5: "ፈጣሬ ኵሉ ዓለም እግዚአብሔር ከፈጠራቸው ፍጥረታት ሁሉ እጅግ አክብሮ የፈጠረው የሰው ልጅን ነው፡፡ ሊቃውንተ ቤተ ክርስቲያን ይህን ክብሩን ሲገልጹ ሰውን \"የፍጥረታት አክሊል – The Crown of Creation\" ብለው ይጠሩታል፡፡ የፍጥረታት አክሊልነቱም በእግዚአብሔር አርአያና ምሳሌ መፈጠሩ፣ ፍጥረታትን ሁሉ ከእግዚአብሔር በታች እንዲገዛ በፍጥረታት ላይ መሠልጠኑ ነው፡፡ እግዚአብሔር \"ሥሉጥ በላዕለ ኵሉ ፍጥረት፤ በፍጥረት ሁሉ ላይ የሠለጠነ (ሥልጣን ያለው)\" እንደሆነ ሁሉ ሰውንም በጸጋ \"ሥሉጥ በላዕለ ኵሉ ምድር፤ በምድር ሁሉ ላይ የሠለጠነ (ሥልጣን ያለው)\" አድርጎታል፡፡ በጥንተ ተፈጥሮው የሰው ልጅ መጻሕፍትም ሆኑ መምህራን የማያስፈልጉት ዐዋቂ ፍጥረት ነበር፡፡ እንደ አባ ማቴዎስ በአእምሮ ጠባይዕ፣ እንደ አብርሃምና እንደ ሙሴ ጸሊም በሥነ ፍጥረት ተመራምሮ የሚያውቅ ማለት ነው (ትርጓሜ ወንጌለ ዮሐንስ)፡፡ በለባዊ አእምሮው ሥነ ፍጥረትን አንብቦና መርምሮ ረቂቁን እውነት የሚረዳ ከሃሊ ዘበጸጋ ነበር፡፡ የሰው የመጀመሪያ መጽሐፍም ሥነ ፍጥረት ነው፡፡ ለሰው የመጀመሪያ እውነተኛ መምህሩ መምህረ ኵሉ ዓለም እግዚአብሔር ነው፡፡",
        paragraph6: "እግዚአብሔር ለአዳም ትእዛዛቱን አስተማረው፡፡ ከመጀመሪያ ትምህርቶቹም ዋናው \"ከገነት ዛፍ ሁሉ ትበላለህ፤ ነገር ግን መልካምንና ክፉን ከሚያስታውቀው ዛፍ አትብላ ከእርሱ በበላህ ቀን ሞትን ትሞታለህና\" (ዘፍ. ፪፥፲፮-፲፯) የሚለው ነበር፡፡ አዳም ግን እውነተኛ መምህሩን ትቶ የክፉ ፍጡር ትምህርትን ተማረ፤ \"ሞትን አትሞቱም፤ ከእርስዋ በበላችሁ ቀን ዓይኖቻችሁ እንዲከፈቱ እንደ እግዚአብሔርም መልካምንና ክፉን የምታውቁ እንድትሆኑ እግዚአብሔር ስለሚያውቅ ነው እንጂ\" (ዘፍ. ፫፥፬-፭) ብሎ ሰይጣን የነገረውን ሰማ፡፡ ተማሪው ከሁለቱ ትምህርቶች ሁለተኛውን መረጠና በፈተና ወደቀ፡፡ የመጀመሪያ መምህሩን ትምህርት ይረዳም ዘንድ ከዚያ በኋላ ብቁ ልቡና አልነበረውም፡፡ ወደ ታላቁ መምህር ለመመለስ ሌሎች መምህራን እንዲደግፉት ግድ ሆነ፡፡",
        extendedContent: {
          paragraph7: "ክፉው መምህር ካሳታቸው በኋላ አዳምና ሔዋን ያልተጻፈውን ፊደል አዩ፣ ያልተከተበውን አነበቡ፡፡ \"ሴቲቱም ዛፉ ለመብላት ያማረ እንደ ሆነ፥ ለዓይንም እንደሚያስጎመጅ፥ ለጥበብም መልካም እንደ ሆነ አየች\" (ዘፍ. ፫፥፮) እንዲል፡፡ ከዚህም በኋላ ፍጥረታትን የሚያነቡ ሳይሆኑ ፍጥረታት የሚያስደነግጡአቸው ድንጉጦች ሆኑ፡፡ እግዚአብሔር ካደላቸው ከንጽሐ ጠባይ ደረጃ ስለወደቁና ወደ ቀደመ ክሂሎታቸው መመለስ ስላልቻሉ በሰውኛ ፊደል የተጻፉ መጻሕፍትን በማንበብ መመርኮዝ ግድ ሆነባቸው፡፡ የሰው ልጅ ፍጡር ባልሆነ ብርሃን ረቂቁንና የማይታየውን ዓለም ከማየት እና በማየት ከሚገኘው ዕውቀት ከመስማት ወደሚገኘውና ውስን ወደሆነው ዕውቀት በመውረዱ ምክንያት መጽሐፍ አስፈለገው፡፡ ስለዚህ መጻሕፍት የሰው የባሕርዩ መምህራን አይደሉም፡፡ ከውድቀቱ በኋላ የተሰጡት ደጋፊዎች እንጂ፡፡ ይህንም የቤተ ክርስቲያን መምህራን በሚከተለው ምሳሌ ይገልጹታል፤",
          paragraph8: "ሰው የሚራመደው በሁለት እግሩ ነው፡፡ እግሩን ሲታመም ወይም ሲያረጅ በሁለት እግሩ መራመድ ስለሚያቅተው ምርኩዝ ይይዛል፡፡ ልክ እንደዚሁ ሰው በቅድመ ተፈጥሮው በራሱ መቆምና መራመድ የሚችል ነበር፡፡ ነገር ግን በኃጢአት ካረጀና ከታመመ በኋላ መቆምም መራመድም ይችል ዘንድ መጻሕፍትና መምህራን ምርኩዝ እንዲሆኑት ተሰጡት፡፡ ቅዱስ ዮሐንስ አፈወርቅ በማቴዎስ ወንጌል ትርጓሜው ይህን ይበልጥ ሲያብራራልን \"በቀለም ከተቀረፁ የመጻሕፍት ቃላት ይልቅ በልቡናችን ያደረ የመንፈስ ቅዱስ ጸጋ ይመራን ዘንድ እጅግ ንጹሕ ሕይወት ሊኖረን እንጂ የተጻፈ ነገር ሊያስፈልገን አይገባም ነበር\" ብሏል፡፡ ይህን ካለ በኋላ ግን መጻሕፍትን በጥንቃቄ መያዝ እንደሚገባን ሲያስተምረን \"ይህን ጸጋ ከእኛ እንዲርቅ አድርገናል፡፡ እንግዲህ ሁለተኛውን ታላቅ ስጦታ (መጻሕፍትን) አጥብቀን እንያዝ\" ብሏል፡፡ ይህ ሁሉ ቅዱሳት መጻሕፍት ከጊዜ በኋላ አስፈላጊ በመሆናቸው የተሰጡ እንጂ ሁሉ ነገር ከእነርሱ የጀመረ አለመሆኑን የሚያስረዳ  ነው፡፡",
          sectionTitle1: "ወንጌል ከተጻፈውም በላይና የቀደመች እንደሆነች",
          paragraph9: "ብዙ ጊዜ ወንጌል ስንል አራቱ የወንጌላውያን መጻሕፍት ብቻ ቀድመው ይታሰቡን ይሆናል፡፡ አንዳንድ \"መጽሐፍ ቅዱስ ብቻ\" የሚሉ የእምነት ድርጅቶች እንደሚሉትም የተጻፈው ብቻ ወንጌል የሚመስለንም እንኖር ይሆናል፡፡ የተጻፈውም ሆነ ያልተጻፈው ቅዱስ ትውፊት ግን ወንጌል በጽሑፍ ብቻ የተገደበ እንዳልሆነ ያስተምረናል፡፡ ቅዱስ ጳውሎስ \"ወንድሞች ሆይ፥ የሰበክሁላችሁን ደግሞም የተቀበላችሁትን በእርሱም ደግሞ የቆማችሁበትን በእርሱም ደግሞ የምትድኑበትን ወንጌል አሳስባችኋለሁ፤\" ሲል አራቱ ወንጌላት ተጠቃለው አልተጻፉም ነበር (፩ኛ ቆሮ. ፲፭፥፩)፡፡ ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ \"እውነት እላችኋለሁ፥ ይህ ወንጌል በዓለም ሁሉ በማናቸውም ስፍራ በሚሰበክበት እርስዋ ያደረገችው ደግሞ ለእርስዋ መታሰቢያ እንዲሆን ይነገራል\" ብሎ ስለ ማርያም እንተ ዕፍረት በመሰከረ ጊዜ ማቴዎስም፣ ማርቆስም፣ ሉቃስም፣ ዮሐንስም ገና ወንጌልን አልጻፉም ነበር (ማቴ. ፳፮፥፲፫)፡፡ ይህ ቃል በተነገረ ጊዜ እንኳን ወንጌልን ሊጽፉ እምነታቸውም የተሟላ አልነበረም፡፡ ይህም በመከራው ጊዜ ከዮሐንስ በስተቀር ሁሉም በመሸሻቸው ተገልጧል፡፡ ስለዚህ ጌታ \"ይህ ወንጌል\" ሲል የተጻፈውን ብቻ የምናስብ ከሆነ ስሕተት መሆኑን ልብ ይሏል።",
          paragraph10: "ወንጌል በቃልም፣ በመጽሐፍም፣ በሕይወትም የምትሰበክና የተሰበከች እንጂ በመጻሕፍት ተጠቃላና ተካትታ የተቀመጠች ብቻ አድርጎ ማሰብ ስሕተት ነው፡፡ ሐዋርያት በቃልም በመጽሐፍም ሰብከዋል፡፡ ቅዱስ ጳውሎስ ደግሞ በሕይወቱ ባገኘው መገለጥ ተሰብኳል (ሐዋ. ፱)፡፡ እንዲያውም የቅዱሳት መጻሕፍት ጸሐፍያን በጽሑፍ የተሰበከው ጥቂት መሆኑንና በቃል ብዙዎች እንደተሰበኩ ገልጸዋል፡፡ ቅዱስ ዮሐንስ ወንጌሉን ጽፎ ሲያጠቃልል \"ኢየሱስም ያደረገው ብዙ ሌላ ነገር ደግሞ አለ፤ ሁሉ በእያንዳንዱ ቢጻፍ ለተጻፉት መጻሕፍት ዓለም ራሱ ባልበቃቸውም ይመስለኛል\" (ዮሐ. ፳፩፥፳፭) የሚለው ሁሉ ነገር አለመጻፉን ያስረዳል፡፡ ስለዚህ ከተጻፉት በላይ ቤተ ክርስቲያን በትውፊት ያቆየችልን ብዙ ነገር መኖሩን መረዳት ተገቢ ነው።",
          paragraph11: "ቅዱስ ሉቃስም ገና ወንጌሉን መጻፍ ሲጀምር ለሚጽፍለት ቴዎፍሎስ ለተባለው ሰው \"የከበርህ ቴዎፍሎስ ሆይ፥ ከመጀመሪያው በዓይን ያዩትና የቃሉ አገልጋዮች የሆኑት እንዳስተላለፉልን፥ በኛ ዘንድ ስለ ተፈጸመው ነገር ብዙዎች ታሪክን በየተራው ለማዘጋጀት ስለ ሞከሩ፥ እኔ ደግሞ ስለ ተማርከው ቃል እርግጡን እንድታውቅ በጥንቃቄ ሁሉን ከመጀመሪያው ተከትዬ በየተራው ልጽፍልህ መልካም ሆኖ ታየኝ\" (ሉቃ. ፩፥፩-፬) ብሏል፡፡ ይህ በዓይን ያዩ፣ ወንጌልን ሳይጽፉ በቃል ወይም በሌሎች መጻሕፍት ያስተማሩና ለነቅዱስ ሉቃስም ያስተላለፉ መኖራቸውን በቅድሚያ ሲያስረዳ ወንጌሉ የተጻፈለት ቴዎፍሎስ እንኳን አስቀድሞ በቃል መማሩንም የሚያሳይ ነው፡፡ ቅዱስ ሉቃስም እርግጡን ያውቅ ዘንድ ወይም ያረጋግጥ ዘንድ ጻፈለት እንጂ ከዚያ በፊት ያልተማረ ስላልነበር ለማስተማርና ለማሳወቅ የጻፈለት አይደለም፡፡"
        },
        churchBibleRelationship: {
          title: "ከመጽሐፍ ቅዱስና ከቅድስት ቤተ ክርስቲያን የቱ ይቀድማል?",
          paragraph1: "ቤተ ክርስቲያን ከመጽሐፍ ቅዱስ በፊት የነበረችና መጽሐፍ ቅዱስን የጻፈች፣ ከእግዚአብሔር የተቀበለችውን በመጽሐፍ የተቀመጠውን እውነት ጠብቃ ያስተላለፈች የእግዚአብሔር መንግሥት ናት፡፡",
          paragraph2: "መጽሐፍ ቅዱስ የተጻፈው በቤተ ክርስቲያን ለቤተ ክርስቲያን ነው፡፡ ከተጻፉት መጻሕፍትም ውስጥ አምላካውያት የሆኑትን በቀኖና ለይታና ቀድሳ ለምእመናን የሕይወት ምግብነት የሰጠች መሆኗን መገንዘብ ተገቢ ነው፡፡ ስለዚህ ቤተ ክርስቲያን ከመጽሐፍ ቅዱስ ትቀድማለች፤ መጽሐፍ ቅዱስ የእግዚአብሔር ቃል ለመሆኑም ምስክሯ ቤተ ክርስቲያን ናት፡፡ መጽሐፍ ቅዱስ ቤተ ክርስቲያን በመንፈስ ቅዱስ ምሪት የጻፈችውና የምትተረጉመው እንጂ ቤተ ክርስቲያንን ያስገኘ አይደለም፡፡ መጽሐፍ ቅዱስ ለአዋልድ መጻሕፍት ወላጃቸው ነው፡፡ ይህንም በብዙ ማስረጃና አመክንዮ እንደሚከተለው እናያለን፤",
          paragraph3: "፩. መጽሐፍ ቅዱስ ራሱ የቤተ ክርስቲያንን ቀዳሚነት ይመሰክራል",
          paragraph4: "የሚከተሉት ጥቅሶች ቅዱሳት መጻሕፍቱ ከመጻፋቸው በፊት ቤተ ክርስቲያን እንደነበረች በደንብ ያስረዳሉ፤",
          paragraph5: "\"በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን፥ በክርስቶስ ኢየሱስ ለተቀደሱት፥ የእነርሱና የእኛ ጌታ የሆነውን የጌታችንን የኢየሱስ ክርስቶስን ስም በየስፍራው ከሚጠሩት ሁሉ ጋር ቅዱሳን ለመሆን ለተጠሩት\" (፩ኛ ቆሮ. ፩፥፪)፡፡",
          paragraph6: "አንድ መልእክት (ደብዳቤ) ሲጻፍ ሦስት አካላት መኖራቸውን መረዳት ተገቢ ነው – ላኪው፣ መልእክቱና ተቀባዩ፡፡ ላኪውና ተቀባዩ በሌሉበት መልእክቱ ሊጻፍ አይችልም፡፡ የመልእክቱ ላኪ ቅዱስ ጳውሎስ ነው፡፡ ተቀባይዋ ደግሞ በቆሮንቶስ አገር ያለች የእግዚአብሔር ቤተ ክርስቲያን ናት፡፡ ከመልእክቱ ላኪውና ተቀባዩ የሚቀድሙ ከሆነ መልእክቱን ለመቀበል ቅዱስ ጳውሎስንና ቤተ ክርስቲያንን በቅድምና መቀበል ያስፈልጋል ማለት ነው፡፡ ይህን ሲያስረዳ ቅዱስ ጳውሎስ ገና መልእክቱን ለመጻፍ ሲጀምርና ለማን እንደሚጽፍ ሲገልጽ \"በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን\" ማለቱ እርሱ መልእክቱን ከመጻፉ በፊት የቆሮንቶስ ቤተ ክርስቲያን እንደነበረች የሚያሳይ ነው፡፡ ቤተ ክርስቲያኗ ቀድማ መኖሯ ብቻ ሳይሆን ሰዎችን ስትቀድስም ነበር፡፡ በሌላ አገላለጽ ሰዎችን ለመቀደስ የግድ መጽሐፍ ቅዱስ ወይም ቅዱስ ጳውሎስ ለቆሮንቶስ ሰዎች የጻፈው መልእክት አላስፈለጋትም ነበር፡፡ ይህም ይታወቅ ዘንድ የመልእክቱ ባለቤት \"በክርስቶስ ኢየሱስ ለተቀደሱት\" በማለት ገለጸ፡፡ ይህን የመሰሉና ተመሳሳይ እውነትን የሚመሰክሩ ብዙ ጥቅሶችን ማንሣት ይቻላል።",
          paragraph7: "\"በእግዚአብሔር ፈቃድ የኢየሱስ ክርስቶስ ሐዋርያ የሆነ ጳውሎስ ወንድሙም ጢሞቴዎስ፥ በአካይያ አገር ሁሉ ከሚኖሩ ቅዱሳን ሁሉ ጋር በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን፤\" (፪ኛ ቆሮ. ፩፥፩)፡፡",
          paragraph8: "\"በኢየሱስ ክርስቶስ ከሙታንም ባነሣው በእግዚአብሔር አብ ሐዋርያ የሆነ እንጂ ከሰዎች ወይም በሰው ያልሆነ ጳውሎስ ከእኔም ጋር ያሉት ወንድሞች ሁሉ፥ ወደ ገላትያ አብያተ ክርስቲያናት፤\" (ገላ. ፩፥፩)፡፡",
          paragraph9: "\"ጳውሎስና ስልዋኖስ ጢሞቴዎስም፥ በእግዚአብሔር አብ በጌታ በኢየሱስ ክርስቶስም ወደምትሆን ወደ ተሰሎንቄ ሰዎች ቤተ ክርስቲያን፤\" (፩ኛ ተሰ. ፩፥፩)፡፡",
          paragraph10: "\"እንዲሁም የምታየውን በመጽሐፍ ጽፈሕ ወደ ኤፌሶንና ወደ ሰምርኔስ ወደ ጴርጋሞንም ወደ ትያጥሮንም ወደ ሰርዴስም ወደ ፊልድልፍያም ወደ ሎዶቅያም በእስያ ወዳሉት ወደ ሰባቱ አብያተ ክርስቲያናት ላክ አለኝ\" (ራእ. ፩፥፲፩)፡፡ ባለራእዩ ቅዱስ ዮሐንስም በተመሳሳይ ራእዩን ካየ በኋላ ለሰባቱ አብያተ ክርስቲያናት እንዲጽፍ ተገለጸለት፡፡ ይህም ከመጽሐፉ በፊት አብያተ ክርስቲያናቱ እንደነበሩ የሚያስረዳ ነው፡፡ ዮሐንስም ራእዩን በማየት ይከብር ዘንድ መጽሐፍ አላስፈለገውም ነበር፡፡",
          paragraph11: "፪. አመክንዮአዊ ማረጋገጫ",
          paragraph12: "ከመጻሕፍት ሁሉ ቀድሞ የተጻፈው መጽሐፈ ሄኖክ ነው፡፡ መጽሐፈ ሄኖክ ከመጻፉ በፊት ሰው ከአንድ ሺሕ ዓመት በላይ ያለ መጽሐፍ ኖሯል፡፡ መጽሐፈ ኢዮብና አምስቱ የኦሪት መጻሕፍት ከዚያ በመቀጠል ተጻፉ፡፡ የነቢያት መጻሕፍት ሺሕ ዓመታት ዘግይተው ክርስቶስ ሊወለድ በመቶዎች የሚቈጠሩ ዓመታት ሲቀሩት ተጻፉ፡፡ በሐዲስ ኪዳንም ለመጀመሪያዎቹ ዐርባ ዓመታት መጻሕፍት አልተጻፉም፡፡ ከዚያ በኋላም የማቴዎስ ወንጌልንና የያዕቆብ መልእክትን የመሰሉት ቀድመው ተጻፉ እንጂ አብዛኞቹ የተጻፉት እስከ ፸ ዓ.ም. ድረስ ቆይተው ነው፡፡ የሐዲሳት መጻሕፍት የተጻፉት ደግሞ በመጀመሪያው ምዕተ ዓመት መገባደጃ ነበር፡፡ ይህም የሚያስገነዝበው፡-",
          paragraph13: "ሀ. ለጽድቅና ለድኅነት የሚያስፈልገው መጽሐፍ ቅዱስ ብቻ ቢሆን ኖሮ መጽሐፉ በአንዴ አልቆና ተጠቃሎ ከአዳም ጀምሮ ላሉት ሁሉ ካለመድሎ መሰጠት አልነበረበትምን? መጽሐፍ ያልተሰጣቸውስ \"እኛ በኃጢአት የወደቅነው መጽሐፍ ቅዱስ ስላልነበረን ነው\" ብለው ምክንያት እንዲያቀርቡ ዕድል አይፈጥርላቸውም ነበርን? አምልኮን በመጽሐፍ ቅዱስ ብቻ የምንገድበው ከሆነ ለሁሉም ሁሉንም መጻሕፍትን ባለ መስጠቱ የእግዚአብሔር ፈታሒነት ላይ ጥያቄ አያስነሣም ነበርን?",
          paragraph14: "ለ. በጥንቱ ዘመን መጻሕፍት ለየተጻፉላቸው ሰዎች በጥቅል (Scroll) መልክ ይገኙ ነበር እንጂ አሁን እንዳለው ሁሉም በአንድነት ተጠርዘው በአንድ ሰው እጅ ማግኘት አይቻልም ነበር፡፡ መጽሐፍ ቅዱስ አሁን ባለው መልኩ ተሰብስቦ በአንድነት መገኘት የቻለው የማተሚያ ማሽን ከተሠራና በወረቀት ማተም ከተጀመረ በኋላ ነው፡፡ ምዕራፍና ቊጥር ወጥቶለት ለንባብ አመቺ የሆነው ደግሞ ከዐሥራ ስድስተኛው ክፍለ ዘመን በኋላ ነው፡፡ በጥንቱ ዘመን እያንዳንዱ መጽሐፍ በየቦታው በጥቂት መጠን ብቻ ይገኝ ነበር፡፡ የሮሜ መልእክት የሚገኘው ሮማውያን ዘንድ፣ የቆሮንቶስ መልእክት ከቆሮንቶስ ሰዎች ዘንድ … ወዘተ እንጂ እንደዚህኛው ዘመን በአንድ ጊዜ ተባዝተው ሁሉም ዘንድ የሚገኙ አልነበረም፡፡ ለዐራት ሺሕ ዓመታት ያክል የተጻፉትን እነዚህን ቅዱሳት መጻሕፍት ከሐሰተኞቹ ለይታና በቀኖና ወስና \"እነዚህን ተጠቀሙ\" ያለችው ቤተ ክርስቲያን አይደለችምን?",
          paragraph15: "ቤተ ክርስቲያን ይህን ባታደርግ እኛም ከመጽሐፍ ቅዱስ ፈጽሞ የማንገናኝ በሆንን ነበር፡፡ ወንጌላትን በጊዜው ብዙዎችን ያስቱ ከነበሩት \"የይሁዳ ወንጌል\"፣ \"የበርናባስ ወንጌል\" ከተባሉትና እነዚህን ከመሰሉት እንዲሁም \"የማቴዎስ፣ የማርቆስ ወንጌል\" ተብለው ብዙ ሐሰት ከተጨመሩባቸው ለይታ \"መጻሕፍተ ወንጌላት ዐራቱ ብቻ ናቸው\" ባትለን ኖሮ በብዙ ጥፋት ውስጥ የምንሆን አልነበርንምን? እርሷ በቀኖና ሰፍራ ቈጥራ የሰጠችውን መጽሐፍ ተቀብሎ ሰጪዋን ቤተ ክርስቲያንን አልቀበልም ማለትስ ስሕተት አይደለምን? በተመሳሳይ መልኩ ቀኖናን ሠርታ አዋልድ መጻሕፍትን ስትሰጥ አለመቀበልስ አለማወቅ አይደለምን?",
          paragraph16: "ሐ. የቤተ ክርስቲያንን ከሁሉ በላይ መሆንና ፍጹም የሆነ ሥልጣኗን የምናውቅ አሥራው መጻፍት ተብለው የሚታወቁት መጻሕፍትን ሰብስቦ ሰማንያ አንድ ብቻ ናቸው ብሎ ማን ነገራችሁ? ብንባል \"ቤተ ክርስቲያን\" እንላለን፡፡ \"መጽሐፍ ቅዱስ ብቻ\" የሚሉት ወገኖች ግን \"መጽሐፍ ቅዱስን 'ስልሳ ስድስት' ያላችሁ ማነው\" ቢባሉ ማን ይሉ ይሆን? እንቀበላቸዋለን የሚሏቸው \"ስልሳ ስድስትቱ መጻሕፍት\" ራሳቸው \"ስልሳ ስድስት ብቻ\" ወይም \"መጽሐፍ ቅዱስ ብቻ\" አይሉምና።",
          paragraph17: "፫. መጽሐፍ ቅዱስ ሁሉንም ነገር ጠቅልሎ አለመያዙን ያስረዳል",
          paragraph18: "ወንጌላዊው ቅዱስ ዮሐንስ \"ኢየሱስም በዚህ መጽሐፍ ያልተጻፈ ሌላ ብዙ ምልክት በደቀ መዛሙርቱ ፊት አደረገ፤\" (ዮሐ. ፳፥፴) በማለት ክርስቶስ ያደረጋቸው ሁሉ የተጻፉ እንዳልሆነ አስረድቷል፡፡ እንዲያውም እርሱ ያደረገውን ሁሉንም እንጻፍ ማለት እንደማይቻል ሲገልጽ \"ኢየሱስም ያደረገው ብዙ ሌላ ነገር ደግሞ አለ፤ ሁሉ በእያንዳንዱ ቢጻፍ ለተጻፉት መጻሕፍት ዓለም ራሱ ባልበቃቸውም ይመስለኛል\" ብሏል፡፡ ይህ መጽሐፍ ቅዱስ ሁሉንም ታሪክ፣ ሁሉንም ሥርዐት … ወዘተ ጠቅልሎ እንዳላካተተ የሚያሳይ ነው፡፡ ይህን ስንል ግን በጽሑፍ ደረጃ አልዘረዘረም ማለታችን እንጂ ከምሥጢር ምልዐት አንጻር የጎደለው ነገር አለው ማታችን አይደለም፡፡ የእግዚአብሔር ቃል ሁሌም ምሉዕ ነውና የእግዚአብሔር ቃል የሚገኝበት መጽሐፍም ሕፀፅና ጉድለት የማይገኝበት ምሉዕ ነው፡፡ ይህ ብቻ ሳይሆን መጽሐፍ ቅዱስ ባነሣው ጉዳይ ላይ ተጨማሪ መንፈሳዊ ዕውቀት የምንፈልግ ከሆነ የቀረው ነገር የት እንደሚገኝ አዋልድ መጻሕፍትን ጠቁሞናል እንጂ \"ሁሉንም ጠቅልዬ ይዣለሁና እኔን ብቻ አንብቡ\" አላለም፡፡ የሚከተሉት አሳቦችም ይህንኑ የሚያስረዱ ናቸው።",
          paragraph19: "\"የቀረውም ፊተኛውና ኋለኛው የሰሎሞን ነገር በነቢዩ በናታን ታሪክ፥ በሴሎናዊውም በአሒያ ትንቢት፥ ስለ ናባጥም ልጅ ስለ ኢዮርብዓም ባየው በባለ ራእዩ በአዶ ራእይ የተጻፈ አይደለምን?\" (፪ኛ ዜና. ፱፥፳፱)፡፡",
          paragraph20: "\"የቀረውም የሮብዓም ነገር፥ ያደረገውም ሁሉ፥ በይሁዳ ነገሥታት ታሪክ መጽሐፍ የተጻፈ አይደለምን?\" (፩ኛ ነገ. ፲፬፥፳፱)፡፡",
          paragraph21: "\"የቀረውም የሰሎሞን ነገር፥ ያደረገውም ሁሉ፥ ጥበቡም፥ እነሆ፥ በሰሎሞን ታሪክ መጽሐፍ ተጽፎአል\" (፩ኛ ነገ. ፲፩፥፵፩)፡፡",
          paragraph22: "ማጠቃለያ",
          paragraph23: "መጽሐፍ ቅዱስ የቅዱሳት መጻሕፍት ሁሉ ምንጭና ራስ ነው፡፡ ማንኛውም ትምህርት፣ የቤተ ክርስቲያን ታሪክ ወይም ሥርዐት በመጽሐፍ ቅዱስ ከተጠቀሰው ጋር የሚጋጭ ከሆነ በቤተ የቤተ ክርስቲያናችን ተቀባይነት የለውም፡፡ የቤተ ክርስቲያናችን የትምህርተ ሃይማኖት ዋና ምንጭ መጽሐፍ ቅዱስ ነው፡፡ የሥርዐትና የታሪክ ዋና ምንጭም መጽሐፍ ቅዱስ ነው፡፡ ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያናችን መጽሐፍ ቅዱስ የሚያዘውን የምትፈጽም፣ የምታስተምርና የምትኖር መጽሐፍ ቅዱሳዊት ቤተ ክርስቲያን ናት፡፡ መጽሐፍ ቅዱስንም እንድናነበውና እንድንማርበት አዘጋጅታ የሰጠችን እርሷው ናት፡፡ ይሁንና አንዳንድ መናፍቃን መጽሐፍ ቅዱስን የሚከተሉ መስለው ቤተ ክርስቲያን መጽሐፍ ቅዱስን ያልሰበከች አስመስለው ስለሚያቀርቡ ተንኮላቸውን ተረድተን ልንጠነቀቅ ይገባል፡፡ መጽሐፍ ቅዱስ የማይለውን እንደሚል አድርገው በማቅረብና አጣመው በመተርጎም የሚስቱ ብዙዎች ናቸው፡፡ ለዚህም ነው ከሁሉ የምትቀድመውን ቤተ ክርስቲያን እየተቃወሙ እርሷ ለዓለም ሁሉ የሰጠችውን ቅዱስ መጽሐፍ የተቀበሉ የሚያስመስሉት፡፡",
          paragraph24: "ምንጭ፥ https://eotcmk.org/a/17157-2/",
          paragraph25: "አዋልድ መጻሕፍት ከመጽሐፍ ቅዱስ ጋር ያላቸው ተዛምዶ፡–",
          paragraph26: "ቀደም ተብሎ እንደተለጠው አዋልድ መጻሕፍት ልጅነታቸው ለአሥራው መጻሕፍት (ለመጻሕፍት አምላካውያት) ነው፡፡ ልጅ ከአባቱ አብራክ፣ ከእናቱ ማኅጸን ተከፍሎ ወላጆቹንመስሎ እንዲወጣ እነዚህም በምሥጢርም በእምነትም በሥርአትም የአሥራውን መጻሕፍት ሥርና መሠረት ይዘው ተገኝተዋል፡፡ በምሥጢርም ኾነ በሥርዓት ከአሥራው መጻሕፍት ጋር የሚቃረኑት መጻሕፍት ከአዋልድ አይቆጠሩም፡፡ ምክንያቱም በሐዋርያው ቃል \"ነገር ግን እኛ ብንሆን ወይም ከሰማይ መልአክ፥ ከሰበክንላችሁ ወንጌል የሚለይ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን\" ተብሏልና (ገላ.፩፥፰)፡፡",
          paragraph27: "አዋልድ መጻሕፍት ከአሥራው መጻሕፍት ጋር ያላቸውን ተዛምዶ በሚከተሉት ነጥቦች መረዳት ይቻላል፡፡",
          paragraph28: "ሀ. በዓይነታቸው፡- አሥራው መጻሕፍት ተብለው የሚታወቁት ሰማንያ አንዱ መጻሕፍት የሕግ፣ የታሪክ፣ የጥበብ፣ የትንቢት ተብለው ይመደባሉ፡፡",
          paragraph29: "እንደዚሁም ሁሉ አዋልድ መጻሕፍት በዚሁ አንጻር የተዘጋጁ ናቸው፡፡ ለምሳሌ ያህል ይህንን የማሳያ ሰንጠረዥ እንመልከት፡-",
          paragraph30: "ለ. በባለቤታቸው፡-የቅዱሳት መጻሕፍት ባለቤታቸው ቅድስት ቤተ ክርስቲያን ናት፡፡ ምክንያቱም ቅዱሳት መጻሕፍት የእግዚአብሔር ገንዘቦች፣ በእርሱም ፈቃድና ምሪት የተፃፉ ሲሆኑ ቤተ ክርስቲያን ደግሞ እግዚአብሔር በደሙ የዋጃት በምድር የእግዚአብሔር እንደራሴ የሆነች፣ የጸጋው ግምጅ ቤት ናት (የሐዋ.፳፥፳፰)፡፡ ስለሆነም ከእግዚአብሔር የተላኩ ሐዋርያት መንፈስ ቅዱስ ገልጦላቸው ወንጌልንና መልእክታትን የጻፉት ለቤተ ክርስቲያን ነው።",
          paragraph31: "የአዋልድ መጻሕፍት ጸሐፊዎች የቤተ ክርስቲያን ልጆች ሲሆኑ እነርሱም መንፈሰ እግዚአብሔር እንደገለጠላቸው መጠን መጻፍቱን የጻፉት ለቤተክርስቲያን ልጆች ለምእመናን ነው፡፡ በመሆኑም ባለቤታቸው ቤተ ክርስቲያን በመሆኗ ለትርጉማቸው፣ ለታሪካቸውና ለምሥጢራቸው መጠየቅ ያለባት ቤተ ክርስቲያን ናት።",
          paragraph32: "ሐ. በቅድስናቸው፡- አሥራው መጻሕፍትንም ሆነ አዋልድ መጻሕፍትን ያጻፈው መንፈስ ቅዱስ ነው፡፡ የአሥራው መጻሕፍትን ጸሐፍት እንደመረጠ እንዳተጋ ምሥጢር እንደገለጠላቸው፣ የአዋልድ መጻሕፍትን ጸሐፍት የመረጠ፣ ያተጋ፤ ምሥጢር የገለጠላቸው መንፈስ ቅዱስ ነው፡፡ ከአንዱ ምንጭ ከመንፈስ ቅዱስ በመገኘታቸውም የአሥራውም ሆኑ የአዋልድ መጻሕፍት ዓላማቸው ነገረ ሃይማኖትን ማስረዳት ደግሞም ለትምህርትና ለተግሣጽ ልብንም ለማቅናት በጽድቅም ላለው ምክር መጥቀም ነው፡፡(፪ኛ.ጢሞ.፫፥፲፮)",
          paragraph33: "በልዩ ልዩ ዘመናትና ሰዎች በተራራቀ ሀገር ተጽፈው ለየብቻቸው የነበሩትን አሥራው መጻሕፍት ከመሠረተ ሃይማኖት አንጻር መርምራ አረጋግጣ በአሥራው መጻሕፍትነት የተቀበለችው ቤተ ክርስቲያን ናት። አዋልድ መጻሕፍትንም የምትቀበለው በተመሳሳይ መልኩ ከትምህርቷ አንፃር መርምራ አረጋግጣ ነው።",
          paragraph34: "መ. የእግዚአብሔርን ሥራ በመግለጥ፡- የቅዱሳት መጻሕፍት ተቀዳሚ ዓላማ የእግዚአብሔርን ሥራ መግለጥ ነው፡፡ ቅዱሳት መጻሕፍት እግዚአብሔር በቀጥታ ራሱ ወይም በወዳጆቹ አድሮ ለሕዝቡ ያደረገውን ተአምር፣ መግቦት፣ ቸርነት ያብራራሉ፡፡ይህ እውነታ በአሥራው መጻሕፍት በስፋትና በይፋ የተገለጠ ሆኖ እናገኘዋለን፡፡ ዓላማቸው የእግዚአብሔርን ሥራ መግለጥ ከመሆኑ የተነሣ የእግዚአብሔር ሥራ ተአምር የተፈጸመላቸውንና የተፈጸመባቸውን ሰዎች፣ ቦታዎች እምብዛም ትኩረት አይሰጧቸውም፡፡ ተአምሩን ብቻ ገልጠው የሰዎችንና የቦታዎችንስምእገሌ፣አንድሰው ብለው ያልፋሉ፡፡ (ማቴ.፳፮፥፲፰፣፩ኛ. ነገ፲፫፥፩፣ ማቴ.፰፥፪፣ ሉቃ.፲፩፥፲፭) ይህ በአሥራው መጻሕፍት ብቻ የሚንጸባረቅ ሳይሆን የአዋልድ መጻሕፍትም ዓላማ ነው፡፡ በገድለ ተክለሃይማኖት፣ በገድለ ጊዮርጊስ፣ በተአምረ ማርያም ውስጥ በቅዱሳን አማላጅነት የእግዚአብሔር ሥራ (ተአምር) የተፈጸመላቸው ወይም የተፈጸመባቸው ሰዎችን ስም፣ ቦታ ሳያነሡ እገሌ፤ እገሊት አንድ ሰው ብለው የሚጠሩት ሰዎቹና ቦታዎቹ መጠሪያ ስለሌላቸው ሳይሆን ዓላማቸው የእግዚአብሔርን ሥራ መግለጥ ስለሆነ ነው።",
          paragraph35: "ሠ. የሃይማኖትን ታላቅነት በመግለጥ፡- ቅዱሳት መጻሕፍት በሃይማኖት፣ ለሃይማኖት፣ ስለሃይማኖት የተጻፉ ናቸው፡፡ ከጥርጥር፣ ከአጉል አሳብ ተጠብቆ በመጻሕፍቱ የተገለጠውን፣ የታዘዘውን ለጠበቀ የተባለው ይፈጸምለታል፡፡ ሠለስቱ ደቂቅ ሃይማኖትን ገንዘብ አደረጉ፡፡ በሃይማኖትም ሕግ ታዝዘው ለጣዖት መስገድን እምቢ አሉ፡፡ በዚህ የተነሣ ከእሳት ቢጣሉ በሃይማኖት የእሳትን ኃይል አጠፉ፡፡ ነቢዩ ዳንኤል በሃይማኖት የአናብስትን አፍ ዘጋ፡፡ ጌዴዎን ያለ ጦር መሣሪያ አእላፍ የአሕዛብን ሠራዊት ድል አደረገ፡፡ ይህ የሃይማኖትን ታላቅነት ያስረዳል (ዕብ.፲፩፥፴፫-፴፬)፡፡ በአዋልድ መጻሕፍትም አቡነ ኤውስጣቴዎስ በአጽፋቸው (በመጎናጸፊያቸው) ባሕር ሲከፍሉ፣ ፃድቁ አቡነ ተክለሃይማኖት ከንብ ቀፎ ተከተው በቆዳ ተጠቅልለው ከተወረወሩበት ገደል ሲወጡ፣ ከእሳት መካከል ቆመው እግዚአብሔርን ሲያመሰግኑ፤ቅዱስ ጊዮርጊስ የሚቆራርጥ መርዝ ሲያጠጡት ሕያው ሆኖ የሚያሳየን የሃይማኖትን ታላቅነት ነው።",
          paragraph36: "በአሥራውም ሆነ በአዋልድ መጻሕፍት የተጠቀሱት ሰዎች ታላላቅ ተአምራት ሲፈጽሙ የምንመለከተው መድኃኒታችን ኢየሱስ ክርስቶስ በቅዱስ ወንጌሉ \"አማን አማን እብለክሙ ዘየአምን ብየ ዘአነ እገብር ውእቱሂ ይገብር ወዘየዐቢ ይገብር፤ እውነት እውነት እላችኋለሁ፥ በእኔ የሚያምን እኔ የማደርገውን ሥራ እርሱ ደግሞ ያደርጋል፤ ከዚህም የሚበልጥ ያደርጋል፤\" ያለው ቃል ተፈጽሞላቸው ነው፡፡(ዮሐ.፲፬፥፲፪)።",
          paragraph37: "ረ. የሃይማኖትሰዎች ያደረጓቸውን ልዩ ልዩ ተጋድሎዎችን መግለጥ፡- እግዚአብሔር ድንቅ የሆነ ሥራውን ለፍጥረቱ የሚሠራው በፍጥረቱ አማካኝነት ነው፡፡ ይህም በልዩ ልዩ መንገድ ይፈጸማል፡፡ የእግዚአብሔር ሥራ በስፋትና በግልጥ ከሚሠራባቸው ፍጡራን መካከል ደግሞ ቅዱሳን ዋንኞቹ ናቸው፡፡ ቅዱሳን ለሕገ እግዚአብሔር ተገዝተው ፈቃዱን በመፈጸማቸው ንጽሐ ልቡናን ገንዘብ አደረጉ፡፡ በዚህ ሰውነታቸውም ከእግዚአብሔር በተቀበሉት ኃይል ብዙ ተጋድሎ ፈጽመዋል፡፡ የአሥራውም ሆኑ አዋልድ መጻሕፍት ይህን የቅዱሳንን የተጋድሎ ሕይወት ይገልጣሉ፡፡ ነሕምያ የኢየሩሳሌምን ቅጥር መሥራቱ፣ አስቴር በጾም በጸሎት ሕዝበ እሥራኤልን ስለመታደጓ፣ ዮዲት በጥበብ ሆሊፎርንስን መግደሏ፣ ቅዱስ ጴጥሮስ በጥላው ሕሙማንን መፈወሱ፣ እመቤታችን፣ጻድቃን ሰማእታት ልዩ ልዩ ገቢረ ተአምራት መፈጸማቸው በየቅዱሳት መጻሕፍቱ ተገልጦ እናገኛለን፡፡",
          paragraph38: "አዋልድ መጻሕፍትን ቤተ ክርስቲያን የምትቀበለው እንዴት ነው?",
          paragraph39: "ቅድስት ቤተ ክርስቲያን አዋልድ መጻሕፍትን የምትቀበልበት ሥርዓት አላት፡፡ ቀደም ተብሎ በተደጋጋሚ እንደተገለጠው የአዋልድ መጻሕፍት ልጅነታቸው በይዘት፣በመንፈስ፣ በምሥጢርና በመሠረተ ሐሳብ ነው፡፡ የመጽሐፍ ቅዱስ መጻሕፍት \"አሥራው መጻሕፍት\" ይባላሉ፡፡ አሥራው ማለት ሥሮች ማለት ሲሆን፣ አሥራው መጻሕፍት ሲላቸው ደግሞ የሌሎች መጻሕፍት መገኛዎች፣ ሥሮች ማለት መሆኑን ልብ ይሏል፡፡ ይህም ማለት ለአዋልድ መጻሕፍት በይዘትና በመንፈስ፣ በምሥጢርና በመሠረተ ሐሳብ አስገኚ ሥራቸውና ወላጃቸው መጽሐፍ ቅዱስ ኾኖ በእርሱ ሥርነት የሚበቅሉና የሚያድጉ ማለት ነው፡፡",
          paragraph40: "ይህ ኾኖ ሳለ በአንዳንድ ይዘታቸው፣ መጽሐፍ ቅዱስን ቢመስሉም ከመጽሐፍ ቅዱስ አስተምህሮ፣በጌታችን ከተገለጠውና ከሐዋርያት ጀምሮ ሲያያዝ ከመጣው የቤተክርስቲያንእምነትና ትምህርት ጋር ተቃርኖ ያላቸውን መጻሕፍት ቤተ ክርስቲያን ታወግዛለች እንጂ አትቀበልም፡፡ መጻሕፍቱም \"ዲቃሎች\" እንጂ \"አዋልድ\" አይባሉም፡፡",
          paragraph41: "አዋልድ መጻሕፍትን በተመለከተ በሚከተሉት ነጥቦች መለየት እንደሚቻል ሕንዳዊው የነገረ መለኮት ሊቅ ጢሞቴዎስ አለን ይገልጡታል፡-",
          paragraph42: "ዓላማቸው መንግሥተ እግዚአብሔር የሆነ፣",
          paragraph43: "በሃሳብ፣ በመንፈስ፣ በምሥጢር፣ በነገረ መለኮት ከአሥራው መጻሕፍትና ከቅዱሳት የቤተ ክርስቲያን ትውፊት ጋር የማይጋጩ፣",
          paragraph44: "ለክርስቲያናዊ ሥነ ምግባር፣ ሕይወትና አኗኗር ተስማሚ የሆኑ፣",
          paragraph45: "የቤተ ክርስቲያን አበው፣ትውፊት ወይም ጉዞ ምስክር ያላቸው፣",
          paragraph46: "ውስጣዊ ተቃርኖ የሌለባቸው፡፡",
          paragraph47: "እንግዲህ በጎ ትምህርት የሚያስተምሩንን፣ ስለ ቅዱሳን አበውና እመው ሃይማኖታዊ ተጋድሎ የምንረዳባቸውን፣ አሥራው መጻሕፍትንም የሚያብራሩልንና የሚተረጉሙልንን አዋልድ መጻሕፍትን በመጠቀም በሃይማኖት ለመጽናት፣ በጎ ሥራ ለመሥራት ፈጣሪያችን ልዑል እግዚአብሔር ይርዳን!",
          paragraph48: "ምንጭ፥ https://eotcmk.org/a/",
          paragraph49: "",
          paragraph50: "",
          paragraph51: "",
          paragraph52: "",
          paragraph53: "",
          paragraph54: "",
          paragraph55: "",
          paragraph56: "",
          paragraph57: "",
          paragraph58: "",
          paragraph59: "",
          paragraph60: "",
          paragraph61: "",
          paragraph62: "",
          paragraph63: "",
          paragraph64: "",
          paragraph65: "",
          paragraph66: "",
          paragraph67: "",
          paragraph68: "",
          paragraph69: "",
          paragraph70: ""
        }
      }
    },
    spiritualLife: {
      title: "መንፈሳዊ ሕይወት",
      prayer: {
        title: "ጸሎት",
        description: "መደበኛ ጸሎት ለኢትዮጵያ ኦርቶዶክስ መንፈሳዊ ሕይወት አስፈላጊ ሲሆን፣ ለተለያዩ የቀን ሰዓታት የተወሰኑ ጸሎቶች አሉ።"
      },
      fasting: {
        title: "ጾም",
        description: "ጾም በስፋት ይከናወናል፣ በዓመት ውስጥ ከ250 ቀናት በላይ የጾም ቀናት እንደ መንፈሳዊ ሥርዓት ይከናወናሉ።"
      },
      charity: {
        title: "ምጽዋት",
        description: "ምጽዋትና ለችግረኞች መንከባከብ የክርስትና እምነትና ፍቅር አስፈላጊ መግለጫ ተደርጎ ይወሰዳል።"
      },
      offering: {
        title: "አሥራት በኩራት",
        firstFruits: {
          title: "በኩራት",
          definition: "በኩር (የመጀመሪያ) ከሚለው ቃል ነው። በኩራት የእግዚአብሔር ነው - ዘፀ 23፡19፣ ዘሌ 23፡10-11",
          purpose: "በኩራት መስጠት ማለት እግዚአብሔርን በነገሮቻችን ሁሉ ማስቀደም ማለት ነው - ዘኁ 3፡13፣ ዘዳ 15፡19",
          commandment: "የበኩራት ስጦታ ትዕዛዝ ነው - ዘፀ 13፡2፣ ዘዳ 26፡2",
          blessing: "የመጀመሪያውን ስንሰጥ ያለን ነገር ይባረክልናል - 1ሳሙ 2፡20-21"
        },
        tithe: {
          title: "አሥራት - ዘፍ 14፡20፣ ዕብ 7፡4-5",
          oldTestament: "አሥራት በብሉይ ኪዳን ከአስር አንድ እጅ ማለት ነው - ዘፍ 28፡22",
          newTestament: "አሥራት በአዲስ ኪዳን ግን ከአስር አንድ እጅ ባለፈ በዘራኸው ልክ ነው - 2ቆሮ 9፡6-7",
          ownership: "አሥራት የእግዚአብሔር ንብረት ነው - ሚል 3፡8-10",
          faithfulness: "አሥራት የሚሰጡ (የሚያስገቡ) ሰዎች በታማኝነት የእግዚአብሔርን ንብረት መልሰው ለእርሱ የሚሰጡ ናቸው - ዘዳ 14፡22-23",
          blessing: "አሥራትን በማስገባት (በመስጠት) ውሰጥ በረከት አለ - ሚል 3፡8-10"
        },
        reasons: {
          title: "የምንሰጥበት ምክንያት እና አላማ",
          reason1: "ሀ. እግዚአብሔር እንድንሰጥ አዟል - ዘፀ 25፡1-5፣ ዘሌ 25፡31፣ ዘኁ 18፡21",
          reason2: "ለ. ስጦታችን የእግዚአብሔርን መንግስት የማስፋፋት ስራና የእግዚአብሔር ቤት አገልግሎት ላይ የሚውል ነው - 1ቆሮ 9፡4-14፣ 2ቆሮ 8፡4፣ ፊሊ 4፡15-18",
          reason3: "ሐ. በመስጠት እግዚአብሔርን እናከብራለን፣ እናመልካለን - ምሳ 3፡9-10",
          reason4: "መ. በመስጠት የእግዚአብሔርን በረከት እንለማመዳለን - ሚል 3፡10-12፣ ሉቃ 6፡10",
          reason5: "ሠ. በመስጠት ለእግዚአብሔር ታማኝ እንሆናል (አንሰርቀውም) - ሚል 3፡8-10"
        },
        howToGive: {
          title: "እንዴት መስጠት እንዳለብን?",
          way1: "ሀ. የምንሰጠው አስቀድመን ራሳችንን ለእግዚአብሔር በመስጠት ነው - ሮሜ 12፡1፣ 2ቆሮ 8፡1-5",
          way2: "ለ. የምንሰጠው በሃዘን (በግድ) ሳይሆን በደስታ ነው - 2ቆሮ 9፡7",
          way3: "ሐ. የምንሰጠው እንደገቢያችን ብቻ ሳይሆን ከጉድለታችንም ጭምር መሆን አለበት - 2ቆሮ 8፡1-5",
          way4: "መ. የምንሰጠው ለሰዎች ለመታየት መሆን የለበትም - ማቴ 6፡1",
          way5: "ሠ. የምንሰጠው በስጦታችን ለመመካት መሆን የለበትም - ሉቃ 18፡9-14"
        }
      }
    }
  },
  service: {
    timihirtTarikoch: {
      title: "ትምህርቶችና ታሪኮች",
      noPosts: "ምንም የብሎግ ልጥፎች አልተገኙም።",
      featured: "ተለይቶ የቀረበ",
      authorLabel: "ደራሲ፡",
      readMore: "ሙሉውን ለማንበብ",
      hero: {
        authorName: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
        sourceLabel: "ምንጭ:",
        sourceLinkText: "eotcmk.org",
      },
      biblicalFigures: {
        moses: {
          title: "ታማኝ አገልጋይ ነቢዩ ሙሴ",
          content:
            "ሙሴ ታማኝ አገልጋይ እንደነበር ቅዱሳት መጻሕፍት ይመሠክራሉ፡፡ ‹‹በመካከላችሁ ነቢይ ቢኖር እኔ እግዚአብሔር በራእይ እገለጥለታለሁ ወይም በህልም አናግረዋለሁ፤ ባሪያዬ ሙሴ ግን እንዲህ አይደለም፤ እርሱ በቤቴ ሁሉ የታመነ ነው››፡፡ (ዘኁ.፲፪፥፮) ይህ የፍጡር ምስክርነት ሳይሆን በፈጣሪው የተሰጠ ምስክርነት ነው፡፡ በእውኑ በዘመናችን እንኳን ፈጣሪ ፍጡራን ታማኝነቱን የሚመሰክሩለት አጋልጋይ ይኖር ሆን? የሙሴን ታማኝ አገልጋይነት በረሃ፣ ስደት፣ መከራ እና ቁጣ ያልበገረው አርባ ዓመት ስለ ወንድሞቹ በመሰደድ፣ አርባ ዓመት ደግሞ የተሰደደላቸው ወንድሞቹን በመምራት ባሕር በመክፈል፣ ጠላት በመግደል፣ መና በማውረድ፣ ደመና በመጋረድ ውኃ ከዓለት አፍልቆ በማጠጣት፣ መከራውን ከወገኖቹ ጋር በመቀበል፣ የቀኑ ሀሩር የሌሊቱን ቁር /ብርድ/ ታግሶ በታማኝነት አገልግሏል፤ ታማኝነቱ እስከሞት ነበር፡፡ ‹‹ሙሴም ወደ እግዚብሔር ተመልሶ ወዮ እኒህ ሕዝብ ታላቅ ኀጢአት ሠርተዋል፡፡ ለራሳቸውም የወርቅ አማልክት አድርገዋል፡፡ አሁን ይህን ኀጢአታቸውን ይቅር በላቸው፤ ያለዚያ ግን ከጻፍከው መጽሐፍ እባክህ ደምስሰኝ፤ ከባለሟልነትህ አውጣኝ››፡፡ (ዘጸ.፴፪፥፴፩) ታማኝ አገልጋይ ‹‹እኔ ልሙት፤ ሌሎች ይዳኑ የሚል ነው፤ አሁን የምናየው ግን ፈጽሞ ከዚህ የተለየ ነው፡፡ ሰዎች ይሙቱ፤ እኔ ልኑር፤ ሰዎች ጾም ይደሩ፤ እኔ ልብላ፤ ሰዎች ይራቆቱ እኔ ልልበስ፤ ሰዎች ይዘኑ፤ እኔ ልደሰት›› ነው፡፡ ታማኝ አገልጋይ ለሚያገለግላቸው ሰዎች ጥቅም ቅድሚያ የሚሰጥ እንጂ የራሱን ጥቅም የሚያስቀድም አይደለም፡፡",
        },
        david: {
          title: "ታማኝ አገልጋይ ነቢዩ ዳዊት",
          content:
            "ዳዊት ዘመነ መሳፍንት አልፎ ዘመነ ነገሥት ሲተካ እስራኤልን በንጉሥነት እንዲያገለግል እግዚአብሔር ከበግ ጥበቃው ወስዶ ሥልጣን ሰጠው፤ ያልተመነ የሳዖልን በትረ መንግሥት በሳሙኤል እጅ ተቀብቶ ተቀብሏል፡፡ በተሰጠው ሥልጣን በታማኝነት ሕዝበ እስራኤልን መርቷል፡፡ ታማኝነቱንም እግዚአብሔር ለሙሴ እንደ መሰከረለት ለእርሱም መስክሮለታል፡፡ ‹‹እግዚአብሔር እንደልቡ የሆነ ሰው መርጧልና››፤ ‹‹የዘይቱን ቀንድ ሞ ተህ በልጆቹ መካከል ለእኔ ንጉሥ አዘጋጅቻለሁና ወደ እሴይ ወደ ቤተልሔም እልክሃለሁ›› እንደተባለው፡፡ (፩ ሳሙ.፲፫፥፲፫፣ ፲፮፥፪) ‹‹ወረከብክዎ ለዳዊት ገብርየ ወቀባዕክዎ ቅብዐ ቅዱስ›› እንዲል፡፡(መዝ.፹፰፥፳) ‹‹ባሪያዬ ዳዊትን አገኘሁት፤ የተቀደሰ ዘይትንም ቀባሁት›› ይህን አባ ጊዮርጊስ ዘጋስጫ ሰዓታት በተባለው ድርሰቱ፡- ‹‹ረከብክዎ ለዳዊት ገብርየ ብዕሴ ምእመነ ዘከመልብየ›› አገልጋዬ ዳዊትን እንደ ልቤ የታመነ ሰውን ሆኖ አገኘሁት›› ሲል ተርጉሞታል፡፡ የተገኘው በታማኝነት ነበር፤ ከነገሠ በኋላም ታማኝ ነበር፤ አሁን በዚህ ዓለም የምንኖር እኛ ግን በድኅነት ታማኝ እንሆንና ሀብት ሹመት ሥልጣን ሲመጣ ታማኝነትን እናጣለን፤ እንዲያውም ታማኝነትን እንንቀዋለን፡፡ መስረቅ ጀግንነት፣ መዋሸት ሥልጣኔ ይመስለናል፡፡ ዳዊት ሳይሾም በጎቹን በመጠበቅ ታማኝ ነበር፡፡ በጎቹን የሚነጥቅ ተኩላ አንበሳ ቢመጣ በኋላው ተከትሎ ነብሩን በጡጫ አንበሳውን በእርግጫ ብሎ በጎቹን ያስጥለው ነበር፡፡",
        },
        joseph: {
          title: "ታማኝ አገልጋይ ቅዱስ ዮሴፍ",
          content:
            "ዮሴፍ ለወንድሞቹ ምግባቸውን ተሸክሞ፣ የእርሱ ስንቅ ቢያልቅ የወንድሞቹን ስንቅ ሳይበላ በትንሽ የታመነ ሰው ነበር፤ ወንድሞቹ ሸጠውት በቤተ ጴጥፋራ በሚያገለግልበት ጊዜም ታማኝ ነበር፤ ታማኝነቱ በጲጥፋራ ቤት ጌታ አድርጎታል፡፡ ‹‹ዮሴፍ ተሸጠ፤ አገልጋይም ሆነ፤ እግሮቹ በእግር ብረት ስለሰሉ ሰውነቱም ከብረት አመለጠች፤ ቃሉ ሳይደርስ የእግዚአብሔር ቃል ፈተነው፤ ንጉሥ ላከ፤ ፈታውም፤ የሕዝብ አለቃ አድርጎ ሾመው፤ የቤቱም ጌታ አደረገው፤ በገንዘቡ ሁሉ ላይ ገዢ አደረገው፡፡ አለቆቹን እንደ እርሱ ይገስጽ ዘንድ፣ ሽማግሌዎችን እንደ እርሱ ጥበበኞች ያደርጋቸው ዘንድ››፡፡ (መዝ.፻፬፥፲፯) በዚህ ሁኔታ የነበረው ዮሴፍ የጌታው ሚስት ሲወጣና ሲገባ ዐይኗን ጣለችበት በዝሙት አዐይን ተመለከተችው፡፡ ‹‹የጌታውም ሚስት በዮሴፍ ላይ ዐይኗን ጣለችበት፤ ከእኔም ጋር ተኛ አለችው፤ እርሱም እምቢ አለ፡፡ ለጌታው ሚስቱ እንዲህ አላት፤ እነሆ ጌታዬ በቤቱ ያለውን ሁሉ ለእኔ በእጄ አስረክቦኛል፡፡ በቤቱ ያለውን ምንም የሚያውቀው የለም፤ በዚህ ቤት ከአኔ የሚበልጥ ሰው የለም፡፡ ሚስት ስለሆንሽ ከአንቺ በቀር ያልሰጠኝ ነገር የለም፤ እንዴት ይህን ትልቅ ክፉ ነገር አደርጋለሁ? እንዴትስ በእግዚአብሔር ፊት ኀጢአትን እሠራለሁ?››፡፡ (ዘፍ.፴፱፥፯)",
        },
      },
      lessons: {
        list: [
          {
            title: "መኑ ውእቱ ገብር ኄር?",
            source: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
            link: "https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/",
            content:
              "በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ስያሜ የዐቢይ ጾም ስድስተኛው እሑድ ወይም ሳምንት ገብር ኄር ይባላል፤ ስያሜውን የሰጠውም ኢትዮጵያዊ ሊቅ ቅዱስ ያሬድ ነው፡፡ ከአምስቱ መጻሕፍቶቹ አንዱ በሆነው ጾመ ድጓ የዐቢይ ጾም ሳምንታት ስያሜዎች ከነሥርዓተ ማኅሌቱ አዘጋጅቷል፡፡ ስለዚህ በስድስተኛው የዐቢይ ጾም ሳምንት ከዋዜማው ቅዳሜ ጀምሮ በቤተ ክርስቲያን የሚዘመረው ዝማሬ፣ የሚሰበከው ስብከት፣ የሚሰጠው ትምህርት ገብር ኄርን ወይም ታማኝ አገልጋይን የሚያወሳ ነው፡፡",
          },
          {
            title: "የታማኝ አገልጋይ ምሳሌ",
            source: "ማቴዎስ ወንጌል",
            link: "#",
            content:
              "ለዚህም ምሳሌ እንዲሆነን በማቴዎስ ወንጌል ላይ የተጻፈው ታሪክ እናነሳለን፤ አንድ ባለ ጸጋ ሰው ባሪያዎችን ጠርቶ ለአንዱ አምስት መክሊት ሰጠው፣ ሁለት መክሊት የሰጠውም አለ፣ አንድ መክሊትም የሰጠውም አለ፡፡ ከዚህ በኋላ ወደሩቅ አገር ሄደ፡፡ አምስት መክሊት የተቀበለውም ወጥቶ ወርዶ ሌላ አምስት አትርፎ ዐስር አደረገ፡፡ ሁለት የተቀበለውም አትርፎ አራት አደረገ፡፡ አንድ የተቀበለው ግን ሄዶ መሬቱን ቆፍሮ በሻሽ ጠቅልሎ የጌታውን መክሊት ቀበራት፡፡ ከብዙ ጊዜ በኋላ ጌታቸው መጥቶ ተቆጣጠራቸው፡፡ አምስት መክሊት የተቀበለው ቀርቦ ‹‹ጌታዬ አምስት መክሊት ሰጥተኸኝ ነበር፤ እነሆ አምስት አተረፍኩ አለው፡፡ ‹‹ገብር ኄር ወምእመን ዘበሁድ ምእምነ ኮንከ ዲበ ብዙህ እሰይመከ ባዕ ውስተ ፍስሐሁ ለእግዚእከ፤ አንተ ታማኝ ባሪያ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ፤ ወደ ጌታህ ደስታ ግባ›› አለው፡፡ ሁለት የተቀበለውም ቀርቦ ‹‹ጌታዬ ሁለት መክሊት ሰጥተኸኝ ነበር፤ እነሆ ወጥቼ ወርጄ ሌላ ሁለት አትርፌ አራት አድርጌአለሁ፡፡ አንተ ታማኝ በጎ አገልጋይ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ ወደ ጌታህ ደስታ ግባ›› አለው፡፡ አንድ መክሊት የተቀበለው ግን ቀርቦ ‹‹ጌታዬ አንተ ክፉና ጨካኝ ካልዘራህበት የምታጭድ ካልበተንህበት የምትሰበስብ እንደሆንክ ስለአወቅሁ መሬቱን ቆፍሬ ቀበርኋት እነኋት መክሊትህ አለው፡፡ አንተ ሰነፍ ባሪያ መክሊቴን በጊዜ ልትሰጠኝ በተገባህ ነበር፤ እኔም ወጥቶ ወርዶ ለሚያተርፍ በሰጠሁት ነበር፡፡ የዚህን መክሊት ውሰዱና አስር መክሊት ላለው ስጡት፡፡ላለው ይሰጡታል ይጨመርለታል፤ለሌለው ግን ያለውን ይቀሙታል፡፡ይህን ሰነፍ ባሪያ እጅ እግሩን አሥራችሁ ጽኑዕ ጨለማ ወደአለበት ውሰዱት፤ጩኸትና ጥርስ ማፋጨት ወዳለበትም ጨምሩት››አለ፡፡(ማቴ.፳፭፥፲፬-፳፭)",
          },
          {
            title: "ታማኝ አገልጋይ ማነው?",
            source: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
            link: "#",
            content:
              "ባለ ጸጋ የተባለው ጌታ ነው፤ መክሊት የተባለው ልዩ ልዩ የአገልግሎት ጸጋ ነው፡፡ ያተረፉት በሚገባ በታማኝነት ያገለገሉ ቅዱሳን ሰዎች ናቸው፤ መክሊቱን የቀበረው ደግሞ በታማኝነት በተሰጠው ጸጋ ማገልገል ሲገባው ያላገለገለ ነው፡፡ ጌታቸው ሊቆጣጠራቸው መጣ ማለት በዕለተ ምጽአት ለሁሉም በአገለገለው አገልግሎት ዋጋ ለመስጠት እንደሚመጣ ያሳየናል፡፡ ያገለገሉትን ወደ ጌታህ ደስታ ግባ አላቸው ማለት ታማኝ አገልጋዮች መንግሥተ ሰማያትን ይወርሳሉና፡፡ ሰነፎች ደግሞ ጥርስ ማፋጨት ስቃይ ጽኑዕ ጨለማ ባለበት ሲዖል መግባታቸውን የሚያሳይ ነው፡፡ ከላይ ያነሳነው የቅዱስ ወንጌል ቃል ‹‹ታማኝ አገልጋይ ማነው?›› ይህ እያንዳንዱ በአርዓያ እግዚአብሔር የተፈጠረ የሰው ልጅ ጥያቄ ነው፤ የዚህን አምላካዊ ጥያቄ መልስ መስጠት ከሰው ልጆች ይጠበቃል፡፡",
          },
        ],
      },
      content: {
        introduction: [
          "በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ስያሜ የዐቢይ ጾም ስድስተኛው እሑድ ወይም ሳምንት ገብር ኄር ይባላል፤ ስያሜውን የሰጠውም ኢትዮጵያዊ ሊቅ ቅዱስ ያሬድ ነው፡፡ ከአምስቱ መጻሕፍቶቹ አንዱ በሆነው ጾመ ድጓ የዐቢይ ጾም ሳምንታት ስያሜዎች ከነሥርዓተ ማኅሌቱ አዘጋጅቷል፡፡ ስለዚህ በስድስተኛው የዐቢይ ጾም ሳምንት ከዋዜማው ቅዳሜ ጀምሮ በቤተ ክርስቲያን የሚዘመረው ዝማሬ፣ የሚሰበከው ስብከት፣ የሚሰጠው ትምህርት ገብር ኄርን ወይም ታማኝ አገልጋይን የሚያወሳ ነው፡፡",
          "ለዚህም ምሳሌ እንዲሆነን በማቴዎስ ወንጌል ላይ የተጻፈው ታሪክ እናነሳለን፤ አንድ ባለ ጸጋ ሰው ባሪያዎችን ጠርቶ ለአንዱ አምስት መክሊት ሰጠው፣ ሁለት መክሊት የሰጠውም አለ፣ አንድ መክሊትም የሰጠውም አለ፡፡ ከዚህ በኋላ ወደሩቅ አገር ሄደ፡፡ አምስት መክሊት የተቀበለውም ወጥቶ ወርዶ ሌላ አምስት አትርፎ ዐስር አደረገ፡፡ ሁለት የተቀበለውም አትርፎ አራት አደረገ፡፡ አንድ የተቀበለው ግን ሄዶ መሬቱን ቆፍሮ በሻሽ ጠቅልሎ የጌታውን መክሊት ቀበራት፡፡",
          "ከብዙ ጊዜ በኋላ ጌታቸው መጥቶ ተቆጣጠራቸው፡፡ አምስት መክሊት የተቀበለው ቀርቦ ‹‹ጌታዬ አምስት መክሊት ሰጥተኸኝ ነበር፤ እነሆ አምስት አተረፍኩ አለው፡፡ ‹‹ገብር ኄር ወምእመን ዘበሁድ ምእምነ ኮንከ ዲበ ብዙህ እሰይመከ ባዕ ውስተ ፍስሐሁ ለእግዚእከ፤ አንተ ታማኝ ባሪያ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ፤ ወደ ጌታህ ደስታ ግባ›› አለው፡፡ ሁለት የተቀበለውም ቀርቦ ‹‹ጌታዬ ሁለት መክሊት ሰጥተኸኝ ነበር፤ እነሆ ወጥቼ ወርጄ ሌላ ሁለት አትርፌ አራት አድርጌአለሁ፡፡ አንተ ታማኝ በጎ አገልጋይ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ ወደ ጌታህ ደስታ ግባ›› አለው፡፡",
          "አንድ መክሊት የተቀበለው ግን ቀርቦ ‹‹ጌታዬ አንተ ክፉና ጨካኝ ካልዘራህበት የምታጭድ ካልበተንህበት የምትሰበስብ እንደሆንክ ስለአወቅሁ መሬቱን ቆፍሬ ቀበርኋት እነኋት መክሊትህ አለው፡፡ አንተ ሰነፍ ባሪያ መክሊቴን በጊዜ ልትሰጠኝ በተገባህ ነበር፤ እኔም ወጥቶ ወርዶ ለሚያተርፍ በሰጠሁት ነበር፡፡ የዚህን መክሊት ውሰዱና አስር መክሊት ላለው ስጡት፡፡ላለው ይሰጡታል ይጨመርለታል፤ለሌለው ግን ያለውን ይቀሙታል፡፡ይህን ሰነፍ ባሪያ እጅ እግሩን አሥራችሁ ጽኑዕ ጨለማ ወደአለበት ውሰዱት፤ጩኸትና ጥርስ ማፋጨት ወዳለበትም ጨምሩት››አለ፡፡(ማቴ.፳፭፥፲፬-፳፭)",
          "ባለ ጸጋ የተባለው ጌታ ነው፤ መክሊት የተባለው ልዩ ልዩ የአገልግሎት ጸጋ ነው፡፡ ያተረፉት በሚገባ በታማኝነት ያገለገሉ ቅዱሳን ሰዎች ናቸው፤ መክሊቱን የቀበረው ደግሞ በታማኝነት በተሰጠው ጸጋ ማገልገል ሲገባው ያላገለገለ ነው፡፡ ጌታቸው ሊቆጣጠራቸው መጣ ማለት በዕለተ ምጽአት ለሁሉም በአገለገለው አገልግሎት ዋጋ ለመስጠት እንደሚመጣ ያሳየናል፡፡"
        ],
        question: [
          "ከላይ ያነሳነው የቅዱስ ወንጌል ቃል ‹‹ታማኝ አገልጋይ ማነው?›› ይህ እያንዳንዱ በአርዓያ እግዚአብሔር የተፈጠረ የሰው ልጅ ጥያቄ ነው፤ የዚህን አምላካዊ ጥያቄ መልስ መስጠት ከሰው ልጆች ይጠበቃል፡፡"
        ],
        conclusion: [
          "ያገለገሉትን ወደ ጌታህ ደስታ ግባ አላቸው ማለት ታማኝ አገልጋዮች መንግሥተ ሰማያትን ይወርሳሉና፡፡ ሰነፎች ደግሞ ጥርስ ማፋጨት ስቃይ ጽኑዕ ጨለማ ባለበት ሲዖል መግባታቸውን የሚያሳይ ነው፡፡"
        ]
      },
    },
    kirstina: {
      heroDescription: "ወደ ክርስትና እምነት የሚያስገባ ቅዱስ ምሥጢር",
      about: {
        title: "ስለ ክርስትና",
        content: "አስቀድመን በሥጋ ከእናትና ከአባታችን በዘር በሩካቤ እንደተወለድንና የሥጋ ልጅነትን እንዳገኘን ሁሉ በማየ ገቦ ስንጠመቅ ከአብራከ መንፈስ ቅዱስ እንወለዳለን፡፡ ይህንን አስመልክቶ ጌታችን “ከሥጋ የሚወለድ ሥጋ ነው፥ ከመንፈስ የሚወለድ መንፈስ ነው” ብሎ ከማስተማሩ በፊት “ሰው ዳግመኛ ካልተወለደ በቀር የእግዚአብሔርን መንግሥት ሊያይ አይችልም” በማለት (ዮሐ 3፥3 እና 6) ስለ ልጅነት ጸጋና ስመ ክርስትና አስተምሯል፡፡ እንዲሁም “አባ አባት ብለን የምንጮኸበትን የልጅነትን መንፈስ ተቀበላችሁ...” (ሮሜ 8፥15-16) እና “ለተቀበሉት ሁሉ ... ልጆች ይሆኑ ዘንድ ሥልጣን ሰጥቶአቸው” (ዮሐ 1፥11-13) ተብሎ ተናግሯል፡፡ ስለዚህ ሁለት ልደታት አሉን፤ መጀመሪያ ከሥጋ እናትና አባታችን፣ ሁለተኛ ከእግዚአብሔር። ከተወለድን በኋላ እድገታችን በሁለቱም ወገን እንዲሆን ያስፈልጋል (ገላ 3፥26፣ ቲቶ 3፥5፣ 1 ጴጥ 1፥23)።"
      },
      howPerformed: {
        title: "የልጅነት ጥምቀት በምን ይፈጸማል?",
        content: "ልጅነት የምታሰጠው ጥምቀት አንዲት ናት (ኤፌ 4፥4-5)፣ ነገር ግን በሦስት ዋና መንገዶች ታገለግላለች። የውኃ ጥምቀት በተባረከ ውኃ እና በሥላሴ ስም በካህናት ይፈጸማል፤ በመንፈስ ቅዱስ ሥራ ከእግዚአብሔር እንወለዳለን (ዮሐ 3፥3-6)። ውኃው በጸሎት ሲባረክ የመንፈስ ቅዱስ መኖሪያ ይሆናል እና በእምነት የሚጠመቅ ከውኃና ከመንፈስ ይወለዳል። ጥምቀት የእግዚአብሔር ጸጋ መገለጫ ነው፤ ስለዚህ ድሀ ሰው እንኳ ውኃ አለው ስለዚህ በውኃ መጠመቅ ይገባል። የመንፈስ ጥምቀት (ሉቃ 3፥16፣ ሐዋ 1፥5፣ ሐዋ 2፥1-4፣ 1 ቆሮ 12፥13) እና የደም ጥምቀት የሰማዕታት ጥምቀት ናቸው፣ በመሞታቸው ልጅነት ይቀበላሉ።"
      },
      howCeremony: {
        title: "ጥምቀት እንዴት ይፈጸማል?",
        part1: `ተጠማቂው ንዑሰ ክርስቲያን ከሆነ መሠረታዊ የሃይማኖት ትምህርቶችን ተምሮ እምነቱ የተመሰከረለት መሆን አለበት። ሕጻናት የሆኑ እንደሆኑ ግን ለሕጻናቱ የክርስትና እናትና አባት ሊሆኑ የመጡት ሰዎች ስለሕጻናቱ እምነት መስክረውላቸው እንዲጠመቁ ይደረጋል። በሚጠመቅበት ጊዜ በውሃ ውስጥ ሶስት ጊዜ ብቅ ጥልቅ ማለት አለበት ፤ የክርስቶስ ሞትና ትንሳኤ ምሳሌ ነውና። ተጠማቂው የሚጠመቀው በአብ በወልድና በመንፈስ ቅዱስ ስም ነው (ማቴ 28 ፥ 19)። ተጠማቂዎች ባለትዳሮች ከሆኑና ቤተሰብም ካላቸው ሁሉም ተምረው አምነው በአንድነት መጠመቅ አለባቸው። ከተጠመቀ በኋላ መቁረብ (ቅዱስ ሥጋውንና ክቡር ደሙን መቀበል) ይገባል። ይህ ካልሆነ ጥምቀቱ ህያው አይሆንም።`,
        part2: `እንዲያጠምቁ ስልጣን ያላቸው ከክህነት ደረጃዎች ውስጥ ኢጲስቆጶስና ቀሳውስት ብቻ ናቸው፡፡ ይህም ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ የማጥመቅ ስልጣንን የሰጠው ለአስራ አንዱ ሐዋርያት ብቻ ስለሆነ ነው (ማቴ 28፡19)፡፡ ዲያቆናት እንዲያጠምቁ አልተፈቀደላቸውም (ማቴ 28፡19 እና ፍት ነገ አንቀጽ 3)። ክህነት በሌለው ሰው የተከናወነ ጥምቀት እንደ እጥበት እንጂ እንደ ጥምቀት አይቆጠርም፡፡ በዚህ መንገድ "የተጠመቀ" ሰው ልጅነት የምታስገኘዋን እውነተኛዋን ጥምቀት መጠመቅ አለበት፡፡ ጥምቀት በመድፈቅ ወይም በመንከር ነው እንጂ በመርጨት (በንዝሐት) አይፈጸምም፡፡ ምሳሌውን፣ ምስጢሩንና ሥርዓቱን ያፋልሳልና፡፡ ጥምቀት ማለት መነከር ማለት ስለሆነ ውኃ ውስጥ ገብቶ መውጣትን ያመለክታል፡፡ ስለዚህም በአብ በወልድ በመንፈስ ቅዱስ ስም ሦስት ጊዜ ውኃ ውስት ገብቶ በመውጣት ይከናወናል (ማቴ 28፡19)፡፡ በመጽሐፍ ቅዱስም የተገለጠው በመንከር የተከናወነው ጥምቀት ነው፡፡`,
        part3: `በሐዋርያት ሥራ ላይ "ሰረገላውም ይቆም ዘንድ አዘዘ፥ ፊልጶስና ጃንደረባው ሁለቱም ወደ ውኃ ወረዱ፥ አጠመቀውም። ከውኃውም ከወጡ በኋላ የጌታ መንፈስ ፊልጶስን ነጠቀው፤ ጃንደረባውም ሁለተኛ አላየውም፥ ደስ ብሎት መንገዱን ይሄድ ነበርና (ሐዋ 8፡38-39)" በሚለው ቃል ውስጥ "ከውኃ ከወጡ በኋላ" የሚለው የሚያመለክተው ጃንደረባው የተጠመቀው ውኃ ውስጥ ገብቶ እንደነበር ነው፡፡ "እንግዲህ ክርስቶስ በአብ ክብር ከሙታን እንደ ተነሣ እንዲሁ እኛም በአዲስ ሕይወት እንድንመላለስ፥ ከሞቱ ጋር አንድ እንሆን ዘንድ በጥምቀት ከእርሱ ጋር ተቀበርን። ሞቱንም በሚመስል ሞት ከእርሱ ጋር ከተባበርን ትንሣኤውን በሚመስል ትንሣኤ ደግሞ ከእርሱ ጋር እንተባበራለን (ሮሜ 6፡4-5 ቆላ 2፡12)" በሚለው ቃል ውስጥ መቀበር መቃብር ውስጥ መግባትን፣ ትንሣኤ ደግሞ ከመቃብር መውጣትን እንደሚያመለክት ጥምቀትም በውኃ ውስጥ ገብቶ (በመነከር) መውጣትን ይጠይቃል፡፡`,
        part4: `ሐዋርያው ቅዱስ ጳውሎስ "እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው በጽድቅ ስለ ነበረው ሥራ አይደለለም (ቲቶ 3፡5)" እንዲሁም "አሁንስ ለምን ትዘገያለህ? ተነሣና ስሙን እየጠራህ ተጠመቅ ከኃጢአትህም ታጠብ (ሐዋ 22፡16)" ተብሎ ለሳውል በተነገረው ቃል ውስጥ "መታጠብ" ሰውነትን በሙሉ ነውና ጥምቀትም በመነከር ይከናወናል፡፡ በአራቱም ወንጌላት የጌታችን ጥምቀትም በውኃ ውስጥ ገብቶ በመውጣት መሆኑ ተጽፏል፡፡ "ኢየሱስም ከተጠመቀ በኋላ ወዲያው ከውኃ ወጣ፤ እነሆም፥ ሰማያት ተከፈቱ የእግዚአብሔርም መንፈስ እንደ ርግብ ሲወርድ በእርሱ ላይም ሲመጣ አየ (ማቴ 3፡16)" በሚለው ቃል ውስጥ "ከውኃ ወጣ" የሚለው የጌታችን ጥምቀት የተከናወነው በመነከር እንደነበር ያሳያል፡፡ መረጨት ወይም ማፍስስ ውኃ ውስጥ ገብቶ መውጣትን አይጠይቅምና፡፡ በተጨማሪም በሥጋ መወለድ በእናት ማኅፀን ውስጥ ቆይቶ መውጣትን የሚያመለክት እንደሆነ ሁሉ "ከውኃና ከመንፈፈስ ቅዱስ መወለድም" እንዲሁ ውኃ ውስጥ ገብቶ መውጣትን (መነከርን) ይጠይቃል፡፡ ስለዚህም ነው ጥምቀት "ዳግመኛ መወለድ" የተባለው (ዮሐ 3፡3)፡፡`
      },
      naming: {
        title: "ስመ ክርስትና (የክርስትና ስም)",
        content: `ስም አንድ ሰው ከሌላው ተለይቶ የሚታወቅበት ነው። ሰው ከእናትና ከአባቱ ሲወለድ ስም እንደሚወጣለት ሁሉ በጥምቀት ከውኃና ከመንፈስ ቅዱስ ሲወለድም ስም ይወጣለታል፡፡ ስለዚህ አንድ ክርስቲያን ሁለት ዓይነት ስሞች ሊኖሩት ይችላል። አባትና እናት የሚያወጡለት ስም የተጸውኦ ስም ይባላል፡፡ በጥምቀት ጊዜ የሚወጣለት ስም ደግሞ የክርስትና ስም ይባላል፡፡ በጥምቀት ሀብተ ወልድና ስመ ክርስትና ይገኝበታል፡፡ በክርስቶስ የሚያምን ሰው ክርስቲያን ሲባል እምነቱ ደግሞ ክርስትና ይባላል። ክርስቲያን ማለት የክርስቶስ ወገን የሆነ ማለት ነው። በመሆኑም በክርስቶስ አምነን በሥላሴ ስም መጠመቃችንን የሚገልጸው ስም ስመ ክርስትና ይባላል። ስያሜውም ተጠማቂው ከተጠመቀበት ዕለት ጋር ተያይዞ ሊሰየም ይችላል። በመንፈሳዊ አገልጎት ስንሳተፍ ስመ ክርስትናችንን እንጠቀማለን፡፡ የክርስትና ስም መጽሐፍ ቅዱሳዊ ትውፊት ያለው ነው፡፡ ይህም እግዚአብሔር አብራምን አብርሃም፣ ያዕቆብን እስራኤል፣ ሰምዖንን ጴጥሮስ፣ ሳውልን ጳውሎስ እንዲባል እንዳደረገው ያለ ነው፡፡`
      },
      baptismAge: {
        title: "ለጥምቀት የተወሰነ ዕድሜ",
        part1: `በሐዋርያት ስብከት ያመኑና በማንኛውም የዕድሜ ክልል የሚገኙ ሁሉ ይጠመቁ ነበር (የሐ ሥራ 16፡ 15 1ቆሮ 1፡15) ። በኋላ ግን ወላጆቻቸው ሊያስተምሯቸው ቃል እየገቡ ልጆቻቸውን ወንዶችን በአርባ ሴቶችን በሰማንያ ቀናቸው ማጥመቅ ተጀመረ። ለዚህም መሠረቱ የእስራኤል ልጆች በተወለዱ ወንድ በአርባ ሴት በሰማንያ ቀናቸው ወላጆቻቸው መባዕ (ስጦታ) ይዘውላቸው ወደ ቤተ መቅደስ እየሄዱ በእስራኤልነት (የዜግነት) መዝገብ እያስመዘገቡ የተስፋዋ ምድር ከነዓን ባለመብቶች (ወራሾች) ያደርጓቸው እንደነበረ ነው (ዘሌ 12፡1-10)፡፡`,
        part2: `አዳም በተፈጠረ በ40 ቀኑ፣ ሔዋንም በተፈጠረች በ80 ቀኗ ወደ ርስታቸው ገነት እንደገቡ ሕጻናትም በ40 እና በ80 ቀናቸው ተጠምቀው የሰማያዊት ኢየሩሳሌም አምሳል ወደሆነችው ወደ ቤተክርስቲያን ይገባሉ፡፡`,
        part3: `በኦርቶዶክሳዊት ቤተክርስቲያን ህጻናት ወላጆቻቸው እንዲሁም ክርስትና እናት ወይም አባት ሃይማኖታቸውን ሊያስተምሯቸው ሃላፊነት ወስደው የክርስትና አባት ወይም እናት በተጨማሪ ቃል ገብተው ክርስትና በመነሳት (በመጠመቅ) የወላጆቻቸውን ርስት መንግስተ ሰማያትን ይወርሳሉ። ከአርባ እና ከሰማንያ ቀን በኋላ የሚመጡ ተጠማቂዎች ግን ሃይማኖታቸውን ተምረው ካመኑ በኋላ በማንኛውም የዕድሜ ክልል መጠመቅ ይችላሉ ። በሕይወት እስካሉ ድረስ መቸም ቢሆን ከመጠመቅ የሚያግዳችው ነገር የለም ።`
      },
      godparents: {
        title: "የክርስትና አባትና እናት",
        content: `በ40 እና በ80 ቀናቸው ለሚጠመቁ ሕጻናት ስለ እኝነታቸው ባለው ነገር ሁሉ ኃላፊነት የሚወስዱ የክርስትና አባትና እናት እንዲኖራቸው ያደረጉት በ4ኛው መ/ክ/ዘ የነበረው የቤተ ክርስቲያናችን የመጀመሪያው ኢጲስ ቆጶስ አባ ሰላማ ከሳቴ ብርሃን ናቸው። ዓላማውም መንፈሳዊ ዝምድናን (አበ ልጅነትን) ማጠናከሪያ መንገድ ነው። በአበ ልጅነት የተዛመዱ ሰዎች በጋብቻ መዛመድ አይችሉም። በሥጋ የተዛመዱ ከ7ተኛ የዝምድና ሐረግ በኋላ መጋባት የሚፈቀድ ሲሆን በአበ ልጅ ግን የተዛመደ ግን የቁጥር ገደብ የለውም (ፈጽሞ መጋባት አልተፈቀደለትም)፡፡ ይህም የሚያሳየው ከሥጋ ዝምድና ይልቅ ክብር የሚሰጠው ለመንፈሳዊ ዝምድና መሆኑን ነው።`
      },
      godparentsRestrictions: `ከክርስትና አባትነትና እናትነትን የሚከለክሉ ነገሮች አሉ፡፡ እነዚህም የሥጋ ዝምድና ያላቸው፣ የጋብቻ ዝምድና ያላቸው፣ ዕድሜያቸው ለማስተማር ለማሳመን ያልደረሰ፣ እምነት ትምህርት ችሎታ የሌላቸው፣ እምነታቸው ከተጠማቂው ጋር ተመሳሳይ ያልሆነ ናቸው፡፡ የጾታ ሁኔታ በተመለከተ ወንድ ወንድን ሴት ሴትን ያነሣል እንጂ ወንድ ሴትን፣ ሴት ወንድን ክርስትና ማንሣት አይፈቀድላቸውም፡፡ የክርስትና አባትና እናት ክርስትና ያነስዋቸው ልጆች በሥጋ ከወለድዋቸው ልጆች ሳይለዩ፣ ሕጻናቱ ዕድሜያቸው ለትምህርት ሲደርስ መሠረታዊ የሃይማኖት ትምህርት የማስተማር ግዴታ እንዳለባቸው ቃል ይገባሉ። በገቡት ቃል መሠረት በተግባር የመተርጎም ኃላፊነት አለባቸው።`,
      maeteb: {
        title: "ማዕተብ (ክር) ማሰር",
        part1: `ማዕተብ የሚለው ቃል ዐተበ ካለው የግእዝ ግሥ የተገኘ ሲሆን ትርጉሙም አመለከተ ማለት ነው። ስለዚህ ማዕተብ ማለት ምልክት ማለት ነው። በሃይማኖት አምነው ለተጠመቁ ክርስቲያኖች የሚሰጥ ምልክት (መታወቂያ) ወይም ማኅተም ነው። ስለ ማዕተብ በመጽሐፍ ቅዱስ የተለያየ ምሳሌዎች ተጠቅሰዋል። በብሉይ ኪዳን የነበሩ አባቶች ለእምነታቸው መገለጫ ምልክት ነበራቸው። ለምሳሌ ለአበ ብዙኃን አብርሃም ግዝረት ተሰጥቶት ነበር (ሮሜ 4፡13 ፡ ዘፍ 17፡9-14)። ማዕተብ ክርስቶስ በገመድ መታሰሩንና መጎተቱን የሚያስታውስ ምልክትም ነው፡፡ "ክርስቶስ ደግሞ ፍለጋውን እንድትከተሉ ምሳሌ ትቶላችሁ ስለ እናንተ መከራን ተቀብሎአልና (1ኛ ጴጥ 2:21)።" እንተባለ የክርስቶስን መከራ እናስብበታለን (ዮሐ 18፡12-24)`,
        part2: `ማዕተብ በሦስት ዓይነት ቀለም መሆኑ የሦስትነት (የሥላሴ) ምሳሌ ነው። ሦስቱ ክሮች ደግሞ በአንድ ተገምደው መሠራታቸው የአንድነቱ ምሳሌ ነው። ክርስቲያን ማዕተብ በማሰሩ ስለ ክርስቲያንነቱ ሳያፍር ይመሰክርበታል፤ አጋንንትን ድል ይነሣበታል፡፡ ተጸልዮበት ተባርኮ የሚታሠር ነውና ከቤተክርስቲያን በረከት ያገኝበታል፡፡ ማዕተብ ማሰርን ያስጀመረው ቅዱስ ያዕቆብ ዘእልበረዳኢ ክርስቲያኖችን ከመናፍቃን ለመለየት ማዕተብ ያስርላቸው እንነበር በመጻሕፍት ተጽፏል፡፡`
      },
      visibleGrace: {
        title: "የሚታይ አገልግሎት፤ የማይታይ ጸጋ",
        content: `በምስጢረ ጥምቀት የሚታይ አገልግሎት ተጠማቂው ውሃ ውስጥ ብቅ ጥልቅ ሲል፤ ሥርዓተ ጸሎቱ ሲከናወን፤ ተጠማቂው ነጭ ልብስ ሲጎናጸፍ፣ ማዕተብ ሲያስር ወይም ሲታሰርለት ወዘተ... ነው፡፡ ይህ የዓይኖቻችን የምናየው ነው፡፡ በምስጢረ ጥምቀት የሚሰጥ የማይታይ ጸጋ ደግሞ ውኃው ወደ ማየ ገቦ ሲለወጥ፣ ተጠማቂው የእግዚአብሔር ልጅነት ሲያገኝ፣ የመንፈስ ቅዱስ ጸጋ፣ ንጽሕናና ቅድስና ሲሰጥ ነው፡፡ ምስጢረ ጥምቀት በሚታይ አገልግሎት የማይታይ ጸጋ የሚሰጥበት ልዩ ምስጢር ነው፡፡`
      },
      formLink: {
        label: "የክርስትና ቅጽ መግቢያ:",
        linkText: "ወደ የክርስትና ቅጽ ይሂዱ"
      },
      serviceDetails: {
        when: {
          title: "መቼ",
          description: "በየሰንበት ከቅዳሴ በፊት"
        },
        duration: {
          title: "የሚወስደው ጊዜ",
          description: "በግምት አንድ ሰዓት"
        },
        participants: {
          title: "ተሳታፊዎች",
          description: "ወላጆች፣ የክርስትና አባት/እናት እና ልጁ"
        }
      }
    },
    sirateKidase: {
      title: "ሥርዓተ ቅዳሴ",
      heroDescription: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዋና የአምልኮ አገልግሎት",
      definition: {
        title: "ሥርዓተ ቅዳሴ ምንድን ነው?",
        content: `ቅዳሴ ማለት "ቀደሰ፣ ባረከ፣ አመሰገነ፣ አከበረ፣ ማለት ሲሆን የቃሉም ትርጉም መቀደስ- መመባረክ ማመስገን ማለት ነው _ ሥርዓተ ቅዳሴ የሚለውን በአንድ ትንፋሽ
                አንብበን _ ስንተረጉመው የምስጋና _ መርሐ _ ግብር (የምስጋና ሥርዓት) ማለት ይሆናል። ሥርዓተ ቅዳሴ ሥርዓተ ጸሎተ ቍርባን ይባላል፡፡`
      },
      schedule: {
        title: "የአገልግሎት መርሃ ግብር",
        days: { sunday: "እሁድ", wednesday: "ረቡዕ", saturday: "ቅዳሜ" }
      },
      division: {
        title: "የሥርዓተ ቅዳሴ አከፋፈል",
        intro: "በአጠቃላይ ሥርዓተ ቅዳሴ (የጸሎተ ቍርባን ሥርዓት) በሦስት ይከፈላል-",
        part1Title: "የቅዳሴ ዝግጅት ክፍል",
        part1Content: `የመጀመሪያው ክፍል የቅዳሴ ዝግጅት ክፍል ወይም ግብዓተ መንጦላእት፣ ወይም ሥርዓተ ግብጽ ይባላል፡፡ ይህም "ኦ እንየ በዝንቱ ልቡና" ወንድሜ ሆይ በተሰበሰበ ልቡና ጽና(ሁን) ካለው ጀምሮ "ሚ መጠን ዛቲ _ዕለት ግርምት" ይህች ዕለት ምን የምታስፈራ ናት እስከሚለው ያለው ነው፡፡`,
        part2Title: "የትምህርተ ወንጌል ክፍል",
        part2Content: `ሁለተኛ ክፍል የትምህርተ ወንጌል የምክርና የምስጋና ክፍል ሲሆን በተለምዶ ሥርዓተ ቅዳሴ ይባላል። በዚህ የሥርዓተ ቅዳሴ ክፍለ ጊዜ ውስጥ ከቅዱስ ወንጌል÷ የቅዱሳን የነቢያት ትንቢትና የሐዋርያት _ መልእክታት እንዲሁም የከበረ የጌታ ቅዱስ ወንጌል ይነበባል የተረጎማል፡፡`,
        part3Title: "ፍሬ ቅዳሴ",
        part3Content: `ሦስተኛ ክፍል ኅብስቱ ወደ ሥጋ አምላክ ወይኑ ወደ ደመ መለኮት የሚለወጥበት፤ የጸሎትና የምስጋና ክፍለጊዜ ነው፡፡ በተለይም በዚህ የጸሎት ክፍለ ጊዜ ከምስጋና ሁሉ የተመረጠ ልዩ ምስጋና "ኀበነ ንህበር በዘዚአከ መንፈስ ቅዱስ" የባህርይ ሕይወትህ መንፈስ ቅዱስን ሰደህ፤ ይህን ሕብስት ይህን ወይን  ለውጠህ፤ ነፍስ የተለየው መለኮት የተዋሐደው ትኩስ ሥጋህን ትኩስ ደምህን አድርገህ፤ ከአንተ ጋር አንድ እንሆን ዘንድ አንድ መሆንን ስጠን፤ ብሎ ከህኑ ሲያመሰግን ርዕደተ መንፈስ ቅዱስ (የመንፈስ ቅዱስ መውረድ) ይሆናል፡፡ ሕብስቱ ተለውጦ ሥጋ አምላክ ወይኑ ተለውጦ ደመ መለኮት ይሆናል፡፡ በጥቅሉ ይኸው የጸሎተ ቅዳሴ ክፍለ ጊዜ ፍሬ ቅዳሴ በመባል ይታወቃል፡፡`
      },
      list: {
        intro: "የጸሎት ክፍል የሚተገበርበት እንደ ቤተ ክርስቲያናችን ሥርዓት አሥራ አራት ቅዳሴያ አሉን እነርሱም:",
        items: [
          "ቅዳሴ ዘሐዋርያት",
          "ቅዳሴ እግዚእ",
          "ቅዳሴ ማርያም",
          "ቅዳሴ ዘዮሐንስ ወልደ ነጓድጓድ",
          "ቅዳሴ ዘሠለስቱ ምዕት",
          "ቅዳሴ ዘአትናቴዎስ",
          "ቅዳሴ ባስልዮስ",
          "ቅዳሴ ጎርጎርዮስ",
          "ቅዳሴ ዘኤጲፋንዮስ",
          "ቅዳሴ ዘዮሐንስ አፈወርቅ",
          "ቅዳሴ ዘቄርሎስ",
          "ቅዳሴ ዘያዕቆብ ዘሥሩግ",
          "ቅዳሴ ዘዲዮስቆሮስ",
          "ቅዳሴ ጎርጎርዮስ ካልዕ"
        ]
      },
      history: {
        title: "ሥርዓተ ቅዳሴን ማን ጀመረው?",
        content: `ሥርዓተ ቅዳሴን (ሥርዓተ ጸሎተ ቁርባንን) የመሠረተው (የጀመረው) ሊቀካህናት ኢየሱስ ክርስቶስ ነው፡፡ መድኃኒታችን ኢየሱስ ክርስቶስ ሐሙስ ማታ በብሉይ ኪዳኑ ሥርዓት
                ከደቀ መዛሙርቱ ጋር በበዓለ ፋሲካው ማዕድ ተቀምጦ÷ በግዐ ፋሲካውን · ከተመገቡ በኋላ÷ ለደቀ መዛሙርቱ ስለእናንተና ስለብዙዎች ቤዛ የሚፈተትና የሚሰጥ ሥጋዬ ይህ
                ነው እንኩ ብሎ ቅዱስ ሥጋውን፧ እንዲሁም ጽዋውን አንስቶ አመስግኖ አክብሮ "ስለእናንተ ስለዓለሙ ሁሉ የሚፈሰው አዲስ ሥርዓት ሆኖ የሚሰጠው ደሜ ይህ ነው፤ ብሎ ክቡር
                ደሙን በለጋስነቱ – ሰጥቷቸው፤ እንዲህም _ አድርጉ ብሎ _ ሥርዓተ _ ቅዳሴውን መሠረተ፡፡ ሥርዓቱንም በተግባርና በትምህርት አስተማራቸው፡፡ ጸሎተ ቍርባንን አከናወነ
                (ማI:.26 ቁ26-28፣ ማር.14 ቁ 17- 25፣ Λ.Φ.22 14-38: Ph.6 56-59 1.11 23-26)`,
        extra1: `ይህም የቅዳሴውም ሥርዓት ለመጀመሪያ ጊዜ የተከናወነው የመጀመሪያው የዘመነ ወንጌል ቤተ መቅደስ በነበረው ዓልአዛር በተባለው ደገኛ ሰው ቤት ነበር።`,
        extra2: `ዛሬ የምንቀድሰውን የሥርዓተ ቅዳሴ ቅደም ተከተሉን ያሰባሰበው ቅዱስ ባስልዮስ ዘቂሳርያ ነው::`
      },
      firstCelebrants: {
        title: "የመጀመሪያዎቹ አስቀዳሾች እና ቆራቢዎች",
        content: "የዚህ ጸሎተ ቅዳሴ (ሥርዓተ ጸሎተ ቁርባን) የመጀመሪያ ዎቹ አስቀዳሾችና ቆራቢዎች የነበሩት ቅዱሳን ሐዋርያት ነበሩ፡፡ ጌታ የጸሎተ ቍርባኑ ሰዓት ባደረሰ ጊዜ ጸሎተ ቅዳሴውን ለማ ከናወን ከዐሥራ ሁለቱ ሐዋርያት ጋር በማዕድ ተቀመጠ፡፡",
        extra1: "ደቀመዛሙርቱ ሥርዓተ ቅዳሴውን አስቀድሰው ቅዳስ ቁርባንን ከተቀበሉ በኋላ ለቅዱስ ሥጋህናግ ለክቡር ደምህ ስላበቃኸን ክብር ምስጋና ይግባህ ብለው አመሰገኑ፤ ካመሰገኑ ከዘመሩ በኋላ ወደ ደብረ ዘይት ወጡ፡፡ (ማቴ26 ቁ30)",
        extra2: "በዛሬዋም ቅድስት ቤተክርስቲያን ለጸሎተ ቅዳሴ የእምንሰበሰበው ከዚሁ ተነሥተን ስለሆነ በጸሎተ ቁርባኑ እናመሰግነዋለን ቅዱስ ሥጋህንና ክቡር ደምህን ለመብላትና ለመጠጣት በቸርነትህ ስላበቃኸን ብለንም እናከብረዋለን፤ እናገነዋለን፡፡",
        extra3: "ስለዚህም ነው ለሥጋወደሙ የበቁና የተዘጋጁ ቅዱስ ቁርባኑን በሚቀ በሎት ሰዓት \"እስመ ኃያል ኣንተ እኩት ወስቡህ ወለከ ስብሐት ለዓለመ ዓለም\" ቅዱስ ሥጋህንና ክቡር ደምህን ቆርሰህ ገምሰህ የዘለዓለም ሕይወትን እናገኝ ዘንድ እንኩ ብሉ ጠጡ ብለህ በለጋስነት የሰጠኸን አንተ ኃያል ነህና ገናና ነህና ክቡር መባል ምስጉን መባል ይገባሃል እያልን የምንዘምረው፡፡ ይህም ዝማሬ ያንጊዜ ሐዋርያት ቅዱስ ቁርባኑን ከተቀበሉ በኋላ እንደ ዘመሩት ያለ ዝማሬ ነው፡፡"
      },
      mainPurpose: {
        title: "የሥርዓቱ ዋና ዓላማ",
        content: "የመሥዋዕተ ኦሪት ምግብና መፈጸሙን መጠናቀቁን በምትኩ የሐዲስ ኪዳን የዘለዓለም ሥርዓት የወንጌል መሥዋዕት የሆነውን ከእመቤታችን የነሣውን ቅዱስ ሥጋውንና ክቡር ደሙን ቆርሶና ገምሶ በቸርነቱና በለጋስነቱ ለሚያምኑበት እና እንዲሁም የዘለዓለምን ሕይወትን ለሚናፍቁ ሁሉ እንካችሁ ብሉ ጠጡ ብሎ ከመ ስጠት ጋር ለአበው ሐዋርያት _ ለተከታዮቻቸው ሥርዓቱን ለማስ ተማርና ለመፈጸም ነው፡፡",
        extra1: "እንዲህ ብሎ \"ሰው ከዚህ እንጀራ ቢበላ ለዘለዓለም ይኖራል፡፡ ሥጋዬንም የሚበላ ደሜንም የሚጠጣ የዘለዓለም ሕይወት አለው\" (h.6 51-59)::",
        extra2: "ክብር ምስጋና ይግባውና የዘለዓለም ሕይ ወት የሚገኝበትን የጸሎተ ቍርባን ሥርዓት ለመሳተፍ (ቅዳሴ ለማስቀደስ) ወደ ቤተክርስቲያን በሄድን ጊዜ ከደቀመዛሙርቱ እንደ አንዱ ደቀ መዝሙር (እንደ አንዱ ሐዋርያ) ሊቀ ካህናት ኢየሱስ ክርስቶስ እንደመረጠንና እንደጠራን ሳንዘነጋ \"በእግዚአብሔር ማደሪያ ቤት መኖር እንዴት እንደሚገባህ ታውቅ ዘንድ እጽፍልሃለሁ\" (1ኛ ጢሞ.3 ቁ.15) ብሎ ሐዋርያው ለልጁ ጢሞቶዎስ እንደመከረው እኛ ም እንደሚከተለው የሥርዓተ ቅዳሴውን ሥርዓት አውቀን፤ በቤተ እግዚአብሔር እንዴት መኖር እንዳለብን እንማማራለን፡፡ ያለ ሥር ዓት የሚሄዱትን ገሰጿቸው ብሎናልና (2ኛ ተሰሎ.5 ቁ 14)፡፡"
      },
      preparation: {
        title: "የሚደረግ ዝግጅት",
        content: "ብርሃነ ዓለም ሐዋርያው ቅዱስ ጳውሎስ 'ሁሉም ነገር በአ ግባቡና በሥርዓቱ ይሁን' 1ኛ ቆሮ.14:40 ብሎ እንደመከረን÷ ሥርዓ ትን መማ ርና በሥርዓት መመራት ተገቢ ነው፡፡ ስለሆነም ወደ ቅድስት ቤተክርስቲያን በተለይ በዕለተ ሰንበት÷ በዓበይት በዓላት÷ በቅዱሳን ክብረ በዓላት ቅዳሴ ለማስቀደስ፣ ቁርባን ለመቁረብ፣ ከጸሎተ ቅዳሴው በረከትን ለማግኘት ወደ ቅድስት ቤተክርስቲያን ስንመጣ፦ የሚከተለውን ማድረግ ይጠበቅብናል::",
        sections: [
          {
            title: "ሀ. የሕሊና ዝግጅት ማድረግ",
            paragraphs: [
              "ወደ እግዚአብሔር ፊት ስንቀርብ በጎ ሕሊና እንዲኖረን ያስፈልጋል፡፡ (የሐ.ሥ.23 ቁ1) (ሮሜ13 ቁ5) አምላካችን እግዚአ ብሔር ልጄ ሆይ ልብህን ስጠኝ ይለናልና (ምሳሌ. 23 ቁ 26)",
              "ስለዚህም ወደ ቤተክርስቲያን ከመምጣ ታችን አስቀድሞ በሰንበት ዋዜማ (የልቡና) ዝግጅትን ማድረግ ጸሎተ ቅዳሴውን ለመከታተል ይረዳል፡፡ ይህንን ስንል ስድስቱን ዕለታት በሥራ የባከነውን ልቡናችንን ሰብሰብ አድርጎ ማሳረፍና ወደ ቤተመቅደስ እንዴት መግባት አለብኝ ብሎ ማሰብ ነው፡፡ ወደ ቤተ መቅደሱ በጥንቃቄ ሆነን መግባት አለብን፡፡ በጥንቃቄ መግባት እንዳለብን 'ወደ ቤተ እግዚአብሔር በገባህ ጊዜ እግርህን ጠብቅ' (መክ.5 ቁ1)",
              "አሳባችንን ለመሰብሰብ እና ለበጎ ሥራ እንድንዘጋጅ ከሚረዱን ጥቂቶቹን ብንጠቅስ፦ ሐዋርያው 'የእግዚአብሔር ሰው ፍጹምና ለበጎ ሥራ ሁሉ የተዘጋጀ ይሆን ዘንድ የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ ለትምህርትና ለተግሳጽ ልብን ለማቅናት በጽድቅም ላለው ምክር ደግሞ ይጠቅማል' (2ኛጢሞ.3 ቁ.12-16)"
            ],
            list: ["ቅዱሳት መጻሕፍትን ማንበብ፡፡ (ሮሜ.15 ቁ4-5)"]
          },
          {
            title: "ለ. የሰውነታችንን ንጽሕና መጠበቅ",
            paragraphs: [
              "ተፈጥሮአዊ አካላችን ጥሩ ጠረን እንዲኖረው ሰውነታችን በሰንበት ዋዜማ በመታጠብ መዘጋጀት የራሳችንን ንጽሕና ከመጠ በቅ አልፎ እግዚአብሔር ንጹሐ ባህርይ ስለሆነ ወደሱ በአክብሮት በመቅረብ ባደረግነው ዝግጅት ዋጋ እናገኝበታለን፡፡",
              "ከፈጣሪያቸው ጋር ለመገናኘት የሹትን ቤተ እሥራኤልን ሙሴም እንዲህ ብሎ እንዲዘጋጁ አዘዛቸው፡'ሰውነታቸውን አነጹ ሕዝቡም ልብሳቸውን አጠቡ' (ዘጸአት 19፡15)"
            ]
          },
          {
            title: "ሐ. መንፈሳዊ አለባበስ ሥርዓትን መጠበቅ",
            paragraphs: [
              "የሰውነታችንን ንጽሕና ከመጠበቅ ጋር የአለባበስ ሥርዓትን መጠበቅ ይገባል፡ቅዳስ ያዕቆብ የቅድስት ቤተክርስቲያን አምሳል ወደ ምትሆን ወደ ቤቴል መሥዋዕት ይሠዋ ዘንድ ትዕዛዝ በደረሰው ጊዜ ቤተሰቡን 'ንጹሕ ሁኑ ልብሳችሁንም ለውጡ' ብሎ አዟቸ ዋልና፡፡ (ዘፍ.35 ቁ2)",
              "'ተሰአሎ ለአቡከ ወይነግረከ' እንዳለው (ዘዳ.32 ቁ.7) ሙሴ ከአበው የመንፈሳዊ ስልጣኔ መሰረቶችን ጠይቆ አውቆ _ እነርሱን ምሳሌ በማድረግ ለቤተ እግዚአብሔር የሚለበስ የተለየ የቤተክርስቲያን ልብስ ቢኖረን ይመረጣል፤ የተለየ የሰንበት ልብስ ባይኖረን ያን ያለንን አጥበን አጽድተን ለብሰን ብንሄድ መልካም ነው፡፡",
              "በተጨማሪ በተለይ በዕለተ ሰንበት በአጋጣሚ ምክንያት ካልሆነ በቀር ጃኬት ብቻ÷ ሸሚዝ ብቻ ለብሶ ወደ ቤተ ክርስቲያን መሄድ እጅግም አያስመሰግን፡፡ (ማቴ.22 ቁ12)",
              "እንደዚሁም ሁሉ ቅድስት ቤተክርስቲያን ደግሞ መንፈሳዊ ተድላ ደስታ የምንቋደስበት፣ ነውርና ነቀፋ የሌለበት የመርዓዊ ንጉሥ ክርስቶስ ንጽሕት የሠርግ ቤት ስለሆነች አባቶችና ወንድ ሞች ኩታቸውን፣ ጋቢያቸውን ደረብ አድርገው፣ መስቀለኛ አጣፍ ተው አደግድገው እናቶችና እኅቶችም እንደዚሁ ባህላዊ ልብሳቸውን ለብሰው፣ ከፈጣሪያቸው ፊት በሰማያውያን መላእክት አምሳል ለምስጋና ቢቆሙ፣ ለእግዚአብሔርም ክብር ነው፡፡ ለአስቀዳሾችም ሞገስ ነው፡፡"
            ]
          },
          {
            title: "መ. ወርኀዊ ልማደ አንስት በተከሠተ ጊዜ መታቀብ",
            paragraphs: [
              "እናቶችና እኅቶች ወርኃዊ ልማደ አንስት በተከሠተ ጊዜ ወደ ቅድስት ቤተክርስቲያን ውስጥ በመግባት ራስን ለቁርባን መብቃትና ለቅዳሴ እንዲሁም ሥርዓተ አምልኮ ለመፈጸም እራስን ማዘጋጀት አግባብ አይደለም፡፡ ፍትሐ ነገ አን. 14፡5631፡ ምክንያቱም የቤተክርስቲያንን ንጽሕና ለመጠበቅ ሲባል ነው፡፡",
              "እንደሚታወቀው ቤተክርስቲያን ንጹሕ የአምልኮ ሥፈራ ስለሆነች ከቆ ምንበት ስፍራ ጀምሮ መሬቱን ስመን ተሳልመን ለፈጣሪያችን ያለንን ፍቅር ከመግለጽ ጋር ፍጹም በረከትን እናገኛ ለን ብለን እናምንበታለን፡ስለሆነም አንድ አንድ ጊዜ ይህ ወርሃዊ ክስተት አንድ አንድ እናቶች እህቶች ላይ ከሚጠበቀው በላይ እየሆነ ለመቆጣጠር ስለሚቸገሩ ከዚህ የተነሳ የሌላውን ክርስቲያን ሃይማኖታዊ ስሜቱን ለማክበር አና በስነ ልቦናው ጉዳት እንዳ ይደርስበት ሲባል ነው እንጂ እንደ ብሉይ ኪዳኑ ሥርዓት ወርኀዊ ልማድ እንደ መርገም ተቆጥሮ አይደለም፡፡",
              `እንዲህ ብሎ ማሰብ በራሱ ኃጢአትም ነው፤ ክህደትም ነው፡፡ እንዲህ ብሎ የሚያስብ ቢኖር እንኳ ቅዱስ ኤፍሬም "ዲያብሎስ ያሳታት ሔዋንን ነጻ አደረጋት" _ ሔዋንን ከመርገመ ሥጋ ከመርገመ ነፍስ ነጻ ካደረጋት ልጅሽ ጽንዕት በድንግልና ሥርጉት በቅድስና እመቤታችን ጸጋውን ክብሩን እንዳይነሳን፤ ለምኝልን አእምሮውን ጥበቡን ሳይብን፤ አሳድሪብን፤ ብሎ እመቤታችንንም ባላመሰገናት ነበር፡፡ በዚህም ምስጋናው ሔዋን የስሕተት ምክንያት ስለሆነች ፈጽሞ አላዳናትም የሚሉ የመናፍቃንን በር ዘግቶባቸዋል።`
            ]
          }
        ]
      },
      rules: {
        title: "ሥርዓተ ቅዳሴ ላይ ልንጠነቀቅባቸው ከሚያስፈልጉን ነገሮች",
        sections: [
          {
            title: "ሀ. መውጣትና መግባትን በተመለከተ",
            items: [
              "ሥርዓተ ቅዳሴው ከተጀመረ በኋላ ቤተክርስቲያን ውስጥ መግባት ወይም ከቤተክርስቲያን ውስጥ ወጥቶ መሄድ አይፈቀድም፡፡ ነገር ግን ጸሎተ ቍርባኑ¸ እስኪፈጸም ድረስ የማይቆይ ከሆነ አስቀድሞ ራስን መለየት ይገባል። (ፍት. መን.አን 12፡478) እንዲህም ሲባል ግን በከባድ ችግር እና ትዕግስት በሚያሳጣ ድንገተኛ ሕመም ምክንያት ከሆነ እንደችግሩ በቀስታ ሆኖ ሌላውን አስቀዳሽ በማይረብሽ ሁኔታ ራስን ማግለል ይቻላል፡፡",
              "ጸሎተ ቅዳሴው ከተጀመረ በኋላ ዲያቆኑ እትዉ በሰላም እሾህ ሳይወጋችሁ እንቅፋት ሳይመታችሁ በሰላም ወደቤታችሁ ሂዱ ብሎ ሳያሰናብት ወጥቶ መሄድ አይገባም፡፡ (ፍት. መን.አን. 12: N. 92)"
            ]
          },
          {
            title: "ለ. ምራቅን ጺቅ ማለት አግባብ አለመሆኑ",
            items: [
              "በሥርዓተ ቅዳሴው ውስጥ ሳለን ምራቅን ጺቅ ማለት ክልክል ነው፡፡ (ፍት.መን.አን. 12፡. 476)"
            ]
          },
          {
            title: "ሐ. ስለ ግል ጸሎት",
            items: [
              "በቤተክርስቲያን ውስጥ ጸሎተ ቍርባኑ ከተጀመረ በኋላ መጽሐፍ ዘርግቶም ሆነ በቃል በንባብ የግል ጸሎትን ማድረስ ክልክል ነው፡፡ ይኸውም ከሚጸለየው ጸሎት ከሚሠዋው መሥዋዕት ይልቅ የኔ ጸሎት ይሻላለ ብሎ ማስብ ነው፡ እንዲህ ዓይነቱ ሰው ካለ በጠራራ የፀሐይ ብርሃን ሻማ አብርቶ የወጣ ሰውን ይመስላል። ነገር ግን ከአበው በተወረሰው የጸሎት ልምድ አንጻር ቀደም ብሎ ተጀምሮ ያልተፈጸመ ጸሎት ካለ ድርገት ከወረደ በኋላ ቆራቢ ዎች እየቆረቡ ሳለ በጸጥታ ድምፅ ሳያሰሙ መጸለይ ይቻላል። ይህ ሥርዋጽ ነው ሥርዋጽ ማለት የጠመመ ማቅኛ የጎደለ መሙያ የመምህራን አስተያየት ማለት ነው፡፡"
            ]
          },
          {
            title: "መ. ዋዛ ፈዛዛ አይገባም",
            items: [
              "ክፉ ንግግር የክፉ ሰዎች መለያቸው ነው፡፡ ክፉ ሰው ክፉ ነገርን ከሚያስብበት ልቡናው ክፉ ነገርን አውጥቶ ይናገራል ብሏልና ጌታ (ማቲ.12 ቁ.35) ይህን ክፉ ጠባይ ለማረም እንደ ክቡር ዳዊት ወማዕጾ ዘዐቅም ለከናፍርየ 'አቤቱ ለአፌ ጠባቂ አነ-ር' (መዝ.140 ቁ.3) እያሉ መለመን ተገቢ ነው::",
              "በተለይ በጸሎተ ቅዳሴው ሥርዓት ላይ ሳሉ ዋዛ ፈዛዘ መናገር፣ መሳቅ ክልክል ነው፡፡ የሳቀ ቢኖር ካህን ከሆነ አንድ ሱባዔ (ሰባት ቀን) በቀኖና በጾም በጸሎት በሰጊድ ይቀጣል፡፡ ምዕመን ከሆነ ግን ወዲያው ከሥርዓተ ቅዳሴው ተለይቶ ይውጣ፤ በዕለቱ ሥጋ ወደሙን አይቀበል። (ፍት. መን.አን.12፡ድስቅ.12፣ ኒቅያ 61፣ በስ.72)",
              "በሥርዓተ ቅዳሴው ሳለን ከእግረ መስቀሉ መቆማችንን ዘንግ ተን አልባሌ ነገር ብንናገር በዕለተ ዓርብ ከጌታ መስቀል አጠገብ ለመቆም እድሉ ገጥሞት ነገር ግን ኃጢአቱና በደሉ እየታወሰው ምሕረትን በመለመን ፈንታ ያፌዝ የነበረውን በግራ በኩል የተሰቀ ለውን ወንበዴውን እና ራሳቸውን እየነቀነቁ ይሳደቡ የነበሩትን ቤተ አይሁድን እንዳያስመስለን ጥንቃቄ ማድረግ ይገባናል፡፡ (ማቴ.26 *.39-49)",
              `"ከአነጋገር ይፈረዳል ከአያያዝ ይቀደዳል" እንዲሉ አበው ሰው ሁሉ ከአነጋገሩ የተነሣ ይከብራል፤ ከአነጋገሩም የተነሣ ይፈረድበታል። (ማቴ. 12 ቁ.37)`
            ]
          },
          {
            title: "ሠ. ቂም በቀልን ይዞ ማስቀደስ አይገባም",
            items: [
              "ሳል ይዞ ስርቆት ቂም ይዞ ጸሎት የለም እንዲሉ አበው በምሳሌያዊ _ አነጋገራቸው መሃሪና ይቅር ባይነትን ገንዘብ ሳያደርጉ ምሕረትንና ይቅርታን ለመጠየቅ ማሰብ ስንፍና ነው፡ ጌታም ክብር ምስጋና ይግባውና እንዲህ ብሎ መክሮናል፡፡ 'እንግዲህ መባህን በመሠዊያው ላይ ብታቀርብ በዚያም ወንድምህ አንዳች በአንተ ላይ እንዳለው ብታስብ በዚያ በመሰዊያው ፊት መባህን ትተህ ሂድ አስቀድመህ ከወንድምህ ታረቅ በኋላም መጥ ተህ መባህን አቅርብ˚ (ማቴ.5 ቁ24)",
              "የቂመኛ ሰው ጸሎት ከእሾህ መካከል እንደወደቀ አዝመራ ነው፡፡ ከእሾህ መካከል የወደቀ አዝመራ ከታችም አይዳብር ከላይም አያፈራ፤ ከታችም ሳይዳብር ከላይ ቢያፈራ እሾሁን ተጠግተው ፍሬውን አእዋፍ እንዲለቅሙ ቂመኛም ቂሙን ሳይተው ቢጸልይ ቂሙን ተጠግቶ ዲያብሎስ የምስጋውን ፍሬ ለቅሞ ያስቀርበታልና፡፡ /ሕንፃ መነሶሳት/"
            ]
          },
        ]
      },
      participation: {
        title: "እንዴት መሳተፍ እንዳለብን",
        items: [
          "አገልግሎቱ ከመጀመሩ በፊት መድረስ",
          "በአግባቡና በተገቢው ሁኔታ መልበስ",
          "አገልግሎቱን በጸሎትና በአክብሮት መከታተል",
          "ቁርባን ለመቀበል ከሆነ ተገቢውን ጾም መጠበቅ"
        ]
      },
      additionalInfo: {
        title: "ጠቃሚ ማሳሰቢያዎች",
        items: [
          "ቤተክርስቲያኑ ከአገልግሎቱ 30 ደቂቃ በፊት ይከፈታል",
          "እባክዎ በአገልግሎቱ ጊዜ ጸጥታን ይጠብቁ",
          "ልጆች ተቀባይነት አላቸው ነገር ግን መቆጣጠር ያስፈልጋል",
          "በአገልግሎቱ ጊዜ ፎቶ ማንሳት አይፈቀድም"
        ]
      }
    },
    sundaySchool: {
      title: "የሰንበት ትምህርት ቤት",
      subtitle: "የሰንበት ትምህርት ዳይሬክቶሬት",
      comingSoon: "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።",
      children: { title: "ሕፃናት እና ታዳጊዎች", subtitle: "የሕፃናት እና የታዳጊዎች ክፍል", comingSoon: "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።" },
      mezmur: { title: "መዝሙር", comingSoon: "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።" },
      timihirt: { title: "ትምህርት", comingSoon: "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።" },
      otherActivities: { title: "የሌሎች ክስተቶች", comingSoon: "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።" }
    },
    tseloteFithat: {
      title: "ጸሎተ ፍትሐት",
      subtitle: "ጸሎተ ፍትሐት ምንድ ነው? ለምንስ ይጠቅማል?",
      source: "ምንጭ https://eotcmk.org/a/23-2007/ ሰኔ 23 ቀን 2007 ዓ.ም.",
      conclusionTitle: "ማጠቃለያ",
      definition: "ፍትሐት ማለት ከዚህ ዓለም በሞት ለሚለዩ ሰዎች በሕይወተ ሥጋ ሳሉ ከሠሩትና ከፈጸሙት በደል እንዲነጹ ከማእሠረ ኃጢአት እንዲፈቱ ወደ እግዚአብሔር የሚቀብ ጸሎት ነው፡፡ ቤተ ክርስቲያን ለሙታን ጸሎተ ፍትሐት እንዲደረግ ታዝዛለች፡፡",
      purpose: "ጸሎተ ፍትሐት ለበደሉት ሥርየት ኃጢአትን፣ ይቅርታን ዕረፍተ ነፍስን ያሰጣል፡፡ ለደጋጎች ደግሞ ክብርን፣ ተድላን፣ ዕረፍትን ያስገኛል፡፡",
      connection: "ሙታንና ሕያዋን የሚገናኙት በጸሎት አማካኝነት ነው፡፡ ሕያዋን ለሙታን ይጸልያሉ፤ ሙታንም ለሕያዋን ይለምናሉ፡፡ /ሄኖ. 12፤34/ ሕያዋን ለሙታን የሚጸልዩት ጸሎትና የሚያቀርቡት መሥዋዕት በግልጽ እንደሚታይ ሁሉ ሙታንም በአጸደ ነፍስ ሆነው በዚህ ዓለም ለሚቆዩ ወገኖቻቸው ሕይወትና ድኅነትን፣ ስርየተ ኃጢአትንና ተስፋ መንግሥተ ሰማያትን፣ ጽንዓ ሃይማኖትን እንዲሰጣቸው፣ በንስሐ ሳይመለሱ፣ ከብልየተ ኃጢአት ሳይታደሱ እንዳይሞቱ ፈጣሪያቸውን ይለምናሉ፡፡ ይህም ሥርዓት እስከ ዕለተ ምጽአት ሲፈጸም የሚኖር ነው፡፡",
      biblical: [
        "ለሙታን ጸሎተ ፍትሐት እንዲደረግ፣ መሥዋዕት እንዲቀርብላቸው በቤተ ክርስቲያንና በመካነ መቃብራቸው እንዲጸለይላቸው ቅዱሳን ሐዋርያት በቀኖና ሐዋርያት አዝዘዋል፡፡ በክርስቶስ አምነው ስለሞቱ ወንድሞቻችሁ ክርስቲያኖችና ሰማዕታት በቤተ ክርስቲያን ያለሐኬት ተሰብሰቡ፡፡ በቤተ ክርስቲያን መሥዋዕት ሠውላቸው፤ ወደ ቤተ ክርስቲያን ወደ መቃብር ስትወስዱአቸውም መዝሙረ ዳዊት ድገሙላቸው፡፡ ዲድስቅልያ አንቀጽ 33 ገጽ 481",
        "ነቢዩ ዳዊትም የጻድቅ ሞቱ በእግዚአብሔር ዘንድ ክቡር ነው፡፡ ነፍሴ ሆይ ወደ ዕረፍትሽ ተመለሽ፣ እግዚአብሔር ረድቶሻልና፣ ነፍሴን ከሞት አድኖአታልና፡፡ በማለት ሙታን በጸሎት፣ በምስጋና፣ በመሥዋዕት ወደ እግዚአብሔር እንዲሸኙ በመዝሙሩ ተናግሯል፡፡ /መዝ. 115፤114-7/",
        "የቤተ ክርስቲያን የሕግና የሥርዓት መጽሐፍ ፍትሐ ነገሥትም በፍትሕ መንፈሳዊ በዲድስቅልያ የተጠቀሰውን ያጸናል፡፡ /አንቀጽ 22/ ስለ ሙታን የሚጸለየው መጽሐፈ ግንዘትም ካህናት ለሞቱ ሰዎች ሊጸልዩላቸው፣ በመሥዋዕትና በቁርባን ሊያስቧቸው ይገባል ይላል፡፡ ካህናት ጸሎተ ፍትሐት በሚያደርጉላቸው መሥዋዕት እና ቁርባን ስለ እነርሱ በሚያቀርቡላቸው ጊዜ መላእክት ነፍሳቸውን ለመቀበል ይወርዳሉ፡፡ ኃጢአተኞች ከሆኑ ስለ ሥርየተ ኃጢአት ይለምኑላቸዋል፤ ይማልዱላቸዋል፡፡ ንጹሐንም ከሆኑ ደስ ይላቸዋል፡፡ ሰውን ለወደደው ለእግዚአብሔር በሰማያት ክብር ምስጋና ይገባል፣ በምድርም ሰላም፡፡ እያሉ እግዚአብሔርን ያመሰግኑታል፡፡ ይህም የመላእክት ምስጋናና ደስታ ስለ ሰው ልጅ ድኅነት ነው ተብሎ ተጽፎአል፡፡"
      ],
      angels: "የደጋግ ሰዎችን ነፍሳት ቅዱሳን መላእክት እንደሚቀበሏቸው በቅዱስ ወንጌል ተጽፎአል፡፡ አልዓዛርም ሞተ፤ መላእክትም ወደ አብርሃም ዕቅፍ ወሰዱት፡፡ /ሉቃ. 16፤22/",
      time: "ጸሎተ ፍትሐት የዘሐን ጊዜ ጸሎት ነው፡፡ ቅዱስ ያዕቆብ በእናንተ ባለው መሠረት ከመንጋው መካከል በሞተ ሥጋ የተለዩትን ምእመናን በጸሎትና በዝማሬ እንሸኛቸዋለን፡፡ /ያዕ. 5፤13/ ጸሎተ ፍትሐት የሚደረገው ለከሀድያንና ለመናፍቃን ሳይሆን ለሃይማኖት ሰዎች ነው፡፡",
      exceptions: [
        "«ማንም ወንድሙን ሞት የማይገባውን ኃጢአት ሲያደርግ ቢያየው ይለምን፣ ሞትም የማይገባውን ኃጢአት ላደረጉት ሕይወት ይሰጥለታል፡፡ ሞት የሚገባው ኃጢአት አለ፡፡ ስለዚህ እንዲጠይቅ አልልም፡፡ ዓመፃ ሁሉ ኃጢአት ነው፡፡ ሞትም የማይገባው ኃጢአት አለ፡፡» /ዮሐ. 5፤16/ ለምሳሌ በተለያየ መንገድ ራሱን ለገደለ ሰው ጸሎተ ፍትሐት አይደረግም፡፡ ምክንያቱም ቤተ መቅደስ ሰውነቱን በገዛ እጁ አፍርሷልና፡፡ የእግዚአብሔርም መንፈስ እንዲኖራችሁ አታውቁምን? ማንም የእግዚአብሔርን ቤተ መቅደስ ቢያፈርስ እግዚአብሔር እርሱን ያፈርሰዋል፡፡ የእግዚአብሔር ቤተ መቅደስ ነውና ያውም እናንተ ናችሁ፡፡ ይላልና፡፡",
        "/1ቆሮ. 3፤16/ እንዲሁም ለመናፍቃን፣ ለአረማውያንም ጸሎተ ፍትሐት አይደረግም፡፡ ምክንያቱም ብርሃን ከጨለማ ጋር አንድነት የለውምና፡፡ /2ቆሮ. 6፤14/"
      ],
      church: "ቤተ ክርስቲያን ለሰው ልጅ የማትጸልይበት ጊዜ የለም፡፡ ሰውን ያህል ክቡር ፍጥረት ከመጸነሱ በፊት የተባረከ ጽንስ እንዲሆን እንደ ኤርምያስ በማኅፀን ቀድሰው /ኤር. 1፤5/ እንደ መጥምቀ መለኮት ዮሐንስ በማኅፀን መንፈስ ቅዱስን የተመላ አድርገው እያለች ትጸልያለች፡፡ በወሊድ ጊዜም ችግር እንደያጋጥመው ትጸልያለች፣ በጥምቀትም የእግዚአብሔር ልጅ እንዲሆን ትጸልያለች፣ ታጠምቃለች፡፡ በትምህርት እየተንከባከበች ጸጋ እግዚአብሔርን እየመገበች ታሳድጋለች፡፡ እርሷ የጸጋው ግምጃ ቤት ናትና፡፡ በኃጢአት ሲወድቅም ኃጢአቱ እንዲሠረይለት ንስሐ ግባ ትለዋች፡፡ እንዲሠረይለትም ትጸልያለች፡፡ በሞቱም ጊዜ እግዚአብሔር ኃጢአቱን እንዳይዝበት በደሉን እንዳይቆጥርበት ትጸልይለታለች፡፡ እንዲህ እያደረገች የእናትነት ድርሻዋን ትወጣለች፡፡ አንድ ሰው ሲሞት ዘመድ አዝማድ በዕንባ ይሸኘዋል፡፡ ቤተ ክርስቲያን ግን ዕንባዋ ጸሎት ነውና በጸሎቷ የዚያን ሰው ነፍስ ለታመነ ፈጣሪ አደራ ትሰጣለች፣ ነፍሳቸውን ተቀበል ብላ ትጸልያለች፡፡",
      faith: "ቤተ ክርስቲያን ጸሎተ ፍትሐትን የምታደርገው ይሆናል ይደረጋል ብላ በፍጹም እምነት ነው፡፡ ምክንያቱም ክርስቲያን እስከ መጨረሻ ተስፋ አይቆርጥምና፡፡ ወኵሎ ዘሰአልክሙ በጸሎት እንዘትትአመኑ ትነሥኡ፡፡ በሃይማኖት ጸንታችሁ የለመናችሁትን ሁሉ ታገኛላችሁ፡፡ /ማቴ.21፤22/ ስለዚህ እላችኋለሁ፤ የጸለያችሁትን ሁሉ እንዳገኛችሁ እመኑ ይሁንላችሁማል፡፡ /ማር.11፤24/ ለምኑ ይሰጣችሁማል፤ ፈልጉ ታገኛላችሁ፤ መዝጊያ አንኳኩ ይከፈትላችሁማል፤ የሚለምነው ሁሉ ይቀበላልና የሚፈልገውም ያገኛል፡፡ መዝጊያውንም ለሚያንኳኳ ይከፈትለታል፡፡ /ማቴ. 7፤7/ በስሜ የምትለምኑትን ሁሉ አደርገዋለሁ፤ ማናቸውንም ነገር በስሜ ብትለምኑ እኔ አደርገዋለሁ፡፡ /ዮሐ. 14፤13/ ይላልና፡፡ ወንጌላዊው ዮሐንስም በመልእክቱ የዘላለም ሕይወት እንዳላችሁ ታወቁ ዘንድ በእግዚአብሔር ልጅ ስም ለምታምኑ ይህን ጽፌላችኋለሁ፡፡ በእርሱ ዘንድ ያለን ድፍረት ይህ ነው፡፡ እንደ ፈቃዱ አንዳች ብንለምን ይሰማናል፡፡ የምንለምነውንም እንዲሰማልን ብናውቅ ከእርሱ የለመነውን ልመና እንደተቀበልን እናውቃለን፡፡",
      conclusion: [
        "/ዮሐ. 5፤3/ ብሏል፡፡ እንግዲህ የቤተ ክርስቲያን ትምህርቷ ሙሴን ከመቃብር አስነሥቶ ፊቱን ያሳየ አምላክ /ማቴ 17፤3/ ለእነዚህም ሳይንቃቸው የምሕረት ፊቱን ያሳያቸዋል የሚል ነው፡፡ መሐሪ ይቅር ባይ ለሆነው አምላክ የሚሳነው ነገር የለምና፡፡",
        "/ዘፍ. 18፤13፣ ሉቃ. 1፤37/",
        "ሐዋርያው ቅዱስ ዮሐንስ «ሞት የሚገባው ኃጢአት አለ፤ ስለዚህ እንዲጠይቅ አልልም፤ እንዳለ ቤተ ክርስቲያንም የምትከተለው ይህንኑ ነው፡፡ ምክንያቱም እግዚአብሔር ዕድሜ ለንስሐ ሰጥቷቸው ከኃጢአት መመለስ ከበደል መራቅ፣ ንስሐ መግባት፣ ሥጋወደሙን መቀበል ሲችሉ በሕይወታቸውና በእግዚአብሔር ቸርነት እየቀለዱ መላ ዘመናቸውን የሚያሳልፉ ሰዎች አሉ፡፡ እነዚህም በራሳቸው ላይ የፈረዱ ናቸው፡፡ ደግሞም ስሞት በጸሎተ ፍትሐት ኃጢአቴ ይሰረይልኛል ኃጢአትንም አልተውም ማለት በእግዚአብሔር መሐሪነት መቀለድና እርሱንም መድፈር ስለሆነ ይህም ሞት ከሚገባው ኃጢአት የሚቆጠር ነው፡፡",
        "እንግዲህ ለበጎ የተሠራልንን ጸሎተ ፍትሐት ክብር የምናገኝበት ያደርግልን ዘንድ የእግዚአበሔር ቸርነት የድንግል ማርያም አማላጅነት አይለየን፡፡ አሜን፡፡",
        "ምንጭ፡-ሃይማኖት የለየንን መቃብር አንድ አያደርገንም፤ ገጽ 20"
      ],
      prayerTypes: [
        { name: "ጸሎተ ፍትሐት ለሙታን", time: "በቀብር ሥነ ሥርዓት ጊዜ", description: "ከዚህ ዓለም በሞት ለሚለዩ ሰዎች የሚደረግ ጸሎት" },
        { name: "ዘሐን ጸሎት", time: "በሙት ቀን", description: "በሙት ቀን የሚደረግ ልዩ ጸሎት" },
        { name: "ዝክር", time: "በተለያዩ ጊዜያት", description: "ለሙታን በተለያዩ ጊዜያት የሚደረግ የመታሰቢያ ጸሎት" }
      ]
    }
  }
}

// German translations (basic structure, can be expanded later)
export const deTranslations: Translations = {
  common: {
    comingSoonTitle: "Demnächst verfügbar",
  },
  gallery: {
    common: {
      back: "Zurück",
      folders: "Ordner",
      download: "Herunterladen",
      tags: "Tags",
      description: "Beschreibung",
      noThumbnail: "Kein Vorschaubild verfügbar",
    },
    photos: {
      title: "Foto-Galerie",
      empty: "Derzeit sind keine Fotos verfügbar.",
    },
    videos: {
      title: "Video-Galerie",
      empty: "Derzeit sind keine Videos verfügbar.",
    },
    archive: {
      title: "Kirchenarchiv",
      description: "Entdecken Sie unsere historischen Fotos und Dokumente",
      search: "Suche",
      filters: "Filter",
      clearFilters: "Filter löschen",
      year: "Jahr",
      category: "Kategorie",
      type: "Typ",
      allYears: "Alle Jahre",
      allCategories: "Alle Kategorien",
      allTypes: "Alle Typen",
      grid: "Raster",
      timeline: "Zeitleiste",
      resultsPrefix: "Angezeigt",
      resultsSuffixApplied: "mit angewendeten Filtern",
      noItems: "Mit den aktuellen Filtern wurden keine Archivobjekte gefunden.",
    },
  },
  formsLinks: {
    bankDetails: {
      title: "Bankkonto",
      labels: {
        bankName: "Bankname",
        accountName: "Kontoinhaber",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        beneficiaryAddress: "Empfängeradresse",
        beneficiaryPhone: "Empfänger Telefon",
        beneficiaryEmail: "Empfänger E-Mail",
      },
      copyAll: "Alle Details kopieren",
      copiedAll: "Alle Details kopiert!",
      intlTitle: "Internationale Bankdaten",
      intlSubtitle: "Nutzen Sie diese Angaben für Überweisungen außerhalb Deutschlands",
      intlLabels: {
        bankName: "Bankname",
        accountName: "Kontoinhaber",
        bankAddress: "Bankadresse",
        iban: "IBAN",
        bic: "BIC/SWIFT",
        correspondentBank: "Korrespondenzbank",
      },
    },
    usefulLinks: {
      churchesGermany: {
        title: "EOTC Kirchen in Deutschland (Niederlande, Schweiz, Österreich)",
        placeholder: "Nach Name, Region oder Adresse suchen...",
        search: "Suchen",
        noResults: "Keine Kirchen gefunden.",
        labels: {
          address: "Adresse",
          phone: "Telefon",
          email: "E-Mail",
          website: "Webseite",
        },
      },
      previousWebsite: {
        title: "Link zur vorherigen Website",
        description: "Die vorherige Website ist weiterhin als Referenz und zum Zugriff auf historische Inhalte verfügbar.",
        lastUpdated: "Zuletzt aktualisiert: Januar 2023",
        visitButton: "Vorherige Website besuchen",
        imageAlt: "Screenshot der vorherigen Website",
      },
    },
    forms: {
      kirstina: {
        title: "Taufregistrierung",
        intro: "Bitte füllen Sie dieses Formular aus, um die Taufe in der St. Michael Äthiopisch-Orthodoxen Tewahedo Kirche, Köln, zu registrieren.",
        tabs: { form: "Anmeldeformular", requirements: "Anforderungen", schedule: "Zeitplan" },
        successTitle: "Ihre Taufregistrierung wurde erfolgreich übermittelt!",
        successButton: "Weitere Registrierung senden",
        cardTitle: "Taufregistrierungsformular",
        labels: {
          familyName: "Familienname",
          firstName: "Vorname",
          baptismName: "Taufname",
          fatherName: "Name des Vaters",
          motherName: "Name der Mutter",
          godparentName: "Name des Paten",
          country: "Land",
          birthPlace: "Geburtsadresse",
          birthCountry: "Geburtsort",
          birthDate: "Geburtsdatum",
          baptismChurch: "Kirche",
          baptismDate: "Taufdatum",
          nationality: "Staatsangehörigkeit",
          baptizingPriest: "Taufpriester",
          email: "E-Mail",
          phone: "Telefon",
          agree: "Ich bestätige die Richtigkeit der angegebenen Informationen",
          agreeDescription: "Bitte bestätigen Sie, dass die von Ihnen angegebenen Informationen korrekt sind.",
        },
        placeholders: {
          familyName: "Familienname",
          firstName: "Vorname",
          baptismName: "Taufname",
          fatherName: "Name des Vaters",
          motherName: "Name der Mutter",
          godparentName: "Name des Paten",
          country: "Land",
          birthPlace: "Geburtsadresse",
          birthCountry: "Geburtsort",
          baptismChurch: "Kirchenname",
          nationality: "Staatsangehörigkeit",
          baptizingPriest: "Taufpriester",
          email: "E-Mail",
          phone: "Telefonnummer",
        },
        actions: { submit: "Anmeldung senden", submitting: "Wird gesendet..." },
        validation: {
          familyNameMin: "Der Familienname muss mindestens 2 Zeichen lang sein.",
          firstNameMin: "Der Vorname muss mindestens 2 Zeichen lang sein.",
          baptismNameMin: "Der Taufname muss mindestens 2 Zeichen lang sein.",
          fatherNameMin: "Der Name des Vaters muss mindestens 2 Zeichen lang sein.",
          motherNameMin: "Der Name der Mutter muss mindestens 2 Zeichen lang sein.",
          godparentNameMin: "Der Name des Paten muss mindestens 2 Zeichen lang sein.",
          countryRequired: "Land ist erforderlich.",
          birthPlaceRequired: "Geburtsadresse ist erforderlich.",
          birthCountryRequired: "Geburtsort ist erforderlich.",
          birthDateRequired: "Geburtsdatum ist erforderlich.",
          baptismChurchRequired: "Kirche ist erforderlich.",
          baptismDateRequired: "Taufdatum ist erforderlich.",
          nationalityRequired: "Staatsangehörigkeit ist erforderlich.",
          baptizingPriestRequired: "Taufpriester ist erforderlich.",
          emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          phoneMin: "Die Telefonnummer muss mindestens 6 Zeichen lang sein.",
          agreeRequired: "Sie müssen den Bedingungen zustimmen.",
        },
        toast: {
          activationTitle: "Formularaktivierung erforderlich",
          activationDescription: "Bitte überprüfen Sie Ihre E-Mail auf den Aktivierungslink von FormSubmit.co",
          submitSuccessTitle: "Anmeldung erfolgreich übermittelt!",
          submitSuccessDesc: "Ihre Taufregistrierung wurde per E-Mail gesendet.",
          submitErrorTitle: "Fehler beim Senden des Formulars",
          submitErrorDesc: "Beim Senden Ihres Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        },
        email: {
          subjectPrefix: "Neue Taufregistrierung",
          autoresponse: "Vielen Dank für die Einreichung Ihrer Taufregistrierung. Wir werden Ihre Informationen prüfen und uns bald bei Ihnen melden.",
          heading: "Neue Taufregistrierung",
          submittedOn: "Eingereicht am",
        },
      },
      membership: {
        title: "Kirchlicher Mitgliedschaftsantrag",
        intro: "Bitte füllen Sie dieses Formular aus, um die Mitgliedschaft in der St. Michael Äthiopisch-Orthodoxen Tewahedo Kirche, Köln, zu beantragen.",
        tabs: { form: "Anmeldeformular" },
        successTitle: "Ihr Antrag wurde erfolgreich übermittelt",
        successDesc: "Vielen Dank für Ihren Antrag",
        successButton: "Weiteren Antrag senden",
        sections: {
          personal: { title: "Persönliche Angaben", description: "Geben Sie Ihre persönlichen Daten ein" },
          address: { title: "Adressangaben", description: "Geben Sie Ihre aktuelle Adresse ein" },
          membership: { title: "Mitgliedschaft & Familie", description: "Wählen Sie die Mitgliedschaftsart und fügen Sie ggf. Familienmitglieder hinzu" },
          emergency: { title: "Notfallkontakt", description: "Geben Sie eine Kontaktperson für Notfälle ein" },
          service: { title: "Dienst in der Kirche", description: "Wählen Sie die Dienste aus, an denen Sie interessiert sind" },
          terms: { title: "Regeln & Einreichung" },
        },
        labels: {
          firstName: "Vorname",
          lastName: "Nachname",
          baptismalName: "Taufname (falls vorhanden)",
          dateOfBirth: "Geburtsdatum",
          email: "E-Mail",
          phone: "Telefonnummer",
          address: "Wohnadresse",
          city: "Stadt",
          postalCode: "Postleitzahl",
          membershipType: "Mitgliedschaftsart",
          membershipIndividual: "Einzelmitgliedschaft",
          membershipFamily: "Familienmitgliedschaft",
          familyMembers: "Familienmitglieder",
          addFamilyMember: "Familienmitglied hinzufügen",
          remove: "Entfernen",
          memberN: "Familienmitglied",
          name: "Name",
          relation: "Beziehung",
          age: "Alter",
          emergencyContact: "Notfallkontakt",
          interestsTitle: "Gewünschte Dienste (Mehrfachauswahl möglich)",
          interestsHelp: "Wählen Sie die Dienste aus, in denen Sie in der Kirche dienen möchten",
          interestsOptions: {
            worship: "Gottesdienst",
            choir: "Kirchenchor",
            sundaySchool: "Sonntagsschule",
            youth: "Jugendprogramme",
            community: "Gemeindedienst",
            prayer: "Gebetsgruppen",
            bibleStudy: "Bibelstudium",
            committees: "Kirchenausschüsse",
            events: "Veranstaltungen",
            maintenance: "Kirchenbau/Wartung",
          },
          skills: "Fähigkeiten & Erfahrungen",
          skillsHelp: "Beschreiben Sie die Fähigkeiten, mit denen Sie der Kirche dienen möchten",
          agree: "Ich stimme den Regeln und Richtlinien der Kirche zu",
          agreeHelp: "Bestätigen Sie, dass die angegebenen Informationen korrekt sind und Sie die Regeln und Richtlinien der Kirche befolgen werden.",
          next: "Weiter",
          prev: "Zurück",
          submit: "Antrag senden",
          submitting: "Wird gesendet...",
        },
        placeholders: {
          firstName: "Vollständiger Name",
          lastName: "Nachname",
          baptismalName: "Taufname",
          email: "beispiel@email.de",
          phone: "+49 123 456789",
          address: "Beispielstraße 123",
          city: "Köln",
          postalCode: "50667",
          relationExample: "z. B. Ehepartner, Kind",
        },
        validation: {
          firstNameMin: "Der Vorname muss mindestens 2 Zeichen lang sein.",
          lastNameMin: "Der Nachname muss mindestens 2 Zeichen lang sein.",
          dateOfBirthReq: "Geburtsdatum ist erforderlich.",
          emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
          phoneMin: "Die Telefonnummer muss mindestens 6 Ziffern lang sein.",
          addressMin: "Die Adresse muss mindestens 5 Zeichen lang sein.",
          cityMin: "Die Stadt muss mindestens 2 Zeichen lang sein.",
          postalCodeMin: "Die Postleitzahl muss mindestens 4 Ziffern lang sein.",
          membershipTypeReq: "Bitte wählen Sie eine Mitgliedschaftsart.",
          familyMemberNameMin: "Der Name muss mindestens 2 Zeichen lang sein.",
          familyMemberRelationMin: "Die Beziehung muss mindestens 2 Zeichen lang sein.",
          familyMembersAtLeastOne: "Mindestens ein Familienmitglied ist erforderlich.",
          emergencyNameMin: "Der Name muss mindestens 2 Zeichen lang sein.",
          emergencyPhoneMin: "Die Telefonnummer muss mindestens 6 Ziffern lang sein.",
          emergencyRelationMin: "Die Beziehung muss mindestens 2 Zeichen lang sein.",
          agreeRequired: "Sie müssen den Kirchenregeln zustimmen.",
        },
        toast: {
          activationTitle: "Formularaktivierung erforderlich",
          activationDesc: "Bitte überprüfen Sie Ihre E-Mail auf den Aktivierungslink von FormSubmit.co",
          submitSuccessTitle: "Antrag erfolgreich übermittelt!",
          submitSuccessDesc: "Ihr Mitgliedschaftsantrag wurde per E-Mail gesendet.",
          submitErrorTitle: "Fehler beim Senden des Formulars",
          submitErrorDesc: "Beim Senden Ihres Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        },
        email: {
          subjectPrefix: "Neuer Mitgliedschaftsantrag",
          heading: "Neuer Mitgliedschaftsantrag",
          submittedOn: "Eingereicht am",
          autoresponse: "Vielen Dank für die Einreichung Ihres Mitgliedschaftsantrags. Wir werden Ihre Informationen prüfen und uns bald bei Ihnen melden.",
        },
      },
    },
  },
  contact: {
    location: {
      title: "St. Michael Kirche Köln - Standort",
      address: "Adresse",
      transportStops: "Haltestellen",
      contactUsAt: "Schreiben/Telefonieren Sie uns unter den folgenden Adressen",
      labels: {
        postalAddress: "Postadresse",
        phone: "Telefon",
        email: "E-Mail",
      },
    },
    form: {
      title: "Kontakt",
      successTitle: "Ihre Nachricht wurde erfolgreich gesendet!",
      successMessage: "Vielen Dank für Ihre Kontaktaufnahme. Wir antworten in Kürze.",
      successButton: "Weitere Nachricht senden",
      labels: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefonnummer",
        subject: "Betreff",
        selectSubject: "Betreff auswählen",
        subjectGeneral: "Allgemeine Anfrage",
        subjectServices: "Kirchliche Dienste",
        subjectEvents: "Veranstaltungen",
        subjectOther: "Sonstiges",
        message: "Nachricht",
      },
      submit: "Nachricht senden",
      submitting: "Wird gesendet...",
      toastSuccess: "Nachricht erfolgreich gesendet!",
      toastError: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      sendError: "Nachricht konnte nicht gesendet werden",
    },
  },
  calendar: {
    title: "Kirchenkalender",
    subtitle: "Sehen Sie unsere Kirchentermine im gregorianischen und im äthiopischen Kalender",
    calendarTypeLabel: "Kalendertyp",
    calendarTypeEthiopian: "Zum äthiopischen Kalender wechseln",
    calendarTypeGregorian: "Gregorianischer Kalender",
    tabs: {
      orthodoxCalendar: "Äthiopisch-Orthodoxer Tewahedo-Kalender",
      churchAnnualCalendar: "Jahreskalender der Kirche",
    },
    todayInEthiopian: "Heutiges Datum im äthiopischen Kalender",
    gregorianCalendar: "(Gregorianischer Kalender)",
    featuresContent: "Die Äthiopisch-Orthodoxe Tewahedo-Kirche hat ihren eigenen, einzigartigen Kalender, der sich vom Gregorianischen Kalender um 7 oder 8 Jahre unterscheidet. Dieser Kalender wird innerhalb der Äthiopisch-Orthodoxen Tewahedo-Kirche für religiöse Feiertage und andere wichtige Daten verwendet.",
    featuresTitle: "Merkmale des äthiopischen Kalenders",
    feature1: "13 Monate (12 Monate mit 30 Tagen und 1 Monat mit 5 oder 6 Tagen)",
    feature2: "Neujahr am 1. Meskerem (11./12. September)",
    feature3: "Kirchliche Feiertage werden nach dem äthiopischen Kalender berechnet",
    feature4: "Der geweihte Kalender der Kirche",
    downloadPdf: "PDF herunterladen",
    loadingCalendar: "Kalender wird geladen...",
    noCalendarForYear: "Für das aktuelle Jahr ist kein Kalender verfügbar",
    holidayBadge: "Äthiopisch-orthodoxer Feiertag",
    holidaySignificanceTitle: "Bedeutung in der äthiopisch-orthodoxen Tradition",
    holidaySignificanceText:
      "Dieser Feiertag hat eine besondere Bedeutung in der äthiopisch-orthodoxen Tewahedo-Kirche und ist mit einzigartigen Traditionen und Zeremonien verbunden, die seit Jahrhunderten bewahrt werden.",
  },
  events: {
    title: "Kommende Veranstaltungen",
    searchPlaceholder: "Veranstaltungen suchen...",
    filters: "Filter",
    category: "Kategorie",
    year: "Jahr",
    month: "Monat",
    sortBy: "Sortieren nach",
    upcomingFirst: "Kommende zuerst",
    laterFirst: "Spätere zuerst",
    resetFilters: "Filter zurücksetzen",
    noEvents: "Keine Veranstaltungen gefunden",
    tryAdjusting: "Versuchen Sie, Ihre Suche oder Filter anzupassen",
    clearSearch: "Suche löschen",
    viewDetails: "Details anzeigen",
    featured: "Hervorgehoben",
  },
  serviceMikir: {
    title: "Mikir Dienst",
    description: "Der Beratungsdienst in unserer Kirche ist ein sehr wichtiger und notwendiger Dienst. Dieser Dienst zielt darauf ab, geistliche und körperliche Führung und Unterstützung zu bieten.\n\nDie Ratschläge, die in unserer Kirche gegeben werden, basieren auf der Heiligen Bibel und den Lehren der heiligen Väter. Diese Ratschläge helfen uns, in unserem Leben in die richtige Richtung zu gehen und in unserer spirituellen Reise voranzukommen.",
    saintAdviceTitle: "Ratschläge der Heiligen",
    photoPlaceholder: "Mikir-Dienst Foto",
    quotes: [
      "1. Beschuldige dich nicht fälschlicherweise; Selbstanklage ist keine Demut. Große Demut ist es, zu ertragen, wenn andere dich tadeln. - Heiliger Serapion",
      "2. Tu nichts, woran du nicht glaubst, nur für andere. Wenn du es tust, wisse, dass du daran zugrunde gehen wirst. - Buch der Ratschläge",
      "3. Wer seine Zunge von Falschheit, Verleumdung und der Offenbarung gesehener Geheimnisse zurückhält, wird sein Herz vor sündigen Gedanken bewahren. - Aregawi Menfesawi",
      "4. Wenn dir Gnade gegeben wird, sei dankbar für die Gnade, die du erhalten hast. Verliere nicht, was dir gegeben wurde, indem du sagst: 'Ich will, was mir nicht gegeben wurde.' - Mar Isaac",
      "5. Wer sich selbst demütigt und erniedrigt, wird Erkenntnis von Gott empfangen. Wer sagt 'Ich bin wissend', wird von der Weisheit des Schöpfers getrennt werden. - Aregawi Menfesawi",
      "6. \"O Herr, rette mich vor denen, die mich als gerecht zählen, während ich Staub und Asche bin.\" - Abba Antonios",
      "7. \"Wenn wir die Geschöpfe nicht untersuchen und erkennen können, wie können wir dann den untersuchen und erkennen, der alles erschaffen hat?\" - Heiliger Athanasius",
      "8. \"Wie Gold durch Feuer geprüft wird, so kann die Gnade und Herrlichkeit Christi nicht ohne Prüfung erlangt werden. Die Prüfung und das Feuer dieser Welt vergehen schnell, aber das Feuer der Hölle, in das die Sünder eingehen, bleibt für immer brennend.\" - Heiliger Minas",
      "9. \"Binde niemandem Böses auf, richte nicht. Wenn du dies einhältst, wirst du das Erbe erben.\" - Der Große Abba Macarius",
      "10. \"Viele Male spreche ich viel und bereue mein Sprechen, aber ich habe mein Schweigen nie bereut.\" - Heiliger Arsenius",
      "11. \"Die Kirche ist unsere Zuflucht. Die Kirche ist die Arche Noah. In ihr sind wir geborgen, aber außerhalb haben sich Wellen und Stürme geöffnet.\" - Heiliger Endrias",
      "12. \"Wenn wir unsere Herzen von den vergänglichen und verderblichen irdischen Begierden entfernen und sie durch Buße von Sünde reinigen, werden wir mit der Gnade des Heiligen Geistes erfüllt sein.\" - Abba Abraham, Liebhaber der Armen",
      "13. \"Die Überwindung körperlicher Begierden ist ein Martyrium, das zur Krone des Lebens führt.\" - Seliger Abune Gorgorios II",
      "14. \"Weil das Leben der Kirche am Kreuz ist, ist es voller Prüfungen. Stärke daher die Position deiner Kirche und nicht dein persönliches Leben.\" - Seliger Abune Gorgorios II",
      "15. \"Wenn dein Geist dich drängt, vor dem Gebet zu schlafen, nimm es nicht an, indem du ja sagst. Füge vielmehr die Psalmen Davids hinzu und verbringe die ganze Nacht im Gebet.\" - Heiliger Isaak der Syrer",
      "16. \"Wenn wir uns an unsere Sünden erinnern und sie bereuen, wird Gott sie vergessen. Wenn wir unsere Sünden vergessen und uns mit ihnen trösten, wird Gott sich an sie erinnern.\" - Heiliger Antonios"
    ]
  },
  header: {
    menuItems: {
      Home: "Startseite",
      "About us": "Über uns",
      Service: "Dienst",
      "News & Events": "Nachrichten & Veranstaltungen",
      Gallery: "Galerie",
      "Forms & Links": "Formulare & Links",
      Contact: "Kontakt",
    },
    subMenuItems: {
      "Our History": "Unsere Geschichte",
      "Our Clergy": "Unsere Geistlichen",
      "Our Faith": "Unser Glaube",
      "Construction Status": "Baustatus",
      Kirstina: "Kirstina",
      "Sirate Kidase": "Sirate Kidase",
      "Sunday School": "Sonntagsschule",
      Mezmur: "Mezmur",
      Timihirt: "Timihirt",
      "ሕፃናት እና ታዳጊዎች": "Kinder & Jugend",
      "Other Activities": "Andere Aktivitäten",
      "Tselote Fithat": "Tselote Fithat",
      Mikir: "Mikir",
      "Timihirt & Tarikoch": "Timihirt & Tarikoch",
      "Upcoming Events": "Kommende Veranstaltungen",
      "Church News": "Kirchennachrichten",
      Calendar: "Kalender",
      Photos: "Fotos",
      Videos: "Videos",
      Archive: "Archiv",
      "Bank Details": "Bankverbindung",
      Forms: "Formulare",
      "Membership Form": "Mitgliedsformular",
      "Kirstina Form": "Kirstina Formular",
      "Useful Links": "Nützliche Links",
      "Churches in Germany": "Kirchen in Deutschland",
      "Previous Website": "Vorherige Website",
      Location: "Standort",
      "Contact Form": "Kontaktformular",
    },
    donate: "Spenden",
    findUs: "Finden Sie uns",
  },
  footer: {
    call: "Anrufen",
    email: "E-Mail",
    address: "Adresse",
    resources: "Ressourcen",
    usefulLink: "Nützliche Links",
    contactUs: "Kontaktieren Sie uns",
    copyright: `Copyright © ${getCurrentYear()} - Alle Rechte vorbehalten. Entwickelt von Marefiyatech`,
    footerLinks: {
      "ሰንበት ትምህርት ቤት": "Sonntagsschule",
      "በጀርመን ያሉ አብያተ ክርስቲያናት": "Kirchen in Deutschland",
      "የቀን መቁጠሪያ": "Kalender",
      "ሕፃናት እና ታዳጊዎች": "Kinder & Jugend",
      "ለመለገስ": "Spenden"
    }
  },
  churchNews: {
    title: "Kirchennachrichten",
    searchPlaceholder: "Nachrichten suchen...",
    filters: "Filter",
    category: "Kategorie",
    year: "Jahr",
    month: "Monat",
    sortBy: "Sortieren nach",
    newestFirst: "Neueste zuerst",
    oldestFirst: "Älteste zuerst",
    resetFilters: "Filter zurücksetzen",
    noNews: "Keine Nachrichten gefunden",
    tryAdjusting: "Versuchen Sie, Ihre Suche oder Filter anzupassen",
    clearSearch: "Suche löschen",
    readMore: "Weiterlesen",
    readFullArticle: "Vollständigen Artikel lesen",
    featured: "Hervorgehoben",
    allNews: "Alle Nachrichten",
    by: "Von",
  },
  home: {
    hero: {
      welcomeTitle: "WILLKOMMEN IN DER ST. MICHAEL ÄTHIOPISCH-ORTHODOXEN KIRCHE IN KÖLN"
    },
    welcome: {
      title: "Dies ist die offizielle Website der St. Michael Äthiopisch-Orthodoxen Tewahedo-Kirche in Köln, Deutschland, unter der Diözese von Debre Selam.",
      caption: "2017 Äthiopischer Kalender Hosanna-Feier",
      paragraph1: "Unter den ersten etablierten äthiopisch-orthodoxen Kirchen in Europa, Afrika, Amerika, Kanada und Australien nimmt die St. Michael Äthiopisch-Orthodoxe Tewahedo-Kirche in Köln, Deutschland, einen besonderen Platz als Pionier- und Flaggschiff-Kirche ein.",
      paragraph2: "Unsere Kirche wurde mit der Mission gegründet, das Evangelium weltweit zu verbreiten, durch die engagierten Bemühungen von Geistlichen, die für die Bildung nach Europa kamen, unter der Führung von Erzpriester Dr. Merawi Tege und Diakon Bedemariam Mersha, mit dem Segen Seiner Heiligkeit Abune Tekle Haimanot, damals Patriarch der Äthiopisch-Orthodoxen Tewahedo-Kirche, und der Entscheidung der Heiligen Synode im Jahr 1975. Sie wurde unter der Führung Seiner Heiligkeit Abune Elias eröffnet, der damals Erzbischof von Dschibuti und Ostafrika war und jetzt Erzbischof der Nordischen und Griechischen Diözese ist.",
      paragraph3: "Der Gründungsprozess war wie folgt: Im Jahr 1971 wurden Erzpriester Dr. Merawi Tege und Diakon Bedemariam Mersha mit dem Segen Seiner Heiligkeit Abune Tekle Haimanot für höhere Bildung nach Deutschland geschickt. Innerhalb von zwei Jahren nach der Ankunft in Deutschland wurde die Idee, eine Kirche zu gründen, auf Prinzipienebene diskutiert. Sie begannen, sich mit Brüdern, die in Heidelberg lebten, unter dem Namen Unserer Lieben Frau Marias Vereinigung zu versammeln. Die Vereinigung diente als Kommunikationsbrücke. Besonders im Jahr 1973 wurde die erste Liturgie in Heidelberg, Deutschland, gefeiert. Die Gläubigen empfingen auch die Kommunion. Durch diesen geistlichen Dienst wurde Vater Aregawi Welde Gabriel gefunden, der später Erzbischof von ganz Europa werden sollte, Seine Heiligkeit Abune Yohannes, um Jamaikanern in London geistlichen Dienst zu leisten. Er führte auch die Liturgie durch. Seine Heiligkeit Abune Yohannes hatte gute Beziehungen aufgrund seiner Menschlichkeit, die von Liebe erfüllt war. Als die Kirche gegründet wurde, waren sie anwesend und vertraten ihre Kirche am Festtag. Nach der ersten Liturgie wurde der Wunsch, die Kirche zu gründen, stärker. Äthiopische Teilnehmer aus Heidelberg und anderen Städten begannen, saisonale, Weihnachts- und Osterfeste zu feiern.",
      readMore: "Weiterlesen",
      showLess: "Weniger anzeigen"
    },
    construction: {
      title: "Kirchengebäude-Bau",
      content: "Unsere St. Michael Äthiopisch-Orthodoxe Kirche in Köln, Deutschland, wurde von Gott gesegnet, zusätzliche Anbetungs-, Segens- und Eigentumsmöglichkeiten von den vorherigen Grundstückseigentümern zu erwerben. Durch die Kraft des Heiligen Michael sind wir von Stärke zu Stärke, von Segen zu Segen, von Enge zu Expansion übergegangen und besitzen jetzt ein großes Gebiet (1840 Quadratmeter) in einem fremden Land. Nach dem Kauf unseres Kirchengrundstücks wurde gemäß dem geplanten Plan die notwendige Studie zur Erweiterung des Inneren durchgeführt und die Arbeit mit dem Architekten begann. Da unsere Kirche als Denkmal registriert war, war es schwierig, unsere Kirche zu entwerfen. Der notwendige Bauprozess wurde jedoch den zuständigen Regierungsstellen (Stadt Köln Bauamt) als erste Bewerbung (Bauantrag) vorgelegt. Nach der Erteilung der Baugenehmigung benötigten wir jedoch Abstand zu unseren Nachbarn, und als der Bau begann, mussten wir die Zustimmung unserer Nachbarn einholen, deren Land von der Grenze betroffen sein könnte (Baulast). Unsere Nachbarn verlangten jedoch viel Geld dafür, und um dies zu vermeiden, wurde der Baulast-Plan mit Bauphysik erstellt. Darüber hinaus war beim ersten Kirchenkauf das Grundstück auf der Vorderseite im Besitz der Evangelischen Kirche, und dieses Gebiet wurde ebenfalls gekauft und Teil unserer Kirche gemacht, und diese Verbesserungsbewerbung wurde erneut an die Stadt Köln Bauamt eingereicht. Nach der Verbesserung des Bauplans (Bauplan) nahm das Geld, das an die Architekten zu zahlen war, und die Zeit, um die Baugenehmigung zu erhalten, viel Zeit in Anspruch. Jetzt warten wir auf die Baugenehmigung:",
      readMore: "Weiterlesen",
      showLess: "Weniger anzeigen"
    },
    events: {
      title: "Kommende Veranstaltungen",
      loading: "Kommende Veranstaltungen werden geladen...",
      error: "Fehler:",
      noEvents: "Keine Veranstaltungen gefunden",
      noUpcomingEvents: "Keine kommenden Veranstaltungen gefunden",
      viewPastEvents: "Vergangene Veranstaltungen anzeigen",
      upcoming: "Kommend",
      past: "Vergangen",
      all: "Alle",
      allYears: "Alle Jahre",
      allMonths: "Alle Monate",
      details: "Details"
    },
    news: {
      title: "Nachrichten",
      readAllNews: "Alle Nachrichten lesen",
      loading: "Nachrichten werden geladen...",
      error: "Fehler:",
      noNews: "Keine Nachrichten gefunden",
      noNewsForFilters: "Keine Nachrichten für die ausgewählten Filter verfügbar",
      allYears: "Alle Jahre",
      allMonths: "Alle Monate",
      date: "Datum:",
      readMore: "Weiterlesen",
      showLess: "Weniger anzeigen",
      previousPage: "Vorherige Seite",
      nextPage: "Nächste Seite",
      goToPage: "Gehe zu Seite"
    },
    services: {
      title: "Gottesdienstplan",
      weekly: "Wöchentlich",
      monthly: "Monatlich",
      sundayService: "Liturgie",
      sundayServiceTime: "Jeden Sonntag",
      monthlyPrayer: "Monatliches Gebet",
      monthlyPrayerTime: "Jeden St. Michael-Tag",
      moreSchedules: "Weitere Termine"
    },
    community: {
      quote: "Die Gründung dieser Kirche war ein Fundament für das Niveau, das die Äthiopisch-Orthodoxe Tewahedo-Kirche in Deutschland und in ganz Europa erreicht hat. Erzpriester Dr. Merawi Tege unternahm nach seinem Weggang aus Deutschland eine erfolgreiche apostolische Reise, um Kirchen in Ländern wie Italien, Schweden und Frankreich zu gründen, ausgehend von dieser Kirche. Daher erinnern wir uns, wenn wir das Fest des Erzbischofs von Köln, Debre Selam St. Michael Kirche, feiern, dass dies das Fundament ist, von dem aus sich die Äthiopisch-Orthodoxe Tewahedo-Kirche in Deutschland und verschiedenen europäischen Ländern ausbreitete und begann, sich mit ihrer ordnungsgemäßen Struktur zu bewegen.",
      author: "- Seine Heiligkeit Abune Dionysius, Erzbischof der Äthiopisch-Orthodoxen Tewahedo-Kirche in Deutschland und Umgebung und Erzbischof der Ost-Gojjam-Diözese"
    }
  },
  history: {
    title: "Geschichte der St. Michael Kirche in Köln",
    caption: "Foto-Erinnerung von der Versammlung, als der Standort zum Kauf entschieden wurde",
    introduction: "Unter den ersten etablierten äthiopisch-orthodoxen Kirchen in Europa, Afrika, Amerika, Kanada und Australien nimmt die St. Michael Äthiopisch-Orthodoxe Tewahedo-Kirche in Köln, Deutschland, einen besonderen Platz als Pionier- und Flaggschiff-Kirche ein. Unsere Kirche wurde unter der Führung von Erzpriester Dr. Merawi Tege, mit dem väterlichen Segen Seiner Heiligkeit Abune Tekle Haimanot, der damals Erzbischof von Dschibuti und Ostafrika war und jetzt Erzbischof der Nordischen und Griechischen Diözese ist, gegründet.",
    establishment: "Der Gründungsprozess war wie folgt: Im Jahr 1971 wurden Erzpriester Dr. Merawi Tege und Diakon Bedemariam Mersha mit dem Segen Seiner Heiligkeit Abune Tekle Haimanot für höhere Bildung nach Deutschland geschickt. Innerhalb von zwei Jahren nach der Ankunft in Deutschland wurde die Idee, eine Kirche zu gründen, auf Prinzipienebene diskutiert. Sie begannen, sich mit Brüdern, die in Heidelberg lebten, unter dem Namen Unserer Lieben Frau Marias Vereinigung zu versammeln. Die Vereinigung diente als Kommunikationsbrücke. Besonders im Jahr 1973 wurde die erste Liturgie in Heidelberg, Deutschland, gefeiert. Die Gläubigen empfingen auch die Kommunion. Durch diesen geistlichen Dienst wurde Vater Aregawi Welde Gabriel, der später Erzbischof von ganz Europa werden sollte, Seine Heiligkeit Abune Yohannes, gefunden, um Jamaikanern in London geistlichen Dienst zu leisten. Er führte auch die Liturgie durch. Seine Heiligkeit Abune Yohannes hatte gute Beziehungen aufgrund seiner Menschlichkeit, die von Liebe erfüllt war. Als die Kirche gegründet wurde, waren sie anwesend und vertraten ihre Kirche am Festtag. Nach der ersten Liturgie wurde der Wunsch, die Kirche zu gründen, stärker. Äthiopische Teilnehmer aus Heidelberg und anderen Städten begannen, saisonale, Weihnachts- und Osterfeste zu feiern.",
    development: "Danach begannen alle Bedingungen verschiedene Formen anzunehmen. Die Zahl der Gläubigen nahm auch zu. Während der Seminarjahre der Europäer war es eine Zeit, in der viele Äthiopier und Eritreer nach Deutschland kamen. Besonders 'Landesarbeitsgemeinschaft Ausländische Flüchtlinge Nordrhein-Westfalen in Düsseldorf e.V.' wurde mit Regierungsbudget gegründet und verfolgte Flüchtlingsangelegenheiten. Eine Studienkonferenz über äthiopische Flüchtlinge wurde vom 8-11, 1973 in Düsseldorf abgehalten. Die Gründer unserer Kirche wurden eingeladen, mit ihrem Professor Dr. Hayer zu beten und zu lehren. War das Sonntagsprogramm nur unseres? Sie konnten ausreichendes Verständnis über unsere Kirche vermitteln, indem sie auf Fragen antworteten, die von ihrem Lehrer auf Deutsch gestellt wurden. Nach dem Verlassen des Landes las jeder, der auch nur einen Tag das Wort Gottes gehört hatte. Besonders Professor Hayer, der entschlossen war, uns zu helfen, kann gesagt werden, dass er von dem Gefühl dieses Volkes bewegt wurde.",
    question: "Die Frage 'Warum gründen wir keine Kirche?' begann täglich gestellt zu werden. Dafür entstand eine geeignete Gelegenheit. Als Seine Heiligkeit Abune Tekle Haimanot, Patriarch von Äthiopien, 1973 auf Einladung der Deutschen Evangelischen Kirche Deutschland besuchte, wurde in Frankfurt die Frage gestellt, dass ihre Erlaubnis benötigt würde, um eine Kirche zu gründen. Nachdem Seine Heiligkeit eine Weile nachgedacht hatte, sagten sie zu den Studenten: 'Warum kehrt ihr nicht in euer Land zurück, nachdem ihr euer Studium beendet habt?' Sie antworteten: 'Unser heiliger Vater, da viele Menschen das Land verlassen haben, brauchen auch unsere Gläubigen eine orthodoxe Kirche wie andere.' Die gesegneten Erzbischöfe, die zu ihnen kamen, Abune Zena Markos, Abune Gorgorios, Abune Elias, und der Hauptsekretär der Heiligen Synode, Lique Ma'amran Ababaw, die ihr Studium im Ausland abgeschlossen hatten, unterstützten die Idee, weil sie die Situation der griechischen und anderen orthodoxen Kirchen kannten. Schließlich sagten sie 'Schreibt einen Brief an jeden' und gingen nach dem Empfang der Kommunion.",
    timeline: {
      title: "Unsere Kirche in der Geschichte",
      periods: {
        first: {
          year: "1971-1981",
          title: "Die ersten 10 Jahre",
          description: "1. Zwei geistliche Studenten, die aus dem Heimatland für die Bildung kamen.\n2. Die erste Liturgie in Heidelberg (Erzpriester Merawi Tege und Priester Zelealem)\n3. Als Patriarch Seine Heiligkeit Abune Tekle Haimanot Deutschland besuchte, bat Erzpriester Merawi Tege um Erlaubnis, die erste St. Michael Kirche zu öffnen.\n4. Bildung und Treffen des ersten Gemeinderats.\n5. Der erste St. Michael geistliche Dienst in Deutschland (1981-1983), dienend während der Reise von Heidelberg (1983-1985).\n6. Erzpriester Merawi Tege, koordinierend mit anderen Priestern, leistete geistlichen Dienst in Deutschland und verschiedenen europäischen Ländern, beginnend von Köln.\n7. Die St. Yared Sänger, eingeladen vom deutschen Fernsehsender WDR, führten Kirchenmusik in einem Konzertsaal auf."
        },
        second: {
          year: "1981-1991",
          title: "Die zweiten 10 Jahre",
          description: "1. Präsentationen über die Äthiopisch-Orthodoxe Tewahedo-Kirche in Kirchen in Deutschland.\n2. Deutsche Kirchenreligionsväter und Diener besuchten Äthiopien.\n3. Teilnahme am Tag, an dem sich Kirchen in Deutschland versammeln (Kirchen Tag).\n4. Jahresberichte bei der jährlichen Klerusversammlung der Äthiopisch-Orthodoxen Tewahedo-Kirche."
        },
        third: {
          year: "1991-2001",
          title: "Die dritten 10 Jahre",
          description: "1. Kirchenkauf, der mit dem guten Willen der ehemaligen Evangelischen Kirche abgeschlossen wurde.\n2. Kirchenrenovierung.\n3. Chorgesang.\n4. 25. Jubiläumsfeier zum ersten Mal.\n5. 30. Jubiläumsfeier."
        },
        fourth: {
          year: "2001-2011",
          title: "Die letzten 10 Jahre",
          description: "1. Verschiedene geistliche Dienste.\n2. Ununterbrochener Dienst während der Corona-Zeit.\n3. Zusätzlicher Haus- und Landkauf."
        }
      }
    },
    administration: {
      title: "Kirchenverwaltung",
      administrator: "Verwalter",
      administratorName: "Erzpriester Dr. Merawi Tege",
      currentCouncil: "Aktuelle Gemeinderatsverwaltung",
      councilPeriod: "(2016-2019 Äthiopischer Kalender)"
    }
  },
  clergy: {
    title: "Kirchenklerus",
    headPriest: "Hauptpriester",
    priest: "Priester",
    deacon: "Diakon"
  },
  constructionStatus: {
    title: "Bauzustand",
    statusOverview: {
      constructionStatus: "Bauzustand",
      constructionStatusValue: "In Bearbeitung",
      permitStatus: "Genehmigungsstatus",
      permitStatusValue: "In Prüfung",
      landStatus: "Grundstücksstatus",
      landStatusValue: "1840 Quadratmeter"
    },
    content: {
      paragraph1: "Unsere St. Michael Äthiopisch-Orthodoxe Kirche in Köln, Deutschland, wurde von Gott gesegnet, zusätzliche Anbetungs-, Segens- und Eigentumsmöglichkeiten von den vorherigen Grundstückseigentümern zu erwerben. Durch die Kraft des Heiligen Michael sind wir von Stärke zu Stärke, von Segen zu Segen, von Enge zu Expansion übergegangen und besitzen jetzt ein großes Gebiet (1840 Quadratmeter) in einem fremden Land.",
      paragraph2: "Nach dem Kauf unseres Kirchengrundstücks wurde gemäß dem geplanten Plan die notwendige Studie zur Erweiterung des Inneren durchgeführt und die Arbeit mit dem Architekten begann. Da unsere Kirche als Denkmal registriert war, war es schwierig, unsere Kirche zu entwerfen. Der notwendige Bauprozess wurde jedoch den zuständigen Regierungsstellen (Stadt Köln Bauamt) als erste Bewerbung (Bauantrag) vorgelegt. Nach der Erteilung der Baugenehmigung benötigten wir jedoch Abstand zu unseren Nachbarn, und als der Bau begann, mussten wir die Zustimmung unserer Nachbarn einholen, deren Land von der Grenze betroffen sein könnte (Baulast). Unsere Nachbarn verlangten jedoch viel Geld dafür, und um dies zu vermeiden, wurde der Baulast-Plan mit Bauphysik erstellt. Darüber hinaus war beim ersten Kirchenkauf das Grundstück auf der Vorderseite im Besitz der Evangelischen Kirche, und dieses Gebiet wurde ebenfalls gekauft und Teil unserer Kirche gemacht, und diese Verbesserungsbewerbung wurde erneut an die Stadt Köln Bauamt eingereicht.",
      highlightBox: "Nach der Verbesserung des Bauplans (Bauplan) nahm das Geld, das an die Architekten zu zahlen war, und die Zeit, um die Baugenehmigung zu erhalten, viel Zeit in Anspruch. Jetzt warten wir auf die Baugenehmigung:"
    }
  },
  faith: {
    title: "Unser Glaube",
    subtitle: "Äthiopisch-Orthodoxe Tewahedo-Kirche",
    heroDescription: "Eine der ältesten christlichen Traditionen der Welt",
    readMore: "Weiterlesen",
    showLess: "Weniger anzeigen",
    tabs: {
      history: "Geschichte",
      beliefs: "Grundüberzeugungen",
      sacraments: "Sakramente",
      liturgy: "Liturgie",
      calendar: "Kalender",
      holyBible: "Heilige Bibel"
    },
    history: {
      title: "Geschichte der Äthiopisch-Orthodoxen Kirche",
      source: "Quelle: https://stmaryeotctoronto.com/am/our-history",
      content: {
        paragraph1: "Antike griechische Dichter, Schriftsteller und Historiker schrieben ausführlich über Äthiopien. Unter ihnen beschrieb Homer das Land und seine Menschen als \"makellose Rassen\", während Herodot Äthiopiens geografische Lage als \"ein Gebiet, das sich südlich von Ägypten erstreckt, um das Rote Meer herum, sich dem Indischen Ozean nähert\" beschrieb. Über sein Volk sagte er: \"Sie sind langlebige, wohlhabende und wahrheitsliebende Menschen.\"",
        paragraph2: "Im Alten Testament ist der Besuch der Königin von Saba bei König Salomo in Jerusalem in 1. Könige 10:1-13 aufgezeichnet. Unter Äthiopiern wird geglaubt, dass diese Reise das Alte Testament in Äthiopien verbreitete und die Bundeslade durch Menelik I., den Sohn von König Salomo und der Königin von Saba, nach Äthiopien brachte.",
        paragraph3: "Seitdem sind jüdischer Glaube und Anbetung zum Glauben und täglichen Lebensführer des Volkes geworden. Das von Menelik I. gegründete Königreich war als die Axumitische Dynastie bekannt. Darüber hinaus zeigen viele historische Aufzeichnungen, dass ein freier Staat in Äthiopien um 4.522 v. Chr. gegründet wurde. Das heutige Axum war die Hauptstadt des antiken Äthiopiens, das Zentrum der Zivilisation und der Geburtsort des Christentums, wie durch die Lebensweise und Religiosität des Volkes, historisches Erbe, stehende Denkmäler und verschiedene Kunstwerke belegt wird. Axum bleibt ein primärer heiliger Ort religiöser Manifestation.",
        paragraph4: "Das Christentum trat während der apostolischen Ära in Äthiopien ein, wie durch biblische und andere historische Aufzeichnungen belegt (Apostelgeschichte 8:26-36). Eusebius, der große Kirchenhistoriker des vierten Jahrhunderts, nannte \"die Taufe des äthiopischen Eunuchen die erste Frucht des christlichen Glaubens in der Welt.\" Dieses bedeutende Ereignis wurde auch von Rufinus aufgezeichnet, gefolgt von den Historikern Theodoret, Sokrates und Sozomen.",
        paragraph5: "Das Christentum wurde jedoch im vierten Jahrhundert während der Axumitischen Periode zur Staatsreligion und begann auf bischöflicher Ebene geführt zu werden. Dies geschah, als der Patriarch von Alexandria, der heilige Athanasius, Abba Frumentius als ersten Bischof von Äthiopien während der Herrschaft von Abraha und Atsbeha ernannte. König Ezana ersetzte die Mondbilder auf seinen Münzen durch das Zeichen des Kreuzes und gewann Vorrang unter den Königen der Welt. Im Jahr 356 n. Chr. schrieb der arianische König Constantius an den Axumitischen König und sagte: \"Bischof Frumentius ist ein Zerstörer des christlichen Glaubens und sollte nach Rom geschickt werden.\" Diese Bitte wurde jedoch nicht angenommen. Der heilige Frumentius wurde später unter Äthiopiern als Abba Salama (Vater des Friedens) und Kasate Berhan (Enthüller des Lichts) bekannt. Von dieser Zeit an erhielt er den Titel Abun, was \"unser Vater\" bedeutet.",
        paragraph6: "Die Ankunft der Neun Heiligen (Tse'atu Qiddusan) in Äthiopien stärkte die Äthiopisch-Orthodoxe Tewahedo-Kirche. Diese Neun Heiligen sollen 479 n. Chr. aus dem Byzantinischen Reich nach Äthiopien gekommen sein. Sie lernten die lokale Sprache, Ge'ez, und die Kultur und übersetzten die Bibel und viele verschiedene spirituelle Bücher aus den hebräischen, griechischen und syrischen Sprachen ins Ge'ez. Neben der Verkündigung des Evangeliums gründeten sie christliche Klöster und begründeten das klösterliche Leben.",
        paragraph7: "Ursprung des Christentums in Äthiopien",
        paragraph8: "Das Christentum trat während der apostolischen Ära in Äthiopien ein, wie durch biblische und andere historische Aufzeichnungen belegt (Apostelgeschichte 8:26-36). Eusebius, der große Kirchenhistoriker des vierten Jahrhunderts, nannte \"die Taufe des äthiopischen Eunuchen die erste Frucht des christlichen Glaubens in der Welt.\" Dieses bedeutende Ereignis wurde auch von Rufinus aufgezeichnet, gefolgt von den Historikern Theodoret, Sokrates und Sozomen. Das Christentum wurde jedoch im vierten Jahrhundert während der Axumitischen Periode zur Staatsreligion und begann auf bischöflicher Ebene geführt zu werden. Dies geschah, als der Patriarch von Alexandria, der heilige Athanasius, Abba Frumentius als ersten Bischof von Äthiopien während der Herrschaft von Abraha und Atsbeha ernannte. König Ezana ersetzte die Mondbilder auf seinen Münzen durch das Zeichen des Kreuzes und gewann Vorrang unter den Königen der Welt. Im Jahr 356 n. Chr. schrieb der arianische König Constantius an den Axumitischen König und sagte: \"Bischof Frumentius ist ein Zerstörer des christlichen Glaubens und sollte nach Rom geschickt werden.\" Diese Bitte wurde jedoch nicht angenommen. Der heilige Frumentius wurde später unter Äthiopiern als Abba Salama (Vater des Friedens) und Kasate Berhan (Enthüller des Lichts) bekannt. Von dieser Zeit an erhielt er den Titel Abun, was \"unser Vater\" bedeutet.",
        paragraph9: "Die Äthiopisch-Orthodoxe Tewahedo-Kirche akzeptiert nur die drei ökumenischen Konzile: das Konzil von Nizäa (325 n. Chr.), das Konzil von Ephesus (381 n. Chr.) und das Konzil von Konstantinopel (431 n. Chr.).",
        paragraph10: "Mönchtum und Klöster in Äthiopien",
        paragraph11: "Das christliche klösterliche Leben begann in Äthiopien zu blühen, nachdem das Christentum der nationale Glaube des Landes wurde und von den Königen Akzeptanz fand. Nach dem klösterlichen System des ägyptischen Heiligen Antonius etablierten es die Neun Heiligen, die 479 n. Chr. in das Land kamen.",
        paragraph12: "Deshalb ist die Zeit vom 4. bis zum 7. Jahrhundert als das goldene Zeitalter bekannt. In diesen Jahrhunderten verbreiteten sich viele evangelische Predigtwerke, und es war eine Zeit, in der verschiedene spirituelle Werke und Schriften durchgeführt wurden. Genau wie die Klöster in Europa die westliche Kultur im Mittelalter verbreiteten und bewahrten, dienten auch die Klöster der Äthiopisch-Orthodoxen Tewahedo-Kirche als Zentren des Wissens und der Zivilisation und entwickelten Literatur, Architektur, Poesie, Musik, Hymnen und spirituelle Lehren. Im 5. Jahrhundert schuf der berühmte Kirchengelehrte Heilige Yared, basierend auf der Heiligen Bibel, heilige Musik, Hymnen und Tänze für die Kirche und machte sie heute zur einzigen Kirche der Welt, die ein für das Ohr angenehmes Gebets- und Lobpreissystem hat und verwendet.",
        paragraph13: "",
        paragraph14: "",
        paragraph15: "",
        paragraph16: "",
        paragraph17: "",
        paragraph18: "",
        paragraph19: "",
        paragraph20: "",
        paragraph21: "",
        paragraph22: "",
        paragraph23: "",
        paragraph24: "",
        paragraph25: "",
        paragraph26: "",
        paragraph27: "",
        paragraph28: "",
        paragraph29: "",
        paragraph30: "",
        paragraph31: "",
        paragraph32: "",
        paragraph33: "",
        paragraph34: "",
        paragraph35: "",
        paragraph36: "",
        paragraph37: "",
        paragraph38: "",
        paragraph39: "",
        paragraph40: "",
        paragraph41: "",
        paragraph42: "",
        paragraph43: "",
        paragraph44: "",
        paragraph45: "",
        paragraph46: "",
        paragraph47: "",
        paragraph48: "",
        paragraph49: "",
        paragraph50: ""
      }
    },
    beliefs: {
      title: "Grundüberzeugungen",
      subtitle: "Glaubensgebet",
      introduction: "Das Fundament des Glaubens, das die Äthiopisch-Orthodoxe Tewahedo-Kirche etabliert, das täglich im Gebet und während der Liturgie, individuell oder gemeinschaftlich gebetet wird, basiert auf den Glaubensgrundlagen, die von unseren heiligen Vätern auf dem Konzil von Nizäa und dem Konzil von Konstantinopel (Nizäno-Konstantinopolitanisches Glaubensbekenntnis) etabliert wurden. Dieses Gebet wird mündlich von neuen Gläubigen (Katechumenen) vor der Taufe rezitiert, und für Säuglinge rezitiert die christliche Mutter oder der Vater es in ihrem Namen. Das Gebet lautet wie folgt:",
      creed: "Wir glauben an den einen Gott, den Vater, den Allmächtigen, der alles geschaffen hat, Himmel und Erde, die sichtbare und die unsichtbare Welt. Und an den einen Herrn Jesus Christus, Gottes eingeborenen Sohn, aus dem Vater geboren vor aller Zeit: Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geschaffen. Für uns Menschen und zu unserem Heil ist er vom Himmel gekommen, hat Fleisch angenommen durch den Heiligen Geist von der Jungfrau Maria und ist Mensch geworden. Er wurde für uns gekreuzigt unter Pontius Pilatus, hat gelitten und ist begraben worden, ist am dritten Tage auferstanden nach der Schrift und aufgefahren in den Himmel. Er sitzt zur Rechten des Vaters und wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten; seiner Herrschaft wird kein Ende sein. Und an den Heiligen Geist, der Herr ist und lebendig macht, der aus dem Vater und dem Sohn hervorgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird, der gesprochen hat durch die Propheten. Und die eine, heilige, katholische und apostolische Kirche. Wir bekennen die eine Taufe zur Vergebung der Sünden. Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt. Amen."
    },
    sacraments: {
      introduction: "Die dogmatische Lehre der Äthiopisch-Orthodoxen Tewahedo-Kirche basiert auf den dogmatischen Lehren, die aus der Heiligen Bibel stammen und von den drei ökumenischen Konzilen etabliert wurden. Die Hauptpunkte werden in fünf grundlegenden Punkten zusammengefasst, die als die fünf Säulen der Mysterien bezeichnet werden.",
      list: "Diese sind: Mysterium der Dreifaltigkeit, Mysterium der Menschwerdung, Mysterium der Taufe, Mysterium der Eucharistie und Mysterium der Auferstehung.",
      trinity: {
        title: "1. Mysterium der Dreifaltigkeit",
        content: "Die Lehre des Mysteriums der Dreifaltigkeit ist das fundamentale Fundament des christlichen Glaubens, das die Dreifaltigkeit und Einheit Gottes erklärt. Dieses Dogma ist tiefgründig; diese Lehre kann nicht durch Forschung allein erreicht werden, es sei denn, sie wird von Gott offenbart. \"Niemand kennt den Sohn außer dem Vater, und niemand kennt den Vater außer dem Sohn und dem, dem der Sohn ihn offenbaren will.\" (Mt. 11:27) Der eine Gott, den wir anbeten, ist einer im Wesen und drei in den Personen. Dies ist die Lehre, die unsere orthodoxe Kirche akzeptiert. \"Der Geist ist die Wahrheit, und der Geist ist der, der bezeugt. Der Geist, das Wasser und das Blut sind drei, und die drei sind eins.\" (1. Joh. 1:5-7)"
      },
      incarnation: {
        title: "2. Mysterium der Menschwerdung",
        content1: "Das Mysterium der Menschwerdung erklärt uns Gottes Werk der Erlösung, dass Er Mensch wurde, um die Menschen zu retten. Der Grund, warum dies notwendig war, ist, weil unsere Krankheit/Gebrechlichkeit einen heilenden Erlöser brauchte. (Lk. 19:10) Unsere Dunkelheit brauchte Licht. (Mt. 4:12-17) Wir brauchten jemanden, der uns vom Joch der Sklaverei befreit. (Gal. 5:1) Bezüglich dieser Angelegenheit sagt auch das Glaubensgebet: \"Für uns und zu unserem Heil ist er vom Himmel gekommen. Durch den Heiligen Geist und die Jungfrau Maria wurde er Mensch.\"",
        content2: "Unter dem Mysterium der Menschwerdung liegt das Mysterium der Vereinigung, das unsere Kirche als die dogmatische Lehre des heiligen Kyrill von Alexandria akzeptiert. \"Die Natur der Göttlichkeit des Sohnes\" - mit anderen Worten, wenn die beiden Naturen \"Göttlichkeit und Menschlichkeit\" vereint sind, ist Christi Natur nur eine. Die Einheit des Wortes und des Fleisches wurde im Schoß der Heiligen Jungfrau Maria vereint, daher wird die Natur der Menschlichkeit der Göttlichkeit offenbart, und die Natur der Göttlichkeit wird der Menschlichkeit offenbart. In dieser reinen Vereinigung \"wurden Gott und Fleisch eins ohne Verwirrung und ohne Veränderung, und unser Herr Jesus Christus ist vollkommener Mensch und vollkommener Gott.\" Das heißt, der Gott, der Mensch wurde, unser Erlöser Jesus Christus, hat nach der Vereinigung einen Körper und eine Natur - vollkommener Mensch und vollkommener Gott. Daher ist es nicht möglich, von zwei Naturen zu sprechen. Daher steht im Johannesevangelium geschrieben: \"Das Wort wurde Fleisch und wohnte unter uns, und wir haben seine Herrlichkeit gesehen, die Herrlichkeit als des eingeborenen Sohnes vom Vater.\" (Joh. 1:14) Der heilige Athanasius drückte es auch aus: \"Gott wurde Mensch, damit der Mensch Gott werden und Teilhaber der göttlichen Natur werden könnte.\" (2. Petr. 1:4)"
      },
      baptism: {
        title: "3. Mysterium der Taufe",
        content: "Das Mysterium der Taufe ist die Eingangstür zur Mitgliedschaft in der Kirche und die Gnade unseres Gottes, die wir empfangen, wenn wir vom Heiligen Geist geboren werden und Kinder Gottes werden. (Mk. 16:16, Joh. 19:34-35, Apg. 2:38). Die Taufe ist die Tür des Glaubens, die uns in das christliche Leben führt, und die Taufe wird nur einmal vollzogen und nicht wiederholt. (Eph. 4:4-7, Joh. 3:3-8)"
      },
      eucharist: {
        title: "4. Mysterium der Eucharistie",
        content1: "Unser Herr und Erlöser Jesus Christus hat es beim Letzten Abendmahl mit seinen Jüngern am Gründonnerstag eingesetzt. Er sagte auch: \"Tut dies zu meinem Gedächtnis an meinen Tod und meine Auferstehung\" (Mt. 26:26-30)",
        content2: "Der heilige Paulus sagte auch: \"Dieser Kelch ist der neue Bund in meinem Blut. Tut dies, sooft ihr daraus trinkt, zu meinem Gedächtnis.\" Daher wurde es für die Menschen gegeben, nicht für Gott, und durch die Eucharistie befreit es uns von der Knechtschaft der Sünde und bringt uns zu Gott. (Joh. 6:53-57) Die Eucharistie drang in die Herzen der frühen Christen ein und wurde zu einer Verbindung zwischen göttlicher Gnade und menschlichem Leben."
      },
      resurrection: {
        title: "5. Mysterium der Auferstehung",
        content: "Das Mysterium der Auferstehung ist das Mysterium, das unsere Auferstehung von unserem irdischen Fleisch, unseren Sieg über den Tod und das ewige Leben erklärt, das wir danach empfangen werden. Dies ist das, was als das glorreiche Kommen unseres Herrn und Erlösers Jesus Christus offenbart wird. Genau wie jeder Same zuerst stirbt und dann Frucht trägt. (Joh. 12:24, 1. Kor. 15:36) Daher sterben wir alle und stehen dann wieder auf, um Erben des Reiches zu werden. Das Glaubensgebet sagt auch: \"Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt. Amen.\""
      }
    },
    liturgy: {
      introduction: "Das Wort 'Mysterium' stammt aus der griechischen Sprache und bedeutet verborgen, geheim, verschleiert, tiefgründig und nicht offenbart außer für nahe Verwandte. Es wird in zwei Kategorien unterteilt: das Mysterium der Schöpfung und das Mysterium des Schöpfers. Das Mysterium der Schöpfung hat zwei Inhalte: das Mysterium des Menschen und der Engel. Das Mysterium Gottes des Schöpfers, das in der Kirche gefunden wird, ist ein kostbares, geliebtes und gesegnetes Geschenk. Der Apostel Petrus, das Licht der Welt, erklärte es in seinen kostbaren Worten: 'Obwohl ihr ihn nicht gesehen habt, liebt ihr ihn; und obwohl ihr ihn jetzt nicht seht, glaubt ihr an ihn und seid erfüllt mit einer unaussprechlichen und herrlichen Freude.' Indem er erklärt, dass es der Schatz ist, den Gott uns aus Seiner verborgenen und tiefgründigen Gnade gibt. Basierend darauf sind die sieben Mysterien, die in unserer Kirche vollzogen werden, durch die Zahl 7 etabliert. Ihr Beispiel ist für die sieben Himmel. Diese sieben Mysterien der Kirche werden Mysterien genannt, weil sie besondere Gaben des Heiligen Geistes sind, die wir nicht mit unseren Augen sehen oder mit unseren Händen berühren können, die durch diese Mysterien gegeben werden. Die Väter sagen, dass ein Mysterium, das im Lesen verborgen ist, ein Mysterium genannt wird, sprechend von seiner Verborgenheit und Tiefgründigkeit. Die sieben Kirchenmysterien sind auch sieben, wie es in Sprüche 9:1 heißt: 'Die Weisheit hat ihr Haus gebaut; sie hat ihre sieben Säulen aufgestellt.' Derjenige, der Weisheit genannt wird, ist unser Herr und Erlöser Jesus Christus, und die sieben Säulen sind das Beispiel der sieben Kirchenmysterien.",
      list: {
        baptism: "Mysterium der Taufe",
        myron: "Mysterium des Myron",
        eucharist: "Mysterium der Eucharistie",
        repentance: "Mysterium der Buße",
        priesthood: "Mysterium des Priestertums",
        marriage: "Mysterium der Ehe",
        unction: "Mysterium der Salbung"
      },
      baptism: {
        title: "Mysterium der Taufe",
        content1: "Wie unser Herr Gott und Erlöser Jesus Christus zu Nikodemus sagte: 'Wahrlich, wahrlich, ich sage dir, es sei denn, dass jemand geboren werde aus Wasser und Geist, so kann er nicht in das Reich Gottes kommen.' Durch Wasser und Geist werden wir geboren und empfangen die Sohnschaft der Dreifaltigkeit, treten in das Himmelreich ein, haben unsere Sünden vergeben und empfangen das Heil. Dies ist das große Mysterium (Joh. 3:5). Die Taufe ist der besondere Lebensweg, der allen gegeben wird, die an das Mysterium der Dreifaltigkeit und das Mysterium der Menschwerdung glauben, um die Sünde zu beenden, die Gnade der Sohnschaft von der Dreifaltigkeit zu empfangen und das Reich Gottes zu erben. Die Taufe wird 'Epiphanie' in der syrischen Sprache, 'Asterio' in Ge'ez und 'Offenbarung' in Amharisch genannt. Das Wort bedeutet wörtlich ins Wasser eintreten, auftauchen, eintauchen und untertauchen. Die Taufe ist eines der sieben Kirchenmysterien (Mysterium der Taufe, Mysterium des Myron, Mysterium der Eucharistie, Mysterium der Buße, Mysterium des Priestertums, Mysterium der Ehe, Mysterium der Salbung).",
        content2: "Der Gründer des Mysteriums der Taufe ist unser Herr und Erlöser Jesus Christus selbst. Jedoch hatten die Juden vor der Taufe unseres Herrn die Taufe zur Reinigung und Vergebung der Sünden. Dies war ein System und eine Tradition des Waschens des Körpers und der Kleidung, des Waschens aller Utensilien, die im Haus Gottes dienen, und der Reinigung an allen heiligen Tagen und Orten, wo Gott sich in der Erlösung offenbart. Es war auch eine Praxis, die Gottes Erlaubnis hatte. Bevor sie sich dem Haus Gottes näherten und in den heiligen Dienst eintraten, hatten sie auch die Verpflichtung, ihre Füße und Hände zu waschen. Durch das Waschen ihrer Körper von äußerem Schmutz und das Reinigen war es eine Tradition und ein Mysterium, das darauf hinwies, das innere Leben vor dem reinen und heiligen Gott rein zu machen.",
        content3: "",
        examples: {
          title: "Beispiele der Taufe",
          content: "Abraham überquerte den Jordan und ging zu Melchisedek - das ist ein Beispiel der Taufe. Abraham ist das Beispiel von Melchisedek, der das Beispiel von Jesus Christus ist. (1. Mose 14:17) Hiob wurde im Jordan getauft und von seiner Krankheit geheilt. Das ist ein Beispiel dafür, dass Gläubige getauft werden und von der Krankheit des Fleisches und der Krankheit der Seele geheilt werden. Naaman der Syrer wurde getauft und von seinem Aussatz geheilt. (2. Könige 5:14) Das ist ein Beispiel dafür, dass Gläubige getauft werden und von der Verderbnis des Fleisches und der Verderbnis der Seele gerettet werden. Noahs Arche ist ein Beispiel der Taufe. 1. Mose 6:13 Der Apostel Petrus sagte auch: \"Als Gottes Geduld in den Tagen Noahs wartete, während die Arche gebaut wurde, in der wenige, das heißt acht Personen, durch das Wasser gerettet wurden. Die Taufe, die diesem entspricht, rettet euch jetzt, nicht als Entfernung von Schmutz vom Körper, sondern als Appell an Gott für ein gutes Gewissen, durch die Auferstehung Jesu Christi.\" (1. Petrus 3:20) Die Beschneidung, die Abraham als Gesetz gegeben wurde, ist ein Beispiel der Taufe. Obwohl Abraham beschnitten wurde, nachdem er alt war, befahl Gott, dass seine Kinder am achten Tag nach ihrer Geburt beschnitten werden. (1. Mose 17:9) \"In ihm wurdet ihr auch beschnitten mit einer Beschneidung, die nicht mit Händen gemacht wurde, durch das Ablegen des Leibes des Fleisches, durch die Beschneidung Christi, da ihr mit ihm in der Taufe begraben wurdet, in der ihr auch mit ihm auferweckt wurdet durch den Glauben an die mächtige Wirkung Gottes, der ihn von den Toten auferweckt hat.\" (Kolosser 2:11)"
        },
        whyBaptized: {
          title: "Warum wurde unser Herr getauft?",
          content: "Um unsere Schuldschein zu annullieren. Als Adam und Eva von ihrer Strafe überwältigt waren und ihr Leiden zunahm, sagte ihr Verführer Satan zu ihnen: 'Schreibt eure Namen und gebt sie mir.' Adam schrieb 'Adam, Diener Satans (Adam, männlicher Diener Satans)' und Eva schrieb 'Eva, Dienerin Satans (Eva, weibliche Dienerin Satans)' und gab es ihm. Satan legte dann diese Urkunde ab, eine in der Scheol und eine im Jordan. Als unser Herr im Jordan getauft wurde, riss er sie entsprechend seiner Menschlichkeit auf. Deshalb wurde unser Herr im Jordan getauft - um diese Schrift zu annullieren. Deshalb sagte der Apostel Paulus: 'Und euch, die ihr tot wart in den Übertretungen und der Unbeschnittenheit eures Fleisches, hat Gott mit ihm lebendig gemacht, indem er uns alle Übertretungen vergab und den Schuldschein, der gegen uns stand, mit seinen Forderungen auslöschte. Das hat er beiseite getan, indem er es ans Kreuz nagelte.' (Kolosser 2:14)"
        },
        trinityRevelation: {
          title: "Um das Mysterium der Dreifaltigkeit zu offenbaren",
          content: "Als unser Herr im Jordan getauft wurde, wurde das Mysterium der Dreifaltigkeit offenbart. Der Vater sagte aus der Wolke: 'Dies ist mein geliebter Sohn, an dem ich Wohlgefallen habe', und machte bekannt, dass der Vater der Vater des Sohnes ist. Der Heilige Geist offenbarte auch, dass er das Leben der Natur ist, indem er wie eine Taube herabstieg und auf ihm ruhte, und der Sohn wurde in seinem getrennten Körper gesehen, wie er im Jordan getauft wurde. Deshalb bedeutet es, wenn wir sagen, das Mysterium zu offenbaren, dass das Mysterium der Einheit und Dreifaltigkeit getauft wurde, um in einem klaren Zustand bekannt zu werden. (Matthäus 3:16) Um die Prophezeiung zu erfüllen: 'Die Wasser sahen dich, o Gott; die Wasser sahen dich und fürchteten sich; ja, die Tiefe erbebte. Die Wolken gossen Wasser aus; der Himmel gab Donner.' (Psalm 77:16) Wann wurde unser Herr getauft? Unser Herr und Erlöser Jesus Christus wurde im Jahr 5531 der Welt, nach Lukas' Ära, am Dienstag, dem 11. Tag des Tir, in der 10. Stunde der Nacht getauft. Nach dem Königlichen Gesetz, Artikel 19, war er, als er getauft wurde, 30 Jahre alt und 13 Tage. (Lukas 3:23) Im alttestamentlichen System und der Tradition erschienen Priester und geistliche Diener nicht öffentlich vor dem Alter von 30 Jahren für die Mission des Hauses Gottes und geistliche Dienste. Selbst wenn es sehr notwendig war, gab es keine Tradition, vor dem Alter von 20 und 25 Jahren für den Dienst zu ernennen. Die Diener des Hauses Gottes mussten reif in Alter und Wissen sein, geprüft in Charakter und Arbeitserfahrung, und von den Menschen, denen sie dienten, bezeugt werden, um ihre Mission kompetent auszuführen. (2. Mose 4:3; 1. Chronik 23:24; 1. Timotheus 3:6-10) Um dieses System zu erfüllen, wurde unser Herr getauft und für die Lehre des Evangeliums im Alter von 30 Jahren offenbart. Johannes der Täufer erschien auch im Jordan, Judäa, in der Wüste, um das Kommen des Herrn zu verkünden, nachdem er 30 Jahre alt war. Der andere große Grund ist, die Sohnschaft wiederherzustellen, die Adam, dem ersten aller Menschen, weggenommen wurde, der 30 Jahre alt war, als er geschaffen und am 40. Tag gegeben wurde, und dann wegen der Sünde weggenommen wurde. Christus wurde nicht getauft, um Ruhm zu gewinnen, sondern um seine Sohnschaft der Natur des Vaters (seine göttliche Natur) vom Vater und dem Heiligen Geist zu bezeugen, das Wasser zu heiligen, den Schuldschein von Adams Kindern zu annullieren und die Herrlichkeit der Sohnschaft wiederherzustellen, die im Irrtum verloren ging. Nachdem der Herr getauft wurde und aus dem Wasser kam, stieg der Heilige Geist wie eine Taube herab und ruhte auf ihm, und der Vater bezeugte aus der Wolke und sagte: 'Dies ist mein Sohn', und bestätigte das Mysterium der Dreifaltigkeit, Einheit und Dreifaltigkeit deutlich. (Matthäus 3:16)"
        },
        jordanBaptism: {
          title: "Unseres Herrn Taufe im Jordan",
          content: "Es ist bekannt, dass es in der Jerusalemer Gegend viele Flüsse, Bäche und Seen gibt. Der Herr vollzog seine Taufe im Jordan, um die Prophezeiung zu erfüllen, die vorher gesprochen wurde. 'Das Meer sah und floh; der Jordan wandte sich zurück.' (Psalm 113:3) Zusammen damit hat der Jordan, der eine Quelle von oben hat, niedrig fließt und durch eine Insel geteilt wird, dann wieder zusammenkommt, die Bedeutung zu zeigen, dass alle Menschen und Nationen, die durch Beschneidung und Unbeschnittenheit (durch Beschneidung und Nicht-Beschneidung) geteilt waren, durch die Taufe unseres Herrn eins werden. Israel überquerte den Jordan und betrat das verheißene Land. Gläubige, die glauben und getauft werden, erben auch das Himmelreich durch die Taufe. Das andere ist, den Schuldschein zu annullieren, der im Jordan für uns hinterlegt wurde. (Kolosser 2:14)"
        }
      },
      myron: {
        title: "Mysterium des Myron",
        content: "Myron bedeutet Öl und ist ein heiliges Öl, das nur für spirituelle Dienste verwendet wird. Es wird durch Mischen und Kochen verschiedener duftender Kräuter hergestellt. <br /> In der Zeit des Alten Testaments wurden Priester gesalbt, Könige wurden gesalbt, und heilige Salbung für Priestertum und Königtum wurde durchgeführt. Ex. 28:41, Ex. 29:7, Lev. 4:3, Lev. 6:20, Lev. 8:2, 1 Sam. 9:16, 1 Sam. 16:1, 1 Kön. 1:34. In dieser Zeit des Alten Testaments wurden sowohl Priester als auch Könige aus den Kindern Israels ausgewählt, um Gottes Volk zu dienen, und die Salbung des Priestertums und Königtums war ein Weg, durch den Gottes Gnade an sie übertragen wurde, um ihren Dienst mit Weisheit und Treue zu erfüllen. Diejenigen, die solche Führungspositionen unter Priestern und Königen innehatten, gingen durch, indem sie Gottes Gebote empfingen, Gott gehorchten und ihrem Volk mit Gerechtigkeit dienten.",
        newTestament: {
          title: "Myron-Salbung im Neuen Testament",
          content: "Die heilige Salbung, die für großen spirituellen Dienst im Alten Testament verwendet wurde, setzte ihren spirituellen Zweck im Neuen Testament fort. 1 Joh. 2:17. Die Myron-Salbung wird durch die Gebete und Segnungen des Patriarchen und der Bischöfe nach dem Mischen aus verschiedenen Kräutern gesegnet."
        },
        service: {
          title: "Der Dienst der Myron-Salbung",
          content: "Die Apostel wurden durch Handauflegung am Gründonnerstagabend getauft. Joh. 13:4. Aber sie empfingen den Heiligen Geist am fünfzigsten Tag, als unser Herr auffuhr. Apg. 2:1. Die Gläubigen, die in der apostolischen Zeit lebten, empfingen auch den Heiligen Geist, als ihnen Hände aufgelegt wurden, nachdem sie geglaubt und getauft worden waren. Apg. 8:14. Als unser Herr getauft wurde, ruhte der Heilige Geist in Form einer Taube auf ihm und zeigte uns, dass die Gabe des Heiligen Geistes nach der Taufe gegeben wird. Matth. 3:16. Der Heilige Geist, den wir in der Taufe empfangen haben, wird uns nicht verlassen, es sei denn, wir verleugnen ihn, auch wenn wir irgendeine Sünde begehen, bis wir Buße tun. Nach den Aposteln entschieden die apostolischen Väter (Patriarchen und Bischöfe), dass der Gläubige, der durch Handauflegung getauft wird, die Gabe des Heiligen Geistes durch Myron-Salbung empfangen sollte, damit es alle in Bezug auf die Anzahl der Getauften erreichen und als Führung für die Kirche für zukünftige Generationen dienen konnte. Seit dieser Zeit gibt die Kirche den Heiligen Geist den Getauften durch Myron-Salbung nach der Taufe.",
          paragraph2: "Die Bundeslade (Tafel) muss mit dieser heiligen Myron-Salbung geweiht werden, bevor sie in die Kirche eintritt und auf dem Thron sitzt, um zu dienen. Auch wenn sie gestohlen oder an einem anderen Ort ist, wo ihre Ehre nicht bewahrt wird und es nicht angemessen ist, muss sie nach ihrer Rückkehr wieder gesegnet werden.",
          paragraph3: "Nach dem Bau der Kirche muss sie mit Myron-Salbung gesegnet werden, bevor der vollständige Kirchendienst in ihr gegeben wird. Wenn sie nicht mit Myron-Salbung gesegnet ist, kann sie nicht Kirche genannt werden. Sie unterscheidet sich von einer gewöhnlichen Halle nur, wenn sie mit Myron-Salbung geehrt wird und die Bundeslade in ihr ist."
        }
      },
      eucharist: {
        title: "Mysterium der Eucharistie",
        content: "Eucharistie bedeutet alles, was Gott dargebracht wird - Opfer, spirituelle Dinge. Aber in dieser Lehre lernen wir über das neutestamentliche Opfer (Christi Leib und Blut). <br /> Beispiele alttestamentlicher Opfer für die neutestamentliche Eucharistie <br /> Melchisedeks Opfer Gen. 14:18, Heb. 5:6, Heb. 6:1. Das Brot ist sein Leib, der Wein ist sein Blut - Melchisedek ist Christus, Abraham sind die Gläubigen. <br /> Israels Passah. Ex. 12:1. Der Tod ist der Teufel, Israel sind die Gläubigen, das Lamm ist Christi Beispiel.<br /> Israels Manna. Ex. 16:13. Manna ist unseres Herrn heiliger Leib und kostbares Blut, Israel sind die Gläubigen, die Wolke ist unsere Herrin <br /> Väter, die alttestamentliche Opfer darbrachten und Segen empfingen <br /> Unser Vater Adam empfing das Wort, dass nach fünftausendfünfhundert Jahren der Mensch durch das Opfer gerettet werden würde, das Adam darbrachte. Gen. 3:22, Gal. 4:4. <br /> Noah empfing das Wort durch das Zeichen des Regenbogens, dass die Erde nicht wieder durch Flut zerstört werden würde durch das Opfer, das Noah Noah und seinen Kindern darbrachte. Gen. 9:1, Gen. 9:8. <br /> Abraham Gen. 18:3. Unser Vater Abraham hörte die Verheißung, dass alle Nationen durch sein Opfer gesegnet werden würden, und dieser Same war Isaak für die Zeit, aber das Ende war für den Herrn. <br /> Melchisedek Gen. 14:17, Ps. 109:4, Heb. 5:6. Durch das Opfer, das er vor Gott darbrachte, wurde sein Priestertum für immer etabliert und wurde Christi Beispiel. Heb. 7:1. <br /> David Ps. 131:11. Als er Opfer darbrachte, wurde ihm gesagt, dass der Sohn aus deinen Lenden auf deinem Thron sitzen wird, und dies wurde zu Salomo für die Zeit gesprochen, aber das Ende war für Christus. Ps. 71:1. Andere empfingen auch Segen, indem sie reine Opfer vor Gott darbrachten. <br />",
        newTestament: {
          title: "Mysterium der Eucharistie im Neuen Testament",
          content: "Das Opfer, das in der Zeit des Alten Testaments dargebracht wurde, war von Schafen, Rindern und verschiedenen Tieren. Aber im Neuen Testament werden Tiere nicht als Opfer (Eucharistie) im Tempel dargebracht - alles Opfer ist in Christi Leib und Blut erfüllt worden. <br /> Unser Herr selbst etablierte dieses neutestamentliche Opfer, und am Gründonnerstagabend, als die zwölf Apostel anwesend waren, vollzog er zuerst das alttestamentliche Opfer und nachdem er es vollzogen hatte, segnete er das Brot und den Wein und sagte: 'Dies ist mein Leib, der morgen am Kreuz gebrochen werden wird, und mein Blut, das vergossen werden wird, esst und trinkt dies' und gab es ihnen. Matth. 26:26. <br /> Heute, wenn der Priester das Brot zu Brot und den Wein zu einem Kelch macht und die Liturgie betet und es segnet, wie zu jener Zeit, wird das Brot zu göttlichem Fleisch und der Wein wird zu göttlichem Blut. Wenn wir diesen heiligen Leib und kostbares Blut empfangen, müssen wir leben, indem wir uns an das Leiden und den Schmerz erinnern, den er für uns empfing, uns selbst durch Buße von der Sünde rein machen, glaubend, dass unsere verbleibenden Sünden ausgelöscht werden, dass wir vom Bösen gereinigt werden und dass ewiges Leben gegeben wird.<br /> In 1 Kor. 11:23 bedeutet das Wort 'Tut dies zu meinem Gedächtnis', dass wir, wenn wir seinen Leib und Blut empfangen, leben sollten, indem wir uns an das Leiden erinnern, das er für Menschenkinder im Hof des Kaiphas erduldete, und die göttliche Liebe, die in unsere Herzen ausgegossen wurde. Das Wort Gedächtnis bezieht sich auf etwas, das nicht vergessen werden kann. Gal. 3:1 <br /> Bevor unser Herr dieses Mysterium zeigte (etablierte), lehrte er in Joh. 6:25-8 ausführlich über das Mysterium der Eucharistie und sagte: 'Wenn ihr mein Fleisch nicht esst und mein Blut nicht trinkt, habt ihr kein Leben in euch. Wer mein Fleisch isst und mein Blut trinkt, hat ewiges Leben. Mein Fleisch ist wahre Speise und mein Blut ist wahrer Trank (der Leben gibt).' <br />"
        },
        benefits: {
          title: "Nutzen der Heiligen Kommunion",
          content: "Auch wenn wir durch den Tod von dieser Welt getrennt werden, werden wir ewiges Leben empfangen, das im himmlischen Reich nicht vergehen wird. Joh. 6:54. <br /> Wir empfangen Vergebung (vollständige Erlösung) für unsere Sünden. Matth. 26:26. <br /> Wir bestätigen unsere Einheit mit unserem Herrn und mit den Heiligen. 1 Kor. 10:17. <br /> Der Grund, warum er seinen Leib aus Brot und sein Blut aus Wein machte, ist, die Prophezeiung und das Beispiel zu erfüllen <br />"
        },
        prophecy: {
          title: "Prophezeiung",
          content: "Ich habe Freude in meinem Herzen vermehrt von der Frucht des Weizens und der Frucht des Weins. Ps. 4:7. Dieses Wort zeigt an, dass die wahre und vollkommene ewige Erlösung, die Heilige Kommunion, aus Weizen und Wein gemacht wird. <br />"
        },
        example: {
          title: "Beispiel",
          content: "Christi Beispiel; Melchisedeks Opfer wurde mit Brot und Wein dargebracht, um das Beispiel zu erfüllen. Gen. 14:17. <br />"
        },
        reason: {
          title: "Der Grund, warum er seinen Leib und Blut aus Nahrung machte",
          content: "Um zu erklären, dass, so wie Nahrung sich mit dem Körper vereint, wenn wir seinen Leib und Blut empfangen, wir uns wahrhaftig mit ihm vereinen. <br /> So wie Nahrung unserem Körper Kraft gibt, geben sein Leib und Blut auch unseren Seelen geistliche Kraft. <br /> So wie Adam und Eva ihre Sohnschaft zu Gott durch Nahrung verloren, kann er durch seinen heiligen Leib und kostbares Blut unsere Sohnschaft wiederherstellen. Gen. 3:1. Joh. 6:49. <br />"
        },
        practice: {
          title: "Praxis der Heiligen Kommunion",
          content: "Wir müssen immer die Heilige Kommunion empfangen, nachdem wir Buße getan haben. Unsere Sünden werden durch die Heilige Kommunion bestätigt, vergeben zu werden. Matth. 27:27. Gläubige, solange sie leben, ob männlich oder weiblich, jung oder alt, sollten nicht von der Heiligen Kommunion getrennt werden, denn dieses Mysterium ist allen ohne Einschränkung nach Geschlecht oder Alter gegeben. Joh. 6:54. Wir sollten seinen Leib und Blut nicht in Stolz empfangen, ohne für die Fehler, die wir gemacht haben, Buße zu tun; diejenigen, die dies tun, sind schuldig. 1 Kor. 11:27. Die Heilige Kommunion, die wir empfangen, ist nach unseres Herrn Kreuzigung im Hof des Kaiphas, und nach neun Stunden trennte er seine heilige Seele von seinem heiligen Leib durch seine eigene Autorität. Joh. 10:18. Joh. 19:30. Er ging in Körper und Seele zu Sheol, und nachdem er die Seelen, die dort waren, zurück ins Paradies gebracht hatte, vereinte er sich mit dem Fleisch, das drei Tage und drei Nächte im Grab war, durch seinen Willen und stand wieder auf. Während dieser Zeit (als sein Leib und Blut getrennt waren) war seine Gottheit nicht von seiner Seele oder seinem Körper getrennt. 1 Joh. Daher sind der Leib und das Blut, die wir empfangen, mit der Gottheit vereint, die von der Seele getrennt wurde. 1 Joh. 3:18. <br />"
        }
      },
      repentance: {
        title: "Mysterium der Buße",
        content: "Buße: Buße kommt vom Bedauern, und Buße bedeutet, die begangenen Sünden zu bedauern, zu trauern und sich zu entscheiden, zu Gott zurückzukehren. Buße ist ein Mysterium, das vor dem ewigen Gericht rettet, den Sünder wie eine Jungfrau macht, den Dieb wie einen Priester macht, von zuvor begangenen Sünden reinigt und mit Gott vereint. <br />",
        beforeRepentance: {
          title: "Vor der Buße",
          content: "Bedauern <br /> Wenn ein Christ, sei es aus Stolz oder aus Versehen, erkennt, dass das, was er getan hat, falsch war, indem er Bücher liest, von Lehrern lernt, Predigten hört, sein Gewissen beunruhigt wird oder aus einem anderen Grund, und dann bedauert und eine Reise unternimmt, um sich mit Gott zu versöhnen (um sein Unrecht zu erklären), wird dies Buße genannt. Eine Person, die Buße tut, ohne das Unrecht zu bedauern, das sie getan hat, sondern nur, weil ihr Gewissen eine Weile beunruhigt war, kann nach der Buße zu ihrem vorherigen Leben zurückkehren. Dies liegt daran, dass die Buße, in die er eingetreten ist, nicht darauf zurückzuführen war, dass er das Unrecht, das er getan hatte, von Herzen bedauerte, sondern weil er von Emotionen bewegt wurde. <br />"
        },
        hatingSin: {
          title: "Sünde hassen",
          content: "Nachdem wir unser Unrecht bedauert haben, bedeutet es, uns selbst davon zu überzeugen, dass wir das Unrecht, das wir getan haben, hassen und dass wir es in Zukunft nicht tun werden, und uns vom Weg der Sünde fernzuhalten. <br />"
        },
        lifeDecision: {
          title: "Entscheidung über das Leben nach der Buße",
          content: "Ein Gläubiger sollte das Leben, das er in Zukunft führen wird, untersuchen und entscheiden, bevor er die Buße betritt. Wenn wir das Wort Gottes hören, können unsere Herzen eine Weile berührt werden, und wir können sagen, was sollen wir tun. Apg. 2:37. Aber nach einer bestimmten Zeit müssen wir uns im Voraus untersuchen und denken, dass wir zur Welt zurückkehren könnten. Viele, die durch Emotionen zum Christentum kamen, wurden plötzlich von zeitlichen Dingen verführt und verließen den Weg der Religion. <br />"
        },
        duringRepentance: {
          title: "Während der Buße",
          content: "Wenn ein Gläubiger Unrecht begangen hat und sich entschieden hat, sich in einem neuen Leben zu korrigieren und mit Gott zu leben, muss er einen Vater der Buße haben. Unser Herr ernannte Priester, um sich selbst zu vertreten und seine Herde zu hüten, und sagte \"Was ihr auf Erden bindet, wird im Himmel gebunden sein, und was ihr auf Erden löst, wird im Himmel gelöst sein\" (Matth. 8, Joh. 21:15, Matth. 16:19), um die Herde zu hüten. Ein Christ braucht, solange er lebt, einen Vater der Buße, der ihn auf Gottes Weg führt und ihm, wenn er in die Irre geht, ein Kanon gibt, um sich mit Gott zu versöhnen. <br />"
        },
        confessionProcess: {
          title: "Was ein Gläubiger, der die Buße betritt, erfüllen muss, wenn er vor dem Priester erscheint",
          content: ""
        },
        rememberingSins: {
          title: "Sich an alle Fehler erinnern, die er gemacht hat",
          content: "Da das Kanon je nach Art seines Unrechts gegeben wird, muss er sich an das erinnern, was er getan hat; wenn er es durch Wort vergisst, hilft es, es schriftlich aufzuzeichnen. <br />"
        },
        fullConfession: {
          title: "Vollständig sprechen ohne zu reduzieren (ohne zu verbergen)",
          content: "Er sollte die schwierigen (beschämenden) Dinge nicht verbergen, indem er sagt \"Was werden die Leute sagen, wenn ich das sage?\" Es ist nicht richtig für ihn, sich zu schämen, wenn er über das spricht, wofür er sich nicht geschämt hat, als er es tat. Wenn er einmal spricht und es nicht aus seinem Gewissen entfernt, wird er immer beunruhigt sein. \"Kommt zu mir, alle ihr Mühseligen und Beladenen, und ich will euch Ruhe geben\" (Matth. 11:28) wird gesagt, also muss er richtig bekennen und die Last der Sünde erleichtern. Aber wenn wir über unser Unrecht bekennen, müssen wir nicht im Detail den Ort, die Zeit und den Namen einer anderen Person erzählen, indem wir sagen \"Ich habe das mit Soundso getan, zu dieser Zeit, an diesem Ort, ich habe das getan\"; wir können kurz über unser Unrecht sprechen, indem wir sagen \"Ich habe Götzen angebetet, ich habe gestohlen, ich habe gelogen.\" <br />"
        },
        selfAccusation: {
          title: "Selbstbeschuldigung (sich selbst beschuldigen)",
          content: "Es geht nicht darum, eine andere Person für unser Unrecht verantwortlich zu machen, indem wir sagen \"Soundso hat mich versucht\", sondern darum, unseren Mund zu einem Zeugen unseres Gewissens zu machen und uns selbst vor Gott zu beschuldigen. Unser Gott sieht die Buße unserer Herzen und reinigt uns, indem er alles Unrecht, das wir getan haben, so macht, als wäre es nicht getan worden. Unrecht durch Buße zu vergeben ist Gottes Werk der Barmherzigkeit. <br />"
        },
        afterRepentance: {
          title: "Was sollte ein Gläubiger in Ordnung tun, nachdem er die Buße betreten hat?",
          content: ""
        },
        fulfillingCanon: {
          title: "Das erhaltene Kanon korrekt erfüllen",
          content: "Kanon ist ein griechisches Wort, das bedeutet: Maß. Nachdem der Priester dem sündigen Gläubigen das Kanon entsprechend der Stärke seines Glaubens und der Weite seines Verständnisses gegeben hat, muss er es wie befohlen erfüllen. Die Leute von Ninive (Jona 3:1), König Hiskia (Jes. 38:1), der heilige Petrus (Luk. 22:54) und andere, die Vergebung erhielten, taten dies, indem sie ihr Unrecht bedauerten, fasteten und die Buße betraten. Während der Buße ist es notwendig, auf dem Boden zu schlafen, das Essen zu reduzieren und sich von weltlichen Dingen und Freunden fernzuhalten, die nicht für das spirituelle Leben geeignet sind. Während der Buße müssen wir uns kontrollieren, indem wir nicht tun, was uns befohlen wurde, nicht zu tun; nachdem Gott uns durch Seine Barmherzigkeit zur Erlösung gerufen hat, sollten wir nicht zu unserer vorherigen Schwäche zurückkehren. Wir müssen an das Ende denken, nicht an die Zeit. 2 Tim. 4:10, Ps. 6:6. <br />"
        },
        believingForgiveness: {
          title: "Glauben, dass unser Unrecht durch Buße vergeben wird",
          content: "Christus ist ein vertrauenswürdiger Gott, der uns von unserem Unrecht reinigen kann, weil Er Sein Blut vergossen hat, um unser Unrecht zu sühnen. Auch wenn das uns gegebene Kanon im Vergleich zu den vielen Sünden, die wir begangen haben, klein erscheint, sollten wir nicht an unser Unrecht denken, sondern an Gottes Barmherzigkeit. Gottes Werk der Barmherzigkeit übertrifft unser Unrecht bei weitem, also sollten wir sagen, was nach der Erfüllung dessen übrig bleibt, was uns befohlen wurde. \"Wenn ihr alles getan habt, was euch befohlen wurde, sagt: 'Wir sind unnütze Knechte'\" (Luk. 17:10). <br />"
        },
        receivingCommunion: {
          title: "Kommunion (Teilnahme) an Seinem Leib und Blut empfangen",
          content: "Ein hungriger Mensch wird nicht satt, nur weil er sich die Hände wäscht. Er muss Nahrung essen. Buße bedeutet Waschen, sich von Schmutz (Sünde) fernhalten, und Erlösung wird durch den Empfang des heiligen Leibes und kostbaren Blutes erlangt, das ewiges Leben gibt. Joh. 6:33. Viele betrachten die Kommunion als Luxus und begrenzen sie auf das Alter (nur für Ältere), daher sieht man sie nicht, wie sie sich darauf vorbereiten, sie zu empfangen. Aber jeder Christ braucht die heilige Kommunion. Unser Unrecht, für das wir das Kanon empfangen haben, wird vergeben, wenn wir Seinen Leib essen und Sein Blut trinken."
        },
        alwaysPreparing: {
          title: "Immer für die Buße vorbereiten",
          content: "Nachdem wir die Buße betreten und gefastet haben, können wir wieder in die Sünde fallen. Unser Gott sagt nicht \"Warum hast du gesündigt, anstatt die Buße zu betreten?\" also sollten wir uns nicht schämen, ein zweites Mal zu fallen, und wenn wir der Sünde nicht entkommen können, sollten wir nicht aufgeben und sagen \"Es ist besser für mich, mich hinzusetzen, als meinen Vater der Buße von Zeit zu Zeit zu belästigen\" und alles aufgeben, denn böse Gedanken können uns in unseren Gedanken versuchen. <br /> Aber nach der Buße ist es nicht so, dass wir nur in Heiligkeit wie Engel leben, sondern wie gesagt wird \"Ein Gerechter fällt siebenmal und steht siebenmal auf\" (Spr. 24:16), unser Gott ist ein vertrauenswürdiger Gott, der uns erheben kann, wenn wir fallen, uns finden, wenn wir verloren sind, uns nahe bringen, wenn wir fern sind, und uns heiligen (uns wie Silber reinigen), wenn wir durch Sünde befleckt sind, also müssen wir immer für die Buße vorbereiten, ohne die Hoffnung zu verlieren und ohne unsere Sünden zu verbergen. Jes. 1:18. <br />"
        }
      },
      marriage: {
        title: "Mysterium der Ehe",
        content: "Die Ehe kommt vom Ge'ez-Verb, das binden, trennen bedeutet. Ehe bedeutet binden, entscheiden, trennen, unterscheiden. Es ist das Sakrament, das für Gläubige vollzogen wird, die in der Kirche heiraten. Nachdem Gott männlich und weiblich geschaffen hatte, befahl er ihnen, sich zu vermehren und die Erde zu füllen (Gen 1:27). Von dieser Zeit an begannen männlich und weiblich, sich durch Kinder durch die Ehe zu vermehren.",
        purposes: {
          title: "Zwecke der Ehe",
          content: "Für Kameradschaft: Wie Gott sagte: \"Es ist nicht gut, dass der Mensch allein ist. Ich werde ihm eine passende Hilfe machen\" (Gen 2:18). Der Mensch wählt einen Lebenspartner, der seine Gedanken teilt, seine Lasten teilt und ihn vertritt, damit er in seinem ganzen Leben nicht beunruhigt wird. <br /> Für Verlangen: Der Mensch hat natürliches Verlangen (Anziehung zum anderen Geschlecht). Daher ist es ihm erlaubt, in der Ehe zu leben und vor Versuchung geschützt zu werden. 1 Kor 7:2-38. Diese Art der Ehe wird auch als ehrenhaft bezeichnet. Heb 13:4. <br /> Für Vermehrung: Die Bevölkerung, die wir heute in unserer Welt sehen, begann mit der legalen Ehe, die von einem Adam und einer Eva etabliert wurde. Da Gott, der sagte und erlaubte \"Seid fruchtbar und vermehrt euch und füllt die Erde\", derjenige ist, der dies befahl, werden Kinder auf diese Weise bis zum Ende der Welt geboren. Gen 1:27. <br />"
        },
        beforeMarriage: {
          title: "Vor der Ehe",
          content: "Die Zustimmung des Paares: Vor der Ehe müssen beide Parteien zustimmen, verstehen und entscheiden. Eine so große Sache wie die Ehe sollte nicht durch den Druck und Befehl anderer entschieden werden. Wenn junge Leute sich treffen, sollten sie nicht vergessen, dass ihre Beziehung anders sein sollte als bei weltlichen Menschen, damit sie nicht in den Irrtum fallen und ihren Glauben aufgeben. Es sollte keine lange Zeit der Werbung geben, denn mit der Zeit ändern sich die Gedanken. <br /> Einheit des Glaubens: Was zunächst einfach in Bezug auf den Glauben zu sein scheint, kann später schwer zu lösen sein. Aber wenn sie an einen Glauben glauben und heiraten, während sie seine Traditionen bewahren, denken sie als eins, stimmen in Gedanken ohne Diskussion überein und betrachten zusammen... In der Tat ist es erlaubt, jemanden zu heiraten, der einem anderen Glauben folgt, nachdem man ihn gelehrt und überzeugt hat. Aber es muss darauf geachtet werden, dass sie nicht sagen, sie glauben, aber nicht wirklich glauben. <br /> Geistige und körperliche Reife: Nach der Kirchenlehre ist das Heiratsalter ab fünfzehn Jahren für Frauen und zwanzig Jahren für Männer. Geistige Vorbereitung bedeutet: Lernen und Verstehen über die Ehe aus religiöser Perspektive, Verständnis für das Leben gewinnen, das nach der Ehe gelebt wird, wissen, dass niemand zwischen den Ehepartner nach der Ehe kommen wird, entscheiden, sich dem Ehepartner zu geben, und sich darauf vorbereiten, zukünftige Probleme mit Geduld zu bewältigen. <br />"
        },
        duringMarriage: {
          title: "Während der Ehe",
          content: "Bei der Entscheidungsfindung: Wenn man denkt, dass die Verwandten und Freunde beider Seiten ihre eigenen Wünsche haben sollten, können sie verwirrt werden, indem sie Programme für die Hochzeit machen, die außerhalb der Kirche stattfinden soll, oder indem sie sie sowohl in der Kirche (vorbereitet durch das Singen der Ehezeremonie) als auch wieder durch weltliche Zeremonien (mit dem Auto auszugehen, von einer Band vorbereitet zu werden) machen. Aber da diejenigen, die heiraten, nicht die Entscheidungsträger sind, muss die Entscheidung von den jungen Leuten getroffen werden. Die jungen Leute müssen auch in ihren Entscheidungen vorsichtig sein. Es ist nicht angemessen für sie, weltliche Wünsche zu haben, die nicht aus ihrem Inneren abgeschnitten sind, und den Rat und die Befehle ihrer Familien mehr als das Wort Gottes zu ehren, wodurch die Zeremonie verwirrt und unordentlich wird und vielen Menschen Ärger bereitet. <br /> Die Ehe muss mit der Heiligen Kommunion sein: Die Ehezeremonie wird für diejenigen vollzogen, die körperliche Jungfräulichkeit haben, und andere Christen können auch ihre Ehe mit der Heiligen Kommunion vollziehen. Christliche Ehe wird nicht ohne Heilige Kommunion vollzogen. Einige Leute denken daran, ihre Ehe in der Ehezeremonie nur für Fotografie und Video zu vollziehen, aber das ist nicht angemessen, also sollten sie über die Ehelehre im Voraus lernen und ihre Wahl von Anfang an korrigieren. <br />"
        },
        afterMarriage: {
          title: "Nach der Ehe",
          content: "Die Vereinbarung wird nicht durch die Natur aufrechterhalten, sondern durch das Naturgesetz. Sie wird als Mutter und Vater akzeptiert, nicht zur Diskussion. Die Natur hat uns gezwungen, alle Dinge, die vor uns geschahen, durch Glauben zu akzeptieren. Aber die Ehe ist ein permanentes Leben, das durch Vereinbarung, Liebe und Engagement eingegangen wird, also ist die Vereinbarung fest bis zum Ende des Lebens. \"Ein Mann verlässt seinen Vater und seine Mutter und vereinigt sich mit seiner Frau, und sie werden ein Fleisch.\" Gen 2:24. Matt 19:4. Nach diesem göttlichen Wort ist niemand erlaubt, zwischen ihnen in ihrer Ehe einzutreten. <br /> Auch wenn sie Eltern sind, sollten sie nicht in die Ehe ihrer Kinder eingreifen, nur weil sie ihnen nicht zustimmten und ihre persönlichen Interessen betroffen waren, indem sie Scheidung, Scheidung sagten. Die Ehe vieler Menschen wird durch familiäre Einmischung zerstört, also sollten Ehepaare dieses Problem im Voraus verstehen. Da Ehemann und Ehefrau eins sind, sollte es keine Dualität zwischen ihnen geben; eine Person ist mit ihrer Familie verbunden"
        }
      },
      divorce: {
        title: "Gründe für Scheidung",
        content: "",
        reasons: {
          title: "Gründe für Scheidung",
          content: ""
        },
        death: {
          title: "Tod",
          content: "Wenn einer der beiden stirbt, ist es dem Überlebenden erlaubt, einen anderen zu heiraten. Aber die Ehe muss mit jemandem desselben Glaubens und mit der Heiligen Kommunion sein. Röm 7:2. 1 Kor 7:39. <br />"
        },
        adultery: {
          title: "Ehebruch",
          content: "Wenn einer der beiden in Ehebruch fällt und nicht von seiner Sünde umkehren kann, kann der unschuldige Mensch die Ehe auflösen. Aber es muss auf Hören und Untersuchung basieren. Matt 5:32. Das Verbreiten von Familienangelegenheiten nach außen kann Menschen hereinbringen, die Ärger verursachen, also muss Vorsicht walten. Da die Grundlage der Ehe Wahrheit, Vereinbarung und Vertrauen ist, gibt es keinen Grund, an den Umständen zu zweifeln und misstrauisch zu sein. <br /> Wenn der Ehepartner, der in Ehebruch gefallen ist, umkehrt und um Vergebung bittet, können sie ihre Ehe wie zuvor fortsetzen. Ehemann und Ehefrau müssen durch Beratung und Diskussion über jede Art von Leben entscheiden, das sie in ihrer Ehe führen. Da die Ehe das gemeinsame Leben beider ist, sollte es keinen Führer und Follower geben. Ihr Einkommen und ihre Ausgaben müssen gemeinsam entschieden werden. Die Ehe wird wahr, wenn diese erfüllt sind. <br /> Was die Einheit der Ehepaare mehr stärkt, sind die Kinder, die sie gebären. Da Kinder gleiche Vermögenswerte beider sind, bringen sie sie näher zusammen. Sie sollten in dem Gedanken an ihre geliebten Kinder vereint sein, damit sie sie nicht trennen und ihre Ehe ehren. Ehepaare, die aufgrund von Unfruchtbarkeit keine Kinder bekommen können, sollten dankbar sein und denken, dass Gott etwas Besseres für sie bestimmt hat, anstatt in Gottes Werk einzugreifen. Auch wenn ein Kind geboren wird, wenn es nicht gesegnet ist, kann es sterben oder ein schlechtes Kind werden. Sie sollten sich nicht als verflucht betrachten, ohne die göttliche Weisheit zu kennen, die Gott getan hat, und ohne über das nachzudenken, was sie nicht erreicht haben, sondern sollten akzeptieren, dass alles, was Gott getan hat, zum Guten ist. Sie sollten mit Verständnis denken, dass ihr Ehepartner, den sie lieben und der Gottes Segen erhalten hat, wichtiger ist als Kinder, die sie nicht kennen oder die nicht geboren wurden. (Gen 30:1) <br />"
        }
      },
      priesthood: {
        title: "Mysterium des Priestertums",
        content: "Priester: kommt vom Ge'ez-Wort, das dienen bedeutet. Priester bedeutet Diener Gottes, Vater der Gläubigen, Hüter, Hirte. <br />",
        oldTestament: {
          title: "Mysterium des Priestertums im Alten Testament",
          content: "Eines der Merkmale des Priestertums ist das Darbringen von Opfern, und die erste Person, die für diesen Dienst ausgewählt und Priester genannt wurde, war Melchisedek. Gen 14:18. Später befahl Gott Mose, einen Priester zu wählen, der Gott vor der Bundeslade im Tempel dienen, die Sünden des Volkes empfangen und bei Gott Fürsprache einlegen würde, also wurde Aaron nach Melchisedek ernannt. <br /> Von Aaron bis Johannes dem Täufer, während der langen alttestamentlichen Zeit, wurden nur diejenigen, die aus Aarons Linie geboren wurden, mit heiligem Öl gesalbt und dienten im Priestertum. <br /> Aber das auf der Linie basierende Priestertum war nicht perfekt und dauerhaft, weil es ein Typ für das neutestamentliche Priestertum war, also wurden sowohl das Opfer als auch der Prozess der Ernennung durch einen anderen ersetzt. <br /> Der Grund, warum es nicht dauerhaft war und durch einen anderen ersetzt wurde, ist, dass das Priestertum nur auf die Linie beschränkt war, also wurde im Neuen Testament jedem Volk, das das Gesetz und die Tradition erfüllte, erlaubt. Christus kam für die ganze Welt. <br /> Ihr Opfer wurde durch Christi Leib und Blut ersetzt, weil es keine vollständige Erlösung gab. Joh 6:32. <br /> Der Dienst war temporär und ging nicht über die körperliche Erlösung hinaus, aber im Neuen Testament wurde er durch Priester ersetzt, die Autorität haben, auf Erden und im Himmel zu binden, und Autorität über sowohl Seele als auch Körper. Matt 18:18. <br />"
        },
        newTestament: {
          title: "Mysterium des Priestertums im Neuen Testament",
          content: "Im Alten Testament war der letzte Priester Johannes der Täufer, und nach ihm endete das alttestamentliche Priestertum. Unser Herr ging zum Jordan und wurde von Johannes' Hand getauft, lehrend uns, dass wir zur Kirche gehen und von der Hand des Priesters getauft werden sollten. Matt 3:13. <br /> Unser Herr sprach an vielen Orten über Priester, als er lehrte. Geh und zeige dich dem Priester. Matt 8:4. Du bist gesegnet, und ich werde dir die Schlüssel des Himmelreichs geben... Matt 16:17. Wahrlich, ich sage euch, was ihr auf Erden bindet, wird im Himmel gebunden sein, und was ihr auf Erden löst, wird im Himmel gelöst sein. Matt 18:18. Er sagte dies während Seines Dienstes, und nach der Auferstehung von den Toten bestätigte Er es den Aposteln. Geht und tauft sie im Namen des Vaters und des Sohnes und des Heiligen Geistes. Matt 28:19... Empfangt den Heiligen Geist. Joh 20:22. Schließlich ernannte Er den Heiligen Petrus als ersten Patriarchen und sagte \"...Simon, weide meine Schafe (für die Zeit die zwölf Apostel: für das Ende die Eltern), weide meine Lämmer (für die Zeit die zweiundsiebzig: für das Ende die Jugend), weide meine Kinder (für die Zeit die sechsunddreißig heiligen Frauen: für das Ende die Kinder)\" und ernannte die Apostel zu Bischöfen. Joh 21:15. Von dieser Zeit an wird die Kirche von Patriarchen und Bischöfen durch den geistlichen Rat (Heilige Synode) geleitet und setzt ihren Dienst fort. <br />"
        },
        levels: {
          title: "Stufen des Priestertums",
          content: ""
        },
        patriarch: {
          title: "Patriarch",
          content: "Patriarchen werden auch \"Patriarch\" genannt. Er ist der Vater aller, da er der Höchste in einer Kirche (einer Synode) ist. Apg 20:28. Nach der Wahl durch das Volk und die Priester wird er von Bischöfen ernannt. Kanon 5. Regel 2. Der Patriarch kann nicht freigeben, was er gebunden hat. Seine geistliche Autorität ist über allem. (Synode 51) Der Name des Patriarchen wird in allen Kirchen während der Gebetszeit genannt. <br />"
        },
        bishop: {
          title: "Bischof",
          content: "Ein Bischof wird als Vater einer Diözese ernannt. Er wird durch die Stimme und Stimme der Gläubigen in dem Gebiet, in dem er dient, mit der Zustimmung des obersten Patriarchen und der Synode ernannt. (Kanon 5: Kapitel 2) Er wird nicht nur in einer Diözese ernannt. (Kanon 5: Regel 58: Did 34) Der Name des Bischofs wird in seiner Diözese während der Gebetszeit genannt. (Kanon 5: Kapitel 4) Er segnet neue Tafeln, neue Kirchen. Er gibt die Autorität des Priestertums an Priester und Diakone. (1 Tim 5:2: Kanon 5 Kapitel 4) <br />"
        },
        deacons: {
          title: "Diakone",
          content: "Diakone sind diejenigen, die den Priestern helfen und dienen, und sie haben die folgenden Stufen basierend auf ihrem Dienst <br />"
        },
        deacon: {
          title: "Diakon",
          content: "Einer, der zuvor den Glauben verstanden hat, durch sein Verhalten von den Gläubigen bekannt und bezeugt ist, die für den Diakonendienst erforderliche Lehre gründlich gelernt hat und als qualifiziert befunden wird, wird durch Handauflegung ordiniert. Es sei denn, er hat besondere Fähigkeit und Talent, ein Diakon wird nicht unter dem Alter von fünfundzwanzig Jahren ordiniert. Wenn ein Diakon seine erste Frau scheidet und eine andere heiratet, seinen Glauben ändert oder von Häretikern getauft wird, wird er aus dem Priestertum entfernt. Kanon 7: Kapitel 5. Diakone betreten das Heiligtum, aber sie berühren nicht den Thron und Altar, und nach der Verwandlung berühren sie nicht den Leib und das Blut mit ihren Händen. Diakone sollten für Missionen vorbereitet sein, mit Demut dienen und ein Beispiel für andere in ihrem Leben sein. <br />"
        },
        subDeacon: {
          title: "Sub-Diakon",
          content: "Er ist der Assistent des Diakons, und sein geistliches Leben, Verhalten und Glaube werden von Priestern und Gläubigen in dem Gebiet, in dem er dient, bezeugt. Kanon 8. Sub-Diakone werden nur durch Wort ordiniert; Handauflegung wird nicht durchgeführt. Kanon 8 Kapitel 2. In dem Maße, wie er der Assistent des Diakons ist, hilft er bei der ganzen Arbeit, aber er berührt nicht die heiligen Gefäße. Kanon 8: Doc 45, 46. Wenn er eine Schuld begeht, wird er aus dem Priestertum entfernt. Kanon 8: Kapitel 4. <br />"
        },
        anagnostis: {
          title: "Anagnostis (Lektor)",
          content: "Sein Dienst ist das Lesen von Büchern in der Kirche, und er wird ordiniert, nachdem seine Lehre und sein Verhalten beobachtet wurden. Kanon 8 Kapitel 1. Anagnostis wird nicht durch Handauflegung ordiniert, sondern nur durch Wort. Kanon 8: Kapitel 2. Während des Dienstes trägt er nicht die priesterlichen Gewänder, die Diakone während der Göttlichen Liturgie tragen. Kanon 8: Kapitel 3. Wenn ein Anagnostis eine Schuld begeht, wird er für ein Jahr von der Arbeit suspendiert und kehrt dann zurück. Wenn er nicht von seiner Schuld umkehrt, wird er aus dem Dienst entfernt. Kanon 8 Kapitel 4. Wenn seine Frau stirbt, kann er eine andere heiraten und dienen. Kanon 4: Kapitel 5. <br />"
        },
        singers: {
          title: "Sänger",
          content: "Sie werden durch Gebet ordiniert. Kanon 8: Kapitel 2. Sie singen aus den Psalmen Davids und auch die Hymnen des Heiligen Yared in unserem Land. Sie tragen keine priesterlichen Gewänder, wenn sie singen. Kanon 8: Kapitel 3. Sänger können eine andere heiraten, wenn ihre Frau stirbt. Kanon 8: Kapitel 5. In unserem Land sind Sänger diejenigen, die die Lehre der Musik gelernt haben, und diese können in beiden (sowohl in der Musik als auch in ihrem Priestertum) dienen, wenn sie die Autorität des Priestertums haben (Diakon, Priester und darüber). <br />"
        },
        doorKeeper: {
          title: "Türhüter",
          content: "Er wird nur durch Wort ordiniert. Sein Dienst ist das Öffnen und Schließen von Türen, und er trägt keine priesterlichen Gewänder. Kanon 8: Kapitel 3. Wenn seine Frau stirbt, kann er eine andere heiraten und dienen. Kanon 8: Kapitel 3. <br />"
        },
        womenDeacons: {
          title: "Frauen Diakone",
          content: "Diejenigen, die verheiratet waren, ihre Kinder in Ordnung erzogen haben, der Heiligen Kommunion verpflichtet sind, für den Dienst vorbereitet sind und acht Jahre alt sind, werden als Diakonissen durch Wort ordiniert. 1 Tim 5:9. Kanon 8:1. Did 17. Ihr Dienst <br /> Sie helfen den Priestern bei der Betreuung von Frauen; wenn Frauen Christen werden, nimmt der Priester ihre Hand und salbt sie mit heiligem Myron unter dem Hals. <br /> Sie segnen nicht; sie verrichten nicht die priesterliche Arbeit, die Priester und Diakone tun, sondern sie stehen an der Frauentür und beaufsichtigen. <br /> Sie sagen nicht \"Steh auf, bete\" wie der Diakon, sie ordinieren nicht, sie öffnen die Versammlung nicht mit Gebet. (Kanon 8 Kapitel 1) <br /> Diese, weil sie von anderen Gläubigen abgesondert wurden und durch den Willen Gottes zur Kirche gekommen sind, sollten Gläubige beraten und ermutigen, wenn sie im Fleisch schwach sind, und wenn es einen falschen Bruder unter ihren Mitdienern gibt, aber sie sollten nicht ein Hindernis für die sein, die gerettet werden, indem sie ihre eigene Gerechtigkeit und die Schuld ihres Bruders verkünden. (Lukas 18:9) <br />"
        }
      },
      holyOil: {
        title: "Mysterium des Heiligen Öls",
        content: "Heiliges Öl (Qeb'a Qidus) wird in der Heiligen Schrift Öl genannt. Es wird aus reinem Olivenöl hergestellt und ist eine heilige Salbe, die sowohl körperliche als auch geistliche Krankheiten heilt, wenn sie gesalbt wird. <br /> Im Alten Testament wurden Menschen mit dieser heiligen Salbe gesalbt, wenn sie krank waren und dadurch geheilt wurden. Jes 1:6. Lukas 10:34. <br /> Im Neuen Testament salbten die Apostel sowohl körperliche als auch geistliche Krankheiten mit heiligem Öl und heilten sie von ihren Krankheiten. Markus 6:13. Später, wenn Gläubige krank sind, werden Priester befohlen, für sie zu beten und sie mit heiligem Öl zu salben, um sie zu heilen. (Jakobus 5:14) <br />",
        benefits: {
          title: "Vorteile des Heiligen Öls",
          content: "Heiliges Öl ist für Gläubige, die von jeder Art von Krankheit geheilt werden möchten, besonders für diejenigen, die verwundet sind und deren Seelen krank sind, sowie für diejenigen, deren Seelen krank sind und die Gottes Hilfe als ihren Helfer haben möchten und von ihren Sünden gereinigt werden möchten. Wenn der Priester das Gebet des heiligen Öls betet und sie salbt, werden sie von ihren körperlichen und geistlichen Krankheiten (Sünden) geheilt. Aber wenn sie gesalbt werden, müssen sie mit ganzem Herzen glauben, dass Gott sie von der Krankheit retten wird, die Er durch diese heilige (Öl) Salbe auf sie gelegt hat. <br /> Diejenigen, die mit heiligem Öl gesalbt werden, müssen getaufte Christen sein, die glauben, und vor dem Empfang müssen sie in die Buße eintreten und sich selbst heiligen. Die Zeremonie wird von Priestern durchgeführt, und zuerst wird das Gebet in der Kirche oder um den Ort gesprochen, an dem der Patient liegt, und wenn nicht, nachdem der Priester in seinem Gebetshaus gebetet hat, wird es auf den kranken (verwundeten) Ort gesalbt. <br /> <br /> <a href=\"https://kidanemihiret.org/sermon-topic/%E1%88%B0%E1%89%A3%E1%89%B1-%E1%88%9D%E1%88%B5%E1%8C%A2%E1%88%AB%E1%89%B0-%E1%89%A4%E1%89%B0%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/\">Quelle: https://kidanemihiret.org/sermon-topic</a>"
        }
      }
    },
    holyBible: {
      title: "Die Heilige Bibel aus Sicht der Kirche",
      table: {
        bookType: "Art der Bücher",
        content: "Inhalt der Bücher",
        law: "Gesetz",
        history: "Geschichte",
        wisdom: "Weisheit",
        prophecy: "Prophezeiung",
        asra: "Asra",
        awalde: "Awalde",
        lawBooks: {
          pentateuch: "Pentateuch",
          samuel: "Samuel",
          psalms: "Psalmen",
          isaiah: "Jesaja"
        },
        historyBooks: {
          kings: "Könige",
          mary: "Marias Wunder",
          maryPraise: "Marias Lob",
          jesus: "Jesu Gleichnisse"
        }
      },
      content: {
        paragraph1: "Die Heilige Kirche wurde auf den Aposteln und Propheten gegründet und ist über allem eine und heilig, der Leib Christi (Eph. 2:20; Eph. 4:12). Der Ausdruck 'über allem' beschreibt ihre himmlische Autorität und Würde. Das bedeutet, dass jedes heilige Buch oder jeder Schatz in ihr sein wird, aber nicht über ihr stehen kann. Die Heilige Bibel enthält auch die Wahrheit, die Gott der Kirche offenbart hat, aber sie steht nicht über der Kirche. Weil die Kirche der Leib Christi ist, gibt es nichts über dem Leib Christi. Nur Christus selbst steht über der Kirche (Kol. 1:18). Die Heilige Bibel ist das Haupt aller Bücher, und die Kirche ist der Besitzer der Bibel.",
        paragraph2: "Die Heilige Bibel ist das Wort Gottes, das in menschlicher Sprache geschrieben wurde. Es wurde durch die Inspiration des Heiligen Geistes geschrieben. Die Schreiber sind auch die Väter der Kirche. Wegen ihrer Heiligkeit waren sie Gott nahe, also schrieben sie in der Sprache, die die Kirchen brauchten, um Gottes Wort zu verstehen. Ihr Schreiben war nicht dazu da, ihre eigene Herrlichkeit auszudrücken oder das Gesetz zu etablieren, nach dem die Kirche regiert wird, sondern um den Glauben zu bezeugen, den die Kirche glaubt, und um Gläubige in ihrem geistlichen Leben zu leiten, ihm zu gehorchen und ihre Herzen vorzubereiten. Daher enthält die Heilige Bibel die Wahrheit, die Gott der Kirche offenbart hat, und den Glauben, den die Kirche über Gott glaubt, aber es sollte verstanden werden, dass es nicht bedeutet, dass das System der Kirche vollständig und umfassend ist und alles einschließt.",
        paragraph3: "Die Kirche hat viele Schätze, die durch Sehen, Tun und Wort weitergegeben werden. In der Tat ist das, was geschrieben ist, sehr wenig. Einige religiöse Organisationen haben jedoch einen falschen Ansatz, die Angelegenheiten der Kirche vollständig der Bibel unterzuordnen. Dies ist unter Lutheranern als 'Sola Scriptura' oder 'Nur Bibel' bekannt und ist nicht die Lehre der Kirche, sondern eine persönliche Meinung, die weder ungeschriebene heilige Tradition noch die Heilige Bibel unterstützt.",
        paragraph4: "Der Zweck dieses Artikels ist es, die religiöse Sicht der Kirche auf die Annahme der heiligen Bücher klar zu zeigen.",
        ancientHistory: "Alte Geschichte der Heiligen Bücher",
        paragraph5: "Der Schöpfer der ganzen Welt, Gott, schuf den Menschen mit großer Ehre unter all seinen Geschöpfen. Wenn die Kirchenväter diese Ehre erklären, nennen sie den Menschen 'Die Krone der Schöpfung - The Crown of Creation.' Seine Krone der Schöpfung ist, dass er im Bild und Gleichnis Gottes geschaffen wurde und dass ihm Herrschaft über alle Schöpfung unter Gott gegeben wurde. So wie Gott 'heilig über aller Schöpfung; mit Herrschaft (Autorität) über alle Schöpfung' ist, so wurde der Mensch durch Gnade 'heilig über aller Erde; mit Herrschaft (Autorität) über alle Erde' gemacht. In seiner ursprünglichen Natur war der Mensch eine wissende Schöpfung, die keine Bücher oder Lehrer brauchte. Wie Abba Matthäus in seiner geistlichen Natur sagte, wie Abraham und Mose, wurde er durch die Kenntnis der Schöpfung erleuchtet zu wissen (Kommentar zum Johannesevangelium). In seinem natürlichen Geist war er ein weises Wesen, das die Kenntnis der Schöpfung lesen und studieren und die tiefe Wahrheit verstehen konnte. Das erste Buch für den Menschen war die Kenntnis der Schöpfung. Der erste wahre Lehrer für den Menschen war der Lehrer der ganzen Welt, Gott.",
        paragraph6: "Gott lehrte Adam seine Gebote. Von Anfang an war seine Hauptlehre 'Du darfst von jedem Baum im Garten essen; aber du darfst nicht vom Baum der Erkenntnis von Gut und Böse essen, denn wenn du davon isst, wirst du sicherlich sterben' (Gen. 2:16-17). Aber Adam verließ seinen wahren Lehrer und lernte von der bösen Kreatur; 'Ihr werdet nicht sicherlich sterben', sagte die Schlange zu ihm, 'Denn Gott weiß, dass wenn ihr davon esst, eure Augen geöffnet werden und ihr wie Gott werdet, Gut und Böse kennend' (Gen. 3:4-5). Der Schüler wählte die zweite der beiden Lehren und fiel in Versuchung. Danach hatte er keinen gesunden Verstand, um die Lehre des ersten Lehrers zu verstehen. Es wurde notwendig, dass andere Lehrer ihm halfen, zum großen Lehrer zurückzukehren.",
        extendedContent: {
          paragraph7: "Nachdem der böse Lehrer sie getäuscht hatte, sahen Adam und Eva ungeschriebene Buchstaben und lasen uninschriebene Worte. 'Als die Frau sah, dass der Baum gut zur Speise war und dass er eine Lust für die Augen war und verlockend, weil er klug machte' (Gen. 3:6). Danach wurden sie blind, die die Schöpfung nicht lesen konnten, aber die Schöpfung wurde ihnen zum Stolperstein. Weil sie von der reinen Natur, die Gott ihnen gegeben hatte, fielen und nicht zu ihrem früheren Zustand zurückkehren konnten, mussten sie sich darauf verlassen, Bücher zu lesen, die in menschlichen Buchstaben geschrieben waren. Der Mensch, der im göttlichen Licht geschaffen wurde, brauchte Bücher, weil er von dem Wissen, das durch Sehen und Hören gewonnen wurde, zu begrenztem Wissen fiel. Daher sind Bücher nicht die natürlichen Lehrer des Menschen. Sie sind Unterstützer, die nach seinem Fall gegeben wurden. Die Kirchenväter erklären dies mit der folgenden Analogie:",
          paragraph8: "Der Mensch geht auf zwei Füßen. Wenn seine Füße krank oder schwach sind, braucht er eine Krücke, um auf zwei Füßen zu gehen. So wie der Mensch in seiner ursprünglichen Natur allein stehen und gehen konnte, aber nachdem er gesündigt und schwach geworden war, brauchte er Bücher und Lehrer als Krücken, um stehen und gehen zu können. St. Johannes Chrysostomus erklärt dies in seinem Kommentar zum Matthäusevangelium klarer: 'Es war nicht notwendig für uns, geschriebene Dinge zu brauchen, sondern ein sehr reines Leben zu haben, damit die Gnade des Heiligen Geistes, die in unseren Herzen wohnt, uns leiten könnte, anstatt der Worte von Büchern, die mit Tinte geschrieben sind.' Aber dann lehrt er uns, dass wir Bücher sorgfältig halten sollten: 'Wir haben diese Gnade verloren. Daher lasst uns das zweite große Geschenk (Bücher) festhalten.' Dies zeigt, dass die heiligen Bücher gegeben wurden, weil sie nach der Zeit notwendig wurden, nicht weil alles von ihnen begann.",
          sectionTitle1: "Das Evangelium steht über dem Geschriebenen und ging der Kirche voraus",
          paragraph9: "Oft denken wir, wenn wir 'Evangelium' sagen, nur an die vier Evangelien. Einige 'Nur Bibel' religiöse Organisationen lassen es auch so erscheinen, als ob nur das Geschriebene das Evangelium ist. Aber sowohl geschriebene als auch ungeschriebene heilige Tradition lehrt uns, dass das Evangelium nicht auf das Schreiben allein beschränkt ist. St. Paulus sagt: 'Ich erinnere euch aber, Brüder, an das Evangelium, das ich euch verkündigt habe, das ihr auch angenommen habt, in dem ihr auch steht, durch das ihr auch selig werdet' (1. Kor. 15:1), aber die vier Evangelien waren noch nicht geschrieben worden. Unser Herr und Retter Jesus Christus sagte: 'Wahrlich, ich sage euch: Wo dies Evangelium gepredigt wird in der ganzen Welt, da wird man auch sagen zu ihrem Gedächtnis, was sie getan hat' (Matth. 26:13), als Er über Marias Salbung Zeugnis ablegte, aber Matthäus, Markus, Lukas und Johannes hatten noch nicht das Evangelium geschrieben. Selbst als dieses Wort gesprochen wurde, war ihr Glaube noch nicht vollständig. Dies wurde offenbart, als sie alle außer Johannes während der Passion flohen. Daher warnt uns der Herr, wenn Er 'dieses Evangelium' sagt, dass es falsch ist, nur an das Geschriebene zu denken.",
          paragraph10: "Das Evangelium wird gepredigt und wurde durch Wort, durch Buch und durch Leben gepredigt, aber es ist falsch zu denken, dass es nur in Büchern enthalten und etabliert ist. Die Apostel predigten durch Wort und durch Buch. St. Paulus wurde auch durch die Offenbarung gepredigt, die er in seinem Leben empfing (Apg. 9). In der Tat haben die Schreiber der heiligen Bücher gezeigt, dass wenige schriftlich gepredigt wurden und viele durch Wort gepredigt wurden. St. Johannes sagt beim Abschluss seines Evangeliums: 'Es sind auch viele andere Dinge, die Jesus getan hat. Wenn sie aber alle sollten geschrieben werden, achte ich, die Welt würde die Bücher nicht fassen, die zu schreiben wären' (Joh. 21:25), was zeigt, dass nicht alles geschrieben wurde. Daher ist es angemessen zu verstehen, dass die Kirche viel für uns in der Tradition über das Geschriebene hinaus bewahrt hat.",
          paragraph11: "St. Lukas sagte zu Theophilus, als er begann, sein Evangelium zu schreiben: 'Weil es schon viele unternommen haben, Bericht zu geben von den Geschichten, die unter uns geschehen sind, wie uns das überliefert haben, die es von Anfang an selbst gesehen und Diener des Worts gewesen sind, habe auch ich's für gut gehalten, nachdem ich alles von Anfang an sorgfältig erkundet habe, es für dich, hochgeehrter Theophilus, in guter Ordnung aufzuschreiben, damit du den sicheren Grund der Lehre erfährst, in der du unterrichtet bist' (Luk. 1:1-4). Dies zeigt, dass es diejenigen gab, die mit ihren Augen sahen, das Evangelium ohne es zu schreiben, durch Wort oder durch andere Bücher lehrten und es an St. Lukas weitergaben. Es zeigt auch, dass Theophilus, für den das Evangelium geschrieben wurde, bereits durch Wort unterrichtet worden war. St. Lukas schrieb ihm, um die Wahrheit zu kennen oder zu bestätigen, nicht weil er vorher nicht unterrichtet worden war, sondern um ihn zu lehren und zu informieren."
        },
        churchBibleRelationship: {
          title: "Was kommt zuerst - die Heilige Bibel oder die Heilige Kirche?",
          paragraph1: "Die Kirche existierte vor der Heiligen Bibel und schrieb die Heilige Bibel. Sie ist das Reich Gottes, das die von Gott empfangene und in Büchern festgelegte Wahrheit bewahrte und weitergab.",
          paragraph2: "Die Heilige Bibel wurde von der Kirche für die Kirche geschrieben. Es ist angemessen zu verstehen, dass sie aus den geschriebenen Büchern die inspirierten auswählte und kanonisierte und sie den Gläubigen als Nahrung für das Leben gab. Daher geht die Kirche der Heiligen Bibel voraus; die Kirche ist der Zeuge, dass die Heilige Bibel das Wort Gottes ist. Die Heilige Bibel ist das, was die Kirche durch die Inspiration des Heiligen Geistes schrieb und interpretiert, aber sie schuf nicht die Kirche. Die Heilige Bibel ist die Mutter der neutestamentlichen Bücher. Wir können dies mit vielen Beweisen und Logik wie folgt sehen:",
          paragraph3: "1. Die Heilige Bibel selbst bezeugt die Vorrangstellung der Kirche",
          paragraph4: "Die folgenden Verse zeigen deutlich, dass die Kirche existierte, bevor die heiligen Bücher geschrieben wurden:",
          paragraph5: "\"An die Gemeinde Gottes in Korinth, an die Geheiligten in Christus Jesus, berufen als Heilige samt allen, die den Namen unseres Herrn Jesus Christus anrufen an jedem Ort, bei ihnen und bei uns\" (1. Kor. 1:2).",
          paragraph6: "Es ist angemessen zu verstehen, dass beim Schreiben einer Nachricht (Brief) drei Komponenten vorhanden sind - der Absender, die Nachricht und der Empfänger. Die Nachricht kann nicht ohne Absender und Empfänger geschrieben werden. Der Absender der Nachricht ist St. Paulus. Der Empfänger ist die Gemeinde Gottes in Korinth. Wenn Absender und Empfänger der Nachricht der Nachricht vorausgehen, bedeutet das, dass um die Nachricht zu empfangen, St. Paulus und die Kirche zuerst empfangen werden müssen. Als St. Paulus dies erklärt und beginnt, die Nachricht zu schreiben und erklärt, an wen er schreibt, zeigt das Sagen \"An die Gemeinde Gottes in Korinth\", dass die Gemeinde von Korinth existierte, bevor er die Nachricht schrieb. Die Gemeinde existierte nicht nur vorher, sondern heiligte auch Menschen. Mit anderen Worten, um Menschen zu heiligen, war die Heilige Bibel oder die Nachricht, die St. Paulus an die Korinther schrieb, nicht notwendig. Um dies bekannt zu machen, erklärte der Besitzer der Nachricht durch das Sagen \"geheiligte in Christus Jesus\". Viele ähnliche Verse, die dieselbe Wahrheit bezeugen, können angeführt werden.",
          paragraph7: "\"Paulus, Apostel Christi Jesu durch den Willen Gottes, und Timotheus, unser Bruder, an die Gemeinde Gottes in Korinth samt allen Heiligen in ganz Achaja\" (2. Kor. 1:1).",
          paragraph8: "\"Paulus, Apostel - nicht von Menschen, auch nicht durch einen Menschen, sondern durch Jesus Christus und Gott, den Vater, der ihn von den Toten auferweckt hat - und alle Brüder, die bei mir sind, an die Gemeinden in Galatien\" (Gal. 1:1).",
          paragraph9: "\"Paulus, Silvanus und Timotheus an die Gemeinde der Thessalonicher in Gott, dem Vater, und dem Herrn Jesus Christus\" (1. Thess. 1:1).",
          paragraph10: "\"Was du siehst, schreibe in ein Buch und sende es an die sieben Gemeinden: nach Ephesus und nach Smyrna und nach Pergamon und nach Thyatira und nach Sardes und nach Philadelphia und nach Laodizea\" (Offb. 1:11). Dem Seher St. Johannes wurde auch befohlen, an die sieben Gemeinden zu schreiben, nachdem er dieselbe Vision gesehen hatte. Dies zeigt, dass die Gemeinden vor dem Buch existierten. Johannes brauchte auch kein Buch, um durch das Sehen der Vision geehrt zu werden.",
          paragraph11: "2. Logische Beweise",
          paragraph12: "Das Buch Henoch wurde vor allen anderen Büchern geschrieben. Bevor das Buch Henoch geschrieben wurde, hatte der Mensch mehr als tausend Jahre gelebt. Das Buch Hiob und die fünf Bücher der Tora wurden danach geschrieben. Die Bücher der Propheten wurden tausende von Jahren später geschrieben, Hunderte von Jahren bevor Christus geboren werden sollte. Im Neuen Testament wurden für die ersten vierzig Jahre keine Bücher geschrieben. Danach wurden das Matthäusevangelium und der Jakobusbrief zuerst geschrieben, aber die meisten wurden bis 70 n. Chr. geschrieben. Die Bücher der Hadithe wurden auch am Ende des ersten Jahrhunderts geschrieben. Dies wirft die Frage auf:",
          paragraph13: "A. Wenn nur die Heilige Bibel für Gerechtigkeit und Erlösung benötigt wurde, hätte das Buch nicht allen von Adam an auf einmal, vollständig und umfassend gegeben werden sollen? Wenn ihnen keine Bücher gegeben wurden, hätten sie nicht die Gelegenheit gehabt, den Grund vorzubringen, dass 'wir in Sünde gefallen sind, weil wir die Heilige Bibel nicht hatten'? Wenn wir die Anbetung auf die Heilige Bibel allein beschränken, würde das nicht Fragen über Gottes Gerechtigkeit aufwerfen, allen alle Bücher zu geben?",
          paragraph14: "B. In der Antike wurden Bücher in Schriftrollenform für die Menschen gefunden, für die sie geschrieben wurden, aber anders als jetzt konnten sie nicht alle zusammen in der Hand einer Person gefunden werden. Die Heilige Bibel konnte erst nach der Erfindung der Druckmaschine und dem Beginn des Druckens auf Papier in ihrer heutigen Form gesammelt und zusammen gefunden werden. Die Kapitel und Zahlen, die sie zum Lesen geeignet machten, waren auch nach dem sechzehnten Jahrhundert. In der Antike wurde jedes Buch nur in kleinen Mengen an seinem Ort gefunden. Der Römerbrief wurde unter den Römern gefunden, der Korintherbrief unter den Korinthern usw., aber anders als in dieser Ära wurden sie nicht alle gleichzeitig für alle gefunden. War es nicht die Kirche, die diese heiligen Bücher, die etwa viertausend Jahre lang geschrieben wurden, von den falschen trennte und kanonisierte und sagte 'verwendet diese'?",
          paragraph15: "Wenn die Kirche dies nicht getan hätte, wären wir völlig von der Heiligen Bibel getrennt gewesen. Wenn sie nicht gesagt hätte 'die vier Evangelien sind die einzigen', als es viele gab, die behaupteten, 'das Evangelium des Judas', 'das Evangelium des Barnabas' und andere wie sie zu sein, und viele falsche zu ihnen hinzugefügt wurden, wären wir nicht in großen Schwierigkeiten gewesen? Ist es nicht ein Fehler, das Buch zu akzeptieren, das sie im Kanon gab, aber die Kirche, die es gab, nicht zu akzeptieren? Ebenso ist es nicht Unwissenheit, nicht zu akzeptieren, wenn sie die neutestamentlichen Bücher durch die Schaffung des Kanons gibt?",
          paragraph16: "C. Wer hat euch gesagt, dass die einundachtzig Bücher, die als die alttestamentlichen Schriften bekannt sind, die einzigen sind, die die Vorherrschaft und vollständige Autorität der Kirche zeigen? Wenn wir sagen, sagen wir 'die Kirche'. Aber diejenigen, die 'nur Bibel' sagen, wenn sie sagen 'wer hat euch die Heilige Bibel als sechsundsechzig gegeben', wer würde sagen? Die 'sechsundsechzig Bücher', die sie sagen, wir akzeptieren, sagen nicht 'nur sechsundsechzig' oder 'nur Bibel' selbst.",
          paragraph17: "3. Die Heilige Bibel selbst bezeugt, dass sie nicht alles enthält",
          paragraph18: "Der Evangelist St. Johannes sagte: 'Noch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch' (Joh. 20:30), und zeigte damit, dass nicht alles, was Christus tat, geschrieben wurde. Er erklärte auch, dass es unmöglich ist, alles zu schreiben, was Er tat, und sagte: 'Es sind auch viele andere Dinge, die Jesus getan hat. Wenn sie aber alle sollten geschrieben werden, achte ich, die Welt würde die Bücher nicht fassen, die zu schreiben wären' (Joh. 21:25). Dies zeigt, dass die Heilige Bibel nicht alle Geschichte, alle Systeme usw. enthält. Wenn wir das sagen, meinen wir, dass es nicht auf Textebene geschrieben ist, aber wir meinen nicht, dass aus der Perspektive des Geheimnisses und des Glaubens etwas fehlt. Gottes Wort ist immer vollständig, und das Buch, in dem Gottes Wort gefunden wird, ist auch vollständig ohne Fehler oder Mängel. Nicht nur das, sondern wenn wir zusätzliches spirituelles Wissen über das Thema benötigen, das die Heilige Bibel aufwirft, verweist sie auf die neutestamentlichen Bücher, aber sie sagt nicht 'Ich habe alles gesammelt und lest nur mich.' Die folgenden Gedanken bezeugen auch dies.",
          paragraph19: "\"Was aber mehr von Salomo zu sagen ist, das Frühere und das Spätere, siehe, das steht geschrieben in der Geschichte des Propheten Nathan und in der Weissagung Ahias von Silo und in den Gesichten des Sehers Ido über Jerobeam, den Sohn Nebats\" (2. Chron. 9:29).",
          paragraph20: "\"Was aber mehr von Rehabeam zu sagen ist und alles, was er getan hat, siehe, das steht geschrieben in der Chronik der Könige von Juda\" (1. Kön. 14:29).",
          paragraph21: "\"Was aber mehr von Salomo zu sagen ist und alles, was er getan hat, und seine Weisheit, siehe, das steht geschrieben in der Chronik Salomos\" (1. Kön. 11:41).",
          paragraph22: "Fazit",
          paragraph23: "Die Heilige Bibel ist die Quelle und das Fundament aller heiligen Bücher. Jede Lehre, Kirchengeschichte oder System, das mit dem, was in der Heiligen Bibel erwähnt wird, in Konflikt steht, hat keine Akzeptanz in unserer Kirche. Die Heilige Bibel ist die Hauptquelle der religiösen Lehre unserer Kirche. Die Heilige Bibel ist auch die Hauptquelle von System und Geschichte. Unsere Orthodoxe Tewahedo Kirche ist eine heilige Kirche, die das praktiziert, lehrt und lebt, was die Heilige Bibel enthält. Sie selbst ist diejenige, die uns die Vorbereitung gegeben hat, die Heilige Bibel zu lesen und zu lernen. Wir müssen jedoch vorsichtig sein, die Täuschung einiger Häretiker zu verstehen, die sich als Anhänger der Heiligen Bibel darstellen, während sie behaupten, dass die Kirche die Heilige Bibel nicht gepredigt hat. Viele sind diejenigen, die täuschen, indem sie das, was die Heilige Bibel nicht sagt, so darstellen, als ob sie es sagt, und indem sie es verdrehen und übersetzen. Deshalb widersetzen sie sich der Kirche, die allem vorausgeht, während sie behaupten, das heilige Buch akzeptiert zu haben, das sie der ganzen Welt gegeben hat.",
          paragraph24: "Quelle: https://eotcmk.org/a/17157-2/",
          paragraph25: "Die Beziehung der neutestamentlichen Bücher zur Heiligen Bibel:",
          paragraph26: "Wie bereits erwähnt, sind die neutestamentlichen Bücher Kinder der alttestamentlichen Bücher (der inspirierten Bücher). So wie ein Kind von seinem Vater Abraham und von seiner Mutter Sarah getrennt wird, um wie seine Eltern herauszukommen, enthalten diese auch die Wurzel und das Fundament der alttestamentlichen Bücher in Geheimnis, Glauben und System. Bücher, die den alttestamentlichen Büchern in Geheimnis oder System widersprechen, werden nicht zu den neutestamentlichen gezählt. Denn es wird im Wort des Apostels gesagt: 'Aber auch wenn wir oder ein Engel vom Himmel euch ein anderes Evangelium predigen würden als das, was wir euch gepredigt haben, der sei verflucht' (Gal. 1:8).",
          paragraph27: "Die Beziehung zwischen den neutestamentlichen Büchern und den alttestamentlichen Büchern kann durch die folgenden Punkte verstanden werden:",
          paragraph28: "A. Nach ihrer Natur: Die einundachtzig Bücher, die als das Alte Testament bekannt sind, werden als Gesetz, Geschichte, Weisheit und Prophezeiung klassifiziert.",
          paragraph29: "Ebenso sind alle neutestamentlichen Bücher auf die gleiche Weise organisiert. Zum Beispiel, schauen wir uns diese illustrative Tabelle an:",
          paragraph30: "B. Nach ihrem Besitz: Der Besitzer der heiligen Bücher ist die Heilige Kirche. Weil die heiligen Bücher Gottes Schätze sind, geschrieben nach Seinem Willen und Seiner Inspiration, und die Kirche auch das Haus der Gnade ist, das Gott mit Seinem Blut erkauft hat, der Verwalter Gottes auf Erden (Apg. 20:28). Daher schrieben die von Gott gesandten Apostel das Evangelium und die Briefe für die Kirche durch die Offenbarung des Heiligen Geistes.",
          paragraph31: "Die Schreiber der neutestamentlichen Bücher sind Kinder der Kirche, und sie schrieben die Bücher für die Kinder der Kirche, für Gläubige, entsprechend wie der Heilige Geist ihnen offenbarte. Daher ist die Kirche, als ihr Besitzer, diejenige, die für ihre Auslegung, Geschichte und Geheimnisse befragt werden sollte.",
          paragraph32: "C. Nach ihrer Heiligkeit: Der Heilige Geist schrieb sowohl die alttestamentlichen als auch die neutestamentlichen Bücher. So wie der Heilige Geist die Schreiber des Alten Testaments erwählte, inspirierte und ihnen Geheimnisse offenbarte, so erwählte, inspirierte und offenbarte der Heilige Geist den Schreibern der neutestamentlichen Bücher Geheimnisse. Da sie aus einer Quelle kommen, dem Heiligen Geist, haben sowohl die alttestamentlichen als auch die neutestamentlichen Bücher den Zweck, religiöse Angelegenheiten zu erklären und auch für Lehre und Ermahnung, für die Korrektur des Herzens und für die Verwendung gerechter Beratung (2. Tim. 3:16).",
          paragraph33: "Die Kirche ist diejenige, die die alttestamentlichen Bücher, die in verschiedenen Zeiten und von verschiedenen Menschen in fernen Ländern geschrieben wurden, durch Prüfung und Bestätigung aus der Perspektive des Glaubensfundaments empfing. Die Kirche empfängt auch die neutestamentlichen Bücher auf die gleiche Weise durch Prüfung und Bestätigung aus der Perspektive ihrer Lehre.",
          paragraph34: "D. Durch die Offenbarung von Gottes Werk: Der Hauptzweck der heiligen Bücher ist es, Gottes Werk zu offenbaren. Die heiligen Bücher erklären die Wunder, Werke und Gnade, die Gott direkt selbst oder durch Seine Freunde für das Volk tat. Diese Tatsache findet sich ausführlich und offen im Alten Testament. Da ihr Zweck darin besteht, Gottes Werk zu offenbaren, schenken sie den Menschen und Orten, wo Gottes Werkwunder vollbracht wurden, nicht viel Aufmerksamkeit. Sie offenbaren nur das Wunder und gehen über die Namen von Menschen und Orten als 'jemand' hinweg (Mt. 26:18, 1. Kön. 13:1, Mt. 8:2, Lk. 11:15). Dies wird nicht nur im Alten Testament bestätigt, sondern ist auch der Zweck der neutestamentlichen Bücher. In den Taten des Takla Haymanot, den Taten des Heiligen Georg und den Wundern Marias nennen sie die Menschen und Orte, wo Gottes Werk (Wunder) durch die Fürsprache der Heiligen vollbracht wurde, als 'jemand', ohne ihre Namen zu erwähnen, nicht weil diese Menschen und Orte keine Namen haben, sondern weil ihr Zweck darin besteht, Gottes Werk zu offenbaren.",
          paragraph35: "E. Durch die Offenbarung der Größe des Glaubens: Die heiligen Bücher sind durch Glauben, für Glauben und über Glauben geschrieben. Was in den Büchern offenbart und geboten wird, wird bewahrt und erfüllt. Die drei Kinder machten den Glauben zu ihrem Schatz. Durch Glauben wurden sie durch Gesetz geboten und weigerten sich, Götzen anzubeten. Deshalb, als sie ins Feuer geworfen wurden, zerstörten sie die Kraft des Feuers durch Glauben. Der Prophet Daniel schloss den Mund der Löwen durch Glauben. Gideon ohne Waffen besiegte die Armeen der Nationen. Dies offenbart die Größe des Glaubens (Hebr. 11:32-34). In den neutestamentlichen Büchern auch teilte Abune Eustathius das Meer mit seinem Stab (mit seinem Kreuz), der gerechte Abune Takla Haymanot kam aus der Haut heraus, in die sie eingewickelt waren, nachdem sie von der Klippe geworfen worden waren, stand in der Mitte des Feuers und lobte Gott; der Heilige Georg trank Gift, das schneidet und zeigt die Größe des Glaubens durch das Lebendigsein.",
          paragraph36: "Wenn wir die Menschen sehen, die in den alttestamentlichen und neutestamentlichen Büchern erwähnt werden und große Wunder vollbringen, wird das Wort unseres Erlösers Jesus Christus im Heiligen Evangelium für sie erfüllt: 'Wahrlich, wahrlich, ich sage euch: Wer an mich glaubt, der wird die Werke auch tun, die ich tue, und wird größere als diese tun' (Joh. 14:12).",
          paragraph37: "F. Durch die Offenbarung der verschiedenen Kämpfe der Glaubensmenschen: Gott vollbringt Sein wunderbares Werk für Seine Schöpfung durch Seine Schöpfung. Dies wird auf verschiedene Weise vollbracht. Unter den Geschöpfen, durch die Gottes Werk ausgiebig und offen vollbracht wird, sind die Heiligen die Hauptpersonen. Die Heiligen machten reine Herzen zu ihrem Schatz, indem sie Gottes Gesetz dienten und Seinen Willen erfüllten. Dadurch vollbrachten sie viele Kämpfe in ihren Körpern mit der Kraft, die sie von Gott empfingen. Sowohl die alttestamentlichen als auch die neutestamentlichen Bücher offenbaren dieses Leben des Kampfes der Heiligen. Nehemia, der die Mauer Jerusalems baute, Esther, die das Volk Israel durch Fasten und Gebet rettete, Judith, die Holofernes mit Weisheit tötete, der Heilige Petrus, der die Kranken mit seinem Schatten heilte, unsere Herrin, gerechte Märtyrer, die verschiedene große Wunder vollbrachten, sind in den heiligen Büchern offenbart zu finden.",
          paragraph38: "Wie akzeptiert die Kirche die neutestamentlichen Bücher?",
          paragraph39: "Die Heilige Kirche hat ein System, durch das sie die neutestamentlichen Bücher akzeptiert. Wie wiederholt erwähnt, sind die neutestamentlichen Bücher Kinder in Inhalt, Geist, Geheimnis und Fundament. Die Bücher der Heiligen Bibel werden 'alttestamentliche Bücher' genannt. Alt bedeutet Wurzeln, und wenn wir alttestamentliche Bücher sagen, bedeutet es, dass sie die Quellen und Wurzeln anderer Bücher sind. Dies bedeutet, dass die Heilige Bibel die Quelle und das Elternteil der neutestamentlichen Bücher in Inhalt, Geist, Geheimnis und Fundament ist, und sie wachsen und entwickeln sich aus ihrer Wurzel.",
          paragraph40: "Jedoch Bücher, die, obwohl sie in einigen ihrer Inhalte der Heiligen Bibel ähneln mögen, der Lehre der Heiligen Bibel, dem, was von unserem Herrn offenbart wurde, und dem Glauben und der Lehre der Kirche, die von den Aposteln überliefert wurde, widersprechen, lehnt die Kirche ab und akzeptiert sie nicht. Solche Bücher werden 'apokryph' genannt, aber nicht 'Neues Testament.'",
          paragraph41: "Der indische Theologe Timotheus erklärt, dass die neutestamentlichen Bücher durch die folgenden Punkte unterschieden werden können:",
          paragraph42: "Ihr Zweck ist das Reich Gottes,",
          paragraph43: "Sie widersprechen nicht den alttestamentlichen Büchern und der heiligen Tradition der Kirche in Gedanken, Geist, Geheimnis und Theologie,",
          paragraph44: "Sie sind konsistent mit christlicher Ethik, Leben und Verhalten,",
          paragraph45: "Sie haben das Zeugnis der Kirchenväter, Tradition oder Reise,",
          paragraph46: "Sie haben keine inneren Widersprüche.",
          paragraph47: "Daher möge unser Schöpfer, der Höchste Gott, uns helfen, im Glauben zu wachsen und gute Werke zu tun, indem wir die neutestamentlichen Bücher verwenden, die gute Lehre lehren, uns helfen, die religiösen Kämpfe der heiligen Väter und Mütter zu verstehen, und die alttestamentlichen Bücher für uns erklären und interpretieren!",
          paragraph48: "Quelle: https://eotcmk.org/a/",
          paragraph49: "",
          paragraph50: "",
          paragraph51: "",
          paragraph52: "",
          paragraph53: "",
          paragraph54: "",
          paragraph55: "",
          paragraph56: "",
          paragraph57: "",
          paragraph58: "",
          paragraph59: "",
          paragraph60: "",
          paragraph61: "",
          paragraph62: "",
          paragraph63: "",
          paragraph64: "",
          paragraph65: "",
          paragraph66: "",
          paragraph67: "",
          paragraph68: "",
          paragraph69: "",
          paragraph70: ""
        }
      }
    },
    spiritualLife: {
      title: "Geistliches Leben",
      prayer: {
        title: "Gebet",
        description: "Regelmäßiges Gebet ist für das äthiopisch-orthodoxe geistliche Leben wesentlich, mit spezifischen Gebeten für verschiedene Tageszeiten."
      },
      fasting: {
        title: "Fasten",
        description: "Fasten wird weit verbreitet praktiziert, mit über 250 Fastentagen im Jahr als Teil des geistlichen Systems."
      },
      charity: {
        title: "Wohltätigkeit",
        description: "Wohltätigkeit und Fürsorge für Bedürftige gelten als wesentliche Ausdrücke des christlichen Glaubens und der Liebe."
      },
      offering: {
        title: "Opfer und Zehnt",
        firstFruits: {
          title: "Erstlingsfrüchte",
          definition: "Erstlingsfrüchte kommen vom Wort 'erste'. Erstlingsfrüchte gehören Gott - Ex 23:19, Lev 23:10-11",
          purpose: "Erstlingsfrüchte geben bedeutet, Gott in all unseren Dingen an die erste Stelle zu setzen - Num 3:13, Deut 15:19",
          commandment: "Erstlingsfrüchte-Opfer ist ein Gebot - Ex 13:2, Deut 26:2",
          blessing: "Wenn wir das Erste geben, wird das, was wir haben, gesegnet - 1 Sam 2:20-21"
        },
        tithe: {
          title: "Zehnt - Gen 14:20, Heb 7:4-5",
          oldTestament: "Zehnt im Alten Testament bedeutet eins von zehn - Gen 28:22",
          newTestament: "Aber im Neuen Testament ist Zehnt über eins von zehn hinaus, wie du gesät hast - 2 Kor 9:6-7",
          ownership: "Zehnt ist Gottes Eigentum - Mal 3:8-10",
          faithfulness: "Menschen, die Zehnt geben (zahlen), geben Gottes Eigentum treu an Ihn zurück - Deut 14:22-23",
          blessing: "Es gibt Segen im Zahlen (Geben) von Zehnt - Mal 3:8-10"
        },
        reasons: {
          title: "Warum und zu welchem Zweck wir geben",
          reason1: "A. Gott hat uns geboten zu geben - Ex 25:1-5, Lev 25:31, Num 18:21",
          reason2: "B. Unsere Gaben werden für die Ausbreitung von Gottes Reich und den Dienst an Gottes Haus verwendet - 1 Kor 9:4-14, 2 Kor 8:4, Phil 4:15-18",
          reason3: "C. Durch Geben ehren und verehren wir Gott - Spr 3:9-10",
          reason4: "D. Durch Geben laden wir Gottes Segen ein - Mal 3:10-12, Lk 6:10",
          reason5: "E. Durch Geben werden wir Gott treu (wir berauben Ihn nicht) - Mal 3:8-10"
        },
        howToGive: {
          title: "Wie sollten wir geben?",
          way1: "A. Was wir geben, ist zuerst uns selbst Gott zu geben - Röm 12:1, 2 Kor 8:1-5",
          way2: "B. Was wir geben, sollte mit Freude sein, nicht mit Trauer (Zwang) - 2 Kor 9:7",
          way3: "C. Was wir geben, sollte nicht nur aus unserem Überfluss, sondern auch aus unserer Armut sein - 2 Kor 8:1-5",
          way4: "D. Was wir geben, sollte nicht sein, um von Menschen gesehen zu werden - Mt 6:1",
          way5: "E. Was wir geben, sollte nicht sein, um mit unseren Gaben zu prahlen - Lk 18:9-14"
        }
      }
    }
  },
  service: {
    timihirtTarikoch: {
      title: "Lehren & Geschichten",
      noPosts: "Keine Blogbeiträge gefunden.",
      featured: "Hervorgehoben",
      authorLabel: "Autor:",
      readMore: "Weiterlesen",
      hero: {
        authorName: "Abba Misgana Sillasie Menaye",
        sourceLabel: "Quelle:",
        sourceLinkText: "eotcmk.org",
      },
      biblicalFigures: {
        moses: {
          title: "Der treue Diener: Prophet Mose",
          content:
            ` Die Heilige Schrift bezeugt, dass Mose ein treuer Diener war. "Aber mit meinem Diener Mose ist es nicht so. Ihm vertraue ich mein ganzes Haus an. Von Angesicht zu Angesicht rede ich mit ihm, offen und nicht in Rätseln. Er darf sogar die Gestalt des HERRN schauen." (4. Mose 12,7-8). Dies ist nicht das Zeugnis eines Geschöpfes, sondern ein Zeugnis, das vom Schöpfer selbst gegeben wurde. In der Wahrheit, gäbe es wohl auch in unserer Zeit einen Diener, dem der Schöpfer vor seinen Geschöpfen Treue bezeugen würde?
              Moses treuer Dienst blieb unerschütterlich durch vierzig Jahre Wüste, Exil, Leid und Zorn – alles, weil er seinen Brüdern ergeben war. Weitere vierzig Jahre führte er seine verbannten Brüder: er teilte das Meer, besiegte Feinde, ließ Manna herabfallen, führte die Wolke, ließ Wasser aus einem Felsen sprudeln und teilte die Leiden seines Volkes. Er ertrug die Hitze des Tages und die Kälte der Nacht und diente treu bis zu seinem Tod.
              "Da kehrte Mose zum HERRN zurück und sagte: »Ach, dieses Volk hat eine große Sünde begangen. Sie haben sich einen Gott aus Gold gemacht. Vergib ihnen doch ihre Sünde! Wenn du es aber nicht tust, dann streich mich aus dem Buch, das du geführt hast.«" (2. Mose 32,31-32).
              Ein treuer Diener sagt: "Lass mich sterben, damit andere leben." Aber was wir jetzt sehen, ist ganz anders. Es ist: "Lasst die Menschen sterben, damit ich lebe; lasst die Menschen fasten, damit ich esse; lasst die Menschen nackt sein, damit ich mich kleide; lasst die Menschen trauern, damit ich mich freue."
              Ein treuer Diener stellt den Nutzen der Menschen, denen er dient, in den Vordergrund, nicht seinen eigenen persönlichen Vorteil.`,
        },
        david: {
          title: "Der treue Diener: Prophet David",
          content:
            `Als die Zeit der Richter endete und durch die Zeit der Könige ersetzt wurde, nahm Gott David von der Schafhut weg und gab ihm die Herrschaft, um über Israel zu regieren. Er empfing das Königreich, das Zepter, das Saul verwirkt hatte, durch die Hand Samuels.
              Mit der ihm übertragenen Autorität regierte er das Volk Israel treu. Und Gott legte für ihn Zeugnis ab, so wie er es für Mose getan hatte. "Der HERR hat sich einen Mann gesucht nach seinem Herzen"; wie gesagt wurde: "Ich habe mir einen König unter seinen Söhnen bestellt" und "Geh nach Bethlehem zu Isai, denn ich habe einen von seinen Söhnen zum König erwählt." (1. Samuel 13,14; 16,1-3).
              Wie es im "Buch der Stunden" (von Abba Giorgis von Gasicha) heißt: "Ich habe meinen Knecht David gefunden, ich habe ihn mit meinem heiligen Öl gesalbt" (Psalm 89,21). Dies interpretiert er wie folgt: "Ich habe David, meinen Knecht, gefunden, einen treuen Mann nach meinem Herzen." Er wurde wegen seiner Treue gefunden, und er blieb auch nach seiner Krönung zum König treu.
              Wir aber, die wir heute in dieser Welt leben: Wir sind treu in Armut, aber wenn Reichtum, Amt und Macht kommen, verlieren wir unsere Treue. Ja, wir verachten sogar die Treue. Betrug erscheint uns als Tapferkeit und Täuschung als Weisheit.
              Bevor David gesalbt wurde, war er treu in der Hut seiner Schafe. Wenn ein Löwe oder ein Bär kam und ein Lamm aus der Herde raubte, lief er ihm nach, schlug ihn und rettete das Lamm aus seinem Maul.`,
        },
        joseph: {
          title: "Der treue Diener: Heiliger Josef",
          content:
            `Josef war von klein auf ein vertrauenswürdiger Mann; er trug Essen für seine Brüder, und selbst wenn sein eigenes Essen aufgebraucht war, aß er nicht den Anteil seiner Brüder. Als seine Brüder ihn in die Sklaverei verkauften, blieb er treu, während er im Haus des Potifar diente. Seine Treue machte ihn zum Herrn über Potifars Haushalt.
              "Sie verkauften Josef als Sklaven; seine Füße wurden in Fesseln gelegt, sein Hals kam in eiserne Ketten; bis das eintraf, was er vorhergesagt hatte, prüfte ihn das Wort des HERRN. Der König sandte hin und ließ ihn frei, der Herr der Völker gab ihn los. Er setzte ihn zum Herrn über sein Haus ein und zum Herrscher über all seinen Besitz, damit er seine Fürsten nach seinem Willen unterweise und seine Ältesten Weisheit lehre." (Psalm 105,17-22, sinngemäß)
              Während Josef in dieser Situation war, warf die Frau seines Herrn ihre Augen auf ihn, beobachtete sein Kommen und Gehen mit lüsternem Blick.
              "Es begab sich nach dieser Geschichte, dass die Frau seines Herrn ihre Augen auf Josef warf und sprach: Schlafe bei mir! Er aber weigerte sich und sprach zu der Frau seines Herrn: Siehe, mein Herr kümmert sich um nichts im Hause und hat alles, was er hat, in meine Hand gegeben. Niemand ist im Hause größer als ich, und er hat mir nichts vorenthalten als nur dich, weil du seine Frau bist. Wie sollte ich denn ein solch großes Unrecht tun und gegen Gott sündigen?" (1. Mose 39,7-9)`,
        },
      },
      lessons: {
        list: [
          {
            title: "Wer ist der treue Diener?",
            source: "Abba Misgana Sillasie Menaye",
            link: "https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/",
            content:
              ` In der Äthiopisch-Orthodoxen Tewahedo-Kirche wird der sechste Sonntag der Großen Fastenzeit (des großen Fastens) "Gebru Hir" (ገብር ኄር) genannt. Dieser Name wurde von dem äthiopischen Gelehrten Heiligen Yared gegeben. Aus einem seiner fünf Bücher, bekannt als "Tsome Digua" (ጾመ ድጓ), stellte er die Namen für die Wochen der Großen Fastenzeit zusammen, inklusive ihrer liturgischen Riten.
                Daher handeln die Gesänge, die in der Kirche ab dem samstäglichen Abendgebet (Kawazema) der sechsten Woche der Großen Fastenzeit gesungen werden, die Predigten, die gehalten werden, und die Lehren, die erteilt werden, alle vom "Gebru Hir" oder dem "treuen Diener".`,
          },
          {
            title: "Gleichnis vom treuen Diener",
            source: "Matthäusevangelium",
            link: "#",
            content:
              ` Damit dies ein Beispiel für uns sei, erinnern wir uns an die Geschichte, die im Matthäusevangelium geschrieben steht:
                Ein reicher Mann rief seine Diener zu sich und gab einem fünf Talente, einem anderen zwei, einem anderen eines; jedem nach seiner Tüchtigkeit. Danach reiste er in ein fernes Land.
                Der, der fünf Talente empfangen hatte, ging hin, handelte damit und gewann weitere fünf dazu.
                Der, der zwei empfangen hatte, gewann ebenfalls zwei weitere dazu.
                Der aber, der das eine empfangen hatte, ging hin, grub ein Loch in die Erde und verbarg das Geld seines Herrn.
                Nach langer Zeit kam der Herr dieser Diener und hielt Abrechnung mit ihnen.
                Da trat der herzu, der die fünf Talente empfangen hatte, und sprach: Herr, du hast mir fünf Talente gegeben; siehe, ich habe damit fünf weitere Talente gewonnen.
                Da sprach sein Herr zu ihm: Recht so, du tüchtiger und treuer Diener! Du bist über wenigem treu gewesen, ich will dich über viel setzen; geh ein zur Freude deines Herrn!
                Da trat auch der herzu, der die zwei Talente empfangen hatte, und sprach: Herr, du hast mir zwei Talente gegeben; siehe, ich habe zwei weitere Talente damit gewonnen.
                Sein Herr sprach zu ihm: Recht so, du tüchtiger und treuer Diener! Du bist über wenigem treu gewesen, ich will dich über viel setzen; geh ein zur Freude deines Herrn!
                Da trat auch der herzu, der das eine Talent empfangen hatte, und sprach: Herr, ich wusste, dass du ein harter Mann bist: du erntest, wo du nicht gesät hast, und sammelst, wo du nicht ausgestreut hast; und ich fürchtete mich, ging hin und verbarg dein Talent in der Erde. Siehe, da hast du das Deine.
                Sein Herr aber antwortete und sprach zu ihm: Du böser und fauler Diener! Du wusstest, dass ich ernte, wo ich nicht gesät habe, und sammle, wo ich nicht ausgestreut habe? Dann hättest du mein Geld zu den Wechslern bringen sollen, so hätte ich bei meiner Rückkehr das Meine mit Zinsen zurückerhalten. Darum nehmt ihm das Talent weg und gebt es dem, der die zehn Talente hat! Denn wer da hat, dem wird gegeben werden, und er wird die Fülle haben; wer aber nicht hat, dem wird auch das genommen, was er hat. Und den unnützen Diener werft in die Finsternis hinaus! Da wird Heulen und Zähneknirschen sein. (Matthäus 25,14-30)`,
          },
          {
            title: "Was macht einen Diener treu?",
            source: "Abba Misgana Sillasie Menaye",
            link: "#",
            content:
              ` Der "reiche Mann" bezieht sich auf den Herrn (Gott). Das "Talent" bezieht sich auf die verschiedenen Gnadengaben (geistliche Gaben und Verantwortlichkeiten), die für den Dienst gegeben werden. Diejenigen, die sie vermehrten, sind die Heiligen, die treu und angemessen dienten. Derjenige, der sein Talent vergrub, ist derjenige, der die ihm gegebene Gnade nicht zum Dienst einsetzte, als es von ihm verlangt wurde.
                Die Aussage, dass "ihr Herr kam, um Abrechnung zu halten", zeigt uns, dass er am Tag des Gerichts kommen wird, um jedem nach seinem geleisteten Dienst Lohn zu geben. Indem er zu denen, die gedient haben, sagt: "Geh ein zur Freude deines Herrn", bedeutet das, dass die treuen Diener das Himmelreich erben werden.
                Das Schicksal der Faulen – in die "Finsternis hinausgeworfen zu werden, wo Heulen und Zähneknirschen sein wird" – zeigt, dass sie in den Scheol (den Ort der Toten) eingehen werden, einen Ort des Leidens und der tiefen Finsternis.
                Das Wort aus dem Heiligen Evangelium, das ich oben anführte, fragt: "Wer ist ein treuer Diener?" Dies ist eine Frage an jedes menschliche Wesen, das nach dem Bild Gottes geschaffen ist. Von jeder Person wird erwartet, dass sie diese göttliche Frage beantwortet.`,
          },
        ],
      },
      content: {
        introduction: [
          "In der Äthiopisch-Orthodoxen Tewahedo-Kirche wird der sechste Sonntag der Großen Fastenzeit (Fastenzeit) \"Gebru Hir\" (ገብር ኄር) genannt. Dieser Name wurde von dem äthiopischen Gelehrten Heiligen Yared gegeben. Aus einem seiner fünf Bücher, bekannt als \"Tsome Digua\" (ጾመ ድጓ), stellte er die Namen für die Wochen der Großen Fastenzeit zusammen mit ihren liturgischen Riten auf. Daher erinnern ab dem Samstagabendgebet (Kawazema) der sechsten Woche der Großen Fastenzeit die in der Kirche gesungenen Hymnen, die gepredigten Predigten und die gegebenen Lehren an den \"Gebru Hir\" oder den \"Treuen Diener\".",
          "Um uns als Beispiel zu dienen, erinnern wir uns an die in dem Evangelium nach Matthäus geschriebene Geschichte: Ein reicher Mann rief seine Diener und gab einem von ihnen fünf Talente, einem anderen zwei Talente und einem anderen ein Talent. Danach ging er in ein fernes Land. Der, der fünf Talente empfangen hatte, ging und handelte mit ihnen und machte weitere fünf, sodass er zehn hatte. Der, der zwei Talente empfangen hatte, gewann ebenfalls weitere zwei, sodass er vier hatte. Aber der, der ein Talent empfangen hatte, ging und grub in der Erde und versteckte das Geld seines Herrn, indem er es begrub.",
          "Nach langer Zeit kam ihr Herr zurück und hielt Abrechnung mit ihnen. Der, der fünf Talente empfangen hatte, trat vor und sagte: 'Herr, du hast mir fünf Talente gegeben; siehe, ich habe fünf weitere Talente gewonnen.' Sein Herr sagte zu ihm: 'Recht so, du guter und treuer Diener! Du bist über wenigem treu gewesen, ich will dich über viel setzen. Geh ein zur Freude deines Herrn!' Der mit den zwei Talenten trat ebenfalls vor und sagte: 'Herr, du hast mir zwei Talente gegeben; siehe, ich habe zwei weitere Talente gewonnen.' Sein Herr sagte zu ihm: 'Recht so, du guter und treuer Diener! Du bist über wenigem treu gewesen, ich will dich über viel setzen. Geh ein zur Freude deines Herrn!'",
          "Dann trat auch der herzu, der das eine Talent empfangen hatte, und sprach: 'Herr, ich wusste, dass du ein harter Mann bist: du erntest, wo du nicht gesät hast, und sammelst, wo du nicht ausgestreut hast; und ich fürchtete mich, ging hin und verbarg dein Talent in der Erde. Siehe, da hast du das Deine.' Sein Herr aber antwortete und sprach zu ihm: 'Du böser und fauler Diener! Du wusstest, dass ich ernte, wo ich nicht gesät habe, und sammle, wo ich nicht ausgestreut habe? Dann hättest du mein Geld zu den Wechslern bringen sollen, so hätte ich bei meiner Rückkehr das Meine mit Zinsen zurückerhalten. Darum nehmt ihm das Talent weg und gebt es dem, der die zehn Talente hat! Denn wer da hat, dem wird gegeben werden, und er wird die Fülle haben; wer aber nicht hat, dem wird auch das genommen, was er hat. Und den unnützen Diener werft in die Finsternis hinaus! Da wird Heulen und Zähneknirschen sein.' (Matthäus 25,14-30)",
          "Der \"reiche Mann\" bezieht sich auf den Herrn (Gott). Das \"Talent\" bezieht sich auf die verschiedenen Gnadengaben (geistliche Gaben und Verantwortlichkeiten), die für den Dienst gegeben werden. Diejenigen, die sie vermehrten, sind die Heiligen, die treu und angemessen dienten. Derjenige, der sein Talent vergrub, ist derjenige, der die ihm gegebene Gnade nicht zum Dienst einsetzte, als es von ihm verlangt wurde. Die Aussage, dass \"ihr Herr kam, um Abrechnung zu halten\", zeigt uns, dass er am Tag des Gerichts kommen wird, um jedem nach seinem geleisteten Dienst Lohn zu geben."
        ],
        question: [
          "Das Wort aus dem Heiligen Evangelium, das ich oben anführte, fragt: 'Wer ist ein treuer Diener?' Dies ist eine Frage an jedes menschliche Wesen, das nach dem Bild Gottes geschaffen ist. Von jeder Person wird erwartet, dass sie diese göttliche Frage beantwortet."
        ],
        conclusion: [
          "Indem er zu denen, die gedient haben, sagt: 'Geh ein zur Freude deines Herrn', bedeutet das, dass die treuen Diener das Himmelreich erben werden. Das Schicksal der Faulen – in die 'Finsternis hinausgeworfen zu werden, wo Heulen und Zähneknirschen sein wird' – zeigt, dass sie in den Scheol (den Ort der Toten) eingehen werden, einen Ort des Leidens und der tiefen Finsternis."
        ]
      },
    },
    kirstina: {
      heroDescription: "Das heilige Sakrament, das in den christlichen Glauben führt",
      about: {
        title: "Über die Taufe",
        content: "So wie wir im Fleisch von unseren Eltern geboren werden und die Natur des Fleisches erben, so werden wir, wenn wir im Wasser getauft werden, vom Heiligen Geist geboren. Unser Herr lehrte: 'Was vom Fleisch geboren wird, das ist Fleisch; und was vom Geist geboren wird, das ist Geist' und 'Wenn jemand nicht von neuem geboren wird, kann er das Reich Gottes nicht sehen' (Joh 3,3.6). Der Apostel spricht über die Gnade der Sohnschaft, die wir durch die Taufe empfangen: 'Ihr habt den Geist der Sohnschaft empfangen, in dem wir rufen: Abba, Vater! Der Geist selbst zeugt mit unserem Geist, dass wir Kinder Gottes sind' (Röm 8,15-16). Allen aber, die ihn aufnahmen und an seinen Namen glaubten, gab er Macht, Kinder Gottes zu werden; die aus Gott geboren sind, nicht aus Blut, noch aus dem Willen des Fleisches, noch aus dem Willen eines Mannes (Joh 1,11-13). Daher haben wir Christen zwei Geburten: die erste vom Fleisch unserer Eltern, die zweite von Gott. Nach der Geburt sollen wir in beiden Aspekten wachsen, denn der Mensch ist sowohl leiblich als auch geistlich (Gal 3,26; Tit 3,5; 1 Petr 1,23)."
      },
      howPerformed: {
        title: "Wie wird die Taufe der Sohnschaft vollzogen?",
        content: "Es gibt eine Taufe, die die Sohnschaft verleiht (Eph 4,4-5), die sich jedoch auf drei Hauptweisen zeigt. Die Wassertaufe wird von Priestern im gesegneten Wasser im Namen der Dreifaltigkeit vollzogen, und wir werden durch das Wirken des Heiligen Geistes von Gott geboren (Joh 3,3-6). Wenn das Wasser durch Gebet gesegnet wird, wohnt der Heilige Geist darin, um Sohnschaft zu geben; so wird, wer im Glauben getauft wird, aus Wasser und Geist geboren. Die Taufe ist Ausdruck der Gnade Gottes; deshalb kann auch der Arme, der wenigstens Wasser hat, durch das Wasser von Gott geboren werden. Die Taufe des Heiligen Geistes (Lk 3,16; Apg 1,5; Apg 2,1-4; 1 Kor 12,13) und die Taufe des Blutes (Märtyrertaufe) sind ebenso anerkannt, durch die Märtyrer die Sohnschaft empfangen."
      },
      howCeremony: {
        title: "Wie wird die Taufe vollzogen?",
        part1: "Wenn der Täufling ein neuer Christ ist, muss er zunächst die grundlegenden Glaubenslehren lernen, und sein Glaube muss bezeugt werden. Bei Säuglingen bezeugen diejenigen, die als christliche Eltern (Paten) kommen, den Glauben der Kinder, damit sie getauft werden können. Zur Zeit der Taufe muss man dreimal ins Wasser hinabsteigen und wieder heraufkommen, denn dies ist ein Zeichen für Christi Tod und Auferstehung. Der Getaufte wird im Namen des Vaters und des Sohnes und des Heiligen Geistes getauft (Mt 28,19). Wenn die Täuflinge verheiratet sind und eine Familie haben, müssen alle lernen, glauben und in Einheit getauft werden. Nach der Taufe muss man die Kommunion empfangen (den heiligen Leib und das kostbare Blut). Wenn dies nicht geschieht, ist die Taufe nicht lebendig.",
        part2: "Unter den Stufen des Klerus haben nur Bischöfe und Priester die Vollmacht zu taufen (Mt 28,19). Diakone dürfen nicht taufen (Mt 28,19 und Fetha Negest, Artikel 3). Eine Taufe, die von einem Ungeweihten vollzogen wird, gilt als ungültig (wie Spucke) und nicht als wahre Taufe; in einem solchen Fall muss der Betreffende wahrhaft getauft werden, um die Sohnschaft zu empfangen. Die Taufe geschieht durch Untertauchen oder Eintauchen, nicht durch Besprengen; denn das Besprengen entstellt das Zeichen, das Mysterium und den Ritus. Taufe bedeutet Untertauchen; daher bedeutet sie, in das Wasser hineinzugehen und herauszukommen. So steigt man im Namen des Vaters und des Sohnes und des Heiligen Geistes dreimal ins Wasser hinab und kommt wieder herauf (Mt 28,19). Die Schrift bezeugt, dass die vollzogene Taufe durch Untertauchen geschieht.",
        part3: "In der Apostelgeschichte heißt es: ‚Er befahl, den Wagen anzuhalten; und sie stiegen beide in das Wasser hinab, Philippus und der Kämmerer, und er taufte ihn. Als sie aber aus dem Wasser heraufstiegen…‘ (Apg 8,38–39). Der Ausdruck ‚als sie aus dem Wasser heraufstiegen‘ zeigt, dass der Kämmerer in das Wasser hinabgestiegen war, um getauft zu werden. ‚Damit, wie Christus durch die Herrlichkeit des Vaters von den Toten auferweckt wurde, so auch wir in einem neuen Leben wandeln; denn wenn wir mit ihm eins gemacht worden sind in der Gleichheit seines Todes, so werden wir es auch in der Gleichheit seiner Auferstehung sein‘ (Röm 6,4–5; vgl. Kol 2,12). Begräbnis bedeutet Hineingehen in das Grab, und Auferstehung bedeutet Herauskommen aus dem Grab; ebenso erfordert die Taufe das Hineingehen in das Wasser (durch Untertauchen) und das Herauskommen.",
        part4: "Der Apostel sagt auch: ‚Er rettete uns – nicht um der Werke der Gerechtigkeit willen, die wir getan hätten, sondern nach seiner Barmherzigkeit – durch das Bad der Wiedergeburt und der Erneuerung im Heiligen Geist‘ (Tit 3,5). Und wiederum zu Saulus: ‚Und nun, was zögerst du? Steh auf, lass dich taufen und deine Sünden abwaschen, indem du seinen Namen anrufst!‘ (Apg 22,16). In diesem Wort bedeutet ‚waschen‘ den ganzen Leib; so wird auch die Taufe durch Untertauchen vollzogen. In allen vier Evangelien wird die Taufe unseres Herrn als Hineingehen in das Wasser und Heraufkommen aus dem Wasser bezeugt: ‚Und als Jesus getauft war, stieg er sogleich aus dem Wasser; und siehe, die Himmel taten sich ihm auf…‘ (Mt 3,16). ‚Aus dem Wasser heraufsteigen‘ zeigt, dass die Taufe des Herrn durch Untertauchen vollzogen wurde. Das Besprengen oder Gießen erfordert nicht das Hineingehen und Herauskommen aus dem Wasser. Ebenso wie die natürliche Geburt das Verweilen im Leib der Mutter und das Hervorkommen einschließt, so bedeutet ‚aus Wasser und Geist geboren zu werden‘, in das Wasser hineinzugehen und herauszukommen (Untertauchen). Daher heißt die Taufe ‚Wiedergeburt‘ (Joh 3,3)."
      },
      naming: {
        title: "Christlicher Name (Taufname)",
        content: "Ein Name unterscheidet eine Person von einer anderen. So wie ein Kind bei der Geburt von Vater und Mutter einen Namen erhält, empfängt man auch bei der Taufe – als Geburt aus Wasser und Heiligem Geist – einen Namen. Daher kann ein Christ zwei Namen haben: den bürgerlichen Namen, den die Eltern geben, und den bei der Taufe gegebenen Namen, den christlichen Namen. In der Taufe empfangen wir die Sohnschaft und den christlichen Namen. Wer an Christus glaubt, heißt Christ, und der Glaube heißt Christentum. ‚Christ‘ bedeutet, zu Christus zu gehören. Somit ist der Name, der unseren Glauben an Christus und unsere Taufe im Namen der heiligen Dreifaltigkeit offenbart, der christliche Name. Das mit dem Tauftag verbundene Gedenken (Heiligenfest) kann als Namenstag des Schutzpatrons gelten. Im geistlichen Dienst verwenden wir unseren christlichen Namen. Die Gabe eines neuen Namens hat biblische Grundlage: Gott änderte Abram zu Abraham, Jakob zu Israel, Simon zu Petrus und Saulus zu Paulus."
      },
      baptismAge: {
        title: "Festgesetztes Taufalter",
        part1: "In der apostolischen Verkündigung wurden alle, die glaubten – in jedem Altersbereich –, getauft (Apg 16,15; 1 Kor 1,15). Später, als Eltern sich verpflichteten, ihre Kinder im Glauben zu unterweisen, wurde es Brauch, Jungen am vierzigsten Tag und Mädchen am achtzigsten Tag zu taufen. Grundlage ist das Alte Testament: Wenn Kinder in Israel geboren wurden, brachten die Eltern ein Opfer in den Tempel und trugen sie in das Register der israelitischen Bürgerschaft ein – Jungen am vierzigsten, Mädchen am achtzigsten Tag –, damit sie Erben des verheißenen Landes Kanaan würden (Lev 12,1–10).",
        part2: "Wie Adam am 40. Tag nach seiner Erschaffung und Eva am 80. Tag in ihr Erbe, das Paradies, eingingen, so werden auch Säuglinge am 40. bzw. 80. Tag getauft und treten in die Kirche ein, das Abbild des himmlischen Jerusalem.",
        part3: "In der orthodoxen Kirche übernehmen die Eltern sowie der christliche Pate/die Patin (Godpaten) die Verantwortung, den Glauben den am 40. und 80. Tag Getauften zu lehren. Zudem erben sie – kraft Gelübdes – beim Aufstehen mit Christus (in der Taufe) das Himmelreich, das Erbe ihrer Eltern. Wer nach dem 40. und 80. Tag kommt, kann in jedem Alter getauft werden, nachdem er den Glauben gelernt und angenommen hat. Solange man lebt, steht nichts der Taufe entgegen, wenn man noch nicht getauft ist."
      },
      godparents: {
        title: "Taufpate und Taufpatin",
        content: "Für Säuglinge, die am 40. und 80. Tag getauft werden, wurden Taufpate und Taufpatin eingesetzt, die die volle Verantwortung für ihren Glauben übernehmen. Dies wurde von unserem ersten Bischof im 4. Jh., Abba Salama Kesate Birhan, eingeführt. Ziel ist die Festigung der geistlichen Verwandtschaft (Paten-Kind-Beziehung). In dieser geistlichen Verwandtschaft verbundene Personen dürfen nicht heiraten. Wer durch leibliche Verwandtschaft verbunden ist, darf nach dem siebten Verwandtschaftsgrad heiraten; bei der geistlichen Verwandtschaft (Patenverwandtschaft) gibt es keine zahlenmäßige Grenze – eine Heirat ist vollständig untersagt. Das zeigt die höhere Ehre der geistlichen gegenüber der leiblichen Verwandtschaft."
      },
      godparentsRestrictions: "Es gibt Einschränkungen für das Patenamt: Personen mit Blutsverwandtschaft oder ehelicher Verwandtschaft; Personen, die nicht alt genug sind, um zu lehren oder zu unterweisen; Personen ohne ausreichende Fähigkeit in Glaubensunterweisung; oder Personen, deren Glaube nicht mit dem des Täuflings übereinstimmt, dürfen nicht dienen. Bezüglich des Geschlechts gilt: Männer begleiten Jungen, Frauen begleiten Mädchen; ein Mann begleitet kein Mädchen, eine Frau keinen Jungen. Paten unterscheiden nicht zwischen den von ihnen in der Taufe begleiteten Kindern und den leiblichen Kindern; wenn die getauften Kinder schulpflichtig werden, sind die Paten verpflichtet, die Grundlagen des Glaubens zu lehren und ihre Gelübde praktisch zu erfüllen.",
      maeteb: {
        title: "Ma'eteb (Schnur) Tragen",
        part1: "Das Wort ‚Ma'eteb‘ stammt vom ge'ezischen Verb ‚Ataba‘ und bedeutet ‚kennzeichnen/andeuten‘. Somit bedeutet ‚Ma'eteb‘ ‚Zeichen‘. Es ist ein Zeichen (Identität) oder Siegel, das Christen, die im Glauben getauft sind, gegeben wird. In der Heiligen Schrift finden sich verschiedene Hinweise auf ‚Ma'eteb‘. Die Väter des Alten Bundes hatten Zeichen als Zeugnis ihres Glaubens; zum Beispiel erhielt unser Vater Abraham, der Vater vieler, die Beschneidung als Zeichen (Röm 4,13; Gen 17,9–14). ‚Ma'eteb‘ erinnert uns auch daran, dass Christus mit Stricken gebunden und geführt wurde (vgl. Joh 18,12–24; 1 Petr 2,21).",
        part2: "Dass ‚Ma'eteb‘ drei Farben hat, bedeutet die Dreifaltigkeit; und dass die drei Stränge zu einem verflochten sind, bedeutet die Einheit. Durch das Tragen des christlichen ‚Ma'eteb‘ bezeugt man furchtlos sein Christsein und überwindet die Dämonen. Da es mit Gebet gesegnet ist, empfängt man dadurch den Segen der Kirche. Derjenige, der das Tragen des ‚Ma'eteb‘ eingeführt hat, war der heilige Jakobus von El-Bereda’e, von dem geschrieben steht, dass er Christen das ‚Ma'eteb‘ tragen ließ, um sie von den Häretikern zu unterscheiden."
      },
      visibleGrace: {
        title: "Sichtbarer Dienst; unsichtbare Gnade",
        content: "Im Taufmysterium ist der sichtbare Dienst das, was wir sehen: der Täufling steigt in das Wasser hinab und wieder herauf, die Gebetsliturgie wird vollzogen, das weiße Gewand wird angelegt, das ‚Ma'eteb‘ wird gebunden usw. Die unsichtbare Gnade, die in der Taufe geschenkt wird, ist jedoch, dass das Wasser zur Quelle der Wiedergeburt wird; der Täufling die Gotteskindschaft empfängt; und die Gnade des Heiligen Geistes, Reinheit und Heiligkeit verliehen wird. So wird im Mysterium der Taufe unsichtbare Gnade durch sichtbaren Dienst geschenkt."
      },
      formLink: {
        label: "Taufformular-Portal:",
        linkText: "Zum Taufformular"
      },
      serviceDetails: {
        when: {
          title: "Wann",
          description: "Jeden Sonntag vor der Göttlichen Liturgie"
        },
        duration: {
          title: "Dauer",
          description: "Ungefähr eine Stunde"
        },
        participants: {
          title: "Teilnehmer",
          description: "Eltern, Paten und das Kind"
        }
      }
    },
    sirateKidase: {
      title: "Göttliche Liturgie (Sirate Kidase)",
      heroDescription: "Der wichtigste Gottesdienst der Äthiopisch-Orthodoxen Tewahedo-Kirche",
      definition: {
        title: "Was ist Sirate Kidase?",
        content: "‚Kidase' bedeutet heiligen, segnen, danken, ehren. Im Kern ist es die Ordnung der Danksagung, der Ritus des Opfergebets (Oblation). Daher ist Sirate Kidase die Ordnung des eucharistischen Gebets."
      },
      schedule: {
        title: "Gottesdienstplan",
        days: { sunday: "Sonntag", wednesday: "Mittwoch", saturday: "Samstag" }
      },
      division: {
        title: "Einteilung der Göttlichen Liturgie",
        intro: "Im Allgemeinen ist die Ordnung der Göttlichen Liturgie (der Ritus des eucharistischen Opfers) in drei Teile gegliedert:",
        part1Title: "Vorbereitung",
        part1Content: "Der erste Teil ist die Vorbereitung der Liturgie, auch 'Gebe’ate Mentola’et' (Ordnung der Vorbereitung) genannt. Er reicht von 'O mein Bruder, befestige dein Herz' bis 'Warum ist dieser Tag furchtbar?'.",
        part2Title: "Evangelium und Danksagung",
        part2Content: "Der zweite Teil ist Evangeliumsunterweisung, Mahnung und Danksagung; gewöhnlich Sirate Kidase genannt. In diesem Abschnitt der Liturgie erfolgen Lesungen aus dem heiligen Evangelium, aus den Prophezeiungen der heiligen Propheten, aus den Briefen der Apostel sowie aus dem ruhmreichen heiligen Evangelium des Herrn; und es wird ausgelegt.",
        part3Title: "Frucht der Liturgie",
        part3Content: "Der dritte Teil ist der Abschnitt, in dem das Brot in den göttlichen Leib und der Wein in das göttliche Blut verwandelt wird; es ist die Zeit des Gebets und der Danksagung. Besonders in dieser Gebetszeit, wenn die besondere Danksagung 'Gib uns durch Deinen Heiligen Geist' dargebracht wird, kommt der Heilige Geist herab und die Darbringungen werden verwandelt; das Brot wird in den göttlichen Leib, der Wein in das göttliche Blut verwandelt. Insgesamt wird dieser Zeitraum der eucharistischen Liturgie 'Frucht der Liturgie' genannt."
      },
      list: {
        intro: "Gemäß dem Ritus unserer Kirche gibt es vierzehn Anaphoren, in denen der Gebetsabschnitt gefeiert wird:",
        items: [
          "Anaphora der Apostel",
          "Anaphora des Herrn",
          "Anaphora der heiligen Maria",
          "Anaphora des Johannes, des Donnersohnes",
          "Anaphora der Dreihundert",
          "Anaphora des Athanasius",
          "Anaphora des Basilius",
          "Anaphora des Gregor",
          "Anaphora des Epiphanius",
          "Anaphora des Johannes Chrysostomus",
          "Anaphora des Kyrill",
          "Anaphora des Jakob von Sarug",
          "Anaphora des Dioskorus",
          "Anaphora des Gregor II"
        ]
      },
      history: {
        title: "Wer hat Sirate Kidase eingeführt?",
        content: "Die Göttliche Liturgie (die Ordnung des eucharistischen Opfers) wurde von unserem Hohenpriester, Jesus Christus, eingeführt. Am Gründonnerstagabend saß unser Erlöser Jesus Christus mit seinen Jüngern am Passahmahl gemäß dem alttestamentlichen Ritus; nachdem sie das Passah gegessen hatten, nahm er das heilige Brot und sprach: ‚Das ist mein Leib, der für euch und für viele zur Vergebung der Sünden gegeben wird‘; ebenso nahm er den Kelch, dankte und ehrte ihn mit den Worten: ‚Das ist mein Blut des neuen Bundes, das für euch und für die ganze Welt vergossen wird.‘ Indem er sagte: ‚Tut dies,‘ führte er die Ordnung der Göttlichen Liturgie ein. Er lehrte sie den Ritus sowohl durch Handlung als auch durch Unterweisung.",
        extra1: "Diese Ordnung der Liturgie wurde zum ersten Mal im Haus des Lazarus, eines Armen, gefeiert, wo sich der erste Obersaal des Evangeliumszeitalters befand.",
        extra2: "Die Abfolge der Göttlichen Liturgie, die wir heute feiern, wurde von dem heiligen Basilius von Cäsarea zusammengestellt."
      },
      firstCelebrants: {
        title: "Die ersten Zelebranten und Diener",
        content: "Die ersten Zelebranten und Diener dieses eucharistischen Gebets waren die heiligen Apostel. Als die Stunde des Herrn für das eucharistische Gebet kam, saß er mit den zwölf Aposteln am Tisch, um das eucharistische Gebet zu feiern.",
        extra1: "Nachdem die Jünger die Göttliche Liturgie gefeiert und die heilige Opfergabe empfangen hatten, dankten sie: ‘Ehre und Danksagung sei Dir, denn Du hast uns Deines heiligen Leibes und Deines kostbaren Blutes würdig gemacht.’ Nachdem sie gedankt und gesungen hatten, gingen sie zum Ölberg hinaus (Mt 26,30).",
        extra2: "Auch in unserer heiligen Kirche heute, wenn wir uns zur Göttlichen Liturgie versammeln, tun wir ebenso und danken dafür, durch seine Güte gewürdigt worden zu sein, den heiligen Leib zu essen und das kostbare Blut zu trinken; wir ehren und verherrlichen ihn.",
        extra3: "Daher singen wir, wenn diejenigen, die den Leib lieben und vorbereitet sind, zur bestimmten Zeit die heilige Opfergabe empfangen: ‘Denn Du bist mächtig; nehmt ihn gleichermaßen, und Dir sei Lobpreis von Ewigkeit zu Ewigkeit,’ denn in Deiner Güte hast Du uns Deinen heiligen Leib und Dein kostbares Blut gegeben, damit wir das ewige Leben empfangen."
      },
      mainPurpose: {
        title: "Der Hauptzweck des Gottesdienstes",
        content: "Der Hauptzweck ist, das ewige Opfer des Neuen Testaments, das eucharistische Opfer des heiligen Leibes und kostbaren Blutes, das von unserer Herrin genommen wurde, für diejenigen, die daran glauben, zu essen und zu trinken und ewiges Leben zu empfangen, und diesen Ritus für die Apostel und ihre Nachfolger zu lehren und zu vollziehen.",
        extra1: "Wie Er sprach: ‘Wer von diesem Brot isst, wird leben in Ewigkeit; und wer mein Fleisch isst und mein Blut trinkt, hat das ewige Leben’ (Joh 6,51–59).",
        extra2: "Wenn wir also zur Kirche gehen, um an der Ordnung des eucharistischen Gebets teilzunehmen, in der das ewige Leben gegeben wird, sollen wir die Ordnung des Gottesdienstes kennen, wissen, wie wir uns im Haus Gottes verhalten sollen (1 Tim 3,15), und ermahnt sein, nicht ohne Ordnung umherzuwandeln (2 Thess 5,14)."
      },
      preparation: {
        title: "Erforderliche Vorbereitung",
        content: "Wie der heilige Apostel Paulus uns riet: 'Laßt alles ordentlich und in Ordnung geschehen' (1 Kor 14,40), ist es angemessen, Ordnung zu lernen und sich von ihr leiten zu lassen. Daher müssen wir, wenn wir zur Heiligen Kirche kommen, besonders an Sonntagen, großen Festen und heiligen Festtagen, um die Göttliche Liturgie zu feiern, die Kommunion zu empfangen und Segen vom eucharistischen Gebet zu empfangen, folgendes tun:",
        sections: [
          {
            title: "A. Vorbereitung des Gewissens",
            paragraphs: [
              "Wenn wir vor Gottes Angesicht treten, müssen wir ein gutes Gewissen haben (Apg 23,1; Röm 13,5). Unser Gott spricht: 'Mein Sohn, gib mir dein Herz' (Spr 23,26).",
              "Daher hilft die Gewissensvorbereitung am Samstagabend (Herzensvorbereitung), bevor wir zur Kirche kommen, die Göttliche Liturgie aufmerksam zu verfolgen: die Gedanken, die durch die sechs Arbeitstage zerstreut sind, zu sammeln und zu besänftigen und zu überlegen: 'Wie soll ich den Tempel betreten?' Wir sollen das Heiligtum mit Sorgfalt betreten. Wie der Weise Salomo mahnte: 'Hüte deinen Fuß, wenn du zum Hause Gottes gehst' (Koh 5,1).",
              "Um unsere Gedanken zu sammeln und uns zu guten Werken zu bereiten, wie der Apostel riet: 'Alle von Gott eingegebene Schrift ist nützlich zur Lehre, zur Überführung, zur Zurechtweisung, zur Erziehung in der Gerechtigkeit, damit der Mensch Gottes vollkommen sei, zu jedem guten Werk ausgerüstet' (2 Tim 3,12–16)."
            ],
            list: ["Die Heilige Schrift lesen (Röm 15,4–5)"]
          },
          {
            title: "B. Körperliche Reinheit wahren",
            paragraphs: [
              "Damit unser natürlicher Leib gepflegt sei, bereiten wir uns am Vorabend des Sonntags durch Waschen vor; über unsere persönliche Reinheit hinaus erlangen wir durch ehrfürchtiges Nahen zu Gott, der reiner Natur ist, Verdienst.",
              "Mose befahl dem erwählten Haus Israel, sich auf die Begegnung mit seinem Schöpfer vorzubereiten: 'Heiligt euch und wascht eure Kleider' (Ex 19,15)."
            ]
          },
          {
            title: "C. Geistliche Kleidung und Anstand",
            paragraphs: [
              "Zusammen mit der körperlichen Reinheit sollen wir auch die Kleiderordnung beachten. Als dem heiligen Jakob befohlen wurde, in Bethel, dem Bild der heiligen Kirche, Opfer darzubringen, sagte er zu seinem Hause: 'Reinigt euch und wechselt eure Kleider' (Gen 35,2).",
              "Wie es heißt: 'Frage deinen Vater, und er wird es dir kundtun' (Dtn 32,7), erfragte Mose von den Vätern die Grundlagen geistlicher Disziplin, einschließlich der Kleidung der Ältesten. Indem wir sie zum Vorbild nehmen, ist es vorzuziehen, ein besonderes Kirchengewand zu haben; wenn nicht, dann sollen wir das, was wir haben, ordentlich und sauber tragen.",
              "Zudem ist es besonders am Sonntag – außer in Notfällen – nicht empfehlenswert, nur mit Jacke oder Hemd in die Kirche zu gehen. Wenn wir zu einer weltlichen Hochzeit eingeladen sind, kleiden wir uns angemessen; selbst in einfacher Kleidung würde man nicht abgewiesen, doch entehren wir nicht diejenigen, die uns in Achtung eingeladen haben (vgl. Mt 22,12).",
              "Ebenso, da die Heilige Kirche das Brauthaus des himmlischen Königs Christus ist, ein Ort geistlicher Freude und der Reinheit ohne Makel, sollen Väter und Brüder sittsam und bescheiden gekleidet sein, und Mütter und Schwestern ebenso ihre traditionelle Kleidung tragen; wenn sie vor ihrem Schöpfer wie die himmlischen Engel zum Lobpreis stehen, ist das zur Ehre Gottes und zur Gunst für die Zelebranten."
            ]
          },
          {
            title: "D. Monatliche Periode (Frauen)",
            paragraphs: [
              "Wenn Mütter und Schwestern ihre monatliche Periode haben, ist es nicht angebracht, in die Heilige Kirche einzutreten, um sich für das Opfer vorzubereiten und die Göttliche Liturgie bzw. den Gottesdienst zu vollziehen (Fetha Negest Kap. 14:5631) – um der Reinheit der Kirche willen.",
              "Da die Kirche ein reiner Ort der Anbetung ist, glauben wir, daß wir vollkommenen Segen empfangen, wenn wir von der Schwelle an den Boden betreten und dabei unsere Liebe zu unserem Schöpfer ausdrücken. Weil dieser Zyklus bei manchen stärker als erwartet sein kann, dient diese Regel dem Respekt gegenüber dem geistlichen Empfinden anderer und der Vermeidung von Anstoß; es ist nicht so, daß – wie im Alten Testament – die Monatsblutung als Unreinheit betrachtet würde.",
              "Anders zu denken ist Sünde und Täuschung. Selbst wenn jemand so dächte: Der heilige Ephraim sagt: 'Der Teufel hat Eva, die er verführt hatte, freigelassen' – wenn Eva von leiblicher und geistlicher Verurteilung befreit wurde, erlangt unsere Herrin in Heiligkeit, durch ihre Jungfräulichkeit und Heiligkeit, Gnade und Ehre für uns; verachte sie also nicht – damit wird die Tür zu denen geschlossen, die sagen, Eva sei als Ursache der Sünde nicht erlöst worden."
            ]
          }
        ]
      },
      rules: {
        title: "Dinge, auf die man während der Göttlichen Liturgie achten sollte",
        sections: [
          {
            title: "A. Zum Ein- und Ausgehen",
            items: [
              "Nachdem die Göttliche Liturgie begonnen hat, ist es nicht erlaubt, die Kirche zu betreten oder sie zu verlassen. Wer jedoch bis zum Ende des Eucharistiegebets nicht bleiben kann, soll sich vorher und unauffällig entfernen, ohne die Zelebration zu stören. (Fetha Negest Kap. 12:478)",
              "Nachdem die Göttliche Liturgie begonnen hat, soll man nicht hinausgehen, es sei denn, der Diakon entlässt mit den Worten: ‘Geht in Frieden; ohne Dornen, ohne Anstoß; geht in Frieden in eure Häuser.’ (Fetha Negest Kap. 12: N. 92)"
            ]
          },
          {
            title: "B. Zum Spucken und Räuspern",
            items: [
              "Während der Göttlichen Liturgie ist Spucken und Räuspern unangebracht. (Fetha Negest Kap. 12:476)"
            ]
          },
          {
            title: "C. Über das Privatgebet",
            items: [
              "Nachdem in der Kirche das Eucharistiegebet begonnen hat, ist es unangebracht, persönliche Gebete entweder durch Aufschlagen eines Buches oder durch lautes Rezitieren zu verrichten. Das hieße denken: ‘Mein Gebet ist besser als das Gebet, das gerade gebetet wird, und besser als das dargebrachte Opfer.’ Ein solcher gleicht dem, der bei grellem Sonnenlicht eine Kerze anzündet. Nach der von den Vätern überlieferten Tradition jedoch: Wenn es ein zuvor begonnenes, aber noch nicht vollendetes Gebet gab, kann man nach der Entlassung, während die Zelebranten darbringen, in leiser Stimme beten, ohne gehört zu werden. Dies ist eine Ökonomie (eine milde Zulassung), d.h. eine Nachsicht wegen Schwachheit, die Meinung der Lehrer."
            ]
          },
          {
            title: "D. Leeres Geschwätz ist unzulässig",
            items: [
              "Böse Rede ist das Kennzeichen böser Menschen. Was ein Böser in seinem Herzen denkt, das bringt er hervor und spricht – so der Herr (Mt 12,35). Um diese schlechte Gewohnheit zu heilen, ist es angemessen zu flehen wie der ehrwürdige David und der Psalmist: ‘Herr, stelle eine Wache an meinen Mund’ (Ps 140,3).",
              "Besonders während der Ordnung der Göttlichen Liturgie sind leeres Geschwätz und Lachen verboten. Wenn ein Priester lacht, wird er mit einer vollen Woche (sieben Tagen) Buße – Fasten, Gebet, Niederwerfungen – bestraft. Handelt es sich um einen Gläubigen, so wird er für diesen Tag sofort von der Liturgie getrennt und empfängt nicht Leib und Blut. (Fetha Negest Kap. 12: Dsq. 12; Nicaea 61; Basilius 72)",
              "Wenn wir während der Göttlichen Liturgie vor dem Kreuz stehen und Nichtiges reden, könnte es scheinen, als habe er am Freitag die Gelegenheit gehabt, beim Kreuz des Herrn zu stehen; doch während er seine Sünden bekannte und um Erbarmen bat, verspotteten der zur Linken Gekreuzigte, dem Verschonung gewährt worden war, und die Juden. Wir müssen achtgeben, daß wir nicht dem Haus Juda gleichen, das spottete (Mt 26,39–49).",
              "‚Aus deinen Worten wirst du gerechtfertigt werden, und aus deinen Worten wirst du verurteilt werden‘ (Mt 12,37)."
            ]
          },
          {
            title: "E. Mit Groll zu opfern ist unzulässig",
            items: [
              "‚Mit Groll Gebet gibt es nicht; mit Diebstahl Gebet gibt es nicht‘ – so sprechen die Väter sprichwörtlich. Barmherzigkeit und Vergebung zu erbitten, ohne zuvor Barmherzigkeit und Vergebung zum Schatz zu machen, ist Torheit. Der Herr – ihm sei Ehre und Lob – ermahnt: ‚Wenn du deine Gabe zum Altar bringst und dich dort erinnerst, daß dein Bruder etwas gegen dich hat, so laß deine Gabe dort vor dem Altar und geh zuerst hin und versöhne dich mit deinem Bruder; und dann komm und opfere deine Gabe‘ (Mt 5,24).",
              "Das Gebet des Grollhegenden ist wie eine Frucht, die unter die Dornen gefallen ist: unten trägt sie keine Frucht und oben auch nicht. Würde sie oben Frucht tragen, ohne unten Wurzel zu schlagen, rauben die Vögel die Frucht, da sie sich an den Dornen festhält. Ebenso wird, wenn der Grollhegende betet, ohne den Groll abzulegen, der Teufel, der sich an seinem Groll sattfrißt, die Frucht des Lobpreises abpflücken. (Bau der Fundamente)"
            ]
          }
        ]
      },
      participation: {
        title: "Wie man teilnimmt",
        items: [
          "Vor Beginn des Gottesdienstes ankommen",
          "Angemessen und ordentlich gekleidet sein",
          "Dem Gottesdienst mit Gebet und Ehrfurcht folgen",
          "Das angemessene Fasten einhalten, wenn man die Kommunion empfängt"
        ]
      },
      additionalInfo: {
        title: "Wichtige Hinweise",
        items: [
          "Die Kirche öffnet 30 Minuten vor dem Gottesdienst",
          "Bitte halten Sie während des Gottesdienstes Ruhe",
          "Kinder sind willkommen, brauchen aber Aufsicht",
          "Fotografieren ist während des Gottesdienstes nicht erlaubt"
        ]
      }
    },
    sundaySchool: {
      title: "Sonntagsschule",
      subtitle: "Abteilung Sonntagsschule",
      comingSoon: "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei.",
      children: { title: "Kinder & Jugend", subtitle: "Kinder- und Jugendbereich", comingSoon: "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei." },
      mezmur: { title: "Mezmur", comingSoon: "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei." },
      timihirt: { title: "Unterricht", comingSoon: "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei." },
      otherActivities: { title: "Weitere Aktivitäten", comingSoon: "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei." }
    },
    tseloteFithat: {
      title: "Tselote Fithat (Lossprechungsgebet)",
      subtitle: "Was ist Tselote Fithat? Wozu dient es?",
      source: "Quelle: https://eotcmk.org/a/23-2007/ 23. Juni 2007 (äthiopischer Kalender)",
      conclusionTitle: "Schlussfolgerung",
      definition: "Fithat ist ein Gebet, das für die Verstorbenen an Gott dargebracht wird, damit sie von den in ihrem Leibesleben begangenen Vergehen gereinigt und aus der Knechtschaft der Sünde gelöst werden. Die Kirche gebietet, für die Verstorbenen Lossprechungsgebete zu verrichten.",
      purpose: "Tselote Fithat erwirkt Sündenvergebung, Nachsicht und Seelenruhe für die, die gesündigt haben; den Gerechten bringt es Ehre, Segen und Ruhe.",
      connection: "Die Lebenden und die Verstorbenen sind durch das Gebet verbunden. Die Lebenden beten für die Verstorbenen, und die Verstorbenen bitten für die Lebenden (Henoch 12:34). Wie die Gebete und Opfer der Lebenden für die Verstorbenen sichtbar sind, so bitten die Verstorbenen – als Seelen – ihren Schöpfer für die, die in dieser Welt verbleiben: um Leben und Heil, Sündenvergebung, die Hoffnung auf das Himmelreich und Standhaftigkeit im Glauben, damit sie nicht ohne Buße sterben oder in der Verwesung der Sünde verharren. Diese Ordnung wird bis zum Tag der Wiederkunft fortdauern.",
      biblical: [
        "Die heiligen Apostel haben in den Apostolischen Kanones geboten, für die Verstorbenen Lossprechungsgebete zu verrichten, Opfer für sie darzubringen sowie in der Kirche und an ihren Grabstätten zu beten. ‚Versammelt euch ohne Zögern in der Kirche für eure in Christus entschlafenen Brüder und Märtyrer. Bringt in der Kirche Opfer für sie dar, und wenn ihr sie zur Kirche und zum Grab führt, rezitiert die Psalmen Davids.‘ (Didascalia, Kap. 33, S. 481)",
        "Auch der Prophet David sprach: ‚Kostbar ist in den Augen des Herrn der Tod seiner Heiligen. Kehre zurück, meine Seele, zu deiner Ruhe, denn der Herr hat dir wohlgetan; denn du hast meine Seele vom Tode errettet.‘ So spricht er im Psalm davon, daß die Verstorbenen mit Gebet, Dank und Opfer zu Gott gesandt werden sollen. (Ps 115:114–7)",
        "Das kirchliche Gesetz- und Ordnungsbuch Fetha Negest bestätigt, was in der Didascalia (Kapitel 22) erwähnt ist. Das Bestattungsbuch lehrt ferner, daß Priester für die Verstorbenen beten und ihrer im Opfer und in der Kommunion gedenken sollen. Wenn Priester Lossprechungsgebete verrichten und Opfer und Kommunion für sie darbringen, steigen Engel herab, um ihre Seelen zu empfangen. Sind sie Sünder, bitten sie um Vergebung ihrer Sünden; sind sie rein, so freuen sie sich. ‚Ehre sei Gott in der Höhe und Friede auf Erden.‘ So preisen sie Gott. Es ist geschrieben, daß dieser Lobpreis und diese Freude der Engel dem Heil der Menschheit gelten."
      ],
      angels: "Im Heiligen Evangelium ist geschrieben, daß die Seelen der Gerechten von heiligen Engeln empfangen werden: ‚Der Bettler starb, und die Engel trugen ihn in Abrahams Schoß.‘ (Lk 16,22)",
      time: "Tselote Fithat ist ein Trauergebet. Der heilige Jakobus sagt: ‚Gemäß dem, was in euch ist, entlassen wir die, die im Leibe gestorben und aus der Herde geschieden sind, mit Gebet und Gesang.‘ (Jak 5,13) Tselote Fithat wird nicht für Abgefallene und Häretiker verrichtet, sondern für Gläubige.",
      exceptions: [
        "‚Wenn jemand seinen Bruder eine Sünde tun sieht, die nicht zum Tode ist, so bitte er, und Gott wird ihm Leben geben … Es gibt Sünde zum Tode; nicht über diese sage ich, daß jemand bitten soll.‘ (1 Joh 5,16). So wird z. B. Tselote Fithat nicht für Selbstmörder verrichtet, da sie den Tempel ihres Leibes mit eigener Hand zerstört haben. (1 Kor 3,16)",
        "Ebenso wird Tselote Fithat nicht für Häretiker und Heiden verrichtet; denn ‚welche Gemeinschaft hat Licht mit Finsternis?‘ (2 Kor 6,14)"
      ],
      church: "Es gibt keine Zeit, in der die Kirche nicht für den Menschen betet. … (wie in EN, sinngemäß zusammengefaßt)",
      faith: "Die Kirche verrichtet Tselote Fithat im festen Glauben an seine Wirksamkeit … (wie in EN, sinngemäß zusammengefaßt)",
      conclusion: [
        "(1 Joh 5,3 … sinngemäß wie EN)",
        "(Mt 17,3; Gen 18,13; Lk 1,37 … sinngemäß wie EN)",
        "(1 Joh 5,16 … sinngemäß wie EN)",
        "(Schlußbitte, sinngemäß wie EN)",
        "Quelle: ‚Der Glaube, der uns trennt, macht unser Grab nicht eins‘, S. 20"
      ],
      prayerTypes: [
        { name: "Tselote Fithat für die Verstorbenen", time: "Bei der Bestattungszeremonie", description: "Gebet für die aus dieser Welt durch den Tod Geschiedenen" },
        { name: "Trauergebet", time: "Am Todestag", description: "Besonderes Gebet am Todestag" },
        { name: "Gedächtnis", time: "Zu verschiedenen Zeiten", description: "Gedenkgebet für die Verstorbenen zu verschiedenen Zeiten" }
      ]
    }
  }
}

// Map of all translations
export const translations: Record<Locale, Translations> = {
  en: enTranslations,
  am: amTranslations,
  de: deTranslations,
}

// Helper function to get translations
export function getTranslation(locale: Locale): Translations {
  return translations[locale] || enTranslations
}
