import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

import Home from "../../views/HomeView.vue"

test('Testa se os botões da tela "Inicio" renderizarão', () => {
    const homeView = mount(Home)

    expect(homeView.html()).toContain('<button>Piloto</button>')
    expect(homeView.html()).toContain('<button>ATC</button>')
})