import { Appbar, Menu, back } from "react-native-paper";
import { useState } from "react";

export default function CustomNavigationBar(navigation, back) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {!back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Arlen's Apostles" />
      {back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Instructors"
          />
          <Menu.Item
            title="Training Management"
            onPress={() => navigation.push("Admin")}
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            title="Registration"
            disabled
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}
