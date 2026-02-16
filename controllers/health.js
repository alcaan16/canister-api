
export class HealthController {
    static async health(request, response) {
        return response.json({
            status: 'ok',
            uptime: process.uptime()
        })
    }
}