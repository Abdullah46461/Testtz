import { createStore } from "vuex";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export default createStore({
  state: {
    arr: [
      {
        img: "/src/assets/images/car.svg",
        title: "Выгода",
        text: "Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля",
      },
      {
        img: "/src/assets/images/actual.svg",
        title: "Актуальность",
        text: "Выберите актуальные для вас сервисные предложения",
      },
      {
        img: "/src/assets/images/chooz.svg",
        title: "Широкий выбор",
        text: "Выберите дилера, который вам подходит",
      },
      {
        img: "/src/assets/images/online.svg",
        title: "Онлайн обслуживание",
        text: "Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты",
      },
    ],
    blockHeading: "",
    features: [],
    payload: {
      text: "Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор",
      image: "https://test-task-frontend-2023.slava.digital/assets/img4.png",
      image_alt: "нестационарный гироскопический стабилизатор",
      model_name: "Figaro",
    },
  },
  mutations: {
    SET_PUSH_ARR(state, newItem) {
      if (newItem) {
        state.arr.push(newItem);
      }
    },

    SET_BLOCK_HEADING(state, heading) {
      state.blockHeading = heading;
    },
    SET_FEATURES(state, features) {
      state.features = features;
    },
  },
  actions: {
    async fetchFeatures({ commit }, modelName = "Figaro") {
      try {
        const response = await axios.post(apiUrl);
        const { block_heading, features } = response.data;
        console.log(response.data);
        const filteredFeatures = features
          .filter(
            (feature) =>
              feature.model_name === modelName &&
              feature.description !== "" &&
              feature.image !== null,
          )
          .sort((a, b) => a.sorting - b.sorting);

        commit("SET_BLOCK_HEADING", block_heading);
        commit("SET_FEATURES", filteredFeatures);
        console.log("Features", filteredFeatures);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    },
    async addSpecified({ state, commit }) {
      try {
        const response = await axios.put(apiUrl, state.payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("SET_ARR_PUSH", state.payload);
        console.log("Ответ от сервера:", response.data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    },
  },
  getters: {
    blockHeading: (state) => state.blockHeading,
    features: (state) => state.features,
  },
});
