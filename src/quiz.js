function outputScore(sortedScoreArray) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `✨ Your Quiz Results ✨`;
  let p = document.querySelector("p");
  p.innerHTML = ``;
  let retakeQuizButton = document.querySelector("#retakeQuizButton");
  retakeQuizButton.innerHTML = `<a href="quiz.html" class="button-link"><button>Retake Quiz</button></a>`;

  let form = document.querySelector("form");
  form.innerHTML = ``;
  let IdealJobElement = document.querySelector("#quizResults");
  IdealJobElement.innerHTML = "";
  for (let i = 9; i >= 0; i--) {
    if (sortedScoreArray[i][1] == "MechE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `⚙️ <strong>Mechanical Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "ElecE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🔌 <strong>Electrical Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "ChemE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🧪 <strong>Chemical Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "CivE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🏗 <strong>Civil Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "InduE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `📈 <strong>Industrial Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "SoftE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `💻 <strong>Software Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "BioE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🦠 <strong>Biomedical Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "ProdE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🏭 <strong>Production Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "MetroE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `🕹 <strong>Mechatronics Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
    if (sortedScoreArray[i][1] == "AeroE") {
      IdealJobElement.innerHTML =
        IdealJobElement.innerHTML +
        `✈️ <strong>Aerospace Engineering:</strong> ${sortedScoreArray[i][0]}% Match <br />`;
    }
  }
}

function sortScore(scoreArray) {
  scoreArray.sort(function (a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });
  outputScore(scoreArray);
}

function capAtTen(capScore) {
  if (capScore > 10) {
    capScore = 10;
  }
  return capScore;
}

function scoreKeeping() {
  let MechE1 = 0;
  let ElecE1 = 0;
  let ChemE1 = 0;
  let CivE1 = 0;
  let InduE1 = 0;
  let SoftE1 = 0;
  let BioE1 = 0;
  let ProdE1 = 0;
  let MetroE1 = 0;
  let AeroE1 = 0;

  if (document.querySelector("#languages").checked == true) {
    MechE1 = MechE1 + 0;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 0;
    CivE1 = CivE1 + 0;
    InduE1 = InduE1 + 1;
    SoftE1 = SoftE1 + 4;
    BioE1 = BioE1 + 0;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 0;
  }
  if (document.querySelector("#math").checked == true) {
    MechE1 = MechE1 + 3;
    ElecE1 = ElecE1 + 4;
    ChemE1 = ChemE1 + 4;
    CivE1 = CivE1 + 2;
    InduE1 = InduE1 + 3;
    SoftE1 = SoftE1 + 2;
    BioE1 = BioE1 + 2;
    ProdE1 = ProdE1 + 3;
    MetroE1 = MetroE1 + 3;
    AeroE1 = AeroE1 + 4;
  }
  if (document.querySelector("#physics").checked == true) {
    MechE1 = MechE1 + 4;
    ElecE1 = ElecE1 + 3;
    ChemE1 = ChemE1 + 1;
    CivE1 = CivE1 + 4;
    InduE1 = InduE1 + 3;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 3;
    ProdE1 = ProdE1 + 4;
    MetroE1 = MetroE1 + 4;
    AeroE1 = AeroE1 + 4;
  }
  if (document.querySelector("#biology").checked == true) {
    MechE1 = MechE1 + 0;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 1;
    CivE1 = CivE1 + 0;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 4;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 0;
  }
  if (document.querySelector("#chemistry").checked == true) {
    MechE1 = MechE1 + 1;
    ElecE1 = ElecE1 + 1;
    ChemE1 = ChemE1 + 4;
    CivE1 = CivE1 + 1;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 1;
    ProdE1 = ProdE1 + 1;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 1;
  }
  if (document.querySelector("#art").checked == true) {
    MechE1 = MechE1 + 1;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 0;
    CivE1 = CivE1 + 2;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 1;
    BioE1 = BioE1 + 0;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 1;
    AeroE1 = AeroE1 + 1;
  }
  if (document.querySelector("#music").checked == true) {
    MechE1 = MechE1 + 1;
    ElecE1 = ElecE1 + 1;
    ChemE1 = ChemE1 + 0;
    CivE1 = CivE1 + 0;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 0;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 1;
    AeroE1 = AeroE1 + 0;
  }
  if (document.querySelector("#sports").checked == true) {
    MechE1 = MechE1 + 0;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 0;
    CivE1 = CivE1 + 0;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 1;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 0;
  }
  if (document.querySelector("#economics").checked == true) {
    MechE1 = MechE1 + 1;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 0;
    CivE1 = CivE1 + 1;
    InduE1 = InduE1 + 3;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 0;
    ProdE1 = ProdE1 + 1;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 0;
  }
  if (document.querySelector("#computers").checked == true) {
    MechE1 = MechE1 + 1;
    ElecE1 = ElecE1 + 3;
    ChemE1 = ChemE1 + 1;
    CivE1 = CivE1 + 0;
    InduE1 = InduE1 + 2;
    SoftE1 = SoftE1 + 5;
    BioE1 = BioE1 + 1;
    ProdE1 = ProdE1 + 3;
    MetroE1 = MetroE1 + 3;
    AeroE1 = AeroE1 + 2;
  }
  if (document.querySelector("#geography").checked == true) {
    MechE1 = MechE1 + 0;
    ElecE1 = ElecE1 + 0;
    ChemE1 = ChemE1 + 1;
    CivE1 = CivE1 + 2;
    InduE1 = InduE1 + 0;
    SoftE1 = SoftE1 + 0;
    BioE1 = BioE1 + 0;
    ProdE1 = ProdE1 + 0;
    MetroE1 = MetroE1 + 0;
    AeroE1 = AeroE1 + 0;
  }

  let MechE2 = 0;
  let ElecE2 = 0;
  let ChemE2 = 0;
  let CivE2 = 0;
  let InduE2 = 0;
  let SoftE2 = 0;
  let BioE2 = 0;
  let ProdE2 = 0;
  let MetroE2 = 0;
  let AeroE2 = 0;

  if (document.querySelector("#drawing").checked == true) {
    MechE2 = MechE2 + 2;
    ElecE2 = ElecE2 + 0;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 4;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 0;
    BioE2 = BioE2 + 3;
    ProdE2 = ProdE2 + 1;
    MetroE2 = MetroE2 + 1;
    AeroE2 = AeroE2 + 2;
  }
  if (document.querySelector("#learning-languages").checked == true) {
    MechE2 = MechE2 + 0;
    ElecE2 = ElecE2 + 1;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 0;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 3;
    BioE2 = BioE2 + 0;
    ProdE2 = ProdE2 + 0;
    MetroE2 = MetroE2 + 1;
    AeroE2 = AeroE2 + 0;
  }
  if (document.querySelector("#planning").checked == true) {
    MechE2 = MechE2 + 2;
    ElecE2 = ElecE2 + 2;
    ChemE2 = ChemE2 + 4;
    CivE2 = CivE2 + 4;
    InduE2 = InduE2 + 1;
    SoftE2 = SoftE2 + 2;
    BioE2 = BioE2 + 2;
    ProdE2 = ProdE2 + 2;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 2;
  }
  if (document.querySelector("#negotiating").checked == true) {
    MechE2 = MechE2 + 0;
    ElecE2 = ElecE2 + 0;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 3;
    InduE2 = InduE2 + 3;
    SoftE2 = SoftE2 + 0;
    BioE2 = BioE2 + 0;
    ProdE2 = ProdE2 + 3;
    MetroE2 = MetroE2 + 0;
    AeroE2 = AeroE2 + 0;
  }
  if (document.querySelector("#writing").checked == true) {
    MechE2 = MechE2 + 0;
    ElecE2 = ElecE2 + 0;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 0;
    InduE2 = InduE2 + 2;
    SoftE2 = SoftE2 + 1;
    BioE2 = BioE2 + 0;
    ProdE2 = ProdE2 + 0;
    MetroE2 = MetroE2 + 0;
    AeroE2 = AeroE2 + 0;
  }
  if (document.querySelector("#making").checked == true) {
    MechE2 = MechE2 + 2;
    ElecE2 = ElecE2 + 2;
    ChemE2 = ChemE2 + 2;
    CivE2 = CivE2 + 0;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 0;
    BioE2 = BioE2 + 2;
    ProdE2 = ProdE2 + 2;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 2;
  }
  if (document.querySelector("#three-d").checked == true) {
    MechE2 = MechE2 + 3;
    ElecE2 = ElecE2 + 0;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 1;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 0;
    BioE2 = BioE2 + 3;
    ProdE2 = ProdE2 + 2;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 3;
  }
  if (document.querySelector("#detail").checked == true) {
    MechE2 = MechE2 + 2;
    ElecE2 = ElecE2 + 3;
    ChemE2 = ChemE2 + 4;
    CivE2 = CivE2 + 1;
    InduE2 = InduE2 + 1;
    SoftE2 = SoftE2 + 2;
    BioE2 = BioE2 + 2;
    ProdE2 = ProdE2 + 1;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 2;
  }
  if (document.querySelector("#analytical").checked == true) {
    MechE2 = MechE2 + 2;
    ElecE2 = ElecE2 + 2;
    ChemE2 = ChemE2 + 4;
    CivE2 = CivE2 + 1;
    InduE2 = InduE2 + 2;
    SoftE2 = SoftE2 + 1;
    BioE2 = BioE2 + 2;
    ProdE2 = ProdE2 + 1;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 2;
  }
  if (document.querySelector("#people").checked == true) {
    MechE2 = MechE2 + 0;
    ElecE2 = ElecE2 + 0;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 3;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 0;
    BioE2 = BioE2 + 0;
    ProdE2 = ProdE2 + 2;
    MetroE2 = MetroE2 + 0;
    AeroE2 = AeroE2 + 0;
  }
  if (document.querySelector("#programming").checked == true) {
    MechE2 = MechE2 + 1;
    ElecE2 = ElecE2 + 2;
    ChemE2 = ChemE2 + 0;
    CivE2 = CivE2 + 0;
    InduE2 = InduE2 + 0;
    SoftE2 = SoftE2 + 4;
    BioE2 = BioE2 + 1;
    ProdE2 = ProdE2 + 0;
    MetroE2 = MetroE2 + 2;
    AeroE2 = AeroE2 + 1;
  }

  let MechE3 = 0;
  let ElecE3 = 0;
  let ChemE3 = 0;
  let CivE3 = 0;
  let InduE3 = 0;
  let SoftE3 = 0;
  let BioE3 = 0;
  let ProdE3 = 0;
  let MetroE3 = 0;
  let AeroE3 = 0;

  if (document.querySelector("#math-more").checked == true) {
    MechE3 = MechE3 + 10;
    ElecE3 = ElecE3 + 10;
    ChemE3 = ChemE3 + 10;
    CivE3 = CivE3 + 5;
    InduE3 = InduE3 + 5;
    SoftE3 = SoftE3 + 5;
    BioE3 = BioE3 + 10;
    ProdE3 = ProdE3 + 5;
    MetroE3 = MetroE3 + 10;
    AeroE3 = AeroE3 + 10;
  }
  if (document.querySelector("#math-purpose").checked == true) {
    MechE3 = MechE3 + 5;
    ElecE3 = ElecE3 + 5;
    ChemE3 = ChemE3 + 5;
    CivE3 = CivE3 + 10;
    InduE3 = InduE3 + 10;
    SoftE3 = SoftE3 + 10;
    BioE3 = BioE3 + 5;
    ProdE3 = ProdE3 + 10;
    MetroE3 = MetroE3 + 5;
    AeroE3 = AeroE3 + 5;
  }
  if (document.querySelector("#math-less").checked == true) {
    MechE3 = MechE3 + 0;
    ElecE3 = ElecE3 + 0;
    ChemE3 = ChemE3 + 0;
    CivE3 = CivE3 + 5;
    InduE3 = InduE3 + 5;
    SoftE3 = SoftE3 + 5;
    BioE3 = BioE3 + 0;
    ProdE3 = ProdE3 + 5;
    MetroE3 = MetroE3 + 0;
    AeroE3 = AeroE3 + 0;
  }

  let MechE4 = 0;
  let ElecE4 = 0;
  let ChemE4 = 0;
  let CivE4 = 0;
  let InduE4 = 0;
  let SoftE4 = 0;
  let BioE4 = 0;
  let ProdE4 = 0;
  let MetroE4 = 0;
  let AeroE4 = 0;

  if (document.querySelector("#most-office").checked == true) {
    MechE4 = MechE4 + 10;
    ElecE4 = ElecE4 + 10;
    ChemE4 = ChemE4 + 10;
    CivE4 = CivE4 + 10;
    InduE4 = InduE4 + 10;
    SoftE4 = SoftE4 + 10;
    BioE4 = BioE4 + 10;
    ProdE4 = ProdE4 + 5;
    MetroE4 = MetroE4 + 10;
    AeroE4 = AeroE4 + 10;
  }
  if (document.querySelector("#most-home").checked == true) {
    MechE4 = MechE4 + 0;
    ElecE4 = ElecE4 + 0;
    ChemE4 = ChemE4 + 0;
    CivE4 = CivE4 + 0;
    InduE4 = InduE4 + 0;
    SoftE4 = SoftE4 + 10;
    BioE4 = BioE4 + 0;
    ProdE4 = ProdE4 + 0;
    MetroE4 = MetroE4 + 0;
    AeroE4 = AeroE4 + 0;
  }
  if (document.querySelector("#most-lab").checked == true) {
    MechE4 = MechE4 + 7;
    ElecE4 = ElecE4 + 7;
    ChemE4 = ChemE4 + 10;
    CivE4 = CivE4 + 0;
    InduE4 = InduE4 + 0;
    SoftE4 = SoftE4 + 0;
    BioE4 = BioE4 + 10;
    ProdE4 = ProdE4 + 0;
    MetroE4 = MetroE4 + 7;
    AeroE4 = AeroE4 + 7;
  }
  if (document.querySelector("#most-factory").checked == true) {
    MechE4 = MechE4 + 7;
    ElecE4 = ElecE4 + 7;
    ChemE4 = ChemE4 + 7;
    CivE4 = CivE4 + 5;
    InduE4 = InduE4 + 5;
    SoftE4 = SoftE4 + 0;
    BioE4 = BioE4 + 5;
    ProdE4 = ProdE4 + 10;
    MetroE4 = MetroE4 + 7;
    AeroE4 = AeroE4 + 7;
  }
  if (document.querySelector("#most-construction").checked == true) {
    MechE4 = MechE4 + 0;
    ElecE4 = ElecE4 + 0;
    ChemE4 = ChemE4 + 0;
    CivE4 = CivE4 + 8;
    InduE4 = InduE4 + 5;
    SoftE4 = SoftE4 + 0;
    BioE4 = BioE4 + 0;
    ProdE4 = ProdE4 + 0;
    MetroE4 = MetroE4 + 0;
    AeroE4 = AeroE4 + 0;
  }

  let MechE5 = 0;
  let ElecE5 = 0;
  let ChemE5 = 0;
  let CivE5 = 0;
  let InduE5 = 0;
  let SoftE5 = 0;
  let BioE5 = 0;
  let ProdE5 = 0;
  let MetroE5 = 0;
  let AeroE5 = 0;

  if (document.querySelector("#sometimes-office").checked == true) {
    MechE5 = MechE5 + 5;
    ElecE5 = ElecE5 + 5;
    ChemE5 = ChemE5 + 7;
    CivE5 = CivE5 + 8;
    InduE5 = InduE5 + 4;
    SoftE5 = SoftE5 + 10;
    BioE5 = BioE5 + 5;
    ProdE5 = ProdE5 + 5;
    MetroE5 = MetroE5 + 5;
    AeroE5 = AeroE5 + 5;
  }
  if (document.querySelector("#sometimes-home").checked == true) {
    MechE5 = MechE5 + 1;
    ElecE5 = ElecE5 + 0;
    ChemE5 = ChemE5 + 0;
    CivE5 = CivE5 + 1;
    InduE5 = InduE5 + 1;
    SoftE5 = SoftE5 + 10;
    BioE5 = BioE5 + 1;
    ProdE5 = ProdE5 + 0;
    MetroE5 = MetroE5 + 0;
    AeroE5 = AeroE5 + 1;
  }
  if (document.querySelector("#sometimes-lab").checked == true) {
    MechE5 = MechE5 + 5;
    ElecE5 = ElecE5 + 5;
    ChemE5 = ChemE5 + 7;
    CivE5 = CivE5 + 0;
    InduE5 = InduE5 + 0;
    SoftE5 = SoftE5 + 0;
    BioE5 = BioE5 + 5;
    ProdE5 = ProdE5 + 2;
    MetroE5 = MetroE5 + 5;
    AeroE5 = AeroE5 + 5;
  }
  if (document.querySelector("#sometimes-factory").checked == true) {
    MechE5 = MechE5 + 5;
    ElecE5 = ElecE5 + 5;
    ChemE5 = ChemE5 + 3;
    CivE5 = CivE5 + 0;
    InduE5 = InduE5 + 5;
    SoftE5 = SoftE5 + 0;
    BioE5 = BioE5 + 5;
    ProdE5 = ProdE5 + 6;
    MetroE5 = MetroE5 + 5;
    AeroE5 = AeroE5 + 5;
  }
  if (document.querySelector("#sometimes-construction").checked == true) {
    MechE5 = MechE5 + 0;
    ElecE5 = ElecE5 + 0;
    ChemE5 = ChemE5 + 0;
    CivE5 = CivE5 + 10;
    InduE5 = InduE5 + 3;
    SoftE5 = SoftE5 + 0;
    BioE5 = BioE5 + 0;
    ProdE5 = ProdE5 + 0;
    MetroE5 = MetroE5 + 0;
    AeroE5 = AeroE5 + 0;
  }

  let MechE6 = 0;
  let ElecE6 = 0;
  let ChemE6 = 0;
  let CivE6 = 0;
  let InduE6 = 0;
  let SoftE6 = 0;
  let BioE6 = 0;
  let ProdE6 = 0;
  let MetroE6 = 0;
  let AeroE6 = 0;

  if (document.querySelector("#travel-often").checked == true) {
    MechE6 = MechE6 + 5;
    ElecE6 = ElecE6 + 5;
    ChemE6 = ChemE6 + 5;
    CivE6 = CivE6 + 10;
    InduE6 = InduE6 + 10;
    SoftE6 = SoftE6 + 0;
    BioE6 = BioE6 + 5;
    ProdE6 = ProdE6 + 10;
    MetroE6 = MetroE6 + 5;
    AeroE6 = AeroE6 + 5;
  }
  if (document.querySelector("#travel-few").checked == true) {
    MechE6 = MechE6 + 10;
    ElecE6 = ElecE6 + 10;
    ChemE6 = ChemE6 + 10;
    CivE6 = CivE6 + 5;
    InduE6 = InduE6 + 5;
    SoftE6 = SoftE6 + 5;
    BioE6 = BioE6 + 10;
    ProdE6 = ProdE6 + 5;
    MetroE6 = MetroE6 + 10;
    AeroE6 = AeroE6 + 10;
  }
  if (document.querySelector("#travel-never").checked == true) {
    MechE6 = MechE6 + 0;
    ElecE6 = ElecE6 + 5;
    ChemE6 = ChemE6 + 5;
    CivE6 = CivE6 + 0;
    InduE6 = InduE6 + 0;
    SoftE6 = SoftE6 + 10;
    BioE6 = BioE6 + 5;
    ProdE6 = ProdE6 + 0;
    MetroE6 = MetroE6 + 5;
    AeroE6 = AeroE6 + 5;
  }

  let MechE7 = 0;
  let ElecE7 = 0;
  let ChemE7 = 0;
  let CivE7 = 0;
  let InduE7 = 0;
  let SoftE7 = 0;
  let BioE7 = 0;
  let ProdE7 = 0;
  let MetroE7 = 0;
  let AeroE7 = 0;

  if (document.querySelector("#most-computer").checked == true) {
    MechE7 = MechE7 + 10;
    ElecE7 = ElecE7 + 10;
    ChemE7 = ChemE7 + 10;
    CivE7 = CivE7 + 10;
    InduE7 = InduE7 + 10;
    SoftE7 = SoftE7 + 0;
    BioE7 = BioE7 + 10;
    ProdE7 = ProdE7 + 5;
    MetroE7 = MetroE7 + 10;
    AeroE7 = AeroE7 + 10;
  }
  if (document.querySelector("#most-walking").checked == true) {
    MechE7 = MechE7 + 0;
    ElecE7 = ElecE7 + 0;
    ChemE7 = ChemE7 + 0;
    CivE7 = CivE7 + 5;
    InduE7 = InduE7 + 5;
    SoftE7 = SoftE7 + 0;
    BioE7 = BioE7 + 0;
    ProdE7 = ProdE7 + 10;
    MetroE7 = MetroE7 + 0;
    AeroE7 = AeroE7 + 0;
  }
  if (document.querySelector("#most-building").checked == true) {
    MechE7 = MechE7 + 5;
    ElecE7 = ElecE7 + 5;
    ChemE7 = ChemE7 + 2;
    CivE7 = CivE7 + 0;
    InduE7 = InduE7 + 0;
    SoftE7 = SoftE7 + 0;
    BioE7 = BioE7 + 5;
    ProdE7 = ProdE7 + 5;
    MetroE7 = MetroE7 + 5;
    AeroE7 = AeroE7 + 5;
  }
  if (document.querySelector("#most-experiments").checked == true) {
    MechE7 = MechE7 + 2;
    ElecE7 = ElecE7 + 2;
    ChemE7 = ChemE7 + 10;
    CivE7 = CivE7 + 0;
    InduE7 = InduE7 + 0;
    SoftE7 = SoftE7 + 0;
    BioE7 = BioE7 + 2;
    ProdE7 = ProdE7 + 0;
    MetroE7 = MetroE7 + 2;
    AeroE7 = AeroE7 + 2;
  }
  if (document.querySelector("#most-people").checked == true) {
    MechE7 = MechE7 + 2;
    ElecE7 = ElecE7 + 2;
    ChemE7 = ChemE7 + 2;
    CivE7 = CivE7 + 5;
    InduE7 = InduE7 + 10;
    SoftE7 = SoftE7 + 5;
    BioE7 = BioE7 + 2;
    ProdE7 = ProdE7 + 5;
    MetroE7 = MetroE7 + 2;
    AeroE7 = AeroE7 + 2;
  }

  let MechE8 = 0;
  let ElecE8 = 0;
  let ChemE8 = 0;
  let CivE8 = 0;
  let InduE8 = 0;
  let SoftE8 = 0;
  let BioE8 = 0;
  let ProdE8 = 0;
  let MetroE8 = 0;
  let AeroE8 = 0;

  if (document.querySelector("#sometimes-computer").checked == true) {
    MechE8 = MechE8 + 5;
    ElecE8 = ElecE8 + 5;
    ChemE8 = ChemE8 + 4;
    CivE8 = CivE8 + 5;
    InduE8 = InduE8 + 5;
    SoftE8 = SoftE8 + 7;
    BioE8 = BioE8 + 5;
    ProdE8 = ProdE8 + 2;
    MetroE8 = MetroE8 + 5;
    AeroE8 = AeroE8 + 5;
  }
  if (document.querySelector("#sometimes-walking").checked == true) {
    MechE8 = MechE8 + 1;
    ElecE8 = ElecE8 + 1;
    ChemE8 = ChemE8 + 1;
    CivE8 = CivE8 + 3;
    InduE8 = InduE8 + 5;
    SoftE8 = SoftE8 + 0;
    BioE8 = BioE8 + 1;
    ProdE8 = ProdE8 + 5;
    MetroE8 = MetroE8 + 1;
    AeroE8 = AeroE8 + 1;
  }
  if (document.querySelector("#sometimes-building").checked == true) {
    MechE8 = MechE8 + 5;
    ElecE8 = ElecE8 + 5;
    ChemE8 = ChemE8 + 2;
    CivE8 = CivE8 + 0;
    InduE8 = InduE8 + 0;
    SoftE8 = SoftE8 + 0;
    BioE8 = BioE8 + 3;
    ProdE8 = ProdE8 + 3;
    MetroE8 = MetroE8 + 4;
    AeroE8 = AeroE8 + 3;
  }
  if (document.querySelector("#sometimes-experiments").checked == true) {
    MechE8 = MechE8 + 1;
    ElecE8 = ElecE8 + 1;
    ChemE8 = ChemE8 + 4;
    CivE8 = CivE8 + 0;
    InduE8 = InduE8 + 0;
    SoftE8 = SoftE8 + 0;
    BioE8 = BioE8 + 2;
    ProdE8 = ProdE8 + 0;
    MetroE8 = MetroE8 + 1;
    AeroE8 = AeroE8 + 2;
  }
  if (document.querySelector("#sometimes-people").checked == true) {
    MechE8 = MechE8 + 1;
    ElecE8 = ElecE8 + 1;
    ChemE8 = ChemE8 + 1;
    CivE8 = CivE8 + 2;
    InduE8 = InduE8 + 5;
    SoftE8 = SoftE8 + 7;
    BioE8 = BioE8 + 1;
    ProdE8 = ProdE8 + 2;
    MetroE8 = MetroE8 + 1;
    AeroE8 = AeroE8 + 1;
  }

  let MechE9 = 0;
  let ElecE9 = 0;
  let ChemE9 = 0;
  let CivE9 = 0;
  let InduE9 = 0;
  let SoftE9 = 0;
  let BioE9 = 0;
  let ProdE9 = 0;
  let MetroE9 = 0;
  let AeroE9 = 0;

  if (document.querySelector("#product-vehicle").checked == true) {
    MechE9 = MechE9 + 5;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 1;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 1;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 1;
  }
  if (document.querySelector("#product-airplane").checked == true) {
    MechE9 = MechE9 + 1;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 0;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 1;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 10;
  }
  if (document.querySelector("#product-electronic").checked == true) {
    MechE9 = MechE9 + 1;
    ElecE9 = ElecE9 + 7;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 1;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 1;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 0;
  }
  if (document.querySelector("#product-construction").checked == true) {
    MechE9 = MechE9 + 0;
    ElecE9 = ElecE9 + 0;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 10;
    InduE9 = InduE9 + 1;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 0;
    MetroE9 = MetroE9 + 0;
    AeroE9 = AeroE9 + 0;
  }
  if (document.querySelector("#product-factory").checked == true) {
    MechE9 = MechE9 + 1;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 2;
    CivE9 = CivE9 + 2;
    InduE9 = InduE9 + 8;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 10;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 1;
  }
  if (document.querySelector("#product-chemical").checked == true) {
    MechE9 = MechE9 + 0;
    ElecE9 = ElecE9 + 0;
    ChemE9 = ChemE9 + 10;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 0;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 1;
    MetroE9 = MetroE9 + 0;
    AeroE9 = AeroE9 + 0;
  }
  if (document.querySelector("#product-software").checked == true) {
    MechE9 = MechE9 + 0;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 0;
    SoftE9 = SoftE9 + 10;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 0;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 0;
  }
  if (document.querySelector("#product-robot").checked == true) {
    MechE9 = MechE9 + 1;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 0;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 1;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 0;
    ProdE9 = ProdE9 + 2;
    MetroE9 = MetroE9 + 7;
    AeroE9 = AeroE9 + 0;
  }
  if (document.querySelector("#product-medical").checked == true) {
    MechE9 = MechE9 + 1;
    ElecE9 = ElecE9 + 1;
    ChemE9 = ChemE9 + 1;
    CivE9 = CivE9 + 0;
    InduE9 = InduE9 + 1;
    SoftE9 = SoftE9 + 0;
    BioE9 = BioE9 + 10;
    ProdE9 = ProdE9 + 1;
    MetroE9 = MetroE9 + 1;
    AeroE9 = AeroE9 + 0;
  }

  let MechE10 = 0;
  let ElecE10 = 0;
  let ChemE10 = 0;
  let CivE10 = 0;
  let InduE10 = 0;
  let SoftE10 = 0;
  let BioE10 = 0;
  let ProdE10 = 0;
  let MetroE10 = 0;
  let AeroE10 = 0;

  if (document.querySelector("#project-app").checked == true) {
    MechE10 = MechE10 + 0;
    ElecE10 = ElecE10 + 3;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 10;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 2;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-soup").checked == true) {
    MechE10 = MechE10 + 0;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 2;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 10;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 3;
    MetroE10 = MetroE10 + 0;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-circuit").checked == true) {
    MechE10 = MechE10 + 0;
    ElecE10 = ElecE10 + 8;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 2;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-toothpaste").checked == true) {
    MechE10 = MechE10 + 0;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 10;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 5;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 0;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-plane").checked == true) {
    MechE10 = MechE10 + 2;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 0;
    AeroE10 = AeroE10 + 9;
  }
  if (document.querySelector("#project-bridge").checked == true) {
    MechE10 = MechE10 + 1;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 10;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 0;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-sensor").checked == true) {
    MechE10 = MechE10 + 0;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 0;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 0;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-hamburger").checked == true) {
    MechE10 = MechE10 + 2;
    ElecE10 = ElecE10 + 3;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 9;
    ProdE10 = ProdE10 + 0;
    MetroE10 = MetroE10 + 2;
    AeroE10 = AeroE10 + 0;
  }
  if (document.querySelector("#project-vacuum").checked == true) {
    MechE10 = MechE10 + 5;
    ElecE10 = ElecE10 + 2;
    ChemE10 = ChemE10 + 0;
    CivE10 = CivE10 + 0;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 2;
    ProdE10 = ProdE10 + 3;
    MetroE10 = MetroE10 + 8;
    AeroE10 = AeroE10 + 3;
  }
  if (document.querySelector("#project-pump").checked == true) {
    MechE10 = MechE10 + 7;
    ElecE10 = ElecE10 + 0;
    ChemE10 = ChemE10 + 1;
    CivE10 = CivE10 + 3;
    InduE10 = InduE10 + 0;
    SoftE10 = SoftE10 + 0;
    BioE10 = BioE10 + 2;
    ProdE10 = ProdE10 + 1;
    MetroE10 = MetroE10 + 2;
    AeroE10 = AeroE10 + 3;
  }

  MechE1 = capAtTen(MechE1);
  ElecE1 = capAtTen(ElecE1);
  ChemE1 = capAtTen(ChemE1);
  CivE1 = capAtTen(CivE1);
  InduE1 = capAtTen(InduE1);
  SoftE1 = capAtTen(SoftE1);
  BioE1 = capAtTen(BioE1);
  ProdE1 = capAtTen(ProdE1);
  MetroE1 = capAtTen(MetroE1);
  AeroE1 = capAtTen(AeroE1);

  MechE2 = capAtTen(MechE2);
  ElecE2 = capAtTen(ElecE2);
  ChemE2 = capAtTen(ChemE2);
  CivE2 = capAtTen(CivE2);
  InduE2 = capAtTen(InduE2);
  SoftE2 = capAtTen(SoftE2);
  BioE2 = capAtTen(BioE2);
  ProdE2 = capAtTen(ProdE2);
  MetroE2 = capAtTen(MetroE2);
  AeroE2 = capAtTen(AeroE2);

  MechE5 = capAtTen(MechE5);
  ElecE5 = capAtTen(ElecE5);
  ChemE5 = capAtTen(ChemE5);
  CivE5 = capAtTen(CivE5);
  InduE5 = capAtTen(InduE5);
  SoftE5 = capAtTen(SoftE5);
  BioE5 = capAtTen(BioE5);
  ProdE5 = capAtTen(ProdE5);
  MetroE5 = capAtTen(MetroE5);
  AeroE5 = capAtTen(AeroE5);

  MechE8 = capAtTen(MechE8);
  ElecE8 = capAtTen(ElecE8);
  ChemE8 = capAtTen(ChemE8);
  CivE8 = capAtTen(CivE8);
  InduE8 = capAtTen(InduE8);
  SoftE8 = capAtTen(SoftE8);
  BioE8 = capAtTen(BioE8);
  ProdE8 = capAtTen(ProdE8);
  MetroE8 = capAtTen(MetroE8);
  AeroE8 = capAtTen(AeroE8);

  MechE9 = capAtTen(MechE9);
  ElecE9 = capAtTen(ElecE9);
  ChemE9 = capAtTen(ChemE9);
  CivE9 = capAtTen(CivE9);
  InduE9 = capAtTen(InduE9);
  SoftE9 = capAtTen(SoftE9);
  BioE9 = capAtTen(BioE9);
  ProdE9 = capAtTen(ProdE9);
  MetroE9 = capAtTen(MetroE9);
  AeroE9 = capAtTen(AeroE9);

  MechE10 = capAtTen(MechE10);
  ElecE10 = capAtTen(ElecE10);
  ChemE10 = capAtTen(ChemE10);
  CivE10 = capAtTen(CivE10);
  InduE10 = capAtTen(InduE10);
  SoftE10 = capAtTen(SoftE10);
  BioE10 = capAtTen(BioE10);
  ProdE10 = capAtTen(ProdE10);
  MetroE10 = capAtTen(MetroE10);
  AeroE10 = capAtTen(AeroE10);

  let MechE =
    MechE1 +
    MechE2 +
    MechE3 +
    MechE4 +
    MechE5 +
    MechE6 +
    MechE7 +
    MechE8 +
    MechE9 +
    MechE10;
  let ElecE =
    ElecE1 +
    ElecE2 +
    ElecE3 +
    ElecE4 +
    ElecE5 +
    ElecE6 +
    ElecE7 +
    ElecE8 +
    ElecE9 +
    ElecE10;
  let ChemE =
    ChemE1 +
    ChemE2 +
    ChemE3 +
    ChemE4 +
    ChemE5 +
    ChemE6 +
    ChemE7 +
    ChemE8 +
    ChemE9 +
    ChemE10;
  let CivE =
    CivE1 +
    CivE2 +
    CivE3 +
    CivE4 +
    CivE5 +
    CivE6 +
    CivE7 +
    CivE8 +
    CivE9 +
    CivE10;
  let InduE =
    InduE1 +
    InduE2 +
    InduE3 +
    InduE4 +
    InduE5 +
    InduE6 +
    InduE7 +
    InduE8 +
    InduE9 +
    InduE10;
  let SoftE =
    SoftE1 +
    SoftE2 +
    SoftE3 +
    SoftE4 +
    SoftE5 +
    SoftE6 +
    SoftE7 +
    SoftE8 +
    SoftE9 +
    SoftE10;
  let BioE =
    BioE1 +
    BioE2 +
    BioE3 +
    BioE4 +
    BioE5 +
    BioE6 +
    BioE7 +
    BioE8 +
    BioE9 +
    BioE10;
  let ProdE =
    ProdE1 +
    ProdE2 +
    ProdE3 +
    ProdE4 +
    ProdE5 +
    ProdE6 +
    ProdE7 +
    ProdE8 +
    ProdE9 +
    ProdE10;
  let MetroE =
    MetroE1 +
    MetroE2 +
    MetroE3 +
    MetroE4 +
    MetroE5 +
    MetroE6 +
    MetroE7 +
    MetroE8 +
    MetroE9 +
    MetroE10;
  let AeroE =
    AeroE1 +
    AeroE2 +
    AeroE3 +
    AeroE4 +
    AeroE5 +
    AeroE6 +
    AeroE7 +
    AeroE8 +
    AeroE9 +
    AeroE10;

  let percentageArray = [
    [MechE, "MechE"],
    [ElecE, "ElecE"],
    [ChemE, "ChemE"],
    [CivE, "CivE"],
    [InduE, "InduE"],
    [SoftE, "SoftE"],
    [BioE, "BioE"],
    [ProdE, "ProdE"],
    [MetroE, "MetroE"],
    [AeroE, "AeroE"],
  ];

  sortScore(percentageArray);
}

let quizSubmit = document.querySelector("button.submit-button");
quizSubmit.addEventListener("click", scoreKeeping);
