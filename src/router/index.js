import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "@/components/Dashboard"
import About from "@/components/About"
import Add from "@/components/Add"
import AddBasic from "@/components/AddBasic"
import AddX from "@/components/AddX"
import Sub from "@/components/Sub"
import SubBasic from "@/components/SubBasic"
import SubX from "@/components/SubX"

const routes = [
	{ path: "", name: "Dashboard", component: Dashboard },
	{ path: "/about", name: "About", component: About },
	{ path: "/add", name: "Add", component: Add },
	{ path: "/add_basic", name: "AddBasic", component: AddBasic, props: true },
	{ path: "/add_with_x", name: "AddX", component: AddX, props: true },

	{ path: "/sub", name: "Sub", component: Sub },
	{ path: "/sub_basic", name: "SubBasic", component: SubBasic, props: true },
	{ path: "/sub_with_x", name: "SubX", component: SubX, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;