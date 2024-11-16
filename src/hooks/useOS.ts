import { arch, type } from "@tauri-apps/plugin-os";

export function useOS() {
  return {
    os: type(),
    arch: arch(),
  };
}
