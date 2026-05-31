const translations = {
  es: {
    meta: {
      title: "José Ramón Mena Pérez | Portfolio de Data Science",
      description:
        "Portfolio profesional de José Ramón Mena Pérez con proyectos en ciencia de datos, inteligencia artificial, modelización matemática y machine learning.",
    },
    ui: {
      nav: {
        projects: "Proyectos",
        education: "Formación",
        courses: "Cursos",
        contact: "Contacto",
      },
      language: {
        label: "Idioma",
        aria: "Seleccionar idioma",
      },
      portrait: {
        placeholder: "Fotografía no disponible",
        alt: "Fotografía profesional de José Ramón Mena Pérez",
      },
      hero: {
        eyebrow: "Portfolio profesional",
      },
      actions: {
        downloadCv: "Descargar CV",
        github: "Ver GitHub",
      },
      sections: {
        profile: {
          kicker: "Perfil profesional",
          title: "Perfil técnico orientado a Data Science e AI",
          skillsTitle: "Competencias",
        },
        projects: {
          kicker: "Proyectos destacados",
          title: "Proyectos académicos",
        },
        experience: {
          kicker: "Experiencia",
          title: "Experiencia profesional",
        },
        education: {
          kicker: "Formación",
          title: "Trayectoria académica",
        },
        courses: {
          kicker: "Cursos complementarios",
          title: "Cursos complementarios",
        },
        contact: {
          kicker: "Contacto",
          title: "Contacto",
        },
      },
      statusNote: "Disponible próximamente",
    },
    profile: {
      name: "José Ramón Mena Pérez",
      role: "Mathematician | Data Science | AI Engineering",
      summary:
        "Estudiante del Máster en Ingeniería de Análisis de Datos, Mejora de Procesos y Toma de Decisiones en la UPV, con base sólida en estadística y modelado matemático. Experiencia investigadora en deep learning aplicado a imagen médica. Perfil orientado a proyectos donde la base matemática y la interpretación estadística sean fundamentales para la resolución de problemas.",
      valueProposition:
        "Combino una formación matemática sólida con grandes habilidades de comunicación. Destaco por mis competencias en estadística, optimización e investigación operativa. Cuento con experiencia práctica en ciencia de datos y machine learning aplicado a problemas reales. He participado en proyectos relacionados con series temporales, análisis multivariante y control estadístico de la calidad. Actualmente trabajo en un proyecto de deep learning en un entorno investigador real, desde el preprocesamiento de imágenes, diseño de splits de entrenamiento y aumentación de datos hasta la selección de funciones de pérdida, estrategias de sampling y evaluación de modelos mediante métricas adecuadas.",
      highlights: [
        "Deep Learning",
        "Machine Learning",
        "Python · R · SQL",
        "Modelización, optimización, estadística e investigación operativa",
      ],
      skills: [
        "Python · R · SQL · C++",
        "Machine learning",
        "Deep learning",
        "PyTorch · TensorFlow · Keras",
        "Pandas · NumPy · Scikit-learn · Polars",
        "Matplotlib · Seaborn",
        "Series temporales",
        "Análisis multivariante",
        "Power BI (DAX, Power Query)",
        "Excel avanzado",
        "Git · GitHub · Docker",
        "LaTeX",
        "OutSystems",
      ],
      projects: [
        {
          kicker: "Series temporales",
          title: "Modelización ARIMA y predicción sobre datos de turismo",
          copy:
            "Proyecto de técnicas de previsión orientado al estudio de la evolución temporal del turismo, con análisis exploratorio, descomposición de series, comparativa de escenarios y construcción de modelos ARIMA en R. El trabajo se centra en la calidad del ajuste, la interpretación del comportamiento temporal y la capacidad predictiva.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Tecnicas-de-Prevision",
        },
        {
          kicker: "Análisis estadístico",
          title: "Análisis multivariante aplicado a datos reales",
          copy:
            "Trabajo desarrollado en el Máster en Análisis de Datos centrado en técnicas de reducción de dimensionalidad, análisis discriminante y exploración multivariante. El proyecto combina tratamiento de datos reales, interpretación estadística y análisis para extraer estructura y patrones relevantes en una base de datos del ámbito de la medicina.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Analisis-Multivariante",
        },
        {
          kicker: "Optimización combinatoria",
          title: "GRASP y Path Relinking para el Maximum Diversity Problem",
          copy:
            "Implementación en Python de metaheurísticas para un problema de optimización combinatoria NP-hard. El proyecto integra fase constructiva, búsqueda local, gestión de soluciones élite y estrategias de intensificación para comparar el comportamiento de GRASP y su extensión con Path Relinking sobre instancias benchmark.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/grasp-path-relinking-mdp",
        },
        {
          kicker: "Modelización matemática",
          title: "TFG en modelos compartimentales aplicados a la dinámica del crimen",
          copy:
            "Trabajo de Fin de Grado centrado en la formulación y análisis de un modelo compartimental inspirado en sistemas epidemiológicos para estudiar la evolución del comportamiento criminal, en concreto en España durante un período concreto de tiempo. Incluye ecuaciones diferenciales ordinarias, estimación de parámetros y ajuste a datos reales.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/tfg-compartmental-models-crime-dynamics",
        },
        {
          title: "Propuesta de trabajo en análisis multivariante",
          copy:
            "Trabajo del Máster (UPV) sobre el dataset Africa Soil Property Prediction Challenge (Kaggle, 2014). A partir de 3 593 variables predictoras -3 578 espectros de infrarrojo medio (MIR) y 15 variables edáficas, topográficas, climáticas y de teledetección- se predicen cinco indicadores de calidad del suelo (Ca, P, pH, SOC, Sand) en zonas rurales de África subsahariana. El proyecto compara PCA, PCR y PLS2 como métodos de variables latentes frente a Ridge, Random Forest y MLP como referencias.",
          status: "En proceso · no disponible",
        },
        {
          title: "Propuesta de trabajo en minería de datos",
          copy:
            "Trabajo del Máster (UPV) sobre una base de datos de anuncios de vehículos con variables técnicas, de uso, estado, localización y precio. El proyecto incluye exploración no supervisada, regresión para predecir precio y clasificación del estado del vehículo y de primer propietario, con imputación múltiple y validación estratificada.",
          status: "En proceso · no disponible",
        },
      ],
      experience: [
        {
          meta: "CVB Lab, UPV · Feb 2026 - Jul 2026",
          title: "Investigador en prácticas - Deep Learning aplicado a imagen médica",
          copy:
            "Entrenamiento y fine-tuning de modelos de deep learning sobre imágenes histopatológicas para detección automática de mitosis en cáncer de mama. Trabajo con clases desbalanceadas mediante estrategias de sampling y aumentación de datos. Diseño de splits reproducibles y evaluación con métricas adaptadas al problema clínico. Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
        },
        {
          meta: "NTT DATA Europe & Latam · Mar 2025 - Jul 2025",
          title: "Becario en desarrollo low-code (OutSystems)",
          copy:
            "Desarrollo y mantenimiento de aplicaciones internas para monitorización de preparación de certificaciones. Consultas SQL para extracción y filtrado de datos. Operaciones CRUD, consumo de APIs REST e integración de servicios. Validaciones de datos y control de acceso mediante roles de usuario.",
        },
        {
          meta: "Caixa Popular · Oct 2024 - Ene 2025",
          title: "Auxiliar de caja y atención al cliente",
          copy:
            "Atención y asesoramiento al cliente en entorno financiero. Gestión de caja, pagos y tareas administrativas generales. Desarrollo de habilidades de comunicación, organización y orientación al servicio.",
        },
      ],
      timeline: [
        {
          meta: "Máster en Ing. de Análisis de Datos, Mejora de Procesos y Toma de Decisiones",
          title: "UPV · 2025 - 2026",
          copy:
            "Formación avanzada en métodos estadísticos, series temporales, minería de datos, IA aplicada, diseño de experimentos, modelado y simulación, optimización e investigación operativa. Orientado a proyectos aplicados con base analítica sólida.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
        },
        {
          meta: "Grado en Matemáticas",
          title: "Universitat de València · 2021 - 2025",
          copy:
            "Formación en matemáticas aplicadas: álgebra lineal, análisis matemático, probabilidad y estadística, ecuaciones diferenciales, métodos numéricos, investigación operativa, topología y programación en Python, R y C++. Incluye proyectos en optimización combinatoria y modelización.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
        },
        {
          meta: "IBM Data Science Professional Certificate",
          title: "IBM - Coursera · 2025",
          copy:
            "Programa profesional completo: metodología de ciencia de datos, Python, SQL, bases de datos, visualización de datos, machine learning con Scikit-learn y proyecto final aplicado.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/ibm-aprendizaje-automatico",
        },
      ],
      courses: [
        {
          meta: "IBM - Coursera",
          title: "Python for Data Science, AI & Development",
          copy:
            "Formación en Python aplicada a ciencia de datos, automatización y desarrollo, con base práctica para entornos analíticos y de programación.",
          href: "https://www.coursera.org/account/accomplishments/verify/WXNDUYU8F2OE",
        },
        {
          meta: "Microsoft - Coursera",
          title: "SQL Foundations",
          copy:
            "Fundamentos de SQL orientados a consulta, extracción y gestión de datos en contextos analíticos.",
          href: "https://www.coursera.org/account/accomplishments/verify/W3QI6HVXJJW6",
        },
        {
          meta: "IBM - Coursera",
          title: "Excel Basics for Data Analysis",
          copy:
            "Manejo de hojas de cálculo para análisis de datos, organización de información y soporte a tareas analíticas.",
          href: "https://www.coursera.org/account/accomplishments/verify/H9W8GIE9BGNP",
        },
        {
          meta: "Microsoft - Coursera",
          title: "ETL with Power BI",
          copy: "Procesos ETL, integración de datos y analítica con Power BI.",
          href: "https://www.coursera.org/account/accomplishments/verify/FG2LYYPVG5G3",
        },
        {
          meta: "Johns Hopkins - Coursera",
          title: "HTML, CSS, and JavaScript for Web Developers",
          copy:
            "Desarrollo web front-end con enfoque en estructura, estilos y comportamiento interactivo en aplicaciones web.",
          href: "https://www.coursera.org/account/accomplishments/verify/B8TDLEW7FNRF",
        },
      ],
      contactLead:
        "Busco una oportunidad donde seguir creciendo en el ámbito de la ciencia de datos, el machine learning y la IA, aportando base matemática sólida, experiencia práctica con modelos reales y capacidad de aprendizaje rápido.",
      contacts: [
        { label: "Email", value: "jrmenaperez25@gmail.com", href: "mailto:jrmenaperez25@gmail.com" },
        { label: "Teléfono", value: "+34 605 647 469", href: "tel:+34605647469" },
        { label: "GitHub", value: "github.com/jrmenaperez25-sketch", href: "https://github.com/jrmenaperez25-sketch" },
        { label: "LinkedIn", value: "linkedin.com/in/jrmenaperez25", href: "https://www.linkedin.com/in/jrmenaperez25/" },
        { label: "Credly", value: "Perfil de credenciales", href: "https://www.credly.com/users/jose-ramon-mena-perez/edit#credly" },
        { label: "CV", value: "Versión PDF", href: "./cv-jose-ramon-mena-perez.pdf" },
      ],
    },
  },
  en: {
    meta: {
      title: "José Ramón Mena Pérez | Data Science Portfolio",
      description:
        "Professional portfolio of José Ramón Mena Pérez featuring data science, artificial intelligence, mathematical modelling and machine learning projects.",
    },
    ui: {
      nav: {
        projects: "Projects",
        education: "Education",
        courses: "Courses",
        contact: "Contact",
      },
      language: {
        label: "Language",
        aria: "Select language",
      },
      portrait: {
        placeholder: "Photo unavailable",
        alt: "Professional photograph of José Ramón Mena Pérez",
      },
      hero: {
        eyebrow: "Professional portfolio",
      },
      actions: {
        downloadCv: "Download CV",
        github: "View GitHub",
      },
      sections: {
        profile: {
          kicker: "Professional profile",
          title: "Technical profile focused on Data Science and AI",
          skillsTitle: "Skills",
        },
        projects: {
          kicker: "Selected projects",
          title: "Academic projects",
        },
        experience: {
          kicker: "Experience",
          title: "Professional experience",
        },
        education: {
          kicker: "Education",
          title: "Academic background",
        },
        courses: {
          kicker: "Additional courses",
          title: "Additional courses",
        },
        contact: {
          kicker: "Contact",
          title: "Contact",
        },
      },
      statusNote: "Coming soon",
    },
    profile: {
      name: "José Ramón Mena Pérez",
      role: "Mathematician | Data Science | AI Engineering",
      summary:
        "Student of the Master's Degree in Data Analysis Engineering, Process Improvement and Decision Making at UPV, with a strong background in statistics and mathematical modelling. Research experience in deep learning applied to medical imaging. I am oriented toward projects where mathematical foundations and statistical interpretation are essential for solving problems.",
      valueProposition:
        "I combine a solid mathematical background with strong communication skills. My strengths include statistics, optimisation and operations research, together with hands-on experience in data science and machine learning applied to real problems. I have worked on projects involving time series, multivariate analysis and statistical quality control. I am currently working on a deep learning project in a real research environment, covering image preprocessing, training split design, data augmentation, loss-function selection, sampling strategies and model evaluation with appropriate metrics.",
      highlights: [
        "Deep Learning",
        "Machine Learning",
        "Python · R · SQL",
        "Modelling, optimisation, statistics and operations research",
      ],
      skills: [
        "Python · R · SQL · C++",
        "Machine learning",
        "Deep learning",
        "PyTorch · TensorFlow · Keras",
        "Pandas · NumPy · Scikit-learn · Polars",
        "Matplotlib · Seaborn",
        "Time series",
        "Multivariate analysis",
        "Power BI (DAX, Power Query)",
        "Advanced Excel",
        "Git · GitHub · Docker",
        "LaTeX",
        "OutSystems",
      ],
      projects: [
        {
          kicker: "Time series",
          title: "ARIMA modelling and forecasting with tourism data",
          copy:
            "Forecasting project focused on the temporal evolution of tourism, including exploratory analysis, time-series decomposition, scenario comparison and ARIMA modelling in R. The work emphasises goodness of fit, interpretation of temporal behaviour and predictive capacity.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Tecnicas-de-Prevision",
        },
        {
          kicker: "Statistical analysis",
          title: "Multivariate analysis applied to real data",
          copy:
            "Master's project focused on dimensionality reduction, discriminant analysis and multivariate exploration. The project combines real-data processing, statistical interpretation and analysis to extract relevant structure and patterns from a medical-domain dataset.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Analisis-Multivariante",
        },
        {
          kicker: "Combinatorial optimisation",
          title: "GRASP and Path Relinking for the Maximum Diversity Problem",
          copy:
            "Python implementation of metaheuristics for an NP-hard combinatorial optimisation problem. The project includes a constructive phase, local search, elite-solution management and intensification strategies to compare GRASP and its Path Relinking extension on benchmark instances.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/grasp-path-relinking-mdp",
        },
        {
          kicker: "Mathematical modelling",
          title: "Bachelor thesis on compartmental models applied to crime dynamics",
          copy:
            "Bachelor thesis focused on the formulation and analysis of a compartmental model inspired by epidemiological systems to study the evolution of criminal behaviour in Spain over a specific period. It includes ordinary differential equations, parameter estimation and fitting to real data.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/tfg-compartmental-models-crime-dynamics",
        },
        {
          title: "Project proposal in multivariate analysis",
          copy:
            "Master's project at UPV using the Africa Soil Property Prediction Challenge dataset (Kaggle, 2014). Based on 3,593 predictive variables -3,578 mid-infrared spectra and 15 soil, topographic, climate and remote-sensing variables- the goal is to predict five soil-quality indicators in rural sub-Saharan Africa. The project compares PCA, PCR and PLS2 with Ridge, Random Forest and MLP baselines.",
          status: "In progress · unavailable",
        },
        {
          title: "Project proposal in data mining",
          copy:
            "Master's project at UPV based on a vehicle-listing dataset with technical, usage, condition, location and price variables. It includes unsupervised exploration, price regression and classification of vehicle condition and first-owner status, with multiple imputation and stratified validation.",
          status: "In progress · unavailable",
        },
      ],
      experience: [
        {
          meta: "CVB Lab, UPV · Feb 2026 - Jul 2026",
          title: "Research intern - Deep Learning applied to medical imaging",
          copy:
            "Training and fine-tuning deep learning models on histopathology images for automatic mitosis detection in breast cancer. Work with imbalanced classes through sampling strategies and data augmentation. Design of reproducible splits and evaluation with metrics adapted to the clinical problem. Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
        },
        {
          meta: "NTT DATA Europe & Latam · Mar 2025 - Jul 2025",
          title: "Low-code development intern (OutSystems)",
          copy:
            "Development and maintenance of internal applications for certification-preparation monitoring. SQL queries for data extraction and filtering. CRUD operations, REST API consumption and service integration. Data validation and role-based access control.",
        },
        {
          meta: "Caixa Popular · Oct 2024 - Jan 2025",
          title: "Cashier and customer service assistant",
          copy:
            "Customer support and advisory work in a financial environment. Cash management, payments and general administrative tasks. Development of communication, organisation and service-orientation skills.",
        },
      ],
      timeline: [
        {
          meta: "MSc in Data Analysis Engineering, Process Improvement and Decision Making",
          title: "UPV · 2025 - 2026",
          copy:
            "Advanced training in statistical methods, time series, data mining, applied AI, design of experiments, modelling and simulation, optimisation and operations research. Oriented toward applied projects with a strong analytical foundation.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
        },
        {
          meta: "BSc in Mathematics",
          title: "Universitat de València · 2021 - 2025",
          copy:
            "Training in applied mathematics: linear algebra, mathematical analysis, probability and statistics, differential equations, numerical methods, operations research, topology and programming in Python, R and C++. Includes projects in combinatorial optimisation and mathematical modelling.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
        },
        {
          meta: "IBM Data Science Professional Certificate",
          title: "IBM - Coursera · 2025",
          copy:
            "Complete professional programme covering data science methodology, Python, SQL, databases, data visualisation, machine learning with Scikit-learn and an applied final project.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/ibm-aprendizaje-automatico",
        },
      ],
      courses: [
        {
          meta: "IBM - Coursera",
          title: "Python for Data Science, AI & Development",
          copy:
            "Training in Python applied to data science, automation and development, with practical foundations for analytical and programming environments.",
          href: "https://www.coursera.org/account/accomplishments/verify/WXNDUYU8F2OE",
        },
        {
          meta: "Microsoft - Coursera",
          title: "SQL Foundations",
          copy:
            "SQL fundamentals for querying, extracting and managing data in analytical contexts.",
          href: "https://www.coursera.org/account/accomplishments/verify/W3QI6HVXJJW6",
        },
        {
          meta: "IBM - Coursera",
          title: "Excel Basics for Data Analysis",
          copy:
            "Spreadsheet skills for data analysis, information organisation and analytical workflows.",
          href: "https://www.coursera.org/account/accomplishments/verify/H9W8GIE9BGNP",
        },
        {
          meta: "Microsoft - Coursera",
          title: "ETL with Power BI",
          copy: "ETL processes, data integration and analytics with Power BI.",
          href: "https://www.coursera.org/account/accomplishments/verify/FG2LYYPVG5G3",
        },
        {
          meta: "Johns Hopkins - Coursera",
          title: "HTML, CSS, and JavaScript for Web Developers",
          copy:
            "Front-end web development focused on structure, styling and interactive behaviour in web applications.",
          href: "https://www.coursera.org/account/accomplishments/verify/B8TDLEW7FNRF",
        },
      ],
      contactLead:
        "I am looking for an opportunity to keep growing in data science, machine learning and AI, contributing a strong mathematical foundation, practical experience with real models and fast learning ability.",
      contacts: [
        { label: "Email", value: "jrmenaperez25@gmail.com", href: "mailto:jrmenaperez25@gmail.com" },
        { label: "Phone", value: "+34 605 647 469", href: "tel:+34605647469" },
        { label: "GitHub", value: "github.com/jrmenaperez25-sketch", href: "https://github.com/jrmenaperez25-sketch" },
        { label: "LinkedIn", value: "linkedin.com/in/jrmenaperez25", href: "https://www.linkedin.com/in/jrmenaperez25/" },
        { label: "Credly", value: "Credential profile", href: "https://www.credly.com/users/jose-ramon-mena-perez/edit#credly" },
        { label: "CV", value: "PDF version", href: "./cv-jose-ramon-mena-perez.pdf" },
      ],
    },
  },
};

const DEFAULT_LANGUAGE = "es";
const LANGUAGE_STORAGE_KEY = "portfolio-language";

const getValueByPath = (source, path) =>
  path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
};

const renderList = (id, items, mapper) => {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(mapper).join("");
};

const applyStaticTranslations = (dictionary) => {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getValueByPath(dictionary.ui, node.dataset.i18n);
    if (value) node.textContent = value;
  });
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];
  const profile = dictionary.profile;

  document.documentElement.lang = language;
  document.title = dictionary.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", dictionary.meta.description);

  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.value = language;
    languageSelect.setAttribute("aria-label", dictionary.ui.language.aria);
  }

  const portraitPhoto = document.getElementById("portrait-photo");
  if (portraitPhoto) portraitPhoto.alt = dictionary.ui.portrait.alt;

  applyStaticTranslations(dictionary);

  setText("hero-name", profile.name);
  setText("hero-role", profile.role);
  setText("hero-summary", profile.summary);
  setText("value-proposition", profile.valueProposition);
  setText("contact-lead", profile.contactLead);

  renderList(
    "highlights",
    profile.highlights,
    (item) => `<span class="highlight-chip">${item}</span>`
  );

  renderList("skills", profile.skills, (item) => `<li>${item}</li>`);

  renderList(
    "projects",
    profile.projects,
    (item) =>
      item.status
        ? `
          <article class="status-card" aria-disabled="true">
            <span class="status-badge">${item.status}</span>
            <h3>${item.title}</h3>
            <p class="project-copy">${item.copy}</p>
            <p class="status-note">${dictionary.ui.statusNote}</p>
          </article>
        `
        : `
          <a class="project-link" href="${item.href}" target="_blank" rel="noreferrer">
            <article class="project-card">
              <span class="card-kicker">${item.kicker}</span>
              <h3>${item.title}</h3>
              <p class="project-copy">${item.copy}</p>
            </article>
          </a>
        `
  );

  renderList(
    "experience",
    profile.experience,
    (item) => `
      <article class="timeline-item">
        <span class="timeline-meta">${item.meta}</span>
        <h3>${item.title}</h3>
        <p class="timeline-copy">${item.copy}</p>
      </article>
    `
  );

  renderList(
    "timeline",
    profile.timeline,
    (item) => `
      <a class="timeline-link" href="${item.href}" target="_blank" rel="noreferrer">
        <article class="timeline-item">
          <span class="timeline-meta">${item.meta}</span>
          <h3>${item.title}</h3>
          <p class="timeline-copy">${item.copy}</p>
        </article>
      </a>
    `
  );

  renderList(
    "courses",
    profile.courses,
    (item) => `
      <a class="course-link" href="${item.href}" target="_blank" rel="noreferrer">
        <article class="course-card">
          <span class="course-meta">${item.meta}</span>
          <h3>${item.title}</h3>
          <p class="course-copy">${item.copy}</p>
        </article>
      </a>
    `
  );

  renderList(
    "contact-links",
    profile.contacts,
    (item) => `
      <a class="contact-link" href="${item.href}" target="_blank" rel="noreferrer">
        <span class="contact-link-label">${item.label}</span>
        <span class="contact-link-value">${item.value}</span>
      </a>
    `
  );

  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

const portraitPhoto = document.getElementById("portrait-photo");
const portraitPlaceholder = document.getElementById("portrait-placeholder");

if (portraitPhoto && portraitPlaceholder) {
  const showPortraitPhoto = () => {
    portraitPhoto.classList.remove("is-hidden");
    portraitPlaceholder.classList.add("is-hidden");
  };

  const showPortraitPlaceholder = () => {
    portraitPhoto.classList.add("is-hidden");
    portraitPlaceholder.classList.remove("is-hidden");
  };

  portraitPhoto.addEventListener("load", showPortraitPhoto);
  portraitPhoto.addEventListener("error", showPortraitPlaceholder);

  if (portraitPhoto.complete && portraitPhoto.naturalWidth > 0) {
    showPortraitPhoto();
  } else if (portraitPhoto.complete) {
    showPortraitPlaceholder();
  }
}

const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage = translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;

applyLanguage(initialLanguage);

document.getElementById("language-select")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});
