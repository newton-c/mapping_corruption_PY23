      // adding the data manually as WordPress is weird
      var testData = {
    "nodes": [
      {
        "id": "Santiago\nPeña",
        "title": "Presidente",
        "height": 70,
        "fill": {
          "src": "https://insightcrime.org/wp-content/uploads/2023/06/SANTI-colorado-scaled.jpg"
        }
      },
      {
        "id": "Horacio\nCartes",
        "title": "tutor?",
        "height": 50,
        "fill": {
          "src": "https://insightcrime.org/wp-content/uploads/2023/06/Cartes.png"
        }
      },
      {
        "id": "Enrique\nRiera",
        "title": "Ministerio del interior",
        "height": 25,
        "fill": "#B70039" ,
        "relacion": "gabinete"     },
      {
        "id": "Juan Carlos\nBaruja",
        "title": "Ministro de Urbanismo,\nVivienda y Hábitat",
        "height": 25,
        "fill": "#B70039",
        "relacion": "gabinete"
      },
      {
        "id": "Ángel\nBarchini",
        "title": "ministro de Justicia",
        "height": 25,
        "fill": "#B70039",
        "relacion": "gabinete"
      },
      {
        "id": "Arturo\nLuglietto",
        "title": "narcotraficante",
        "height": 20,
        "fill": "#5FA69B"
      },
      {
        "id": "Óscar\nGonzález",
        "height": 25,
        "fill": "#B70039",
        "title": "ministro de Defensa Nacional",
        "relacion": "gabinete"
      },
      {
        "id": "Rubén Ramírez\nLezcano",
        "height": 25,
        "fill": "#B70039",
        "title": "ministro de Relaciones Exteriores",
        "relacion": "gabinete"
      },
      {
        "id": "Claudia\nCenturión",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de Obras Públicas y Comunicaciones (MOPC)",
        "relacion": "gabinete"
      },
      {
        "id": "Javier\nGiménez",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de Industria y Comercio",
        "relacion": "gabinete"
      },
      {
        "id": "Jiménez Gaona\ny Lima",
        "height": 20,
        "fill": "#5FA69B",
        "title": "Indited Business Owner"
      },
      {
        "id": "Carlos Fernández\nValdovinos",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de Hacienda",
        "relacion": "gabinete"
      },
      {
        "id": "<s>Felipe\nGonzález</s>",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de Salud Pública y Bienestar Social",
        "relacion": "gabinete"
      },
      {
        "id": "Ramón\nGonzález Daher",
        "height": 20,
        "fill": "#5FA69B",
        "title": "Convicted Money Launderer"  
      },
      {
        "id": "Rolando\nde Barros",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio del Ambiente y\nDesarrollo Sostenible",
        "relation": "gabinete"
      },
      {
        "id": "Luis\nRamírez",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de\nEducation y Ciencias",
        "relacion": "gabinete"
      },
      {
        "id": "Tadeo\nRojas",
        "height": 25,
        "fill": "#B70039",
        "title": "Ministerio de\nDesarollo Social",
        "relacion": "gabinete"
      }
    ],

    "edges": [
      { "from": "Santiago\nPeña", "to": "Óscar\nGonzález" },
      { "from": "Santiago\nPeña", "to": "Horacio\nCartes" },
      { "from": "Horacio\nCartes", "to": "Santiago\nPeña" },
      { "from": "Santiago\nPeña", "to": "Rubén Ramírez\nLezcano" },
      { "from": "Santiago\nPeña", "to": "Ángel\nBarchini" },
      { "from": "Santiago\nPeña", "to": "Juan Carlos\nBaruja" },
      { "from": "Horacio\nCartes", "to": "Juan Carlos\nBaruja" },
      { "from": "Santiago\nPeña", "to": "Enrique\nRiera" },
      { "from": "Santiago\nPeña", "to": "Óscar\nGonzález" },
      { "from": "Santiago\nPeña", "to": "Claudia\nCenturión" },
      { "from": "Santiago\nPeña", "to": "Javier\nGiménez" },
      { "from": "Horacio\nCartes", "to": "Enrique\nRiera" },
      { "from": "Horacio\nCartes", "to": "Jiménez Gaona\ny Lima" },
      { "from": "Claudia\nCenturión", "to": "Jiménez Gaona\ny Lima" },
      { "from": "Ángel\nBarchini", "to": "Arturo\nLuglietto" },
      { "from": "Santiago\nPeña", "to": "Carlos Fernández\nValdovinos" },
      { "from": "Santiago\nPeña", "to": "Felipe\nGonzález" },
      { "from": "Horacio\nCartes", "to": "Carlos Fernández\nValdovinos" },
      { "from": "Horacio\nCartes", "to": "Ramón\nGonzález Daher" },
      { "from": "Carlos Fernández\nValdovinos", "to": "Ramón\nGonzález Daher" },
      { "from": "Santiago\nPeña", "to": "Rolando\nde Barros" },
      { "from": "Horacio\nCartes", "to": "Rolando\nde Barros" },
      { "from": "Santiago\nPeña", "to": "Luis\nRamírez"},
      { "from": "Santiago\nPeña", "to": "Tadeo\nRojas" },
      { "from": "Horacio\nCartes", "to": "Tadeo\nRojas" }
    ]
  }

      anychart.onDocumentReady(function () {
        //anychart.data.loadJsonFile("data/testData.json", function (data) {

          // create a chart from the loaded data
          var chart = anychart.graph(testData);
          //var chart = anychart.graph(data);

          // set the title
          chart.title("El red de Peña");

          // access nodes
          var nodes = chart.nodes();

          // set the size of nodes
          nodes.normal().height(30);
          nodes.hovered().height(45);
          nodes.selected().height(45);

          // set the stroke of nodes
          nodes.normal().stroke(null);
          nodes.hovered().stroke("#3B3B3B", 3);
          nodes.selected().stroke("#3B3B3B", 3);

          // enable the labels of nodes
          chart.nodes().labels().enabled(true);

          // configure the labels of nodes
          chart.nodes().labels().format("{%id}");
          chart.nodes().labels().fontSize(12);
          chart.nodes().labels().fontWeight(600);

          // customize hover text for nodes
          chart.nodes().tooltip().useHtml(true);
          chart.nodes().tooltip().format(
             "<span style='font-weight:bold'>{%title}</span>"
            );

          // trying to adjust the edges
          chart.edges().stroke("#BD0010")
          chart.edges().hovered().stroke("blue", 2)
          chart.edges().selected().stroke("blue", 2)
          // customize hover text for edges
          chart.edges().tooltip().format("{%from} -> {%to}");

          // draw the chart
          chart.container("container").draw();

        });
     // });