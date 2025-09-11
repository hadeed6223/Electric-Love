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
      headline: 'Drive Electric.',
      headlines: 'Reliable Earnings',
      subheadline: 'Turn every mile with GoElectricLove fast onboarding, flexible driving, and the freedom to grow on your terms.',
      driveNow: 'Drive Now',
      howItWorks: 'How it Works',
      driverHeadline: 'Ready to Drive',
      driverHeadlines: 'with GoElectricLove?',
      driversSubheadline: 'See what you need to get started, meet the requirements, and join our growing driver community.'
    },
    valueProps: {
      title: 'Why Choose Electric Love',
      onboard: {
        title: 'Onboard Fast',
        description: 'AI-powered onboarding gets you driving in under 24 hours'
      },
      compliance: {
        title: 'Compliance Handled',
        description: 'We take care of all regulations and requirements automatically'
      },
      operate: {
        title: 'Operate Efficiently',
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
        headline1: 'Conduce un vehículo eléctrico.',
        headline2: 'Obtén ganancias fiables.',
        subheadline: 'Recorre cada kilómetro con GoElectricAma la incorporación rápida, la conducción flexible y la libertad de crecer en tus propios términos.',
        driversSubheadline: 'Ve lo que necesitas para comenzar, cumple los requisitos y únete a nuestra creciente comunidad de conductores.',
        beginApplication: 'Begin Application',
        seeRequirements: 'See Requirements'
      },
      features: {
        ai: {
          title: 'AI-Powered Onboarding',
          description: 'Smart application process gets you approved faster'
        },
        compliance: {
          title: 'Compliance Built-In',
          description: 'All regulations and requirements automatically handled'
        },
        payouts: {
          title: 'Easy Payouts',
          description: 'Weekly direct deposits with detailed earnings reports'
        }
      }
    },
    investors: {
      title: 'Investor Command Center',
      subtitle: 'Coming soon: portfolio performance, green miles, CO₂ avoided metrics, and comprehensive sustainability reporting.',
      getNotified: 'Get Notified'
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
      headlines: 'Ganancias Confiables',
      subheadline: 'Únete a nuestra flota de conductores Tesla y gana dinero mientras reduces tu huella de carbono. Incorporación rápida, cumplimiento gestionado, operaciones eficientes.',
      driveNow: 'Conducir Ahora',
      howItWorks: 'Cómo Funciona',
      driverHeadline: '¿Listo para Conducir',
      driverHeadlines: 'con GoElectricLove?',
      driversSubheadline: 'Ve lo que necesitas para comenzar, cumple los requisitos y únete a nuestra creciente comunidad de conductores.'
    },
    valueProps: {
      title: 'Por Qué Elegir Electric Love',
      onboard: {
        title: 'Incorporación Rápida',
        description: 'Incorporación con IA te permite conducir en menos de 24 horas'
      },
      compliance: {
        title: 'Cumplimiento Gestionado',
        description: 'Nos encargamos automáticamente de todas las regulaciones y requisitos'
      },
      operate: {
        title: 'Opera Eficientemente',
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
        headline: 'Comienza a Conducir un Tesla',
        subheadline: 'Únete a nuestra flota premium de vehículos eléctricos y comienza a ganar hoy con soporte completo y cumplimiento gestionado.',
        driversSubheadline: 'Ve lo que necesitas para comenzar, cumple los requisitos y únete a nuestra creciente comunidad de conductores.',
        beginApplication: 'Comenzar Aplicación',
        seeRequirements: 'Ver Requisitos'
      },
      features: {
        ai: {
          title: 'Incorporación con IA',
          description: 'Proceso de aplicación inteligente te aprueba más rápido'
        },
        compliance: {
          title: 'Cumplimiento Integrado',
          description: 'Todas las regulaciones y requisitos gestionados automáticamente'
        },
        payouts: {
          title: 'Pagos Fáciles',
          description: 'Depósitos directos semanales con reportes detallados de ganancias'
        }
      }
    },
    investors: {
      title: 'Centro de Comando para Inversores',
      subtitle: 'Próximamente: rendimiento de cartera, millas verdes, métricas de CO₂ evitado, y reportes integrales de sostenibilidad.',
      getNotified: 'Recibir Notificaciones'
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