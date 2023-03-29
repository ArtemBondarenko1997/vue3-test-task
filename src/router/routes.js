import LoginForm from '../pages/LoginForm.vue'
import GamePage from '../pages/GamePage.vue'

export const routes = [
    {
        path: '/',
        component: LoginForm,
        name: 'login'
    },
    {
        path: '/game',
        component: GamePage,
        name: 'game'
    },
]
