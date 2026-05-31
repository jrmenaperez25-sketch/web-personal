const translations = {
  es: {
    meta: {
      title: "Jos? Ram?n Mena P?rez | Portfolio de Data Science",
      description:
        "Portfolio profesional de Jos? Ram?n Mena P?rez con proyectos en ciencia de datos, inteligencia artificial, modelizaci?n matem?tica y machine learning.",
    },
    ui: {
      nav: {
        projects: "Proyectos",
        education: "Formaci?n",
        courses: "Cursos",
        contact: "Contacto",
      },
      language: {
        label: "Idioma",
        aria: "Seleccionar idioma",
      },
      portrait: {
        placeholder: "Fotograf?a no disponible",
        alt: "Fotograf?a profesional de Jos? Ram?n Mena P?rez",
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
          title: "Perfil t?cnico orientado a Data Science e AI",
          skillsTitle: "Competencias",
        },
        projects: {
          kicker: "Proyectos destacados",
          title: "Proyectos acad?micos",
        },
        experience: {
          kicker: "Experiencia",
          title: "Experiencia profesional",
        },
        education: {
          kicker: "Formaci?n",
          title: "Trayectoria acad?mica",
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
      statusNote: "Disponible pr?ximamente",
    },
    profile: {
      name: "Jos? Ram?n Mena P?rez",
      role: "Mathematician | Data Science | AI Engineering",
      summary:
        "Estudiante del M?ster en Ingenier?a de An?lisis de Datos, Mejora de Procesos y Toma de Decisiones en la UPV, con base s?lida en estad?stica y modelado matem?tico. Experiencia investigadora en deep learning aplicado a imagen m?dica. Perfil orientado a proyectos donde la base matem?tica y la interpretaci?n estad?stica sean fundamentales para la resoluci?n de problemas.",
      valueProposition:
        "Combino una formaci?n matem?tica s?lida con grandes habilidades de comunicaci?n. Destaco por mis competencias en estad?stica, optimizaci?n e investigaci?n operativa. Cuento con experiencia pr?ctica en ciencia de datos y machine learning aplicado a problemas reales. He participado en proyectos relacionados con series temporales, an?lisis multivariante y control estad?stico de la calidad. Actualmente trabajo en un proyecto de deep learning en un entorno investigador real, desde el preprocesamiento de im?genes, dise?o de splits de entrenamiento y aumentaci?n de datos hasta la selecci?n de funciones de p?rdida, estrategias de sampling y evaluaci?n de modelos mediante m?tricas adecuadas.",
      highlights: [
        "Deep Learning",
        "Machine Learning",
        "Python ? R ? SQL",
        "Modelizaci?n, optimizaci?n, estad?stica e investigaci?n operativa",
      ],
      skills: [
        "Python ? R ? SQL ? C++",
        "Machine learning",
        "Deep learning",
        "PyTorch ? TensorFlow ? Keras",
        "Pandas ? NumPy ? Scikit-learn ? Polars",
        "Matplotlib ? Seaborn",
        "Series temporales",
        "An?lisis multivariante",
        "Power BI (DAX, Power Query)",
        "Excel avanzado",
        "Git ? GitHub ? Docker",
        "LaTeX",
        "OutSystems",
      ],
      projects: [
        {
          kicker: "Series temporales",
          title: "Modelizaci?n ARIMA y predicci?n sobre datos de turismo",
          copy:
            "Proyecto de t?cnicas de previsi?n orientado al estudio de la evoluci?n temporal del turismo, con an?lisis exploratorio, descomposici?n de series, comparativa de escenarios y construcci?n de modelos ARIMA en R. El trabajo se centra en la calidad del ajuste, la interpretaci?n del comportamiento temporal y la capacidad predictiva.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Tecnicas-de-Prevision",
        },
        {
          kicker: "An?lisis estad?stico",
          title: "An?lisis multivariante aplicado a datos reales",
          copy:
            "Trabajo desarrollado en el M?ster en An?lisis de Datos centrado en t?cnicas de reducci?n de dimensionalidad, an?lisis discriminante y exploraci?n multivariante. El proyecto combina tratamiento de datos reales, interpretaci?n estad?stica y an?lisis para extraer estructura y patrones relevantes en una base de datos del ?mbito de la medicina.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Analisis-Multivariante",
        },
        {
          kicker: "Optimizaci?n combinatoria",
          title: "GRASP y Path Relinking para el Maximum Diversity Problem",
          copy:
            "Implementaci?n en Python de metaheur?sticas para un problema de optimizaci?n combinatoria NP-hard. El proyecto integra fase constructiva, b?squeda local, gesti?n de soluciones ?lite y estrategias de intensificaci?n para comparar el comportamiento de GRASP y su extensi?n con Path Relinking sobre instancias benchmark.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/grasp-path-relinking-mdp",
        },
        {
          kicker: "Modelizaci?n matem?tica",
          title: "TFG en modelos compartimentales aplicados a la din?mica del crimen",
          copy:
            "Trabajo de Fin de Grado centrado en la formulaci?n y an?lisis de un modelo compartimental inspirado en sistemas epidemiol?gicos para estudiar la evoluci?n del comportamiento criminal, en concreto en Espa?a durante un per?odo concreto de tiempo. Incluye ecuaciones diferenciales ordinarias, estimaci?n de par?metros y ajuste a datos reales.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/tfg-compartmental-models-crime-dynamics",
        },
        {
          title: "Propuesta de trabajo en an?lisis multivariante",
          copy:
            "Trabajo del M?ster (UPV) sobre el dataset Africa Soil Property Prediction Challenge (Kaggle, 2014). A partir de 3 593 variables predictoras -3 578 espectros de infrarrojo medio (MIR) y 15 variables ed?ficas, topogr?ficas, clim?ticas y de teledetecci?n- se predicen cinco indicadores de calidad del suelo (Ca, P, pH, SOC, Sand) en zonas rurales de ?frica subsahariana. El proyecto compara PCA, PCR y PLS2 como m?todos de variables latentes frente a Ridge, Random Forest y MLP como referencias.",
          status: "En proceso ? no disponible",
        },
        {
          title: "Propuesta de trabajo en miner?a de datos",
          copy:
            "Trabajo del M?ster (UPV) sobre una base de datos de anuncios de veh?culos con variables t?cnicas, de uso, estado, localizaci?n y precio. El proyecto incluye exploraci?n no supervisada, regresi?n para predecir precio y clasificaci?n del estado del veh?culo y de primer propietario, con imputaci?n m?ltiple y validaci?n estratificada.",
          status: "En proceso ? no disponible",
        },
      ],
      experience: [
        {
          meta: "CVB Lab, UPV ? Feb 2026 - Jul 2026",
          title: "Investigador en pr?cticas - Deep Learning aplicado a imagen m?dica",
          copy:
            "Entrenamiento y fine-tuning de modelos de deep learning sobre im?genes histopatol?gicas para detecci?n autom?tica de mitosis en c?ncer de mama. Trabajo con clases desbalanceadas mediante estrategias de sampling y aumentaci?n de datos. Dise?o de splits reproducibles y evaluaci?n con m?tricas adaptadas al problema cl?nico. Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
        },
        {
          meta: "NTT DATA Europe & Latam ? Mar 2025 - Jul 2025",
          title: "Becario en desarrollo low-code (OutSystems)",
          copy:
            "Desarrollo y mantenimiento de aplicaciones internas para monitorizaci?n de preparaci?n de certificaciones. Consultas SQL para extracci?n y filtrado de datos. Operaciones CRUD, consumo de APIs REST e integraci?n de servicios. Validaciones de datos y control de acceso mediante roles de usuario.",
        },
        {
          meta: "Caixa Popular ? Oct 2024 - Ene 2025",
          title: "Auxiliar de caja y atenci?n al cliente",
          copy:
            "Atenci?n y asesoramiento al cliente en entorno financiero. Gesti?n de caja, pagos y tareas administrativas generales. Desarrollo de habilidades de comunicaci?n, organizaci?n y orientaci?n al servicio.",
        },
      ],
      timeline: [
        {
          meta: "M?ster en Ing. de An?lisis de Datos, Mejora de Procesos y Toma de Decisiones",
          title: "UPV ? 2025 - 2026",
          copy:
            "Formaci?n avanzada en m?todos estad?sticos, series temporales, miner?a de datos, IA aplicada, dise?o de experimentos, modelado y simulaci?n, optimizaci?n e investigaci?n operativa. Orientado a proyectos aplicados con base anal?tica s?lida.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
        },
        {
          meta: "Grado en Matem?ticas",
          title: "Universitat de Val?ncia ? 2021 - 2025",
          copy:
            "Formaci?n en matem?ticas aplicadas: ?lgebra lineal, an?lisis matem?tico, probabilidad y estad?stica, ecuaciones diferenciales, m?todos num?ricos, investigaci?n operativa, topolog?a y programaci?n en Python, R y C++. Incluye proyectos en optimizaci?n combinatoria y modelizaci?n.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
        },
        {
          meta: "IBM Data Science Professional Certificate",
          title: "IBM - Coursera ? 2025",
          copy:
            "Programa profesional completo: metodolog?a de ciencia de datos, Python, SQL, bases de datos, visualizaci?n de datos, machine learning con Scikit-learn y proyecto final aplicado.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/ibm-aprendizaje-automatico",
        },
      ],
      courses: [
        {
          meta: "IBM - Coursera",
          title: "Python for Data Science, AI & Development",
          copy:
            "Formaci?n en Python aplicada a ciencia de datos, automatizaci?n y desarrollo, con base pr?ctica para entornos anal?ticos y de programaci?n.",
          href: "https://www.coursera.org/account/accomplishments/verify/WXNDUYU8F2OE",
        },
        {
          meta: "Microsoft - Coursera",
          title: "SQL Foundations",
          copy:
            "Fundamentos de SQL orientados a consulta, extracci?n y gesti?n de datos en contextos anal?ticos.",
          href: "https://www.coursera.org/account/accomplishments/verify/W3QI6HVXJJW6",
        },
        {
          meta: "IBM - Coursera",
          title: "Excel Basics for Data Analysis",
          copy:
            "Manejo de hojas de c?lculo para an?lisis de datos, organizaci?n de informaci?n y soporte a tareas anal?ticas.",
          href: "https://www.coursera.org/account/accomplishments/verify/H9W8GIE9BGNP",
        },
        {
          meta: "Microsoft - Coursera",
          title: "ETL with Power BI",
          copy: "Procesos ETL, integraci?n de datos y anal?tica con Power BI.",
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
        "Busco una oportunidad donde seguir creciendo en el ?mbito de la ciencia de datos, el machine learning y la IA, aportando base matem?tica s?lida, experiencia pr?ctica con modelos reales y capacidad de aprendizaje r?pido.",
      contacts: [
        { label: "Email", value: "jrmenaperez25@gmail.com", href: "mailto:jrmenaperez25@gmail.com" },
        { label: "Tel?fono", value: "+34 605 647 469", href: "tel:+34605647469" },
        { label: "GitHub", value: "github.com/jrmenaperez25-sketch", href: "https://github.com/jrmenaperez25-sketch" },
        { label: "LinkedIn", value: "linkedin.com/in/jrmenaperez25", href: "https://www.linkedin.com/in/jrmenaperez25/" },
        { label: "Credly", value: "Perfil de credenciales", href: "https://www.credly.com/users/jose-ramon-mena-perez/edit#credly" },
        { label: "CV", value: "Versi?n PDF", href: "./cv-jose-ramon-mena-perez.pdf" },
      ],
    },
  },
  en: {
    meta: {
      title: "Jos? Ram?n Mena P?rez | Data Science Portfolio",
      description:
        "Professional portfolio of Jos? Ram?n Mena P?rez featuring data science, artificial intelligence, mathematical modelling and machine learning projects.",
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
        alt: "Professional photograph of Jos? Ram?n Mena P?rez",
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
      name: "Jos? Ram?n Mena P?rez",
      role: "Mathematician | Data Science | AI Engineering",
      summary:
        "Student of the Master's Degree in Data Analysis Engineering, Process Improvement and Decision Making at UPV, with a strong background in statistics and mathematical modelling. Research experience in deep learning applied to medical imaging. I am oriented toward projects where mathematical foundations and statistical interpretation are essential for solving problems.",
      valueProposition:
        "I combine a solid mathematical background with strong communication skills. My strengths include statistics, optimisation and operations research, together with hands-on experience in data science and machine learning applied to real problems. I have worked on projects involving time series, multivariate analysis and statistical quality control. I am currently working on a deep learning project in a real research environment, covering image preprocessing, training split design, data augmentation, loss-function selection, sampling strategies and model evaluation with appropriate metrics.",
      highlights: [
        "Deep Learning",
        "Machine Learning",
        "Python ? R ? SQL",
        "Modelling, optimisation, statistics and operations research",
      ],
      skills: [
        "Python ? R ? SQL ? C++",
        "Machine learning",
        "Deep learning",
        "PyTorch ? TensorFlow ? Keras",
        "Pandas ? NumPy ? Scikit-learn ? Polars",
        "Matplotlib ? Seaborn",
        "Time series",
        "Multivariate analysis",
        "Power BI (DAX, Power Query)",
        "Advanced Excel",
        "Git ? GitHub ? Docker",
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
          status: "In progress ? unavailable",
        },
        {
          title: "Project proposal in data mining",
          copy:
            "Master's project at UPV based on a vehicle-listing dataset with technical, usage, condition, location and price variables. It includes unsupervised exploration, price regression and classification of vehicle condition and first-owner status, with multiple imputation and stratified validation.",
          status: "In progress ? unavailable",
        },
      ],
      experience: [
        {
          meta: "CVB Lab, UPV ? Feb 2026 - Jul 2026",
          title: "Research intern - Deep Learning applied to medical imaging",
          copy:
            "Training and fine-tuning deep learning models on histopathology images for automatic mitosis detection in breast cancer. Work with imbalanced classes through sampling strategies and data augmentation. Design of reproducible splits and evaluation with metrics adapted to the clinical problem. Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
        },
        {
          meta: "NTT DATA Europe & Latam ? Mar 2025 - Jul 2025",
          title: "Low-code development intern (OutSystems)",
          copy:
            "Development and maintenance of internal applications for certification-preparation monitoring. SQL queries for data extraction and filtering. CRUD operations, REST API consumption and service integration. Data validation and role-based access control.",
        },
        {
          meta: "Caixa Popular ? Oct 2024 - Jan 2025",
          title: "Cashier and customer service assistant",
          copy:
            "Customer support and advisory work in a financial environment. Cash management, payments and general administrative tasks. Development of communication, organisation and service-orientation skills.",
        },
      ],
      timeline: [
        {
          meta: "MSc in Data Analysis Engineering, Process Improvement and Decision Making",
          title: "UPV ? 2025 - 2026",
          copy:
            "Advanced training in statistical methods, time series, data mining, applied AI, design of experiments, modelling and simulation, optimisation and operations research. Oriented toward applied projects with a strong analytical foundation.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
        },
        {
          meta: "BSc in Mathematics",
          title: "Universitat de Val?ncia ? 2021 - 2025",
          copy:
            "Training in applied mathematics: linear algebra, mathematical analysis, probability and statistics, differential equations, numerical methods, operations research, topology and programming in Python, R and C++. Includes projects in combinatorial optimisation and mathematical modelling.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
        },
        {
          meta: "IBM Data Science Professional Certificate",
          title: "IBM - Coursera ? 2025",
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
