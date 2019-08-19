const request = {
  get: (url: string) => (
    url.endsWith('/api/plugin/export')
      ? [
        {
          index: 0,
          name: 'test',
          desc: null,
          add_time: 1547006221,
          up_time: 1547006221,
          list: [
            {
              query_path: {
                path: '/deleteMethod',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: true,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 69,
              method: 'DELETE',
              catid: 58,
              title: 'DELETE 方法',
              path: '/deleteMethod',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555570897,
              up_time: 1555944169,
              req_query: [],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd2e993bc6574a2de33e5',
                  name: 'Content-Type',
                  value: 'application/json',
                },
              ],
              req_body_form: [],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{}}',
              req_body_type: 'json',
              req_body_other: '{"type":"object","title":"empty object","properties":{"id":{"type":"string","description":"ID"}},"required":["id"]}',
            },
            {
              query_path: {
                path: '/getMethod',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: true,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 45,
              method: 'GET',
              catid: 58,
              title: 'GET 方法',
              path: '/getMethod',
              project_id: 23,
              res_body_type: 'json',
              uid: 11,
              add_time: 1547006228,
              up_time: 1555943874,
              req_body_form: [],
              req_params: [],
              req_headers: [],
              req_query: [
                {
                  required: '1',
                  _id: '5cbdd1c293bc6574a2de33db',
                  name: 'x',
                  example: '100',
                  desc: 'X 值',
                },
                {
                  required: '0',
                  _id: '5cbdd1c293bc6574a2de33da',
                  name: 'y',
                  example: '2',
                  desc: 'Y 值',
                },
              ],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{"result":{"type":"number","description":"结果"}},"required":["result"]}',
            },
            {
              query_path: {
                path: '/json5Response',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: false,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 73,
              method: 'GET',
              catid: 58,
              title: 'JSON5 响应',
              path: '/json5Response',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555571355,
              up_time: 1555944215,
              req_query: [],
              req_headers: [],
              req_body_form: [],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{\n    /** 注释 */\n    "id": 1,\n    "age": "@float",\n    "name": "@name"\n}',
            },
            {
              query_path: {
                path: '/json5Request',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: false,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 75,
              method: 'POST',
              catid: 58,
              title: 'JSON5 请求',
              path: '/json5Request',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555571693,
              up_time: 1555944239,
              req_query: [],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd32f93bc6574a2de33e6',
                  name: 'Content-Type',
                  value: 'application/json',
                },
              ],
              req_body_form: [],
              __v: 0,
              req_body_other: '{\n   "id": 1,\n   "name": "方剑成",\n   "likes": [\n      "photo",\n      2\n   ]\n}',
              markdown: '',
              desc: '',
              res_body: '',
              req_body_type: 'json',
            },
            {
              query_path: {
                path: '/postMethod',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: true,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 48,
              method: 'POST',
              catid: 58,
              title: 'POST 方法',
              path: '/postMethod',
              project_id: 23,
              res_body_type: 'json',
              uid: 11,
              add_time: 1547006262,
              up_time: 1555944011,
              req_body_form: [],
              req_params: [],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd24b93bc6574a2de33dd',
                  name: 'Content-Type',
                  value: 'application/json',
                },
              ],
              req_query: [],
              __v: 0,
              req_body_other: '{"type":"object","title":"empty object","properties":{"page":{"type":"number","description":"页码"},"limit":{"type":"number","description":"每页数量"},"keyword":{"type":"string","description":"关键词"}},"required":["page","limit"]}',
              markdown: '**备注。。。**\n\n`额鹅鹅鹅`',
              desc: '<p><strong>备注。。。</strong></p>\n<p><code data-backticks="1">额鹅鹅鹅</code></p>\n',
              res_body: '{"type":"object","title":"empty object","properties":{"list":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string","description":"姓名"}},"required":["name"]},"description":"列表"}},"required":["list"]}',
              req_body_type: 'json',
            },
            {
              query_path: {
                path: '/putMethod',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: true,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 67,
              method: 'PUT',
              catid: 58,
              title: 'PUT 方法',
              path: '/putMethod',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555570792,
              up_time: 1555944119,
              req_query: [
                {
                  required: '1',
                  _id: '5cbdd2b793bc6574a2de33e2',
                  name: 'id',
                  desc: '',
                },
                {
                  required: '0',
                  _id: '5cbdd2b793bc6574a2de33e1',
                  name: 'namre',
                  example: '',
                  desc: '',
                },
              ],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd2b793bc6574a2de33e3',
                  name: 'Content-Type',
                  value: 'application/x-www-form-urlencoded',
                },
              ],
              req_body_form: [
                {
                  required: '1',
                  _id: '5cbdd2b793bc6574a2de33e4',
                  name: 'x',
                  type: 'text',
                  example: '9',
                  desc: 'X 值',
                },
              ],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{"err":{"type":"number","description":"错误"},"msg":{"type":"string","description":"错误详情"},"data":{"type":"object","properties":{},"description":"数据"}},"required":["err","msg"]}',
              req_body_type: 'form',
            },
            {
              query_path: {
                path: '/dataKeyExample',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: true,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 81,
              method: 'PUT',
              catid: 58,
              title: 'dataKey 例子',
              path: '/dataKeyExample',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              req_query: [
                {
                  required: '1',
                  _id: '5cbdd3e093bc6574a2de33ec',
                  name: 'id',
                  desc: '',
                },
                {
                  required: '0',
                  _id: '5cbdd3e093bc6574a2de33eb',
                  name: 'namre',
                  example: '',
                  desc: '',
                },
              ],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd3e093bc6574a2de33ed',
                  name: 'Content-Type',
                  value: 'application/x-www-form-urlencoded',
                },
              ],
              req_body_form: [
                {
                  required: '1',
                  _id: '5cbdd3e093bc6574a2de33ee',
                  name: 'x',
                  type: 'text',
                  example: '9',
                  desc: 'X 值',
                },
              ],
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{"err":{"type":"number","description":"错误"},"msg":{"type":"string","description":"错误详情"},"data":{"type":"object","properties":{"success":{"type":"boolean","description":"成功啦"}},"description":"数据","required":["success"]}},"required":["err","msg"]}',
              req_body_type: 'form',
              uid: 11,
              add_time: 1555944287,
              up_time: 1555944416,
              __v: 0,
            },
            {
              query_path: {
                path: '/noResponseData',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: false,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 71,
              method: 'GET',
              catid: 58,
              title: '没返回数据',
              path: '/noResponseData',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555570965,
              up_time: 1555570965,
              req_query: [],
              req_headers: [],
              req_body_form: [],
              __v: 0,
            },
            {
              query_path: {
                path: '/emptyResponse',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 79,
              method: 'POST',
              catid: 58,
              title: '空返回数据',
              path: '/emptyResponse',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1555943663,
              up_time: 1555943671,
              req_query: [],
              req_headers: [
                {
                  required: '1',
                  _id: '5cbdd0f793bc6574a2de33d9',
                  name: 'Content-Type',
                  value: 'application/x-www-form-urlencoded',
                },
              ],
              req_body_form: [],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{}}',
              req_body_type: 'form',
            },
            {
              query_path: {
                path: '/rawResponse',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: false,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 97,
              method: 'GET',
              catid: 58,
              title: '返回 raw',
              path: '/rawResponse',
              project_id: 23,
              req_params: [],
              res_body_type: 'raw',
              uid: 11,
              add_time: 1556272312,
              up_time: 1556272319,
              req_query: [],
              req_headers: [],
              req_body_form: [],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '',
            },
          ],
        },
        {
          index: 0,
          name: 'test2',
          desc: null,
          add_time: 1562726353,
          up_time: 1562726353,
          list: [
            {
              query_path: {
                path: '/get2',
                params: [],
              },
              edit_uid: 0,
              status: 'undone',
              type: 'static',
              req_body_is_json_schema: false,
              res_body_is_json_schema: true,
              api_opened: false,
              index: 0,
              tag: [],
              _id: 281,
              method: 'GET',
              catid: 113,
              title: 'hello',
              path: '/get2',
              project_id: 23,
              req_params: [],
              res_body_type: 'json',
              uid: 11,
              add_time: 1562726366,
              up_time: 1562726380,
              req_query: [],
              req_headers: [],
              req_body_form: [],
              __v: 0,
              markdown: '',
              desc: '',
              res_body: '{"type":"object","title":"empty object","properties":{"msg":{"type":"string"}},"required":["msg"]}',
            },
          ],
        },
      ]
      : url.endsWith('/api/interface/getCatMenu')
        ? {
          errcode: 0,
          errmsg: '成功！',
          data: [
            {
              index: 0,
              _id: 51,
              name: '公共分类',
              project_id: 23,
              desc: '公共分类',
              uid: 11,
              add_time: 1547006201,
              up_time: 1547006201,
              __v: 0,
            },
            {
              index: 0,
              _id: 58,
              name: 'test',
              project_id: 23,
              desc: null,
              uid: 11,
              add_time: 1547006221,
              up_time: 1547006221,
              __v: 0,
            },
            {
              index: 0,
              _id: 113,
              name: 'test2',
              project_id: 23,
              desc: null,
              uid: 11,
              add_time: 1562726353,
              up_time: 1562726353,
              __v: 0,
            },
          ],
        }
        : {
          errcode: 0,
          errmsg: '成功！',
          data: {
            switch_notice: true,
            is_mock_open: false,
            is_sync_open: false,
            strice: false,
            is_json5: false,
            _id: 32,
            name: 'test',
            basepath: '',
            project_type: 'private',
            uid: 11,
            group_id: 11,
            icon: 'code-o',
            color: 'yellow',
            add_time: 1554276482,
            up_time: 1555516501,
            env: [
              {
                header: [],
                global: [],
                _id: '5cb74c5593bc6574a2de33cc',
                name: 'production',
                domain: 'http://prod.com/',
              },
              {
                header: [],
                global: [],
                _id: '5ca460829301e2047a07b652',
                name: 'local',
                domain: 'http://127.0.0.1',
              },
            ],
            tag: [],
            desc: '44555666666',
            cat: [],
            role: 'admin',
          },
        }
  ),
}

module.exports = request
