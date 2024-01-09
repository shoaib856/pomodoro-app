import { useRef } from "react";
import settingIcon from "../../assets/icons/icon-settings.svg";
import Divider from "../Divider";

import ApplyButton from "./Components/ApplyButton";
import Section from "./Components/Section";
import ModalHeader from "./Components/ModalHeader";
import Modal from "./Components/Modal";
import InputField from "./Components/InputField";
import { useGetSettingValues } from "../../Hooks/useGetSettingValues";
import FontOption from "./Components/FontOption";

const Setting = () => {
  const { pomodoro, longBreak, shortBreak } = useGetSettingValues();

  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => modalRef.current?.showModal();
  const closeModal = () => modalRef.current?.close();

  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-ghost btn-circle p-1 w-fit min-h-0 h-fit opacity-50 hover:opacity-100 transition-opacity"
      >
        <img src={settingIcon} alt="setting icon" />
      </button>

      <Modal ref={modalRef}>
        <ModalHeader {...{ closeModal }} />
        <Divider />
        <Section>
          <Section.Header text="time (minutes)" />
          <Section.Content gap>
            <InputField defaultVal={pomodoro} label="pomodoro" />
            <InputField defaultVal={shortBreak} label="short break" />
            <InputField defaultVal={longBreak} label="long break" />
          </Section.Content>
        </Section>
        <Divider />
        <Section>
          <Section.Header text="Font" />
          <Section.Content>
            <FontOption font="kumbh-sans" />
            <FontOption font="roboto-slab" />
            <FontOption font="space-mono" />
          </Section.Content>
        </Section>
        <Divider />
        <ApplyButton {...{ closeModal }} />
      </Modal>
    </>
  );
};

export default Setting;
