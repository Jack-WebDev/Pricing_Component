form = document.getElementById("form");
pageViewsContainer = document.querySelector(".pageViews");
rangeInput = document.getElementById("range");
paymentAmount = document.querySelector(".amount");
paymentPerMonth = document.querySelector(".per__month");
toggleInput = document.getElementById("check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const DATA_VIEWS = [
  {
    pageViews: "10K",
    monthlyCost: 8,
    leftPercentage: 0,
  },

  {
    pageViews: "50K",
    monthlyCost: 12,
    leftPercentage: 25,
  },

  {
    pageViews: "100K",
    monthlyCost: 16,
    leftPercentage: 50,
  },

  {
    pageViews: "500K",
    monthlyCost: 24,
    leftPercentage: 75,
  },

  {
    pageViews: "1M",
    monthlyCost: 36,
    leftPercentage: 100,
  },
];

const getData = () => {
  const currentValue = rangeInput.value;
  const index = currentValue - 1;
  return ({ pageViews, monthlyCost, leftPercentage } = DATA_VIEWS[index]);
};

const updatePageViews = () => {
  const { pageViews } = getData();
  pageViewsContainer.textContent = `${pageViews} PAGEVIEWS`;
};

const isAnnualToggle = () => {
  return toggleInput.checked;
};

const updateCost = () => {
  const { monthlyCost } = getData();
  const isAnnual = isAnnualToggle();
  const price = isAnnual ? monthlyCost * 12 * 0.75 : monthlyCost;
  paymentAmount.textContent = `R${price.toFixed(2)}`;

  if (isAnnual) {
    paymentPerMonth.textContent = "/ year";
  } else {
    paymentPerMonth.textContent = "/ month";
  }
};

const updateTrack = () => {
  const { leftPercentage } = getData();
  form.style.setProperty("--left", leftPercentage);
};

const updateRangeInput = () => {
  updatePageViews();
  updateCost();
  updateTrack();
};

rangeInput.addEventListener("input", updateRangeInput);
toggleInput.addEventListener("input", updateCost);
