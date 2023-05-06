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
    text: "Top 30 Most Common Job Titles",
  },
  subtitle: {
    text: "Figure 1.1",
    verticalAlign: "bottom",
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
    text: "Top 30 Most Common Companies",
  },
  subtitle: {
    text: "Figure 1.1",
    verticalAlign: "bottom",
  },
});
