/* eslint-disable no-template-curly-in-string */

export const blockly_toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "urb",
      colour: 210,
      contents: [
        {
          kind: "category",
          name: "demos",
          contents: [
            {
              kind: "category",
              name: "demo 1",
              contents: [
                {
                  kind: "block",
                  blockxml:
                    '<block type="horizontal_menu_export" x="16" y="109"><field name="subvariant">speech bubble</field><value name="items"><block type="lists_create"><mutation inputs="ADD0,ADD1" next="4"></mutation><value name="ADD0"><block type="horizontal_menu_item"><field name="leftIcon"></field><field name="title">menu 1</field><field name="rightIcon"></field><field name="position">left</field><value name="items"><block type="lists_create"><mutation inputs="ADD0,ADD1" next="4"></mutation><value name="ADD0"><block type="horizontal_menu_subitems"><field name="leftIcon"></field><field name="title">item 1 1</field><field name="rightIcon"></field><field name="position">left</field></block></value><value name="ADD1"><block type="horizontal_menu_subitems"><field name="leftIcon"></field><field name="title">item 1 2</field><field name="rightIcon"></field><field name="position">left</field></block></value></block></value></block></value><value name="ADD1"><block type="horizontal_menu_item"><field name="leftIcon"></field><field name="title">menu 2</field><field name="rightIcon"></field><field name="position">left</field><value name="items"><block type="lists_create"><mutation inputs="ADD0,ADD1" next="4"></mutation><value name="ADD0"><block type="horizontal_menu_subitems"><field name="leftIcon"></field><field name="title">item 2 1</field><field name="rightIcon"></field><field name="position">left</field></block></value><value name="ADD1"><block type="horizontal_menu_subitems"><field name="leftIcon"></field><field name="title">item 2 2</field><field name="rightIcon"></field><field name="position">left</field></block></value></block></value></block></value></block></value></block>',
                },
              ],
            },
            {
              kind: "category",
              name: "demo 2",
              contents: [
                {
                  kind: "block",
                  blockxml:
                    '<block type="procedures_defreturn" x="16" y="8"><mutation><arg name="{state, setState}" ></arg></mutation><field name="NAME">top_menu</field><field name="GZM)Ak$Nvmo#bcP4Jw~1">{state, setState}</field><comment pinned="false" h="80" w="160">Describe this function...</comment><statement name="STACK"><block type="menu_function_code"><field name="reduxPath">to do</field><field name="dbPath">to do</field><value name="initial state"><block type="key_value_collator"><mutation inputs="ADD0,ADD1" next="2"></mutation><value name="ADD0"><block type="key_value_pair"><field name="key">activeMenu</field><value name="value"><block type="text"><field name="TEXT">main</field></block></value></block></value><value name="ADD1"><block type="db_fields"><mutation inputs="ADD0,ADD1" next="2"></mutation><value name="ADD0"><block type="menu_init_field"><field name="field">to do</field><field name="type">string</field><field name="label">To Do</field><field name="width">180</field></block></value><value name="ADD1"><block type="menu_init_field"><field name="field">completed</field><field name="type">boolean</field><field name="label">Completed</field><field name="width">100</field></block></value></block></value></block></value></block></statement><value name="RETURN"><block type="lists_create"><mutation inputs="ADD0,ADD1,ADD2" next="3"></mutation><value name="ADD0"><block type="menu_object"><field name="name">main</field><field name="title">To Dos</field><value name="children"><block type="urb_floating_button"><value name="children"><block type="urb_list"><field name="listen">TRUE</field><statement name="onRowClick"><block type="set_state_plus_minus"><mutation items="4"></mutation><field name="key2">activeMenu</field><field name="value2">"edit"</field><field name="key3">$key</field><field name="value3">item.$key</field></block></statement></block></value><statement name="onClick"><block type="set_state_plus_minus"><mutation items="3"></mutation><field name="key2">activeMenu</field><field name="value2">"add"</field></block></statement></block></value></block></value><value name="ADD1"><block type="menu_object"><field name="name">add</field><field name="title">Add</field><value name="children"><block type="urb_add"><statement name="onFinished"><block type="set_state_plus_minus"><mutation items="3"></mutation><field name="key2">activeMenu</field><field name="value2">"main"</field></block></statement></block></value></block></value><value name="ADD2"><block type="menu_object"><field name="name">edit</field><field name="title">Edit</field><value name="children"><block type="urb_edit"><field name="findKey">state.$key</field><field name="canDelete">TRUE</field><statement name="onFinished"><block type="set_state_plus_minus"><mutation items="3"></mutation><field name="key2">activeMenu</field><field name="value2">"main"</field></block></statement></block></value></block></value></block></value></block>',
                },
              ],
            },
          ],
        },
        {
          kind: "block",
          type: "keys_values_plus_minus",
        }, 
        {
          kind: "block",
          type: "set_state_plus_minus",
        },
        {
          kind: "block",
          type: "object",
        },
        {
          kind: "block",
          type: "menu_function",
        },
        {
          kind: "block",
          type: "horizontal_menu_export",
        },
        {
          kind: "block",
          type: "horizontal_menu_item",
        },
        {
          kind: "block",
          type: "horizontal_menu_subitems",
        },
        {
          kind: "block",
          type: "pagebuilder_or_vertical_menu_export",
        },

        // {
        //   kind: "block",
        //   blockxml:
        //     '<block type="export_const" x="16" y="8"><field name="name">top_menu</field><value name="menus"><block type="lists_create"><mutation inputs="ADD0,ADD1" next="3"></mutation><value name="ADD0"><block type="horizontal_menu_item"><field name="leftIcon"></field><field name="text"></field><field name="rightIcon"></field><field name="position">left</field><value name="items"><block type="lists_create"><mutation inputs="ADD0,ADD1" next="3"></mutation><value name="ADD0"><block type="horizontal_menu_subitems"><field name="leftIcon"></field><field name="text"></field><field name="rightIcon"></field><field name="position">left</field></block></value></block></value></block></value></block></value></block>',
        // },
        {
          kind: "block",
          blockxml:
            '<block type="menu_function_code" id="159tGpW~HPzEUCAQmqG`" x="3" y="623"><field name="reduxPath"></field><field name="dbPath"></field><value name="initial state"><block type="key_value_collator" id="6.S;-]ySM+}z_:t25okS"><mutation inputs="ADD0,ADD1" next="2"></mutation><value name="ADD0"><block type="key_value_pair" id="l|5Gib`7zb@n(Hp%6/%D"><field name="key"></field><value name="value"><block type="text" id="e|z$Ut?/,a|=MY(3?_gv"><field name="TEXT"></field></block></value></block></value><value name="ADD1"><block type="db_fields" id="0!C;_aMcXwv:$kdL(@C="><mutation inputs="ADD0,ADD1" next="2"></mutation><value name="ADD0"><block type="menu_init_field" id="Q%;Y6g`0$osII`m{cCG%"><field name="field"></field><field name="type">string</field><field name="label"></field><field name="width">80</field></block></value><value name="ADD1"><block type="menu_init_field" id="k@pVg34=-naO1+L75+lX"><field name="field"></field><field name="type">string</field><field name="label"></field><field name="width">80</field></block></value></block></value></block></value></block>',
        },
        {
          kind: "block",
          blockxml:
            '<block type="lists_create" id="01$udWpgt5h.lU5b=mV/" x="8" y="195"><mutation inputs="ADD0,ADD1,ADD2" next="3"></mutation><value name="ADD0"><block type="menu_object" id="Y`QKbz}@A7*!~+pm,/_u"><field name="name"></field><field name="title"></field><value name="children"><block type="urb_floating_button" id="SK{3L8.mqmb?C?(]|awH"><value name="children"><block type="urb_list" id="q`yasS8,Y4+vhETt^et;"><field name="listen">TRUE</field><statement name="onRowClick"><block type="set_state_plus_minus" id="OkqIs^e`YdbiTcxGT;E7"><mutation items="3"></mutation><field name="key2"></field><field name="value2"></field></block></statement></block></value><statement name="onClick"><block type="set_state_plus_minus" id="ufReh/14!ir9pK|AplVL"><mutation items="3"></mutation><field name="key2"></field><field name="value2"></field></block></statement></block></value></block></value><value name="ADD1"><block type="menu_object" id="lM)Mbx{Q:CI3ftfWTNR_"><field name="name"></field><field name="title"></field><value name="children"><block type="urb_add" id="m}$u]xP:=uB8x1H8oQ;("><statement name="onFinished"><block type="set_state_plus_minus" id="QZC6z2!^NY:8F]snaM)a"><mutation items="3"></mutation><field name="key2"></field><field name="value2"></field></block></statement></block></value></block></value><value name="ADD2"><block type="menu_object" id="PBVL(yh%ry:MFm~jox_I"><field name="name"></field><field name="title"></field><value name="children"><block type="urb_add" id="_;/]Ws(W:-i4u!fEd(3Z"><statement name="onFinished"><block type="set_state_plus_minus" id="ek)PL*f%3Wb$=XPJD+H~"><mutation items="3"></mutation><field name="key2"></field><field name="value2"></field></block></statement></block></value></block></value></block>',
        },
        {
          kind: "block",
          blockxml:
            '<block type="set_state_plus_minus" id=".E?-nQE@gH()jBQ)CI8?" x="52" y="550"><mutation items="4"></mutation><field name="key2">activeMenu</field><field name="value2">"edit"</field><field name="key3">$key</field><field name="value3">item.$key</field></block>',
        },

        {
          kind: "block",
          type: "export_const",
        },
        {
          kind: "block",
          type: "urb_color_picker",
        },
        {
          kind: "block",
          type: "menu_item",
        },
        {
          kind: "block",
          type: "urb_edit_list",
        },
        {
          kind: "block",
          type: "urb_options_select",
        },
        {
          kind: "block",
          type: "test_field_grid_dropdown",
        },
        {
          kind: "block",
          type: "key_value_collator",
        },
        {
          kind: "block",
          type: "key_value_pair",
        },
        {
          kind: "block",
          type: "lists_create",
        },
        {
          kind: "block",
          type: "db_fields",
        },
        {
          kind: "block",
          type: "test_field_slider",
        },
        {
          kind: "block",
          type: "menu_function_code",
        },
        {
          kind: "block",
          type: "menu_object",
        },
        {
          kind: "block",
          type: "menu_init_field",
        },
        {
          kind: "block",
          type: "urb_component",
        },
        {
          kind: "block",
          type: "value_to_statement",
        },
        {
          kind: "block",
          type: "urb_floating_button",
        },
        {
          kind: "block",
          type: "urb_list",
        },
        {
          kind: "block",
          type: "urb_add",
        },
        {
          kind: "block",
          type: "urb_set",
        },
        {
          kind: "block",
          type: "urb_edit",
        },
        {
          kind: "category",
          name: "page builder",
          colour: 210,
          contents: [
            {
              kind: "block",
              type: "icon_builder_icon",
            },
          ],
        },
        {
          kind: "category",
          name: "menu builder",
          colour: 210,
          contents: [
            {
              kind: "block",
              type: "icon_builder_icon",
            },
          ],
        },
        {
          kind: "category",
          name: "icon builder",
          colour: 210,
          contents: [
            {
              kind: "block",
              type: "icon_builder_icon",
            },
          ],
        },
        {
          kind: "category",
          name: "content builder",
          colour: 210,
          contents: [
            {
              kind: "block",
              type: "icon_builder_icon",
            },
          ],
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          blockxml:
            '<block type="logic_compare"><field name="OP">EQ</field></block>',
        },
        {
          kind: "block",
          blockxml:
            '<block type="logic_operation"><field name="OP">AND</field></block>',
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          blockxml:
            '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: 120,
      contents: [
        {
          kind: "block",
          blockxml:
            '<block type="controls_repeat_ext">\n' +
            '      <value name="TIMES">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_whileUntil">\n' +
            '      <field name="MODE">WHILE</field>\n' +
            "    </block>",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_for">\n' +
            '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="BY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_forEach">\n' +
            '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="controls_flow_statements">\n' +
            '      <field name="FLOW">BREAK</field>\n' +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: 230,
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="math_round">\n' +
            '      <field name="OP">ROUND</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">3.1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_number">\n' +
            '      <field name="NUM">0</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_single">\n' +
            '      <field name="OP">ROOT</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">9</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_trig">\n' +
            '      <field name="OP">SIN</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">45</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_constant">\n' +
            '      <field name="CONSTANT">PI</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_number_property">\n' +
            '      <mutation divisor_input="false"></mutation>\n' +
            '      <field name="PROPERTY">EVEN</field>\n' +
            '      <value name="NUMBER_TO_CHECK">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_arithmetic">\n' +
            '      <field name="OP">ADD</field>\n' +
            '      <value name="A">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="B">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_on_list">\n' +
            '      <mutation op="SUM"></mutation>\n' +
            '      <field name="OP">SUM</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_modulo">\n' +
            '      <value name="DIVIDEND">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">64</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="DIVISOR">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_constrain">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="LOW">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="HIGH">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="math_random_int">\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "math_random_float",
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      colour: 160,
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="text_charAt">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text">\n' +
            '      <field name="TEXT"></field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_append">\n' +
            '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_length">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_isEmpty">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            '      <value name="FIND">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_join">\n' +
            '      <mutation items="2"></mutation>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_getSubstring">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="STRING">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_changeCase">\n' +
            '      <field name="CASE">UPPERCASE</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_trim">\n' +
            '      <field name="MODE">BOTH</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_print">\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="text_prompt_ext">\n' +
            '      <mutation type="TEXT"></mutation>\n' +
            '      <field name="TYPE">TEXT</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      colour: 259,
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="lists_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_create_with">\n' +
            '      <mutation items="0"></mutation>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_repeat">\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">5</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_getIndex">\n' +
            '      <mutation statement="false" at="true"></mutation>\n' +
            '      <field name="MODE">GET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_setIndex">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="MODE">SET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_getSublist">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            "        </block>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_split">\n' +
            '      <mutation mode="SPLIT"></mutation>\n' +
            '      <field name="MODE">SPLIT</field>\n' +
            '      <value name="DELIM">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">,</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="lists_sort">\n' +
            '      <field name="TYPE">NUMERIC</field>\n' +
            '      <field name="DIRECTION">1</field>\n' +
            "    </block>\n",
        },
      ],
    },
    {
      kind: "category",
      name: "Colour",
      colour: 19,
      contents: [
        {
          kind: "block",
          blockxml:
            '    <block type="colour_picker">\n' +
            '      <field name="COLOUR">#ff0000</field>\n' +
            "    </block>\n",
        },
        {
          kind: "block",
          type: "colour_random",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="colour_rgb">\n' +
            '      <value name="RED">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="GREEN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="BLUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
        {
          kind: "block",
          blockxml:
            '    <block type="colour_blend">\n' +
            '      <value name="COLOUR1">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#ff0000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="COLOUR2">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#3333ff</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="RATIO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0.5</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
        },
      ],
    },
    { kind: "sep" },
    {
      kind: "category",
      name: "Custom Button",
      colour: 19,
      contents: [
        {
          kind: "button",
          text: "A button",
          callbackKey: "myFirstButtonPressed",
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      custom: "VARIABLE",
      colour: 330,
    },
    {
      kind: "category",
      name: "Functions",
      custom: "PROCEDURE",
      colour: 290,
    },
  ],
};
