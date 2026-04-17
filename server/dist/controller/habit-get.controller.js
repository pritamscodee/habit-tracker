import { get_data } from "../services/habit-get.services";
export async function Get_Req(req, res) {
    try {
        const habits = await get_data();
        if (!habits || habits.length === 0) {
            res.status(404).json({
                success: false,
                message: "No habits found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            count: habits.length,
            data: habits,
        });
    }
    catch (error) {
        console.error("Error fetching habits:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}
