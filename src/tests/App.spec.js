import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

import App from "../App.vue"

test('Testando se a navbar não renderiza quando a view atual e "Inicio"', () => {
    const AppView = mount(App)

    expect(AppView.find('nav').exists()).toBe(false)
})