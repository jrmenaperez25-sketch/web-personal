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
        courses: "Certificaciones",
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
          title: "Proyectos y trabajos",
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
          kicker: "Certificaciones profesionales",
          title: "Certificaciones profesionales",
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
      cvHref: "./cv-es.pdf",
      summary:
        "Matemático con Máster en Ingeniería de Análisis de Datos (UPV) y experiencia investigadora en deep learning aplicado a imagen médica. Autor de un artículo enviado al CASEIB 2026 sobre detección de figuras mitóticas en histopatología de cáncer de mama, pendiente de aceptación. Perfil orientado a proyectos donde la base matemática y la interpretación estadística sean fundamentales para la resolución de problemas.",
      valueProposition:
        "Combino una formación matemática sólida con grandes habilidades de comunicación. Destaco por mis competencias en estadística, optimización e investigación operativa. Cuento con experiencia práctica en ciencia de datos y machine learning aplicado a problemas reales. He desarrollado el TFM en el CVB Lab (UPV), implementando un sistema de detección de mitosis en dos fases sobre histopatología de cáncer de mama evaluado en MITOS-ATYPIA-14 y TUPAC16. El trabajo dio lugar a un artículo enviado al CASEIB 2026 (pendiente de aceptación).",
      highlights: [
        "Deep Learning · Machine Learning",
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
          areaHeading: true,
          label: "AI Médica · Computer Vision",
        },
        {
          kicker: "AI Médica · Computer Vision · TFM Máster",
          title: "TFM: Detección y clasificación de figuras mitóticas en histopatología de cáncer de mama",
          copy:
            "Sistema en dos fases evaluado en MITOS-ATYPIA-14 y TUPAC16: RF-DETR propone candidatos con alta sensibilidad y Virchow (ViT-H/14) adaptado con LoRA filtra los falsos positivos entrenando sobre los errores reales del detector. El F₁ pasa de 0,62 a 0,79 en MITOS y de 0,57 a 0,76 en TUPAC. Stack: Python, PyTorch, PEFT/LoRA, rfdetr, ultralytics.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/TFM-Deteccion-Mitosis",
          docs: [
            { label: "Memoria TFM", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/TFM_completo.pdf", filename: "TFM_Deteccion_Mitosis_JoseRamon_Mena.pdf" },
            { label: "Presentación defensa", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/TFM_defensa.pdf", filename: "TFM_Defensa_Deteccion_Mitosis_JoseRamon_Mena.pdf" },
          ],
        },
        {
          kicker: "AI Médica · Computer Vision · Publicación CASEIB 2026",
          title: "Detección de mitosis en dos fases con modelos fundacionales de patología",
          copy:
            "Artículo enviado al XLIV Congreso Anual de la Sociedad Española de Ingeniería Biomédica (CASEIB 2026, Valencia) — pendiente de aceptación. Propone un pipeline de detección de figuras mitóticas con RF-DETR como detector y Virchow adaptado con LoRA como clasificador de falsos positivos, con resultados en dos conjuntos de datos públicos independientes.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/TFM-Deteccion-Mitosis",
          docs: [
            { label: "Artículo CASEIB 2026", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/CASEIB2026_articulo.pdf", filename: "CASEIB2026_Deteccion_Mitosis_JoseRamon_Mena.pdf" },
          ],
        },
        {
          areaHeading: true,
          label: "Modelización Matemática · Optimización",
        },
        {
          kicker: "Modelización Matemática · TFG Grado",
          title: "TFG en modelos compartimentales aplicados a la dinámica del crimen",
          copy:
            "Trabajo de Fin de Grado centrado en la formulación y análisis de un modelo compartimental inspirado en sistemas epidemiológicos para estudiar la evolución del comportamiento criminal en España. Incluye ecuaciones diferenciales ordinarias, estimación de parámetros y ajuste a datos reales.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/tfg-compartmental-models-crime-dynamics",
        },
        {
          kicker: "Optimización Combinatoria · Grado Matemáticas",
          title: "GRASP y Path Relinking para el Maximum Diversity Problem",
          copy:
            "Implementación en Python de metaheurísticas para un problema de optimización combinatoria NP-hard. El proyecto integra fase constructiva, búsqueda local, gestión de soluciones élite y estrategias de intensificación para comparar el comportamiento de GRASP y su extensión con Path Relinking sobre instancias benchmark.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/grasp-path-relinking-mdp",
        },
        {
          areaHeading: true,
          label: "Modelos Predictivos · Data Science",
        },
        {
          kicker: "Modelos Predictivos · Series Temporales",
          title: "Modelización ARIMA y predicción sobre datos de turismo",
          copy:
            "Proyecto de técnicas de previsión orientado al estudio de la evolución temporal del turismo, con análisis exploratorio, descomposición de series, comparativa de escenarios y construcción de modelos ARIMA en R. El trabajo se centra en la calidad del ajuste, la interpretación del comportamiento temporal y la capacidad predictiva.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Tecnicas-de-Prevision",
        },
        {
          kicker: "Modelos Predictivos · Análisis Estadístico",
          title: "Análisis multivariante aplicado a datos reales",
          copy:
            "Trabajo del Máster centrado en técnicas de reducción de dimensionalidad, análisis discriminante y exploración multivariante. Combina tratamiento de datos reales e interpretación estadística para extraer estructura y patrones relevantes en un dataset del ámbito de la medicina.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Analisis-Multivariante",
        },
        {
          kicker: "Modelos Predictivos · Minería de Datos",
          title: "Predicción de precio y clasificación de vehículos de segunda mano",
          copy:
            "Proyecto del Máster (UPV) sobre un dataset de anuncios de vehículos marroquíes. Incluye exploración no supervisada (PCA), predicción de precio con modelos de regresión e interpretabilidad (ALE, LIME), y clasificación del estado y del primer propietario. Imputación múltiple KNN. Stack: R, tidyverse, caret.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Miner%C3%ADa%20de%20Datos/Proyecto%20Miner%C3%ADa%20de%20Datos",
        },
      ],
      experience: [
        {
          meta: "GFT IT Consulting · Jun 2026 - Ago 2026",
          title: "Data Scientist and AI Intern – AI and Data",
          copy:
            "Entrenamiento y despliegue de modelos de machine learning en Google Cloud con Python y Vertex AI. Consultas SQL en BigQuery para exploración y análisis de los datos empleados en los modelos. Formación en RAG e IA agéntica aplicada a casos de uso empresariales.",
        },
        {
          meta: "CVB Lab, UPV · Feb 2026 - Jul 2026",
          title: "Investigador en prácticas – Deep Learning aplicado a imagen médica",
          copy:
            "Fine-tuning de modelos de deep learning sobre imágenes histopatológicas para segmentación y detección automática de mitosis en cáncer de mama. Estrategias de entrenamiento con clases desbalanceadas, aumentación de datos y splits reproducibles. Evaluación con métricas adaptadas al problema clínico (F1, precisión, recall). Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
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
          meta: "Máster Universitario en Ingeniería de Análisis de Datos, Mejora de Procesos y Toma de Decisiones",
          title: "Universitat Politècnica de València · 2025 - 2026",
          copy:
            "Formación avanzada en métodos estadísticos, series temporales, minería de datos, IA aplicada, diseño de experimentos, modelado y simulación, optimización e investigación operativa. Orientado a proyectos aplicados con base analítica sólida.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
          docs: [
            { label: "Certificado provisional", href: "./certificado-master-provisional.pdf", filename: "Certificado_Provisional_Master_MUIAD_UPV.pdf" },
            { label: "Expediente académico", href: "./expediente-master-es.pdf", filename: "Expediente_Academico_Master_MUIAD_UPV.pdf" },
          ],
        },
        {
          meta: "Grado en Matemáticas",
          title: "Universitat de València · 2021 - 2025",
          copy:
            "Formación en matemáticas aplicadas: álgebra lineal, análisis matemático, probabilidad y estadística, ecuaciones diferenciales, métodos numéricos, investigación operativa, topología y programación en Python, R y C++. Incluye proyectos en optimización combinatoria y modelización.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
          docs: [
            { label: "Título oficial", href: "./titulo-grado-matematicas.pdf", filename: "Titulo_Oficial_Grado_Matematicas_UV.pdf" },
            { label: "Expediente académico", href: "./expediente-grado-valenciano.pdf", filename: "Expediente_Academico_Grado_Matematicas_UV.pdf" },
          ],
        },
      ],
      courses: [
        {
          meta: "Johns Hopkins University · Coursera",
          title: "Programa especializado: HTML, CSS, and JavaScript for Web Developers",
          copy:
            "Especialización en desarrollo web front-end con HTML, CSS y JavaScript, desde estructura y diseño hasta comportamiento interactivo en aplicaciones web. Completado en agosto de 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/I7NEIX9YH18K",
        },
        {
          meta: "IBM · Coursera",
          title: "Programa especializado: Data Science Fundamentals with Python and SQL",
          copy:
            "Especialización en fundamentos de ciencia de datos con Python y SQL, con énfasis en análisis de datos, visualización y metodología de proyectos. Completado en agosto de 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/2MVCQ0URJ070",
        },
        {
          meta: "IBM · Coursera",
          title: "Certificado Profesional de IBM Data Science",
          copy:
            "Programa profesional completo de ciencia de datos: metodología, Python, SQL, visualización, machine learning con Scikit-learn y proyecto final aplicado. Completado en agosto de 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/HH0FV246Z4NI",
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
        { label: "CV", value: "Versión PDF", href: "./cv-es.pdf" },
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
        courses: "Certifications",
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
          title: "Projects and work",
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
          kicker: "Professional certifications",
          title: "Professional certifications",
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
      cvHref: "./cv-en.pdf",
      summary:
        "Mathematician with a Master's degree in Data Analysis Engineering (UPV) and research experience in deep learning applied to medical imaging. Author of a paper submitted to CASEIB 2026 on two-phase mitosis detection in breast cancer histopathology, currently awaiting acceptance. Oriented toward projects where mathematical foundations and statistical interpretation are essential for solving problems.",
      valueProposition:
        "I combine a solid mathematical background with strong communication skills. My strengths include statistics, optimisation and operations research, together with hands-on experience in data science and machine learning applied to real problems. I developed my MSc thesis at CVB Lab (UPV), building a two-phase mitosis detection system on breast cancer histopathology evaluated on MITOS-ATYPIA-14 and TUPAC16. The work resulted in a paper submitted to CASEIB 2026 (awaiting acceptance).",
      highlights: [
        "Deep Learning · Machine Learning",
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
          areaHeading: true,
          label: "Medical AI · Computer Vision",
        },
        {
          kicker: "Medical AI · Computer Vision · MSc Thesis",
          title: "MSc thesis: Detection and classification of mitotic figures in breast cancer histopathology",
          copy:
            "Two-phase system evaluated on MITOS-ATYPIA-14 and TUPAC16: RF-DETR proposes high-recall candidates and Virchow (ViT-H/14) adapted with LoRA filters false positives by training on the detector's own errors. F₁ improves from 0.62 to 0.79 on MITOS and from 0.57 to 0.76 on TUPAC. Stack: Python, PyTorch, PEFT/LoRA, rfdetr, ultralytics.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/TFM-Deteccion-Mitosis",
          docs: [
            { label: "MSc thesis (full)", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/TFM_completo.pdf", filename: "MSc_Thesis_Mitosis_Detection_JoseRamon_Mena.pdf" },
            { label: "Defence slides", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/TFM_defensa.pdf", filename: "MSc_Thesis_Defence_Mitosis_Detection_JoseRamon_Mena.pdf" },
          ],
        },
        {
          kicker: "Medical AI · Computer Vision · CASEIB 2026 Publication",
          title: "Two-phase mitosis detection with pathology foundation models",
          copy:
            "Paper submitted to the XLIV Annual Congress of the Spanish Society of Biomedical Engineering (CASEIB 2026, Valencia) — awaiting acceptance. Proposes a mitotic figure detection pipeline using RF-DETR as detector and LoRA-adapted Virchow as false-positive classifier, evaluated on two independent public datasets.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/TFM-Deteccion-Mitosis",
          docs: [
            { label: "CASEIB 2026 paper", href: "https://raw.githubusercontent.com/jrmenaperez25-sketch/proyectos-portfolio/master/master/TFM-Deteccion-Mitosis/docs/CASEIB2026_articulo.pdf", filename: "CASEIB2026_Mitosis_Detection_JoseRamon_Mena.pdf" },
          ],
        },
        {
          areaHeading: true,
          label: "Mathematical Modelling · Optimisation",
        },
        {
          kicker: "Mathematical Modelling · BSc Thesis",
          title: "Bachelor thesis on compartmental models applied to crime dynamics",
          copy:
            "Bachelor thesis focused on the formulation and analysis of a compartmental model inspired by epidemiological systems to study the evolution of criminal behaviour in Spain. Includes ordinary differential equations, parameter estimation and fitting to real data.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/tfg-compartmental-models-crime-dynamics",
        },
        {
          kicker: "Combinatorial Optimisation · BSc Mathematics",
          title: "GRASP and Path Relinking for the Maximum Diversity Problem",
          copy:
            "Python implementation of metaheuristics for an NP-hard combinatorial optimisation problem. The project includes a constructive phase, local search, elite-solution management and intensification strategies to compare GRASP and its Path Relinking extension on benchmark instances.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas/grasp-path-relinking-mdp",
        },
        {
          areaHeading: true,
          label: "Predictive Models · Data Science",
        },
        {
          kicker: "Predictive Models · Time Series",
          title: "ARIMA modelling and forecasting with tourism data",
          copy:
            "Forecasting project focused on the temporal evolution of tourism, including exploratory analysis, time-series decomposition, scenario comparison and ARIMA modelling in R. The work emphasises goodness of fit, interpretation of temporal behaviour and predictive capacity.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Tecnicas-de-Prevision",
        },
        {
          kicker: "Predictive Models · Statistical Analysis",
          title: "Multivariate analysis applied to real data",
          copy:
            "Master's project focused on dimensionality reduction, discriminant analysis and multivariate exploration. The project combines real-data processing, statistical interpretation and analysis to extract relevant structure and patterns from a medical-domain dataset.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Analisis-Multivariante",
        },
        {
          kicker: "Predictive Models · Data Mining",
          title: "Price prediction and classification of second-hand vehicles",
          copy:
            "Master's project at UPV using a Moroccan vehicle-listing dataset with technical, usage, condition and price variables. Includes unsupervised exploration (PCA), price prediction with regression models and interpretability (ALE, LIME), and classification of vehicle condition and first-owner status. Multiple KNN imputation. Stack: R, tidyverse, caret.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master/Miner%C3%ADa%20de%20Datos/Proyecto%20Miner%C3%ADa%20de%20Datos",
        },
      ],
      experience: [
        {
          meta: "GFT IT Consulting · Jun 2026 – Aug 2026",
          title: "Data Scientist and AI Intern – AI and Data",
          copy:
            "Training and deployment of machine learning models on Google Cloud using Python and Vertex AI. SQL queries in BigQuery for data exploration and analysis. Training in RAG and agentic AI applied to enterprise use cases.",
        },
        {
          meta: "CVB Lab, UPV · Feb 2026 – Jul 2026",
          title: "Research Intern – Deep Learning applied to medical imaging",
          copy:
            "Fine-tuning deep learning models on histopathology images for segmentation and automatic mitosis detection in breast cancer. Training strategies for imbalanced classes, data augmentation and reproducible splits. Evaluation with clinically adapted metrics (F1, precision, recall). Stack: Python, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook.",
        },
        {
          meta: "NTT DATA Europe & Latam · Mar 2025 – Jul 2025",
          title: "Low-code development intern (OutSystems)",
          copy:
            "Development and maintenance of internal applications for certification-preparation monitoring. SQL queries for data extraction and filtering. CRUD operations, REST API consumption and service integration. Data validation and role-based access control.",
        },
        {
          meta: "Caixa Popular · Oct 2024 – Jan 2025",
          title: "Cashier and customer service assistant",
          copy:
            "Customer support and advisory work in a financial environment. Cash management, payments and general administrative tasks. Development of communication, organisation and service-orientation skills.",
        },
      ],
      timeline: [
        {
          meta: "MSc in Data Analysis, Process Improvement and Decision Support Engineering",
          title: "Universitat Politècnica de València · 2025 - 2026",
          copy:
            "Advanced training in statistical methods, time series, data mining, applied AI, design of experiments, modelling and simulation, optimisation and operations research. Oriented toward applied projects with a strong analytical foundation.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/master",
          docs: [
            { label: "Provisional certificate", href: "./certificado-master-provisional.pdf", filename: "Provisional_Certificate_MSc_MUIAD_UPV.pdf" },
            { label: "Academic transcript", href: "./expediente-master-en.pdf", filename: "Academic_Transcript_MSc_MUIAD_UPV.pdf" },
          ],
        },
        {
          meta: "BSc in Mathematics",
          title: "Universitat de València · 2021 - 2025",
          copy:
            "Training in applied mathematics: linear algebra, mathematical analysis, probability and statistics, differential equations, numerical methods, operations research, topology and programming in Python, R and C++. Includes projects in combinatorial optimisation and mathematical modelling.",
          href: "https://github.com/jrmenaperez25-sketch/proyectos-portfolio/tree/master/grado-matematicas",
          docs: [
            { label: "Official degree", href: "./titulo-grado-matematicas.pdf", filename: "Official_Degree_BSc_Mathematics_UV.pdf" },
            { label: "Academic transcript", href: "./expediente-grado-ingles.pdf", filename: "Academic_Transcript_BSc_Mathematics_UV.pdf" },
          ],
        },
      ],
      courses: [
        {
          meta: "Johns Hopkins University · Coursera",
          title: "Specialization: HTML, CSS, and JavaScript for Web Developers",
          copy:
            "Front-end web development specialization covering HTML structure, CSS styling and JavaScript interactivity in web applications. Completed August 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/I7NEIX9YH18K",
        },
        {
          meta: "IBM · Coursera",
          title: "Specialization: Data Science Fundamentals with Python and SQL",
          copy:
            "Data science fundamentals specialization covering Python, SQL, data analysis, visualisation and project methodology. Completed August 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/2MVCQ0URJ070",
        },
        {
          meta: "IBM · Coursera",
          title: "IBM Data Science Professional Certificate",
          copy:
            "Complete professional data science programme: methodology, Python, SQL, databases, data visualisation, machine learning with Scikit-learn and an applied final project. Completed August 2026.",
          href: "https://www.coursera.org/account/accomplishments/specialization/HH0FV246Z4NI",
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
        { label: "CV", value: "PDF version", href: "./cv-en.pdf" },
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

  const cvBtn = document.getElementById("cv-download-btn");
  if (cvBtn) cvBtn.href = profile.cvHref;

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
      item.areaHeading
        ? `<div class="project-area-heading">${item.label}</div>`
        : item.status
        ? `
          <article class="status-card" aria-disabled="true">
            <span class="status-badge">${item.status}</span>
            <h3>${item.title}</h3>
            <p class="project-copy">${item.copy}</p>
            <p class="status-note">${dictionary.ui.statusNote}</p>
          </article>
        `
        : `
          <div class="project-entry">
            <a class="project-link" href="${item.href}" target="_blank" rel="noreferrer">
              <article class="project-card">
                <span class="card-kicker">${item.kicker}</span>
                <h3>${item.title}</h3>
                <p class="project-copy">${item.copy}</p>
              </article>
            </a>
            ${item.docs ? `<div class="timeline-docs">${item.docs.map(d => `<a class="timeline-doc-link" href="${d.href}" target="_blank" rel="noreferrer" download="${d.filename}">↓ ${d.label}</a>`).join("")}</div>` : ""}
          </div>
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
      <div class="timeline-entry">
        <a class="timeline-link" href="${item.href}" target="_blank" rel="noreferrer">
          <article class="timeline-item">
            <span class="timeline-meta">${item.meta}</span>
            <h3>${item.title}</h3>
            <p class="timeline-copy">${item.copy}</p>
          </article>
        </a>
        ${item.docs ? `<div class="timeline-docs">${item.docs.map(d => `<a class="timeline-doc-link" href="${d.href}" target="_blank" rel="noreferrer" download="${d.filename}">↓ ${d.label}</a>`).join("")}</div>` : ""}
      </div>
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
