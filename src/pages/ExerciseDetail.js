import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchURL =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseVideoData = await fetchData(
        `${youtubeSearchURL}/search?query=${exerciseDetail?.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData?.contents);

      const exerciseDetailData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      console.log(exerciseDetail?.name);

      const targetMusclesExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/target/${exerciseDetailData?.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMusclesExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbURL}/exercises/equipment/${exerciseDetailData?.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id, exerciseDetail?.name]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
