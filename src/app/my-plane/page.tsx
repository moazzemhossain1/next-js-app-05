"use client";

import { useState } from "react";
import ExcriesCard from "@/components/MyPlaneRealted/ExcriesCard";
import SaveExriesCard from "@/components/MyPlaneRealted/SaveExriesCard";
import PlaneExcriesCard from "@/components/MyPlaneRealted/PlaneExcriesCard";
import SaveCard from "@/components/MyPlaneRealted/SaveCard";

const MyplanePage = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const [sortBy, setSortBy] = useState("");

    return (
        <div className="container mx-auto">

            <h2 className="text-[30px] font-bold text-white">
                MY PLAN
            </h2>

            <p className="mb-8 text-[14px] text-[#8A92A0]">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            {/* Stats */}
            {activeTab === "today" && (
                <ExcriesCard />
            )}

            {activeTab === "saved" && (
                <SaveExriesCard />
            )}

            {/* Tabs + Sort */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-8 w-full">

                {/* Tabs */}
                <div className="tabs tabs-box w-fit">

                    <button
                        onClick={() => setActiveTab("today")}
                        className={`tab ${activeTab === "today"
                                ? "tab-active"
                                : ""
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`tab ${activeTab === "saved"
                                ? "tab-active"
                                : ""
                            }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Sort */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#0B1220] border border-[#1E293B]
                    text-white rounded-xl px-4 py-3
                    outline-none cursor-pointer
                    w-full sm:w-auto"
                >
                    <option value="">
                        Sort By
                    </option>

                    <option value="duration">
                        Duration
                    </option>

                    <option value="calories">
                        Calories
                    </option>

                    <option value="rating">
                        Rating
                    </option>
                </select>

            </div>

            {/* Today's Plan */}
            {activeTab === "today" && (
                <PlaneExcriesCard
                    sortBy={sortBy}
                />
            )}

            {/* Saved */}
            {activeTab === "saved" && (
                <SaveCard
                    sortBy={sortBy}
                />
            )}

        </div>
    );
};

export default MyplanePage;