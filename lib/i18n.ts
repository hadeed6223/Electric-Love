export const defaultLocale = 'en' as const;
export const locales = ['en', 'es'] as const;

export type Locale = typeof locales[number];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it Works',
      drivers: 'Drivers',
      investors: 'Investors',
      contact: 'Contact',
      driveNow: 'Drive Now' 
    },
    hero: {
      headline: 'Drive Electric',
      headlines: 'Earn More',
      subheadline: 'Fast onboarding, easy payouts, and 24/7 support. Join a tech-forward fleet built to help you succeed.',
      driveNow: 'Drive Now',
      howItWorks: 'How it Works',
    },
    valueProps: {
      title: 'Why Choose Electric Love',
      onboard: {
        title: 'Onboard \n Fast',
        description: 'AI-powered onboarding gets you driving in under 24 hours'
      },
      compliance: {
        title: 'Compliance \n Handled',
        description: 'We take care of all regulations and requirements automatically'
      },
      operate: {
        title: 'Operate \n Efficiently',
        description: 'Smart routing and scheduling maximize your earnings'
      }
    },
    howItWorks: {
      title: 'How It Works',
      apply: {
        title: 'Apply',
        description: 'Complete our simple online application'
      },
      verify: {
        title: 'Verify',
        description: 'Upload documents and complete verification'
      },
      activate: {
        title: 'Activate',
        description: 'Get approved and activate your account'
      },
      earn: {
        title: 'Drive & Earn',
        description: 'Start driving and earning immediately'
      }
    },
    impact: {
      title: 'Our Impact',
      greenMiles: 'Green Miles Driven',
      co2Avoided: 'CO₂ Avoided',
      chargingSessions: 'Charging Sessions'
    },
    belief: {
      title: 'Earth is a life-support system.',
      subtitle: 'We believe in sustainable transportation for everyone.',
      driveNow: 'Drive Now',
      investorInfo: 'Investor Info'
    },
    footer: {
      company: 'Electric Love, LLC',
      description: 'Join our sustainable transportation revolution with premium Tesla vehicles and AI-powered operations',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      rights: '2025 GoElectricLove. All rights reserved',
    },
    onboarding: {
      title: 'Join Electric Love',
      step1: 'Personal Information',
      step2: 'Document Upload',
      step3: 'Review & Submit',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      license: 'Driver License Number',
      uploadDL: 'Upload Driver License',
      uploadInsurance: 'Upload Insurance Document',
      frontDL: 'Driver License (Front)',
      backDL: 'Driver License (Back)',
      insurance: 'Insurance Document',
      submit: 'Complete Application',
      next: 'Next',
      back: 'Back',
      confirmation: {
        title: 'Application Submitted!',
        message: 'Thank you for applying. We\'ll review your application and get back to you within 24 hours.',
        cta: 'Return to Home'
      }
    },
    drivers: {
      hero: {
        driverHeadline: 'Start driving',
        driverHeadlines: 'a Tesla',
        driversSubheadline: 'Simple onboarding, built-in compliance, and instant payouts.',
        beginApplication: 'Begin Application',
        seeRequirements: 'See Requirements',
        readyToStartEarning: 'Ready to Drive',
        withGoElectricLove: 'with GoElectricLove?',
        joinThousandsOfDrivers: 'Join thousands of drivers earning more with sustainable transportation'
      },
      features: {
        ai: {
          title: 'AI-Powered \n Onboarding',
          description: 'Smart application process gets you approved faster'
        },
        compliance: {
          title: 'Compliance \n Built-In',
          description: 'All regulations and requirements automatically handled'
        },
        payouts: {
          title: 'Easy \n Payouts',
          description: 'Weekly direct deposits with detailed earnings reports'
        }
      },
      benefits: {
        fastApproval: {
          title: 'Fast \n Approval',
          description: 'Get approved in under 24 hours with our AI-powered system'
        },
        premiumVehicles: {
          title: 'Premium \n Vehicles',
          description: 'Drive the latest Tesla models with full maintenance included'
        },
        higherEarnings: {
          title: 'Higher \n Earnings',
          description: 'Earn up to 30% more with electric vehicle incentives'
        }
      },
      requirements: {
        title1: 'Requirements',
        title2: 'Requirements',
        subheading: 'Make sure you meet these basic requirements before applying',
        req1: 'Valid driver\'s license (2+ years)',
        req2: 'Clean driving record',
        req3: 'Background check clearance',
        req4: 'Vehicle insurance',
        req5: 'Smartphone with data plan',
        req6: 'Age 21 or older'
      }
    },
    investors: {
      title: 'Investor Command Center',
      subtitle: 'Coming soon: portfolio performance, green miles, CO₂ avoided metrics, and comprehensive sustainability reporting.',
      getNotified: 'Get Notified'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Questions? We\'d love to hear from you. Reach out to our team below.',
      email: 'Email:',
      phone: 'Phone:',
      address: 'Address:'
    },
    chatbot: {
      title: 'How can we help?',
      quickReplies: ['How to apply?', 'Requirements?', 'Earning potential?', 'Contact support'],
      placeholder: 'Type your message...',
      send: 'Send'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo Funciona',
      drivers: 'Conductores',
      investors: 'Inversores',
      contact: 'Contacto',
      driveNow: 'Conducir Ahora'
    },
    hero: {
      headline: 'Conduce Eléctrico. Gana Más.',
      headlines: 'Gana Más',
      subheadline: 'Incorporación rápida, pagos sencillos y soporte 24/7. Únete a un equipo de tecnología de vanguardia diseñado para ayudarte a alcanzar el éxito.',
      driveNow: 'Conducir Ahora',
      howItWorks: 'Cómo Funciona',
    },
    valueProps: {
      title: 'Por Qué Elegir Electric Love',
      onboard: {
        title: 'Incorporación \n Rápida',
        description: 'Incorporación con IA te permite conducir en menos de 24 horas'
      },
      compliance: {
        title: 'Cumplimiento \n Gestionado',
        description: 'Nos encargamos automáticamente de todas las regulaciones y requisitos'
      },
      operate: {
        title: 'Opera \n Eficientemente',
        description: 'Enrutamiento inteligente y programación maximizan tus ganancias'
      }
    },
    howItWorks: {
      title: 'Cómo Funciona',
      apply: {
        title: 'Aplicar',
        description: 'Completa nuestra simple aplicación en línea'
      },
      verify: {
        title: 'Verificar',
        description: 'Sube documentos y completa la verificación'
      },
      activate: {
        title: 'Activar',
        description: 'Obtén aprobación y activa tu cuenta'
      },
      earn: {
        title: 'Conduce y Gana',
        description: 'Comienza a conducir y ganar inmediatamente'
      }
    },
    impact: {
      title: 'Nuestro Impacto',
      greenMiles: 'Millas Verdes Conducidas',
      co2Avoided: 'CO₂ Evitado',
      chargingSessions: 'Sesiones de Carga'
    },
    belief: {
      title: 'La Tierra es un sistema de soporte vital.',
      subtitle: 'Creemos en el transporte sostenible para todos.',
      driveNow: 'Conducir Ahora',
      investorInfo: 'Info Inversor'
    },
    footer: {
      company: 'Electric Love, LLC',
      description: 'Únete a nuestra revolución del transporte sostenible con vehículos Tesla premium y operaciones con IA.',
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      rights: '2025 GoElectricLove. Todos los derechos reservados.'
    },
    onboarding: {
      title: 'Únete a Electric Love',
      step1: 'Información Personal',
      step2: 'Subir Documentos',
      step3: 'Revisar y Enviar',
      name: 'Nombre Completo',
      email: 'Dirección de Email',
      phone: 'Número de Teléfono',
      license: 'Número de Licencia de Conducir',
      uploadDL: 'Subir Licencia de Conducir',
      uploadInsurance: 'Subir Documento de Seguro',
      frontDL: 'Licencia de Conducir (Frente)',
      backDL: 'Licencia de Conducir (Atrás)',
      insurance: 'Documento de Seguro',
      submit: 'Completar Aplicación',
      next: 'Siguiente',
      back: 'Atrás',
      confirmation: {
        title: '¡Aplicación Enviada!',
        message: 'Gracias por aplicar. Revisaremos tu aplicación y te contactaremos dentro de 24 horas.',
        cta: 'Volver al Inicio'
      }
    },
    drivers: {
      hero: {
        driverHeadline: 'Comienza a Conducir',
        driverHeadlines: 'un Tesla',
        driversSubheadline: 'Incorporación sencilla, cumplimiento integrado y pagos instantáneos.',
        beginApplication: 'Comenzar Aplicación',
        seeRequirements: 'Ver Requisitos',
        readyToStartEarning: '¿Listo para Conducir?',
        withGoElectricLove: 'con GoElectricLove?',
        joinThousandsOfDrivers: 'Únete a miles de conductores ganando más con transporte sostenible'
      },
      features: {
        ai: {
          title: 'Incorporación \n con IA',
          description: 'Proceso de aplicación inteligente te aprueba más rápido'
        },
        compliance: {
          title: 'Cumplimiento \n Integrado',
          description: 'Todas las regulaciones y requisitos gestionados automáticamente'
        },
        payouts: {
          title: 'Pagos \n Fáciles',
          description: 'Depósitos directos semanales con reportes detallados de ganancias'
        }
      },
      benefits: {
        fastApproval: {
          title: 'Rápido \n Aprobación',
          description: 'Obtén aprobación en menos de 24 horas con nuestro sistema con IA'
        },
        premiumVehicles: {
          title: 'Vehículos \n Premium',
          description: 'Conduce los modelos Tesla más recientes con mantenimiento completo incluido'
        },
        higherEarnings: {
          title: 'Ganancias \n Más Altas',
          description: 'Gana hasta un 30% más con incentivos de vehículos eléctricos'
        }
      },
      requirements: {
        title1: 'Requisitos',
        title2: 'Requisitos',
        subheading: 'Asegúrate de cumplir con estos requisitos básicos antes de aplicar',
        req1: 'Licencia de conducir válida (2+ años)',
        req2: 'Registro de conducción limpio',
        req3: 'Verificación de antecedentes',
        req4: 'Seguro del vehículo',
        req5: 'Plan de datos del smartphone',
        req6: 'Edad 21 o superior'
      }
    },
    investors: {
      title: 'Centro de Comando para Inversores',
      subtitle: 'Próximamente: rendimiento de cartera, millas verdes, métricas de CO₂ evitado, y reportes integrales de sostenibilidad.',
      getNotified: 'Recibir Notificaciones'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Preguntas? Nos encantaría escuchar de ti. Contacta a nuestro equipo a continuación.',
      email: 'Email:',
      phone: 'Teléfono:',
      address: 'Dirección:'
    },
    chatbot: {
      title: '¿Cómo podemos ayudarte?',
      quickReplies: ['¿Cómo aplicar?', '¿Requisitos?', '¿Potencial de ganancias?', 'Contactar soporte'],
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar'
    }
  }
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}