import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "@/components/Dashboard"
import About from "@/components/About"

import Add from "@/components/Add"
import AddBasic from "@/components/AddBasic"
import AddX from "@/components/AddX"

import Sub from "@/components/Sub"
import SubBasic from "@/components/SubBasic"
import SubX from "@/components/SubX"

import Mul from "@/components/Mul"
import MulBasic from "@/components/MulBasic"
import MulX from "@/components/MulX"

import Div from "@/components/Div"
// import DivBasic from "@/components/DivBasic"
// import DivX from "@/components/DivX"

const routes = [
	{ path: "", name: "Dashboard", component: Dashboard },
	{ path: "/about", name: "About", component: About },

	{ path: "/add", name: "Add", component: Add },
	{ path: "/add_basic", name: "AddBasic", component: AddBasic, props: true },
	{ path: "/add_with_x", name: "AddX", component: AddX, props: true },

	{ path: "/sub", name: "Sub", component: Sub },
	{ path: "/sub_basic", name: "SubBasic", component: SubBasic, props: true },
	{ path: "/sub_with_x", name: "SubX", component: SubX, props: true },

	{ path: "/mul", name: "Mul", component: Mul },
	{ path: "/mul_basic", name: "MulBasic", component: MulBasic, props: true },
	{ path: "/mul_with_x", name: "MulX", component: MulX, props: true },

	{ path: "/div", name: "Div", component: Div },
	// { path: "/div_basic", name: "DivBasic", component: DivBasic, props: true },
	// { path: "/div_with_x", name: "DivX", component: DivX, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;