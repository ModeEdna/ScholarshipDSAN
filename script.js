// -------------------------- job titles word cloud
Highcharts.chart("wordcloudTitles", {
  chart: {
    backgroundColor: "transparent",
  },
  series: [
    {
      type: "wordcloud",
      roation: {
        from: -60,
        to: 60,
        orientations: 5,
      },
      spiral: "archimedean",
      data: [
        { name: "Machine Learning Engineer", weight: 30 },
        { name: "Data Analyst", weight: 21 },
        { name: "Data Scientist", weight: 18 },
        { name: "Senior Machine Learning", weight: 11 },
        { name: "Cloud Software Engineer", weight: 11 },
        { name: "Senior Data Scientist", weight: 9 },
        { name: "Natural Language Processing", weight: 9 },
        { name: "Deep Learning Engineer", weight: 8 },
        { name: "Blockchain Engineer", weight: 7 },
        { name: "Data Scientist II", weight: 7 },
        { name: "Cloud Design Engineer", weight: 6 },
        { name: "Lead Data Scientist", weight: 6 },
        { name: "Data Scientist Natural", weight: 6 },
        { name: "Staff Machine Learning", weight: 5 },
        { name: "Senior Natural Language", weight: 5 },
        { name: "Principal Machine Learning", weight: 5 },
        { name: "Senior Software Engineer", weight: 5 },
        { name: "Natural language processing", weight: 4 },
        { name: "Machine Learning Research", weight: 4 },
        { name: "Sr. Data Scientist", weight: 4 },
        { name: "Blockchain & Digital", weight: 4 },
        { name: "Machine Learning Scientist", weight: 4 },
        { name: "Senior Data Analyst", weight: 4 },
        { name: "Applied Machine Learning", weight: 4 },
        { name: "Data Analyst II", weight: 4 },
        { name: "Junior Data Scientist", weight: 3 },
        { name: "Python Engineer Computer", weight: 3 },
        { name: "Sr. Data Analyst", weight: 3 },
        { name: "Senior AI Scientist", weight: 3 },
        { name: "Big Data Architect", weight: 3 },
      ],
    },
  ],
  title: {
    text: " ",
    floating: true,
    margin: 0,
    verticalAlign: "top",
    y: 55,
  },
  subtitle: {
    text: "Figure 1.1",
    verticalAlign: "bottom",
    y: -40,
  },
});

// -------------------------- company names word cloud

Highcharts.chart("wordcloudCompanies", {
  chart: {
    backgroundColor: "transparent",
  },
  series: [
    {
      type: "wordcloud",
      roation: {
        from: -60,
        to: 60,
        orientations: 5,
      },
      spiral: "archimedean",
      data: [
        { name: "Upwork", weight: 34 },
        { name: "Booz Allen Hamilton", weight: 12 },
        { name: "Apple", weight: 10 },
        { name: "Deloitte", weight: 8 },
        { name: "Walmart", weight: 7 },
        { name: "Lockheed Martin", weight: 5 },
        { name: "General Dynamics Information Technology", weight: 5 },
        { name: "Amazon Web Services, Inc.", weight: 5 },
        { name: "Leidos", weight: 5 },
        { name: "Microsoft", weight: 4 },
        { name: "Google", weight: 4 },
        { name: "Oak Ridge National Laboratory", weight: 4 },
        { name: "Snap Inc.", weight: 4 },
        { name: "Kitware", weight: 4 },
        { name: "Peraton", weight: 4 },
        { name: "Capital One", weight: 3 },
        { name: "MathWorks", weight: 3 },
        { name: "MultiPlan", weight: 3 },
        { name: "STR", weight: 3 },
        { name: "Jobot", weight: 3 },
        { name: "Amazon.com Services LLC", weight: 3 },
        { name: "Neural Magic", weight: 3 },
        { name: "JPMorgan Chase", weight: 3 },
        { name: "ManTech International", weight: 3 },
        { name: "Robert Half", weight: 3 },
        { name: "Corporate", weight: 2 },
        { name: "ARSIEM", weight: 2 },
        { name: "Liberty Personnel Services, Inc", weight: 2 },
        { name: "MoTek Technologies", weight: 2 },
        { name: "BNY Mellon", weight: 2 },
      ],
    },
  ],
  title: {
    text: " ",
  },
  subtitle: {
    text: "Figure 1.2",
    verticalAlign: "bottom",
  },
});

// -------------------------- schedules chart

Highcharts.chart("money-chart", {
  chart: {
    backgroundColor: "transparent",
    type: "item",
    width: 650,
  },

  title: {
    text: "Distribution of Schedule Types",
    x: 0,
    y: 50,
  },

  subtitle: {
    text: "Figure 2.1",
    verticalAlign: "top",
    y: 70,
  },

  legend: {
    // labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
    enabled: false,
  },

  series: [
    {
      name: "Count",
      keys: ["name", "y", "color", "label"],
      data: [
        ["Contract", 50, "#EC7345", "Contract"],
        ["Intern", 12, "#67DF7E", "Intern"],
        ["Part-time", 3, "#3399FF", "Part-time"],
        ["Full-time", 509, "#C26BED", "Full-time"],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
        style: {
          textOutline: "3px contrast",
          color: "white",
        },
      },

      // Circular options
      center: ["50%", "100%"],
      size: "150%",
      startAngle: -90,
      endAngle: 90,
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 600,
        },
        chartOptions: {
          series: [
            {
              dataLabels: {
                distance: -30,
              },
            },
          ],
        },
      },
    ],
  },
});

// -------------------------- benefits chart

Highcharts.chart("benefits-chart", {
  chart: {
    backgroundColor: "transparent",
    type: "item",
    width: 650,
  },

  title: {
    text: "Distribution of Work Modality",
    x: 0,
    y: -30,
    verticalAlign: "bottom",
  },

  subtitle: {
    text: "Figure 2.2",
    verticalAlign: "top",
    y: 340,
  },

  legend: {
    // labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
    enabled: false,
  },

  series: [
    {
      name: "Count",
      keys: ["name", "y", "color", "label"],
      data: [
        ["Remote", 156, "#534FBE", "Remote"],
        ["Office/Hybrid", 418, "#FFD700", "Office/Hybrid"],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
        style: {
          textOutline: "3px contrast",
          color: "white",
        },
      },

      // Circular options
      center: ["50%", "75%"],
      size: "150%",
      startAngle: -90,
      endAngle: 90,
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 600,
        },
        chartOptions: {
          series: [
            {
              dataLabels: {
                distance: 30,
              },
            },
          ],
        },
      },
    ],
  },
});

// -------------------------- reqs bubble chart

Highcharts.chart("bubbles2", {
  chart: {
    type: "packedbubble",
    height: "100%",
    backgroundColor: "transparent",
  },
  title: {
    text: "Top Requirements",
    align: "center",
    y: 50,
  },
  subtitle: {
    text: "Figure 4.2",
    verticalAlign: "top",
    y: 70,
  },
  legend: {
    enabled: true,
    itemStyle: {
      color: "#E1D9D1",
    },
    itemHoverStyle: {
      color: "green",
    },
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.value}:</b> {point.name}",
  },
  plotOptions: {
    packedbubble: {
      minSize: "30%",
      maxSize: "150%",
      zMin: 0,
      zMax: 2000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 175,
        },
        style: {
          color: "#E1D9D1",
          textOutline: "none",
          fontWeight: "normal",
          fontSize: "10px",
        },
      },
    },
  },
  series: [
    {
      name: "Technical",
      data: [
        { name: "machine", value: 444 },
        { name: "computer", value: 441 },
        { name: "software", value: 308 },
        { name: "python", value: 295 },
        { name: "programming", value: 206 },
        { name: "distributed", value: 166 },
        { name: "computing", value: 154 },
        { name: "SQL", value: 132 },
        { name: "language", value: 142 },
      ],
    },
    {
      name: "Analytical",
      data: [
        { name: "data", value: 1152 },
        { name: "analytics", value: 179 },
        { name: "statistics", value: 147 },
        { name: "analysis", value: 238 },
        { name: "techniques", value: 144 },
        { name: "models", value: 188 },
        { name: "processing", value: 133 },
        { name: "solutions", value: 133 },
      ],
    },
    {
      name: "Domain",
      data: [
        { name: "engineering", value: 323 },
        { name: "environmental", value: 193 },
        { name: "andor", value: 176 },
      ],
    },
    {
      name: "Soft",
      data: [
        { name: "communication", value: 190 },
        { name: "teamwork", value: 211 },
        { name: "understanding", value: 173 },
        { name: "management", value: 200 },
        { name: "business", value: 260 },
      ],
    },
    {
      name: "Other",
      data: [
        { name: "experience", value: 2002 },
        { name: "learning", value: 760 },
        { name: "skills", value: 513 },
        { name: "science", value: 484 },
        { name: "ability", value: 477 },
        { name: "cloud", value: 301 },
        { name: "deep", value: 268 },
        { name: "development", value: 266 },
        { name: "tools", value: 236 },
        { name: "field", value: 210 },
        { name: "developing", value: 153 },
        { name: "design", value: 153 },
        { name: "bachelors", value: 151 },
        { name: "information", value: 139 },
        { name: "etc", value: 164 },
      ],
    },
  ],
});

// -------------------------- reqs bubble chart

Highcharts.chart("bubbles1", {
  chart: {
    type: "packedbubble",
    height: "100%",
    backgroundColor: "transparent",
  },
  title: {
    text: "Top Responsibilities",
    align: "center",
  },
  subtitle: {
    text: "Figure 4.1",
    verticalAlign: "top",
  },
  legend: {
    enabled: true,
    itemStyle: {
      color: "#E1D9D1",
    },
    itemHoverStyle: {
      color: "green",
    },
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.value}:</b> {point.name}",
  },
  plotOptions: {
    packedbubble: {
      minSize: "30%",
      maxSize: "150%",
      zMin: 0,
      zMax: 4000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 500,
        },
        style: {
          color: "#E1D9D1",
          textOutline: "none",
          fontWeight: "normal",
          fontSize: "10px",
        },
      },
    },
  },
  series: [
    {
      name: "DSAN",
      data: [
        { name: "data", value: 3424 },
        { name: "machine", value: 1237 },
        { name: "science", value: 857 },
        { name: "research", value: 775 },
        { name: "models", value: 700 },
        { name: "analysis", value: 612 },
        { name: "analytics", value: 504 },
        { name: "AI", value: 422 },
      ],
    },
    {
      name: "Experience",
      data: [
        { name: "experience", value: 3106 },
        { name: "learning", value: 2052 },
        { name: "skills", value: 909 },
        { name: "technical", value: 653 },
        { name: "knowledge", value: 610 },
        { name: "degree", value: 493 },
        { name: "qualifications", value: 443 },
        { name: "training", value: 424 },
        { name: "education", value: 393 },
      ],
    },
    {
      name: "Business",
      data: [
        { name: "business", value: 967 },
        { name: "solutions", value: 758 },
        { name: "management", value: 502 },
        { name: "company", value: 492 },
        { name: "environment", value: 475 },
        { name: "employees", value: 461 },
        { name: "teams", value: 447 },
        { name: "employment", value: 422 },
      ],
    },
    {
      name: "Tech and Tools",
      data: [
        { name: "development", value: 937 },
        { name: "software", value: 913 },
        { name: "cloud", value: 695 },
        { name: "computer", value: 676 },
        { name: "information", value: 675 },
        { name: "design", value: 642 },
        { name: "tools", value: 538 },
        { name: "technology", value: 548 },
        { name: "systems", value: 576 },
        { name: "technologies", value: 440 },
      ],
    },
    {
      name: "Other",
      data: [
        { name: "ability", value: 618 },
        { name: "benefits", value: 586 },
        { name: "position", value: 585 },
        { name: "opportunity", value: 507 },
        { name: "status", value: 499 },
        { name: "health", value: 428 },
        { name: "services", value: 424 },
        { name: "provide", value: 439 },
      ],
    },
    {
      name: "Engineering",
      data: [
        { name: "engineering", value: 735 },
        { name: "technical", value: 653 },
        { name: "deep", value: 629 },
        { name: "strong", value: 512 },
        { name: "requirements", value: 576 },
        { name: "build", value: 416 },
      ],
    },
  ],
});

// -------------------------- heatmap

Highcharts.chart("heatmap", {
  chart: {
    type: "heatmap",
    marginTop: 60,
    marginBottom: 100,
    plotBorderWidth: 1,
    backgroundColor: "transparent",
    height: "90%",
  },

  title: {
    text: "Correlations Between Variables",
    x: 50,
    style: {
      fontSize: "1em",
    },
  },

  subtitle: {
    text: "Figure 5.1",
    x: 50,
    style: {
      fontSize: "0.8em",
    },
  },

  xAxis: {
    categories: [
      "Days Posted",
      "Min Salary",
      "Max Salary",
      "Salary Range",
      "Benefits",
      "Qualifications",
      "Responsibilities",
      "Benefits",
    ],
    labels: {
      style: {
        color: "#E1D9D1",
      },
    },
  },

  yAxis: {
    categories: [
      "Days Posted",
      "Min Salary",
      "Max Salary",
      "Salary Range",
      "Benefits",
      "Qualifications",
      "Responsibilities",
      "Benefits",
    ],
    labels: {
      style: {
        color: "#E1D9D1",
      },
    },
    title: null,
    reversed: true,
  },

  colorAxis: {
    min: 0,
    max: 1,
    maxColor: "#c175ff",
    minColor: "black",
  },

  legend: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  series: [
    {
      name: "Correlations",
      borderWidth: 1,
      data: [
        [0, 0, 1],
        [0, 1, 0.11],
        [0, 2, 0.05],
        [0, 3, -0.12],
        [0, 4, 0.015],
        [0, 5, 0.024],
        [0, 6, 0.042],
        [0, 7, -0.037],
        [1, 0, 0.11],
        [1, 1, 1],
        [1, 2, 0.81],
        [1, 3, 0.27],
        [1, 4, 0.04],
        [1, 5, 0.06],
        [1, 6, -0.01],
        [1, 7, -0.08],
        [2, 0, 0.052],
        [2, 1, 0.81],
        [2, 2, 1],
        [2, 3, 0.78],
        [2, 4, 0.06],
        [2, 5, 0.01],
        [2, 6, 0.004],
        [2, 7, -0.004],
        [3, 0, -0.12],
        [3, 1, -0.27],
        [3, 2, 0.78],
        [3, 3, 1],
        [3, 4, -0.18],
        [3, 5, 0.06],
        [3, 6, -0.03],
        [3, 7, 0.15],
        [4, 0, 0.015],
        [4, 1, 0.044],
        [4, 2, 0.059],
        [4, 3, -0.186],
        [4, 4, 1],
        [4, 5, -0.2],
        [4, 6, 0.044],
        [4, 7, -0.31],
        [5, 0, 0.24],
        [5, 1, 0.059],
        [5, 2, 0.01],
        [5, 3, 0.06],
        [5, 4, -0.2],
        [5, 5, 1],
        [5, 6, 0.075],
        [5, 7, 0.175],
        [6, 0, 0.04],
        [6, 1, -0.001],
        [6, 2, 0.004],
        [6, 3, -0.026],
        [6, 4, 0.044],
        [6, 5, 0.074],
        [6, 6, 1],
        [6, 7, -0.023],
        [7, 0, -0.037],
        [7, 1, -0.078],
        [7, 2, -0.003],
        [7, 3, 0.15],
        [7, 4, -0.31],
        [7, 5, 0.17],
        [7, 6, -0.02],
        [7, 7, 1],
      ],
      dataLabels: {
        enabled: true,
        style: {
          color: "#E1D9D1",
          textOutline: "none",
          fontWeight: "normal",
          fontSize: "10px",
        },
      },
    },
  ],
});
