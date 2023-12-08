import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from "@/store";
import { MutationTypes } from "@/store/mutation-types";
import Dashboard from '@/views/dashboard/dashboard.vue';
import ManageMovies from '@/views/manageMovies/manageMovies.vue';
import ManageNews from '@/views/news/news.vue';
import ManageSchedules from '@/views/manageSchedule/manageSchedule.vue';
import ManageTheatres from '@/views/manageTheatre/manageTheatre.vue';
import ManageTickets from '@/views/manageTicket/manageTicket.vue';
import ManageVouchers from '@/views/manageVoucher/manageVoucher.vue';
import Login from '@/views/login/login.vue';
const getUserData = async () => {
  const sessionTokens = JSON.parse(localStorage.getItem("sessionTokens")!);
  if (!sessionTokens) return;
  const subject_id = sessionTokens;
  const payload = {
    subject_id,
  };
  const res = await store.dispatch(
    MutationTypes.GET_CURRENT_USER,
    payload
  );
  if (!res) return;
  if (res.status === 200) {
    store.commit("setUserData", res.data);
    return
  }
};
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/movie-management',
    name: 'Manage Movies',
    component: ManageMovies,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/schedule-management',
    name: 'Manage Schedules',
    component: ManageSchedules,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/new-management',
    name: 'Manage News',
    component: ManageNews,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/voucher-management',
    name: 'Manage Vouchers',
    component: ManageVouchers,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/ticket-management',
    name: 'Manage Tickets',
    component: ManageTickets,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/theatre-management',
    name: 'Manage Theatre',
    component: ManageTheatres,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
  return;
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let userData:any = await getUserData();
    userData = store.state.userData;
    if (!userData) {
      next({ path: "/login" });
      return; 
    }
    userData = store.state.userData;
    if (!userData) {
      await getUserData();
    }
    userData = store.state.userData;
  }
  next();
});

export default router
