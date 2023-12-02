import { Options, Vue } from "vue-class-component";

@Options({
  components: {

  },
})
export default class Login extends Vue {
  public pageTitle:any=''
  public userData:any="Tester1";
  created() {
    this.pageTitle = this.getPageIdFromRoute(this.$route.path);
  }
  
  private getPageIdFromRoute(routePath: string) {
    const routeMappings: any = {
      '/': 'Dashboard',
      '/movie-management': 'Manage Movies',
      '/schedule-management': 'Manage Schedules',
      '/theatre-management': 'Manage Theatres',
      '/new-management': 'Manage News',
      '/voucher-management': 'Manage Vouchers',
      '/ticket-management': 'Manage Tickets',
    };
    return routeMappings[routePath] || '';
  }
}