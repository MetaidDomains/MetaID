import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

const initModule = () => {

        const requireModules = import.meta.globEager("./modules/*.js")
        const modules = {}
        for (let i in requireModules) {

                const moduleName = i.split("/")[i.split("/").length - 1].replace(".js", "")

                modules[moduleName] = requireModules[i].default
        }
        return modules
}

const store = createStore({
        state() {

        },
        mutations: {

        },
        modules: { ...initModule() },
        plugins: [
                createPersistedState(),
        ],
})

export default store